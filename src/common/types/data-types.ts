type Location = {
  lat: number;
  long: number;
};

export type JobInfo = {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  benefits: string[];
  location: Location;
  pictures: string[];
  createdAt: string;
  updatedAt: string;
  description: string;
  employment_type: string[];
};

export type JobsDto = JobInfo[];

export type GeneralDescription = {
  description: string;
  responsibilities: string;
  benefits: string[];
};
