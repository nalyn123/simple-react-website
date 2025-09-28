import { setFilterDate, setFilter } from "@store/products-store";
import { AppDispatch } from "@store/store";
import { productFilter } from "@utils/enum";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const useFilter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const searchInput = {
    type: "text",
    name: "search",
    placeholder: "Search...",
    onChange: (e: any) => {
      const data = { key: productFilter.SEARCH, value: e.target.value };
      dispatch(setFilter(data));
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
    const data = { key: productFilter.SORT_BY, value };
    dispatch(setFilter(data));
  };

  const onDateChange = (date: any) => {
    const { startDate, endDate } = date?.selection || {};
    const data = {
      startDate,
      endDate,
    };
    dispatch(setFilterDate(data));
  };

  const onFilterClick = () => {
    setIsOpen((prev) => !prev);
  };

  const onFilterClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    searchInput,
    sortData,
    onSortBy,
    onDateChange,
    onFilterClick,
    onFilterClose,
  };
};
