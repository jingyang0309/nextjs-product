import Image from "next/legacy/image";
import Link from "next/link";

import { Product as ProductType } from "../../fake-data";

interface ProductCardProps {
  product: ProductType;
  all?: boolean;
}

const ProductCard = ({ product, all }: ProductCardProps) => {
  const { id, image, title, description, price } = product;
  return (
    <div key={id} className="product">
      <div className="image">
        <Image src={image} alt="product" layout="fill" objectFit="cover" />
      </div>
      <div className="productDetail">
        <Link href={`/product/${id}`} passHref legacyBehavior className="productTitle">
          {title}
        </Link>
        <div className={`productDescription${!all&&' hidden'}`}>{description}</div>
        <div className="price">${price}</div>
      </div>
    </div>
  );
};

export default ProductCard;