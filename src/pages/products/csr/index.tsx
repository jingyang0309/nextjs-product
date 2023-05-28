import useSWR from "swr";
import ProductCard from "../../../components/ProductCard";
import { Product } from "../../../../fake-data";
import Head from "next/head";
import productsCss from "../products.module.css";
import Loading from "@/components/Loading/Loading";

const fetcher = (url: string) =>
  fetch(`/api/products`).then((res) => {
    // console.log('log',res);
    return res.json();
  });

const Home = () => {
  const { data: products } = useSWR<Product[]>("/products", fetcher);

  if (!products)return <Loading/>;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>商品列表 CSR useSWR</title>
      </Head>
      <h1 className={productsCss.pageTitle}>商品列表 CSR useSWR</h1>
      <div className={productsCss.productGallery}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} type="csr"/>
        ))}
      </div>
    </>
  );
};

export default Home;
