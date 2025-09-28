import { useBreadcrumbs } from "./breadcrumbs-model";
import { BreadcrumbsProps } from "./breadcrumbs.interface";
import styles from "./breadcrumbs.module.scss";

const Breadcrumbs = ({ title }: { title: string }) => {
  const { breadcrumbs, onClick } = useBreadcrumbs();

  return (
    <div className={styles["breadcrumbs"]}>
      {breadcrumbs.map((value: BreadcrumbsProps, index: number) => (
        <button
          className={styles["breadcrumbs__item"]}
          key={index}
          onClick={() => onClick(value?.path, index)}
        >
          {value?.label}
        </button>
      ))}
      <span className={styles["breadcrumbs__arrow"]}>&gt;</span>
      <span
        className={`${styles["breadcrumbs__item"]} ${styles["breadcrumbs__item--text"]}`}
      >
        {title}
      </span>
    </div>
  );
};

export default Breadcrumbs;
