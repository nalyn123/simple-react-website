export interface ProductStoreProps {
  productLists: ProductProps[];
  filter: ProductFiltersProps;
}

export interface ProductFiltersProps {
  search: string;
  sortBy: string;
  dateFrom: Date | null;
  dateTo: Date | null;
}

export interface ProductFilterProps {
  key: string;
  value: string;
}

export interface ProductDateFilterProps {
  startDate: Date;
  endDate: Date;
}

export interface ProductProps {
  id: number;
  title: string;
  date: string;
}
