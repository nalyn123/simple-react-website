import { useNavigate } from "react-router-dom";

export const useFooter = () => {
  const navigate = useNavigate();

  const footerLists = [
    {
      label: "Lorem Ipsum",
      children: [
        {
          path: "/",
          label: "Home",
        },
        {
          path: "/products",
          label: "Products",
        },
        {
          path: "/login",
          label: "Login",
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

  return { footerLists, onClick };
};
