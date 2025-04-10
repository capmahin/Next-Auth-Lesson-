import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import async from "./app/page";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
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
  ]
});
