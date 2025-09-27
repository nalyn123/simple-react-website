import { AppDispatch, RootState } from "@store/store";
import { setLogout } from "@store/user-store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useSettings = () => {
  const { auth } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onEdit = (type: string) => {
    navigate(`/settings/${type}`);
  };

  const onLogout = () => {
    dispatch(setLogout());
  };
  return { auth, onEdit, onLogout };
};
