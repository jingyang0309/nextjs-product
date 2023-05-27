import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

import { Product as ProductType } from "../../../../fake-data";
import ProductCard from "../../../components/ProductCard";
import productCss from "../[id].module.css";
import Head from "next/head";
import Loading from "@component/components/Loading/Loading";

const fetcher = (params: string[]) => {
  return fetch(`/api/${params}`).then((res) => res.json());
};

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: product } = useSWR<ProductType>(
    id ? `/products/${id}` : null,
    fetcher
  );

  if (!product) return <Loading/>;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>商品詳細頁面 CSR useSWR</title>
      </Head>
      <h1 className={productCss.pageTitle}>商品詳細頁面 CSR useSWR</h1>
      <div className={productCss.backLink}>
        <Link href="/products/csr">回產品列表</Link>
      </div>
      <div className={productCss.productContainer}>
        <ProductCard product={product} all />
      </div>
    </>
  );
};

export default Product;
