import { Color } from "@/type";

const Url = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(Url);
  return res.json();
};
export default getColors;
