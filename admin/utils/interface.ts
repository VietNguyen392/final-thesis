import {ReactNode} from "react";

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
  title: string;
  distance: string;
  rating: number;
  rooms: string[];
  cheap: number;
  desc: string;
  featured: string[];
}
export type TokenType={
    id:string
   exp:number,
    iat:number,
}
