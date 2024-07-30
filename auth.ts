import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import bcrypt from 'bcryptjs';
import { getUser } from '@/app/lib/action';
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const nextAuth = NextAuth({
  ...authConfig,
  providers: [GitHub, Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // console.log('credentials', credentials);
        const email = credentials.email as string;
        const password = credentials.password as string;

        const user = await getUser(email);
        // console.log('user', user);
        if (!user) {
          return null;
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        // console.log('passwordMatch', passwordMatch);

        if (passwordMatch) {
          console.log('logged in');
          return user;
        }

        console.log('invalid credentials');
        return null;
      },
    }),
  ],
});
 
export const { handlers, signIn, signOut, auth } = nextAuth;