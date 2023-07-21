import getbillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

interface HomePageProps {}

export const revalidate = 0;
const HomePage: React.FC<HomePageProps> = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getbillboard("91426f28-cf4c-46a8-a397-a5ed54d672c6");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
