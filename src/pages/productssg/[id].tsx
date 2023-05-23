import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import { getProductById, Product as ProductType } from "../../../fake-data";
import ProductCard from "../../components/ProductCard";
import ProductContainer, { PageTitle } from "./[id].style";

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  const router = useRouter();

  if (router.isFallback) {
    console.log("Loading...");

    return <div>Loading...</div>;
  }

  return (
    <>
      <PageTitle>商品詳細頁面</PageTitle>
      <ProductContainer>
        <ProductCard product={product} all />
      </ProductContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = getProductById(params?.id as string);

  return {
    props: {
      product,
    },
    revalidate: 60, //revalidate 是 getStaticProps 的一個選擇性參數，它可以用來決定一個頁面多久會重新打包一次。
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: "blocking",
  };
};

export default Product;
