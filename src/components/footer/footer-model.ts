import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import lists from "@utils/menu";

export const useFooter = () => {
  const navigate = useNavigate();
  const { auth } = useSelector((state: RootState) => state.user);

  const footerLists = [
    {
      label: "Lorem Ipsum",
      children: lists,
    },
    {
      label: "Lorem Ipsum",
      children: [
        {
          path: "/",
          label: "Lorem Ipsum",
        },
        {
          path: "/",
          label: "Lorem Ipsum",
        },
        {
          path: "/",
          label: "Lorem Ipsum",
        },
      ],
    },
    {
      label: "Lorem Ipsum",
      children: [
        {
          path: "/",
          label: "Lorem Ipsum",
        },
        {
          path: "/",
          label: "Lorem Ipsum",
        },
        {
          path: "/",
          label: "Lorem Ipsum",
        },
      ],
    },
  ];

  const onClick = (url: string) => {
    navigate(url);
  };

  return { auth, footerLists, onClick };
};
