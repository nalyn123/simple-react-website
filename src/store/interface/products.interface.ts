export interface ProductStoreProps {
  productLists: ProductProps[];
}

export interface ProductFiltersProps {
  search: string;
  sortBy: string;
  dateFrom: string;
  dateTo: string;
}

export interface ProductFilterProps {
  [key: string]: string;
}

export interface ProductProps {
  id: number;
  title: string;
  date: string;
}
