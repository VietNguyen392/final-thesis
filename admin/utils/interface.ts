import { ReactNode } from 'react';

export interface ILogin {
  email?: string | any;
  password?: string | any;
}
export interface itemsNavigations {
  id: number;
  name: string;
  icon: any;
  route: string;
}

export interface Navigations {
  name: string;
  items: itemsNavigations[];
}
export interface Table {
  data: ReactNode;
}
export interface IHotel {
  _id?: string;
  hotel_name: string;
  hotel_type: string;
  city: string;
  address: string;
  photo: string;
 
  distance: number|undefined;
  rating?: number|undefined;
  rooms: number|undefined;
  desc: string;
  featured: string[];
}
export type TokenType = {
  id: string;
  exp: number;
  iat: number;
};
export interface IAdmin {
  user: {
    access_token: string;
    msg: string;
    user: {
      fullName: string;
      role: string;
    };
  };
}

/*
* {
    "_id": "6340310c93c547c2b6a64420",
    "fullName": "admin",
    "email": "admin@ad.com",
    "password": "",
    "gender": "male",
    "phoneNumber": "03215465565",
    "avatar": "",
    "address": "việt nam",
    "role": "admin",
    "type": "register",
    "createdAt": "2022-10-07T14:00:44.995Z",
    "updatedAt": "2022-10-16T07:43:35.200Z",
    "__v": 0
}
*
* */
