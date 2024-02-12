"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prismadb";
import bcrypt from "bcrypt";

export const signupUser = async (formData) => {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(name);
    console.log(email);
    console.log(password);

    try {
      const userExists = await prisma.user.findOne({
        where: {
          email: email,
        },
      });

      if (userExists) {
        throw new Error("You are already a member");
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      console.log(hashedPassword);

      await prisma.user.create({
        data: { name: name, email: email, hashedPassword: hashedPassword },
      });
      revalidatePath("/sign-up");
    } catch (userExists) {
      return { userExists: "You are already a member, Please sign in." };
    }
  } catch (error) {
    return { error: error.message };
  }
};
