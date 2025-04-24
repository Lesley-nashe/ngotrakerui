export const apiUrl = process.env.NEXT_PUBLIC_API_URL

export type RegistrationOption = {
    firstName: string, 
    secondName: string, 
    role: string, 
    email:string, 
    password: string 
}

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
  
  
  