"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { LoginFormData, loginSchema } from "@/lib/utils";
import Link from "next/link";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSumbit = async (data: LoginFormData) => {
    const result = await signIn("credentials", {
      callbackUrl: "/auth/dashboard",
      redirect: true,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      console.log(result.error);
    } else {
      console.log("Logged In !", result);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit(onSumbit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type={"text"}
              placeholder="e.g. example@gmail.com"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={"password"}
              placeholder="........"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            {"Log in"}
          </button>
        </form>
        <div className="flex flex-now justify-between w-full mt-6">
          <div className="flex w-full justify-start">
            <button className="w-6/8 bg-gray-300 text-black py-2 rounded-xl hover:bg-gray-900 hover:text-white transition">
              forgot password
            </button>
          </div>
          <div className="flex w-full justify-center">
            <Link className="flex w-full justify-end" href={"/authentication/signup"}>
              <button className="w-6/8 bg-gray-300 text-black py-2 rounded-xl hover:bg-gray-900 hover:text-white transition">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
