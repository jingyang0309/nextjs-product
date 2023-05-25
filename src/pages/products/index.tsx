import useSWR from "swr";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../../fake-data";
import { PageTitle, ProductGallery } from "./products.style";

const fetcher = (url: string) =>
  fetch(`/api/products`).then((res) => {
    // console.log('log',res);
    return res.json();
  });

const Home = () => {
  const { data: products } = useSWR<Product[]>("/products", fetcher);

  if (!products) return <div>loading</div>;

  return (
    <>
      <PageTitle>商品列表</PageTitle>
      <ProductGallery>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGallery>
    </>
  );
};

export default Home;
