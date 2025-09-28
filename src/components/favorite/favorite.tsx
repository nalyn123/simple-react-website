import styles from "./favorite.module.scss";
import { useFavorite } from "./favorite-model";
const Favorite = () => {
  const { active, onClick } = useFavorite();

  return (
    <div
      className={`${styles["favorite"]} ${
        active ? styles["favorite__active"] : ""
      }`}
      onClick={onClick}
    ></div>
  );
};

export default Favorite;
