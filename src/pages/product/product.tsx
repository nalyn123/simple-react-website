import styles from "./product.module.scss";
import { useProducts } from "./product-model";
import { SampleImg } from "@assets/images";
import { Rate, Favorite, Breadcrumbs } from "@components/index";

const Products = () => {
  const {} = useProducts();
  return (
    <div className="container container--py">
      <Breadcrumbs title="Lorem Ipsum" />

      <div className={styles["product"]}>
        <Favorite />
        <div className="row">
          <div className="col col-12 col-sm-4">
            <img
              className={styles["product__img"] + " w-full"}
              src={SampleImg}
              alt=""
            />
          </div>
          <div className="col col-12 col-sm-8">
            <p className={styles["product__title"]}>Lorem Ipsum</p>
            <Rate rate={3} />
            <p className={styles["product__text"]}>Lorem Ipsum</p>

            <p className={styles["product__desc"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              aliquam velit id gravida tempus. Integer quis ex magna. Etiam vel
              volutpat nunc, quis mollis nibh. Nulla dignissim, ipsum sit amet
              vulputate vehicula, turpis mauris malesuada lacus, nec pulvinar
              enim nisl sit amet ex. Cras eu sagittis ligula. Sed nec tempor
              est.
            </p>

            <button className={styles["product__submit"]}>Lorem Ipsum</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
