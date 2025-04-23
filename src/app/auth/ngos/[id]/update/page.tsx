"use client";

import { GetNgoRequest, NgoType, UpdateNgoRequest } from "@/app/api/ngos/route";
import { yupResolver } from "@hookform/resolvers/yup";
import { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface Props {
  params: Promise<{ id: string }>;
}

type FormData = {
  name: string;
  address: string;
  country: string;
  registrationNumber: string;
  description: string;
  email: string;
  phoneNumber: string;
  sector: string;
  website: string;
  logoUrl: string;
  verified: boolean;
};

const UpdateNGO = ({ params }: Props) => {
  const { id } = use(params);
  const schema = yup
    .object({
      name: yup.string().required(),
      address: yup.string().required(),
      country: yup.string().required(),
      registrationNumber: yup.string().required(),
      description: yup.string().required(),
      sector: yup.string().required(),
      email: yup.string().required(),
      phoneNumber: yup.string().required(),
      website: yup.string().required(),
      logoUrl: yup.string().required(),
      verified: yup.boolean().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      address: "",
      country: "",
      registrationNumber: "",
      description: "",
      sector: "",
      email: "example@gmail.com",
      phoneNumber: "",
    },
  });

  const [ngo, setNgo] = useState<NgoType>();

  useEffect(() => {
    async function getNgo() {
      const ngoFetch: NgoType = await GetNgoRequest(id);
      setNgo(ngoFetch);
      reset({
        name: ngoFetch.name,
        address: ngoFetch.address,
        country: ngoFetch.country,
        registrationNumber: ngoFetch.registrationNumber,
        description: ngoFetch.description,
        sector: ngoFetch.sector,
        email: "example@gmail.com",
        phoneNumber: ngoFetch.contactPhone,
      });
    }
    getNgo();
  }, [reset, id]);

  console.log(ngo);

  const onSumbit = async (data: FormData) => {
    const {
      name,
      address,
      country,
      registrationNumber,
      email,
      phoneNumber,
      sector,
      description,
    } = data;
    const result = await UpdateNgoRequest({
      name,
      address,
      country,
      registrationNumber,
      contactEmail: email,
      contactPhone: phoneNumber,
      sector,
      description,
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
          Registered NGOs
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Register New NGO
          </h1>

          <form className="space-y-5" onSubmit={handleSubmit(onSumbit)}>
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
                  {...register("email")}
                />
                <p>{errors.email?.message}</p>
              </div>
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  PhoneNumber
                </label>
                <input
                  type="number"
                  placeholder="06745634512"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  {...register("phoneNumber")}
                />
                <p>{errors.phoneNumber?.message}</p>
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  website
                </label>
                <input
                  type="text"
                  placeholder="City, Country"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  {...register("website")}
                />
                <p>{errors.website?.message}</p>
              </div>
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  logoUrl
                </label>
                <input
                  type="text"
                  placeholder="Sector"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  {...register("logoUrl")}
                />
                <p>{errors.logoUrl?.message}</p>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                {...register("verified")}
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Verified
              </label>
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

export default UpdateNGO;
