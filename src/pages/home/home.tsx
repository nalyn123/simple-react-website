import React from "react";
import { Slider, Banner } from "@components/index";
import styles from "./home.module.scss";
import { useHome } from "./home-model";
const Home = () => {
  const { carouselMain, carouselBody, dataMain, dataBody } = useHome();

  return (
    <>
      <Banner {...carouselMain} data={dataMain} />
      <div className={styles["slider-wrap"]}>
        {Array.from({ length: 5 }, (_, i) => (
          <Slider key={i} {...carouselBody} data={dataBody} />
        ))}
      </div>
    </>
  );
};

export default Home;
