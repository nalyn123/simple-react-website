import "./products.scss";
import { useProducts } from "./products-model";
import { ProductItem, Filter } from "@components/index";

const Products = () => {
  const {} = useProducts();

  return (
    <div className="container container--py">
      <div className="products">
        <Filter />
        <div className="row">
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i} className="col col-12 col-sm-3 col-lg-2">
              <ProductItem
                id={i}
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
