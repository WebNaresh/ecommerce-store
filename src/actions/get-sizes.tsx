import { Size } from "@/type";

const Url = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(Url);
  return res.json();
};
export default getSizes;
