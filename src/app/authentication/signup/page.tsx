"use client";

import FormInput from "@/components/Form/Input";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
          <form>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Name:", name: "name", type: "text" },
                { label: "Surname:", name: "surname", type: "text" },
                { label: "Username:", name: "username", type: "text" },
                { label: "Email:", name: "email", type: "email" },
                { label: "Password:", name: "password", type: "password" },
                {
                  label: "Confirm Password:",
                  name: "confirmPassword",
                  type: "password",
                },
              ].map(({ label, name, type }) => (
                <div className="mb-4" key={name}>
                  <FormInput title={label} name={name} type={type} />
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
