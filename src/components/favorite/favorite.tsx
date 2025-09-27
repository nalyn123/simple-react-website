import "./favorite.scss";
import { useFavorite } from "./favorite-model";
const Favorite = () => {
  const { active, onClick } = useFavorite();

  return (
    <div
      className={`favorite ${active ? "favorite__active" : ""}`}
      onClick={onClick}
    ></div>
  );
};

export default Favorite;
