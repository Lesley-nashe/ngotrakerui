"use client";

import { CreateGrantRequest } from "@/app/api/grants/route";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type FormData = {
  title: string;
  provider: string;
  amount: string;
  currency: string;
  description: string;
  eligibility: string;
  email: string;
  phoneNumber: string;
};
const CreateGrant = () => {
  const schema = yup
      .object({
        title: yup.string().required(),
        provider: yup.string().required(),
        amount: yup.string().required(),
        currency: yup.string().required(),
        description: yup.string().required(),
        eligibility: yup.string().required(),
        email: yup.string().required(),
        phoneNumber: yup.string().required(),
      })
      .required();
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });

     const onSumbit = async (data: FormData) => {
        const {
          title,
          provider,
          amount,
          currency,
          description,
          eligibility,
          email,
          phoneNumber,
        } = data;
        const result = await CreateGrantRequest({
          title,
          provider,
          amount,
          currency,
          description,
          eligibility,
          email,
          phoneNumber,
        });
    
        if (!result) {
          console.log(result);
        } else {
          console.log("Rgistered!", result);
        }
      };
  return (
    <div className="min-h-screen bg-gray-50 p-6 col-1">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Registered Grants
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Create New Grant
          </h1>

          <form className="space-y-5" onSubmit={handleSubmit(onSumbit)}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                placeholder="e.g. Education Support Grant"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                {...register("title")}
              />
              <p>{errors.title?.message}</p>
            </div>

            <div className="flex gap-4 w-full">
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Amount (USD)
                </label>
                <input
                  type="number"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  {...register("amount")}
                />
                <p>{errors.amount?.message}</p>
              </div>
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Provider
                </label>
                <input
                  type="text"
                  placeholder="City, Country"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  {...register("provider")}
                />
                <p>{errors.provider?.message}</p>
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Eligibility
                </label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  {...register("eligibility")}
                />
                <p>{errors.eligibility?.message}</p>
              </div>
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  PhoneNumber
                </label>
                <input
                  type="text"
                  placeholder="City, Country"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  {...register("phoneNumber")}
                />
                <p>{errors.phoneNumber?.message}</p>
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="City, Country"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  {...register("email")}
                />
                <p>{errors.email?.message}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                rows={4}
                placeholder="Briefly describe this grant opportunity"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                {...register("description")}
              />
              <p>{errors.description?.message}</p>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Publish Grant
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateGrant;
