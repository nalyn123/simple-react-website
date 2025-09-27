import "./breadcrumbs.scss";
import { useBreadcrumbs } from "./breadcrumbs-model";

const Breadcrumbs = ({ title }: { title: string }) => {
  const { breadcrumbs, onClick } = useBreadcrumbs();

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map((value: any, index: number) => (
        <button
          className="breadcrumbs__item"
          key={index}
          onClick={() => onClick(value?.path, index)}
        >
          {value?.label}
        </button>
      ))}
      <span className="breadcrumbs__arrow">&gt;</span>
      <span className="breadcrumbs__item breadcrumbs__item--text">{title}</span>
    </div>
  );
};

export default Breadcrumbs;
