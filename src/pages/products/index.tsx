import useSWR from "swr";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../../fake-data";
import Head from "next/head";
import productsCss from "./products.module.css";

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
      <h1 className={productsCss.pageTitle}>商品列表</h1>
      <div className={productsCss.productGallery}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
