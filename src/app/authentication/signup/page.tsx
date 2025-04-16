"use client";

import FormInput from "@/components/Form/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import React from "react";
import Registration from "@/app/api/register/route";
import { yupResolver } from "@hookform/resolvers/yup";

type RegistrationFormData = {
  firstName: string, 
  secondName: string, 
  role: string, 
  email:string, 
  password: string,
  confirmPassword: string, 
}

const SignUpPage = () => {
  const schema = yup.object({
    firstName: yup.string().required(),
    secondName: yup.string().required(),
    role: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
  }).required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(schema),
  });

   const onSumbit = async(data: RegistrationFormData) => 
      {
        const {firstName,secondName,role,email, password} = data
        const result = await Registration({firstName,secondName,role,email, password})
  
        if(!result){
          console.log(result)
        } else{
          console.log('Rgistered!', result)
        }
      }

      const fields: {
        label: string
        name: keyof RegistrationFormData
        type: string
      }[] = [
        { label: "Name:", name: "firstName", type: "text" },
        { label: "Surname:", name: "secondName", type: "text" },
        { label: "Role:", name: "role", type: "text" },
        { label: "Email:", name: "email", type: "text" },
        { label: "Password:", name: "password", type: "password" },
        { label: "Confirm Password:", name: "confirmPassword", type: "password" },
      ]
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
          <form onSubmit={handleSubmit(onSumbit)}>
            <div className="grid grid-cols-2 gap-4">
              {fields.map(({ label, name, type }) => (
                <div className="mb-4" key={name}>
                  <FormInput title={label} type={type} {...register(name)} />
                  <p>{errors.root?.message}</p>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Create Account
            </button>
          </form>
      </div>
    </div>
  );
};

export default SignUpPage;
