import * as yup from "yup";
export const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export type RegistrationOption = {
  firstName: string;
  secondName: string;
  role: string;
  email: string;
  password: string;
};

export type NgoFormData = {
  name: string;
  address: string;
  country: string;
  registrationNumber: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
  sector: string;
};

export type NgoType = {
  name: string;
  address: string;
  country: string;
  registrationNumber: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
  sector: string;
};

export type GrantFormData = {
  title: string;
  provider: string;
  amount: number;
  currency: string;
  description: string;
  eligibility: string;
  email: string;
  phoneNumber: string;
};

export type GrantType = {
  amount: number;
  contactPhone: string;
  createdAt: string;
  currency: string;
  deadline: string;
  description: string;
  eligibility: string;
  id: string;
  provider: string;
  status: string;
  title: string;
};

export type NgoDetails = {
  name: string;
  country: string;
  mission: string;
  id: string;
};

export type GrantDetails = {
  title: string;
  provider: string;
  description: string;
  id: string;
};

export type ApplicationsType = {
  ngo: string;
  grant: string;
  status: string;
  date: string;
};

export type RegistrationFormData = {
  firstName: string;
  secondName: string;
  role: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export const signUpSchema = yup
  .object({
    firstName: yup.string().required(),
    secondName: yup.string().required(),
    role: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
  })
  .required();

export const loginSchema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export const ngoSchema = yup
  .object({
    name: yup.string().required(),
    address: yup.string().required(),
    country: yup.string().required(),
    registrationNumber: yup.string().required(),
    description: yup.string().required(),
    sector: yup.string().required(),
    contactEmail: yup.string().required(),
    contactPhone: yup.string().required(),
    website: yup.string().required(),
    logoUrl: yup.string().required(),
    verified: yup.boolean().required(),
  })
  .required();

export const grantSchema = yup
  .object({
    title: yup.string().required(),
    provider: yup.string().required(),
    amount: yup.number().required(),
    currency: yup.string().required(),
    description: yup.string().required(),
    eligibility: yup.string().required(),
    email: yup.string().required(),
    phoneNumber: yup.string().required(),
  })
  .required();
