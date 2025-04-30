"use client";

import FormInput from "@/components/form/input";
import { useForm } from "react-hook-form";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationFormData, signUpSchema } from "@/lib/utils";
import { NextResponse } from "next/server";
import { RegisterUserClient } from "@/lib/register/registerUsersClient";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(signUpSchema),
  });

  const onSumbit = async (data: RegistrationFormData) => {
    try {
      const result = await RegisterUserClient({
        ...data,
    });

      if (!result) {
        throw new Error("Something is wrong, registartion return nothing");
      } else {
        console.log("Rgistered!", result);
      }
    } catch (error) {
      return NextResponse.json(
        { error, err: "failed to register user" },
        { status: 500 }
      );
    }
  };

  const fields: {
    label: string;
    name: keyof RegistrationFormData;
    type: string;
  }[] = [
    { label: "Name:", name: "firstName", type: "text" },
    { label: "Surname:", name: "secondName", type: "text" },
    { label: "Role:", name: "role", type: "text" },
    { label: "Email:", name: "email", type: "text" },
    { label: "Password:", name: "password", type: "password" },
    { label: "Confirm Password:", name: "confirmPassword", type: "password" },
  ];
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
