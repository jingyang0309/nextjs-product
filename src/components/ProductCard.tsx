import Image from "next/legacy/image";
// import Link from "next/link";
import { Product as ProductType } from "../../fake-data";
import productCss from "./ProductCard.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

type Type = "csr" | "ssr" | "ssg";
interface ProductCardProps {
  product: ProductType;
  all?: boolean;
  type?: Type;
}

const ProductCard = ({ product, all, type }: ProductCardProps) => {
  const { id, image, title, description, price } = product;
  const router = useRouter();
  return (
    <div key={id} className={productCss.product}>
      <div className={productCss.image}>
        <Image src={image} alt="product" layout="fill" objectFit="contain" />
      </div>
      <div className={productCss.productDetail}>
        {type && (
          <Link
            href={`/product/${type}/${id}`}
            className={productCss.productTitle}
          >
            {title}
          </Link>
        )}
        {!type && (
          <div className={productCss.productTitle} onClick={router.back}>
            {title}
          </div>
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
