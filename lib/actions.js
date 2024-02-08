"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prismadb";
import bcrypt from "bcrypt";

export async function signupUser(formData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const userExists = await prisma.User.findOne({
        where: {
          email: email,
        },
      });

      console.log(userExists);
      if (userExists) {
        throw new Error("You are already a member");
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      console.log(hashedPassword);
      await prisma.user.create({
        data: { name, email, hashedPassword },
      });
      revalidatePath("/");
    } catch (userExists) {
      return { userExists: "You are already a member, Please sign in." };
    }
  } catch (error) {
    return { error: error.message };
  }
}
