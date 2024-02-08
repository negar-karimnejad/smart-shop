import { revalidatePath } from "next/cache";
import prisma from "./prismadb";
import bcrypt from "bcrypt";

export async function SignupUser(formData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const userExists = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (userExists) {
        throw new Error("You are already a member");
      }
      const hashedPassword = await bcrypt.hash(password, 12);

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
