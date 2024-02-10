"use server";

import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import prisma from "./prismadb";

export const signupUser = async (formData) => {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const userExists = await prisma.user.findUserByEmail({
        where: {
          email: email,
        },
      });

      if (userExists) {
        throw new Error("You are already a member");
      }

      const hashedPassword = await bcrypt.hash("65654", 12);
      console.log(hashedPassword);
      await prisma.user.create({
        data: { name: name, email: email, hashedPassword: hashedPassword },
      });
      revalidatePath("/sign-up");
    } catch (err) {
      return { err: "You are already a member, Please sign in." };
    }
  } catch (error) {
    return { error: error.message };
  }
};
