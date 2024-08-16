export type UserModel = {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    address: {
      street: string;
      city: string;
      zipcode: string;
    };
    company: {
      name: string;
      catchPhrase: string;
    };
  };