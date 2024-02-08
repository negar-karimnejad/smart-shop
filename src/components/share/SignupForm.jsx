"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { BsGithub } from "react-icons/bs";
import { SignupUser } from "../../../lib/actions";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Input from "../ui/Input";

function SignupForm() {
  const router = useRouter();
  const ref = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  setIsSubmitting(true);

  const handleSubmit = async (formData) => {
    const result = await SignupUser(formData);

    if (result?.userExists) {
      toast.error(result?.userExists);
    } else {
      toast.success("Welcome🎉, Please Sign In");
      setIsSubmitting(false);
      router.push("/sign-in");
      ref.current?.reset();
    }
  };
  return (
    <Container>
      <div className="my-8 shadow-lg rounded-lg p-7 max-w-xl mx-auto">
        <h1 className="font-bold text-2xl text-center">Sign up for E-Shop</h1>
        <Button
          className="bg-white border-2 my-5 border-gray-600 font-semibold text-slate-800 flex justify-center items-center gap-2 hover:text-slate-600 hover:bg-white"
          disabled={isSubmitting}
          onClick={() => signIn("github")}
        >
          <BsGithub size={24} />
          Sign up with Github
        </Button>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new formData(e.currentTarget);
            handleSubmit(formData);
          }}
          className="pt-5 flex flex-col gap-4 border-t"
        >
          <Input
            type="text"
            name="name"
            placeholder="Name"
            disabled={isSubmitting}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            disabled={isSubmitting}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            disabled={isSubmitting}
          />
          <Button type={"submit"} disabled={isSubmitting}>
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link className="underline" href="/sign-in">
            Sign in
          </Link>
        </p>
      </div>
    </Container>
  );
}

export default SignupForm;
