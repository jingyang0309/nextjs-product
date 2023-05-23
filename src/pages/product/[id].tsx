import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

import { Product as ProductType } from "../../../fake-data";
import ProductCard from "../../components/ProductCard";
import ProductContainer, { PageTitle, BackLink } from "./[id].style";

const fetcher = (params: string[]) => {
  // const [url, id] = params;
  // console.log("path", path, "id2:", id);
  return fetch(`https://fakestoreapi.com${params}`).then((res) =>
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
      <PageTitle>商品詳細頁面</PageTitle>
      <BackLink>
        <Link href="/products">回產品列表</Link>
      </BackLink>
      <ProductContainer>
        <ProductCard product={product} all />
      </ProductContainer>
    </>
  );
};

export default Product;
