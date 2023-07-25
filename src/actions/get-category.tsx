import { Category } from "@/type";

const Url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${Url}/${id}`);
  return res.json();
};
export default getCategory;
