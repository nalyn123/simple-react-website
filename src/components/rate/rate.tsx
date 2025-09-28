import { RateProps } from "./rate.interface";
import styles from "./rate.module.scss";

const Rate = (props: RateProps) => {
  const { rate } = props || {};
  return (
    <div className={styles["rate"]}>
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          className={`${styles["rate__item"]} ${
            i <= Math.floor(rate) ? styles["rate__item__active"] : ""
          }`}
        >
          ★
        </div>
      ))}
    </div>
  );
};

export default Rate;
