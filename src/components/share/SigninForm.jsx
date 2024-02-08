"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { BsGithub } from "react-icons/bs";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Input from "../ui/Input";

function SigninForm() {
  const router = useRouter();
  const ref = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Container>
      <div className="my-8 shadow-lg rounded-lg p-7 max-w-xl mx-auto">
        <h1 className="font-bold text-2xl text-center">Sign in to E-Shop</h1>
        <button
          className="w-full rounded-md cursor-pointer bg-transparent px-2 py-3 transition-all border-2 my-5 border-gray-600 font-semibold text-slate-800 flex justify-center items-center gap-2 hover:text-slate-600"
          disabled={isSubmitting}
          //   onClick={() => signIn("github")}
        >
          <BsGithub size={24} />
          Continue with Github
        </button>

        <form className="pt-5 flex flex-col gap-4 border-t">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            disabled={isSubmitting}
            className={`${isSubmitting && "opacity-50 cursor-default"}`}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            disabled={isSubmitting}
            className={`${isSubmitting && "opacity-50 cursor-default"}`}
          />
          <Button
            type={"submit"}
            disabled={isSubmitting}
            className={`${isSubmitting && "opacity-50 cursor-default"}`}
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Button>
        </form>
        <p className="text-center text-sm mt-4">
          Do not have an account?{" "}
          <Link className="underline" href="/sign-up">
            Sign up
          </Link>
        </p>
      </div>
    </Container>
  );
}

export default SigninForm;
