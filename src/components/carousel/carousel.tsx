import { Carousel, CarouselItem } from "simple-react-carousel";
import { SampleImg } from "@assets/images";
import { SliderProps } from "./carousel.interface";
import styles from "./carousel.module.scss";
import { ProductItem } from "@components/index";

const Slider = (props: SliderProps) => {
  const { data, title } = props || {};

  if (!data.length) return;

  return (
    <div className={styles["slider"]}>
      {title && <p className={styles["slider__header"]}>{title}</p>}

      <Carousel {...props}>
        {data.map((value, index) => (
          <CarouselItem key={index} className={styles["slider__item"]}>
            <ProductItem {...value} />
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
