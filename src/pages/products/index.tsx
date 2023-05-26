import useSWR from "swr";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../../fake-data";
import { PageTitle, ProductGallery } from "./products.style";
import Head from "next/head";

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
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>商品頁CSR</title>
    </Head>
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
