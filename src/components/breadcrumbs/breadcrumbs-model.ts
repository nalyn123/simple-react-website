import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useBreadcrumbs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { breadcrumbs } = location.state;

  const onClick = (path: string = "", index: number = 0) => {
    breadcrumbs.splice(index + 1);

    navigate(path, {
      state: {
        breadcrumbs: breadcrumbs.pop(),
      },
    });
    // const path = (breadcrumbs?.length - index - 1) * -1;
    // navigate(path);
  };

  return { breadcrumbs, location, onClick };
};
