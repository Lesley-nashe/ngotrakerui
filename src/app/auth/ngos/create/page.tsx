"use client";

import { CreateNgoRequest } from "@/app/api/ngos/route";
import { NgoFormData } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const CreateNGO = () => {
  const schema = yup
    .object({
      name: yup.string().required(),
      address: yup.string().required(),
      country: yup.string().required(),
      registrationNumber: yup.string().required(),
      description: yup.string().required(),
      sector: yup.string().required(),
      contactEmail: yup.string().required(),
      contactPhone: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: NgoFormData) => {
    const result = await CreateNgoRequest({
      ...data,
    });

    if (!result) {
      console.log(result);
    } else {
      console.log("Ngo Created!", result);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 col-1">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Registered NGOs
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Register New NGO
          </h1>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                NGO Name
              </label>
              <input
                type="text"
                placeholder="e.g. Clean Water Initiative"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                {...register("name")}
              />
              <p>{errors.name?.message}</p>
            </div>

            <div className="flex gap-4 w-full">
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  address (incl City/Town)
                </label>
                <input
                  type="text"
                  placeholder="city"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  {...register("address")}
                />
                <p>{errors.address?.message}</p>
              </div>
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="City, Country"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  {...register("country")}
                />
                <p>{errors.country?.message}</p>
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Registration Num
                </label>
                <input
                  type="text"
                  placeholder="City, Country"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  {...register("registrationNumber")}
                />
                <p>{errors.registrationNumber?.message}</p>
              </div>
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Sector
                </label>
                <input
                  type="text"
                  placeholder="Sector"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  {...register("sector")}
                />
                <p>{errors.sector?.message}</p>
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  {...register("contactEmail")}
                />
                <p>{errors.contactEmail?.message}</p>
              </div>
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  PhoneNumber
                </label>
                <input
                  type="number"
                  placeholder="06745634512"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  {...register("contactPhone")}
                />
                <p>{errors.contactPhone?.message}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                rows={4}
                placeholder="What is your organization’s mission?"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                {...register("description")}
              />
              <p>{errors.description?.message}</p>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Submit NGO
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNGO;
