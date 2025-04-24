import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { apiUrl } from "./utils";
// Your own logic for dealing with plaintext password strings; be careful!

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "text" },
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          const { email, password } = credentials;

          const userRequest = await fetch(`${apiUrl}/auth/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });

          const request = await fetch(`${apiUrl}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });

          if (request.ok && userRequest.ok) {
            const data = await request.json();
            const userData = await userRequest.json();
            user = {
              id: userData.id,
              firstName: userData.firstName,
              secondName: userData.secondName,
              role: userData.role,
              userName: userData.userName,
              email: userData.email,
              isLoggedIn: data.true,
              jwtToken: data.jwtToken,
              refreshToken: data.refreshToken,
            };
          }

          if (!user) {
            throw new Error("Invalid Credentials");
          }

          return user;
        } catch (err) {
          console.log("Auth error", err);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/authentication/login",
    error: "/silent-error",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Always allow relative URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Only allow URLs starting with baseUrl
      if (url.startsWith(baseUrl)) return url;
      return baseUrl;
    },
    async jwt({ token, user }) {
      if (user) {
        token.isLoggedIn = true;
        token.jwtToken = user.jwtToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = (token.id as string) ?? "";
      session.user.email = (token.email as string) ?? "";
      session.user.firstName = (token.firstName as string) ?? "";
      session.user.secondName = (token.secondName as string) ?? "";
      session.user.role = (token.role as string) ?? "";
      session.user.userName = (token.userName as string) ?? "";
      return session;
    },
  },
});
