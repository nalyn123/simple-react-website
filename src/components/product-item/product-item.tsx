import { SampleImg } from "@assets/images";
import { ProductItemProps } from "./product-item.interface";
import "./product-item.scss";
import { Favorite } from "@components/index";
import { useProductItem } from "./product-item-model";

const ProductItem = (props: ProductItemProps) => {
  const { id, title } = props || {};
  const { onProductClick } = useProductItem();

  return (
    <div onClick={() => onProductClick(props)} className="product__item">
      <Favorite />
      <img src={SampleImg} alt="" />
      <p className="product__item__hover">{title}</p>
    </div>
  );
};

export default ProductItem;
