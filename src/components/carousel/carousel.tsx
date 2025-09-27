import { Carousel, CarouselItem } from "simple-react-carousel";
import { SampleImg } from "@assets/images";
import { SliderProps } from "./carousel.interface";
import "./carousel.scss";
import { ProductItem } from "@components/index";

const Slider = (props: SliderProps) => {
  const { data, title } = props || {};

  if (!data.length) return;

  return (
    <div className="slider">
      {title && <p className="slider__header">{title}</p>}

      <Carousel {...props}>
        {data.map((value, index) => (
          <CarouselItem key={index} className="slider__item">
            <ProductItem {...value} />
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
