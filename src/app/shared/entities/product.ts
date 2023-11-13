import { Availability } from "./availability";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  mainImage: string;
  images: string[];
  availability: Availability;
}
