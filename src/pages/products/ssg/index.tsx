import { GetStaticProps } from "next";
import { Product } from "../../../../fake-data";
import ProductCard from "../../../components/ProductCard";
import Head from "next/head";
import productsCss from "../products.module.css";
import Loading from "@component/components/Loading/Loading";

const Product = ({ products }: { products: Product[] }) => {
  if (!products) return <Loading />;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>商品列表 SSG</title>
      </Head>
      <h1 className={productsCss.pageTitle}>商品列表 SSG</h1>
      <div className={productsCss.productGallery}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} type="ssg" />
        ))}
      </div>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/products"
      : "https://nextjs-product-git-main-jingyang0309.vercel.app/api/products";
  const res = await fetch(apiUrl);
  const json: [] = await res.json();
  return {
    props: { products: json },
  };
};

export default Product;
