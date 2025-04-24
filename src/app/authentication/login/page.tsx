"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../../../components/form/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { signIn } from "next-auth/react";

type FormData = {
  email: string,
  password: string
}

const LoginPage = () => {
  const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required()
  }).required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  const onSumbit = async(data: FormData) => 
    {
      const result = await signIn('credentials',{
        callbackUrl: "/auth/dashboard",
        redirect: true,
        email: data.email,
        password: data.password,
      })

      if(result?.error){
        console.log(result.error)
      } else{
        console.log('Logged In !', result)
      }
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit(onSumbit)}>
          <div className="mb-4">
            <FormInput title={"Email:"} {...register("email")} />
            <p>{errors.email?.message}</p>
          </div>

          <div className="mb-6">
            <FormInput title={"Password:"} {...register("password")} />
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
          <button className="w-3/8 bg-gray-300 text-black py-2 rounded-xl hover:bg-gray-900 hover:text-white transition">
            forgot password
          </button>
          <button className="w-3/8 bg-gray-300 text-black py-2 rounded-xl hover:bg-gray-900 hover:text-white transition">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
