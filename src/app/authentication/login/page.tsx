"use client";

import { Form, Formik } from "formik";
import FormInput from "../../../components/Form/Input";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <div className="mb-4">
              <FormInput title={"Email"} name={"email"} />
            </div>

            <div className="mb-6">
              <FormInput title={"Password"} name={"password"} />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Log in
            </button>
          </Form>
        </Formik>
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
