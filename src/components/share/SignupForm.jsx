"use client";

import { BsGithub } from "react-icons/bs";
import Button from "../ui/Button";
import SeparatorLine from "./single-product/SeparatorLine";

function SignupForm() {
  return (
    <div>
      <h1>Sign up for E-Shop</h1>
      <Button disabled onClick={() => signIn("github")}>
        <BsGithub />
        Sign up with Github
      </Button>
      <SeparatorLine />
      <form action="">
        <input type="text" name="name" placeholder="Name" disabled />
        <input type="email" name="email" placeholder="Email" disabled />
        <input
          type="password"
          name="password"
          placeholder="Password"
          disabled
        />
        <Button type={"submit"} disabled>
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignupForm;
