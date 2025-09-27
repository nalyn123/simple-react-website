import { fetchProducts } from "@store/products-store";
import { AppDispatch } from "@store/store";
import { productFilter } from "@utils/enum";
import { useDispatch } from "react-redux";

export const useFilter = () => {
  const dispatch = useDispatch<AppDispatch>();

  const searchInput = {
    type: "text",
    name: "search",
    placeholder: "Search...",
    onChange: (e: any) => {
      const data = { key: productFilter.SEARCH, value: e.target.value };
      dispatch(fetchProducts(data));
    },
  };

  const sortData = [
    {
      key: "title.1",
      value: "Title (A-Z)",
    },
    {
      key: "title.0",
      value: "Title (Z-A)",
    },
    {
      key: "date.1",
      value: "Date (asc)",
    },
    {
      key: "date.0",
      value: "Date (desc)",
    },
  ];

  const onSortBy = (value: any) => {
    dispatch(fetchProducts({ key: productFilter.SORT_BY, value }));
  };

  const onDateChange = (date: any) => {
    const { startDate, endDate } = date?.selection || {};
    const data = {
      key: productFilter.DATE,
      startDate,
      endDate,
    };
    dispatch(fetchProducts(data));
  };

  return { searchInput, sortData, onSortBy, onDateChange };
};
