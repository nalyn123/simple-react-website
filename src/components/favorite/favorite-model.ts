import { useState } from "react";

export const useFavorite = () => {
  const [active, setActive] = useState<boolean>(false);

  const onClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    setActive((prev) => !prev);
  };
  return { active, onClick };
};
