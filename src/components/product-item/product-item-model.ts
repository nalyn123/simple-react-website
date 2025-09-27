import { useNavigate } from "react-router-dom";
import { ProductItemProps } from "./product-item.interface";

export const useProductItem = () => {
  const navigate = useNavigate();

  const onProductClick = ({ id, title }: ProductItemProps) => {
    navigate(`/product/${id}`, {
      state: {
        breadcrumbs: [
          {
            path: "/products",
            label: "Products",
          },
        ],
      },
    });
  };
  return { onProductClick };
};
