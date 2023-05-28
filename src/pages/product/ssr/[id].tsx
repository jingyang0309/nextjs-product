import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Product as ProductType } from "../../../../fake-data";
import ProductCard from "../../../components/ProductCard";
import { ParsedUrlQuery } from "querystring";
import productCss from "../[id].module.css";
import Link from "next/link";
import Head from "next/head";
import Loading from "@/components/Loading/Loading";


interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  const router = useRouter();
  console.log("router", router);

  if (!product) return <Loading />;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>商品詳細頁面 SSR</title>
      </Head>
      <h1 className={productCss.pageTitle}>商品詳細頁面 SSR</h1>
      <div className={productCss.backLink}>
        <Link href="/products/ssr">回產品列表</Link>
      </div>
      <div className={productCss.productContainer}>
        <ProductCard product={product} all />
      </div>
    </>
  );
};
interface Params extends ParsedUrlQuery {
  id: string;
}
//ProductProps 被用於定義回傳 props 的型別,而 Params 則是用來定義 url 中 query string 的型別
export const getServerSideProps: GetServerSideProps<
  ProductProps,
  Params
> = async ({ params }) => {
  // params! 是TypeScript 用來斷言 params 一定不是 null 或 undefined
  const api = `https://fakestoreapi.com/products/${params!.id}`;
  const res = await fetch(api);
  const json: ProductType = await res.json();
  return {
    props: { product: json },
  };
};

export default Product;
