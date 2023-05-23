import { GetServerSideProps,} from "next";
import { useRouter } from "next/router";
import { getProductById, Product as ProductType } from "../../../fake-data";
import ProductCard from "../../components/ProductCard";
import ProductContainer, { PageTitle } from "./[id].style";
import { ParsedUrlQuery } from "querystring";

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
interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps<ProductProps, Params> = async ({
  params,
}) => {
  // params! 是TypeScript 用來斷言 params 一定不是 null 或 undefined
  const api = `https://fakestoreapi.com/products/${params!.id}`;
  const res = await fetch(api);
  const json: ProductType = await res.json();
  return {
    props: { product: json },
  };
};

export default Product;