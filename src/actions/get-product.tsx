import { Product } from "@/type";

const Url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${Url}/${id}`);
  return res.json();
};
export default getProduct;
