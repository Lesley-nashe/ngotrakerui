import  { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      firstName: string;
      secondName: string;
      role: string;
      jwtToken: string;
      refreshToken: string;
      userName: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    email: string;
    firstName: string;
    secondName: string;
    role: string;
    jwtToken: string;
    refreshToken: string;
    userName: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    firstName: string;
    secondName: string;
    userName: string;
    role: string;
    isLoggedIn: boolean
    jwtToken: string;
    refreshToken: string;
  }
}