import { Category } from "@/type";

const Url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(Url);
  return res.json();
};
export default getCategories;
