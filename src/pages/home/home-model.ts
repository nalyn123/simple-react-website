export const useHome = () => {
  const carouselMain = {
    slides: 1,
    hasArrow: false,
    gap: 0,
  };

  const carouselBody = {
    title: "Lorem Ipsum",
    slides: {
      0: 3,
      768: 5,
      1200: 8,
    },
    hasPaging: false,
    gap: 15,
    spaceStart: 0.5,
    loop: false,
  };

  const dataMain = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  }));

  const dataBody = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  }));

  return {
    carouselMain,
    carouselBody,
    dataMain,
    dataBody,
  };
};
