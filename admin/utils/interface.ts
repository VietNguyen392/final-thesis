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
  data: any;
}
