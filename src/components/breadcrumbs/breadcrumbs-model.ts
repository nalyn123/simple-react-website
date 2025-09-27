import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useBreadcrumbs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { breadcrumbs } = location.state;

  const onClick = (path: string = "", index: number = 0) => {
    breadcrumbs.splice(index);

    navigate(path, {
      state: {
        breadcrumbs: breadcrumbs.pop(),
      },
    });
  };

  return { breadcrumbs, location, onClick };
};
