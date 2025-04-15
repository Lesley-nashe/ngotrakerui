import React from "react";

interface FormInputProps {
  labelColor?: string;
  title: string;
  id?: string;
  name: string;
  type?: string;
  [x: string]: unknown;
}

const FormInput = ({
  labelColor,
  title,
  id,
  name,
  type,
  ...rest
}: FormInputProps) => {
  return (
    <div className="flex flex-col" {...rest}>
      <div className="w-full">
        <label
          className="text-md text-gray-900"
          color={labelColor}
          htmlFor={name}
        >
          {title}
        </label>
      </div>
      <div className="w-full">
        <input
          id={id}
          name={name}
          type={type}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
    </div>
  );
};

export default FormInput;
