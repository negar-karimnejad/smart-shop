"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { BsGithub } from "react-icons/bs";
import Button from "../../../components/ui/Button";
import Container from "../../../components/ui/Container";
import Input from "../../../components/ui/Input";
import { signIn } from "next-auth/react";

function SigninForm() {
  const router = useRouter();
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitSignin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(formRef.current);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      toast.success("Authentication successful");
      setIsSubmitting(false);
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error(error.message || "Authentication failed");
    }
  };

  return (
    <Container>
      <div className="my-8 shadow-lg rounded-lg p-7 max-w-xl mx-auto">
        <h1 className="font-bold text-2xl text-center">Sign in to E-Shop</h1>
        <button
          className="w-full rounded-md cursor-pointer bg-transparent px-2 py-3 transition-all border-2 my-5 border-gray-600 font-semibold text-slate-800 flex justify-center items-center gap-2 hover:text-slate-600"
          disabled={isSubmitting}
          onClick={() => signIn("github")}
        >
          <BsGithub size={24} />
          Continue with Github
        </button>

        <form
          onSubmit={submitSignin}
          ref={formRef}
          className="pt-5 flex flex-col gap-4 border-t"
        >
          <Input
            type="email"
            name="email"
            id="email"
            label="Email"
            disabled={isSubmitting}
            className={`${isSubmitting && "opacity-50 cursor-default"}`}
          />
          <Input
            type="password"
            name="password"
            id="password"
            label="Password"
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
        <div className="text-center text-sm mt-4">
          Do not have an account?{" "}
          <Link className="underline" href="/sign-up">
            Sign up
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default SigninForm;
