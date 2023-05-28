import { GetServerSideProps } from "next";
import { Product } from "../../../../fake-data";
import ProductCard from "../../../components/ProductCard";
import Head from "next/head";
import productsCss from "../products.module.css";
import Loading from "@/components/Loading/Loading";

const Product = ({ products }: { products: Product[] }) => {
  if (!products) return <Loading />;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>商品列表 SSR</title>
      </Head>
      <h1 className={productsCss.pageTitle}>商品列表 SSR</h1>
      <div className={productsCss.productGallery}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} type="ssr" />
        ))}
      </div>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const baseUrl: string = req.headers.host ? `http://${req.headers.host}` : "";
console.log('zzzz:',req.headers);

  const apiUrl = `${baseUrl}/api/products`;
  let result: object[] = [];
  try {
    const res = await fetch(apiUrl);
    result = await res.json();
  } catch (error) {
    console.log("error:", error);
  }

  return {
    props: { products: result },
  };
};

export default Product;
