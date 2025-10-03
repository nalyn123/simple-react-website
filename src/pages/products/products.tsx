import styles from "./products.module.scss";
import { useProducts } from "./products-model";
import { ProductItem, Filter } from "@components/index";

const Products = () => {
  const { productLists } = useProducts();

  return (
    <div className="container container--py">
      <div className={styles["products"]}>
        <Filter />
        <div className="row">
          {productLists.map((value, i) => (
            <div key={i} className="col col-6 col-sm-3 col-lg-2">
              <ProductItem id={value?.id} title={value?.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
