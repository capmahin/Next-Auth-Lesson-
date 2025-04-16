import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import async from "./app/page";

import GitHub from "next-auth/providers/github";
import { signInSchema } from "./lib/zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password"
        }
      },
      async authorize(credentials) {
        //user object. return  null

        let user = null;

        //validate credentials
        const parsedCredentials = signInSchema.safeParse(credentials);
        if (!parsedCredentials.success) {
          console.error("Invalid credentials:", parsedCredentials.error.errors);
          return null;
        }
        //get user

        user = {
          id: "1",
          name: "Mahin Mrihda",
          email: "mahinulhuque1996@gmail.com"
        };

        if (!user) {
          console.log("invalid credentials");
          return null;
        }

        return user;
      }
    })
  ],

  callbacks: {
    authorized({ request: { nextUrl }, auth }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;
      if (pathname.startsWith("/auth/signin") && isLoggedIn) {
        return Response.redirect(new URL("/", nextUrl));
      }

      return !!auth;
    }
  },

  pages: {
    signIn: "/auth/signin"
  }
});
