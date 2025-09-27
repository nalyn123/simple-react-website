import { RateProps } from "./rate.interface";
import "./rate.scss";

const Rate = (props: RateProps) => {
  const { rate } = props;
  return (
    <div className="rate">
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          className={`rate__item ${
            i <= Math.floor(rate) ? "rate__item__active" : ""
          }`}
        >
          ★
        </div>
      ))}
    </div>
  );
};

export default Rate;
