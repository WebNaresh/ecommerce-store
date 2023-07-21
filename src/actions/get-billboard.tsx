import { Billboard } from "@/type";

const Url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getbillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${Url}/${id}`);
  return res.json();
};
export default getbillboard;
