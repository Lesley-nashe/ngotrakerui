import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// Your own logic for dealing with plaintext password strings; be careful!

export const  { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "text" },
      },
      authorize: async (credentials) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let user =  null

        const { email, password } = credentials;

        const userRequest = await fetch("http://localhost:5189/api/auth/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        const request = await fetch("http://localhost:5189/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        if (request.ok && userRequest.ok) {
          const data = await request.json();
          const userData =  await userRequest.json();
          user =  {
            id: userData.id,
            firstName: userData.firstName,
            SecondName: userData.secondName,
            role: userData.role,
            userName: userData.userName,
            email: userData.email,
          }
          console.log(data);
          console.log(user);
        } else {
          console.log("Failed to login in here");
        }
        if (!user) {
          throw new Error("Invalid credentials.");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/authentication/signup",
    error: "/silent-error",
  },
  // session: {
  //   strategy: "jwt",
  // },
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.id = user.id;
  //       token.email = user.email;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     session.user.id = token.id as string ?? "";
  //     session.user.email = token.email as string ?? "";
  //     return session;
  //   },
  // },
});

