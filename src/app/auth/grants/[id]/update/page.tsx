"use client";

import {
  fetchGrantClient,
  UpdateGrantClient,
} from "@/lib/grants/fetchGrantsClient";
import { GrantFormData, grantSchema, GrantType } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  params: Promise<{ id: string }>;
}

const UpdateGrant = ({ params }: Props) => {
  const { id } = use(params);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(grantSchema),
    defaultValues: {
      title: "",
      provider: "",
      amount: 0,
      currency: "",
      description: "",
      eligibility: "",
      email: "example@gmail.com",
      phoneNumber: "",
    },
  });

  const [grant, setGrant] = useState<GrantType>();

  useEffect(() => {
    async function getGrant() {
      const grantfetch: GrantType = await fetchGrantClient(id);
      setGrant(grantfetch);
      reset({
        title: grantfetch.title,
        provider: grantfetch.provider,
        amount: grantfetch.amount,
        currency: grantfetch.currency,
        description: grantfetch.description,
        eligibility: grantfetch.eligibility,
        email: "example@gmail.com",
        phoneNumber: grantfetch.contactPhone,
      });
    }
    getGrant();
  }, [reset, id]);

  const onSumbit = async (data: GrantFormData) => {
    const result = await UpdateGrantClient(id, { ...data });

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
            Update Grant
          </h1>
          {grant && (
            <form className="space-y-5" onSubmit={handleSubmit(onSumbit)}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Education Support Grant"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={true}
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
                    disabled={true}
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
                    disabled={true}
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
                    disabled={true}
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
                    disabled={true}
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
                    disabled={true}
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
                  disabled={true}
                  {...register("description")}
                />
                <p>{errors.description?.message}</p>
              </div>

              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Update Grant
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateGrant;
