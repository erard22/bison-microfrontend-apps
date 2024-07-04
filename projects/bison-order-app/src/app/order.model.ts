export interface Order {
  id: string;
  date: string;
  customer: Customer;
  items: Item[];
  total: number;
  shippingAddress: Address;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Item {
  id: string;
  productId: string;
  quantity: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}
