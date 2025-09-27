import { Carousel, CarouselItem } from "simple-react-carousel";
import { BannerImg } from "@assets/images";
import { BannerProps } from "./banner.interface";
import "./banner.scss";

const Banner = (props: BannerProps) => {
  return (
    <Carousel {...props} className="banner-slider">
      {props?.data?.map((_, i) => (
        <CarouselItem key={i}>
          <img src={BannerImg} alt="" />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default Banner;
