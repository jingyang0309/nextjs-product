import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

import { Product as ProductType } from "../../../fake-data";
import ProductCard from "../../components/ProductCard";
import productCss from './[id].module.css'

const fetcher = (params: string[]) => {
  // const [url, id] = params;
  // console.log("path", path, "id2:", id);
  return fetch(`/api/${params}`).then((res) =>
    res.json()
  );
};

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("id:", id);

  const { data: product } = useSWR<ProductType>(id?`/products/${id}`:null, fetcher);
  console.log("product", product);

  if (!product) return <div>loading</div>;

  return (
    <>
      <h1 className={productCss.pageTitle}>商品詳細頁面 useSWR CSR</h1>
      <div className={productCss.backLink}>
        <Link href="/products">回產品列表</Link>
      </div>
      <div className={productCss.productContainer}>
        <ProductCard product={product} all />
      </div>
    </>
  );
};

export default Product;
