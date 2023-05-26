import Image from "next/legacy/image";
// import Link from "next/link";
import { Product as ProductType } from "../../fake-data";
import { useRouter } from "next/router";
import productCss from "./ProductCard.module.css";
import Link from "next/link";
interface ProductCardProps {
  product: ProductType;
  all?: boolean;
}

const ProductCard = ({ product, all }: ProductCardProps) => {
  const { id, image, title, description, price } = product;
  const router = useRouter();
  const handleClick = (url: string): void => {
    // console.log("router", router);
    switch (router.pathname) {
      case "/product/[id]":
        router.back();
        break;
      default:
        router.push(`/product/${id}`);
        break;
    }
  };
  return (
    <div key={id} className={productCss.product}>
      <div className={productCss.image}>
        <Image src={image} alt="product" layout="fill" objectFit="contain" />
      </div>
      <div className={productCss.productDetail}>
        {router.pathname !== "/products" && (
          <div
            className={productCss.productTitle}
            onClick={() => {
              handleClick(id);
            }}
          >
            321 {title}
          </div>
        )}
        {router.pathname === "/products" && (
          <Link href={`/product/${id}`} className={productCss.productTitle}>
            123 {title}
          </Link>
        )}
        <div
          className={`${productCss.productDescription}  ${
            !all && productCss.hidden
          }`}
        >
          {description}
        </div>
        <div className={productCss.price}>${price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
