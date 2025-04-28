"use client";

import LoadingSpinner from "@/components/loadingSpinner";
import { SendGrantsClient } from "@/lib/grants/fetchGrantsClient";
import { GrantFormData, grantSchema } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CreateGrant = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(grantSchema),
  });

  const onSubmit = async (data: GrantFormData) => {
    setIsLoading(true);
    const result = await SendGrantsClient({
      ...data,
    });

    if (!result) {
      setIsLoading(false);
      console.log(result);
    } else {
      setIsLoading(false);
      console.log("Rgistered!", result);
      redirect("/auth/grants");
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
            Update Grant
          </h1>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Currency
              </label>
              <input
                type="text"
                placeholder="e.g. Education Support Grant"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                {...register("currency")}
              />
              <p>{errors.currency?.message}</p>
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
              {isLoading ? <LoadingSpinner /> : "Create Grant"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateGrant;
