import { PrismaAdapter } from "@next-auth/prisma-adapter";
import nextAuth from "next-auth";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import prisma from "../../../../../lib/prismadb";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your-cool-email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("Invalid credentials");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }
        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV !== "production",
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,

  // callbacks: {
  //   async signIn({ user, account, profile }) {
  //     if (account.provider === "google") {
  //       try {
  //         const userexists = await prisma.user.findUnique({
  //           where: {
  //             email: user.email,
  //           },
  //         });

  //         if (!userexists) {
  //           await prisma.user.create({
  //             data: {
  //               name: profile.login,
  //               email: profile.email,
  //               image: profile.avatar_url,
  //             },
  //           });
  //         }
  //       } catch (error) {
  //         console.log(error);
  //         return false;
  //       }
  //     }

  //     if (account.provider === "github") {
  //       try {
  //         const userexists = await prisma.user.findUnique({
  //           where: {
  //             email: user.email,
  //           },
  //         });

  //         if (!userexists) {
  //           await prisma.user.create({
  //             data: {
  //               name: profile.login,
  //               email: profile.email,
  //               image: profile.avatar_url,
  //             },
  //           });
  //         }
  //       } catch (error) {
  //         console.log(error);
  //         return false;
  //       }
  //     }
  //     return true;
  //   },
  // },
};

const handler = nextAuth(authOptions);
export { handler as GET, handler as POST };
