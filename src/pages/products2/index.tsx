import { ChangeEvent, useEffect, useState } from "react";
import { getAllProduct, Direction, sortByPrice } from "../../../fake-data";
import ProductCard from "../../components/ProductCard";
import PriceFilter, { PageTitle, ProductGallery } from "./products.style";
import { useRouter } from "next/router";

//shallow router
const Home = () => {
  const [direction, setDirection] = useState<Direction>("ASC");
  const router = useRouter();

  const products = sortByPrice(direction);
  const handleSortingDirectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const dir: string = e.target.value;
    router.push(`?direction=${dir}`);
  };
  useEffect(() => {
    if (!router.query.direction) return;
    setDirection(router.query.direction as Direction);
  }, [router.query.direction]);

  return (
    <>
      <PageTitle>商品列表</PageTitle>
      <PriceFilter>
        Price:
        <select value={direction} onChange={handleSortingDirectionChange}>
          <option value="ASC">價格由低到高</option>
          <option value="DES">價格由高到低</option>
        </select>
      </PriceFilter>
      <ProductGallery>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGallery>
    </>
  );
};

export default Home;
