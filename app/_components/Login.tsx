"use client";

import { useActionState } from "react";
import { login } from "../_lib/auth";

const Login = () => {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <form
      action={action}
      className="w-full px-4 md:px-0 flex flex-col items-center justify-center space-y-4 py-8 *:w-full *:md:w-1/2"
    >
      <div className="w-full flex flex-col space-y-0.5">
        <input
          className="outline-none border border-black/50 py-1 px-2.5"
          placeholder="Enter your username"
          type="text"
          name="username"
        />
        {state?.errors?.username && (
          <p className="text-red-500 text-xs">{state.errors.username}</p>
        )}
      </div>
      <div className="w-full flex flex-col space-y-0.5">
        <input
          className="outline-none border border-black/50 py-1 px-2.5"
          placeholder="Enter your password"
          type="password"
          name="password"
        />
        {state?.errors?.password && (
          <p className="text-red-500 text-xs">{state.errors.password}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={pending}
        className="bg-black text-white py-1.5 font-semibold disabled:bg-black/50 disabled:cursor-not-allowed"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
