"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { BsGithub, BsGoogle } from "react-icons/bs";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

function SignupForm({ currentUser }) {
  const router = useRouter();
  const ref = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(ref.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const result = await fetch("http://localhost:3000/api/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (result?.userExists) {
        toast.error(result?.userExists);
      } else if (result?.error) {
        toast.error(result?.error);
      } else {
        toast.success("Welcome🎉, Please Sign In");
        setIsSubmitting(false);
        ref.current?.reset();
        router.push("/sign-in");
      }
    } catch (error) {
      toast.error(error.message || "Authentication failed");
      setIsSubmitting(false);
    }
  };

  if (currentUser) {
    return <p className="text-center font-medium">Logged in. Redirecting...</p>;
  }

  return (
    <>
      <h1 className="font-bold text-2xl text-center">Sign up for E-Shop</h1>
      <button
        className="w-full rounded-md cursor-pointer bg-transparent px-2 py-3 transition-all border-2 mt-5 mb-2 border-gray-600 font-semibold text-slate-800 flex justify-center items-center gap-2 hover:text-slate-600"
        disabled={isSubmitting}
        onClick={() => signIn("github")}
      >
        <BsGithub size={24} />
        Continue with Github
      </button>
      <button
        className="w-full rounded-md cursor-pointer bg-transparent px-2 py-3 transition-all border-2 mb-4 border-gray-600 font-semibold text-slate-800 flex justify-center items-center gap-2 hover:text-slate-600"
        disabled={isSubmitting}
        onClick={() => signIn("google")}
      >
        <BsGoogle size={24} />
        Continue with Google
      </button>

      <form
        ref={ref}
        onSubmit={handleSubmit}
        className="pt-5 flex flex-col gap-4 border-t"
      >
        <Input
          type="text"
          name="name"
          placeholder=""
          id="name"
          label="Name"
          disabled={isSubmitting}
          className={`${isSubmitting && "opacity-50 cursor-default"}`}
        />
        <Input
          type="email"
          name="email"
          placeholder=""
          id="email"
          label="Email"
          disabled={isSubmitting}
          className={`${isSubmitting && "opacity-50 cursor-default"}`}
        />
        <Input
          type="password"
          name="password"
          placeholder=""
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
          {isSubmitting ? "Signing Up..." : "Sign Up"}
        </Button>
      </form>
      <div className="text-center text-sm mt-4">
        Already have an account?{" "}
        <Link className="underline" href="/sign-in">
          Sign in
        </Link>
      </div>
    </>
  );
}

export default SignupForm;
