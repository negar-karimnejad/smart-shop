import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismadb";

export async function POST(req) {
  const body = await req.json();
  const { name, email, password } = body;

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

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (existedUser) {
    return NextResponse.json({
      existedUser: "You are already a member, please sign in",
    });
  }
}
