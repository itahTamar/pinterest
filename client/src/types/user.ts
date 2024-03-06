export interface User {
  user: {
    firstName: string;
    userId: string;
    lastName: string;
    username: string;
  };
  setUser: ({}) => {};
}

export interface DataAdmin {
  about: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  photo: string | null;
  pronouns: string;
  role: string;
  user_id: number;
  username: string;
  website: string;
}

// export interface userData {
//   username: string ,
//   firstName: string ,
//   lastName: string ,
//   userId: number,
//   image: string,
//   about: string,
//   pronouns: string,
//   website: string    
// }
