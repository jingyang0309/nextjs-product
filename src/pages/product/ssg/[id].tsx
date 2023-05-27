import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import { Product as ProductType } from "../../../../fake-data";
import ProductCard from "../../../components/ProductCard";
import productCss from "../[id].module.css";
import Link from "next/link";
import Head from "next/head";
import Loading from "@component/components/Loading/Loading";

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  console.log("product", product);

  const router = useRouter();
  console.log("router", router);

  // if (!router.isFallback) {
  //   return <Loading />;
  // }
  if (!product) {
    return <Loading />;
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>商品詳細頁面 SSG</title>
      </Head>
      <h1 className={productCss.pageTitle}>商品詳細頁面 SSG</h1>
      <div className={productCss.backLink}>
        <Link href="/products/ssg">回產品列表</Link>
      </div>
      <div className={productCss.productContainer}>
        <ProductCard product={product} all />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const product = getProductById(params?.id as string);
  // console.log(product);

  const apiUrl =
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/api/products/${params?.id}`
      : `https://nextjs-product-git-main-jingyang0309.vercel.app/api/products/${params?.id}`;
  const res = await fetch(apiUrl);
  const json = await res.json();
  console.log("json:", json);

  return {
    props: {
      product:json,
    },
    // revalidate: 60, //revalidate 是 getStaticProps 的一個選擇性參數，它可以用來決定一個頁面多久會重新打包一次。
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: 'blocking',
    /* 'blocking' ：官方推薦使用這個參數，原因雖然沒有說，但是在 Next.js 的 GitHub issue 中翻了一會兒，會發現 'blocking' 的好處是有利於 SEO，雖然對於會執行 JavaScript 的 Google 爬蟲沒有影響，但是像是 Facebook 或 Twitter 等不會執行 JavaScript 的爬蟲， 'blocking' 才能確保爬蟲拿到的資料是完整的。
    true : 如上述，因為 true 會使爬蟲看到的是 fallback page，如果沒有執行 JavaScript，則無法拿到更新後的內容，如此對於 SEO 不利。但是，對於需要經過 authentication 的頁面或是後台頁面來說，也許 true 是一個好的選擇，因為不用在意 SEO，而且透過 web skeleton 可以讓使用者更快地看到網頁預載入的內容框，從另一個面向來看是可以優化 UX 的選擇。 */
  };
};

export default Product;
