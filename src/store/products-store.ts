import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ProductDateFilterProps,
  ProductFilterProps,
  ProductProps,
  ProductStoreProps,
} from "./interface/products.interface";
import { products } from "@utils/data/products";
import { RootState } from "./store";
import { productFilter } from "@utils/enum";

const initialState: ProductStoreProps = {
  productLists: [],
  filter: {
    search: "",
    sortBy: "",
    dateFrom: null,
    dateTo: null,
  },
};

export const fetchProducts = createAsyncThunk<
  ProductProps[],
  undefined,
  { state: RootState }
>("products/fetchProducts", async (_, thunkAPI) => {
  const { filter } = thunkAPI.getState().products || {};
  let data = [...products];

  data = data.filter((value) => {
    let isSearchVisible = true,
      isDateVisible = true;

    if (filter.search) {
      isSearchVisible = value?.title
        .toLowerCase()
        .includes(filter.search.toLowerCase());
    }
    if (filter.dateFrom && filter.dateTo) {
      const startDate = filter.dateFrom.getTime();
      const endDate = filter.dateTo.getTime();

      const date = new Date(value?.date).getTime();
      isDateVisible = date >= startDate && date <= endDate;
    }
    return isSearchVisible && isDateVisible;
  });

  if (filter.sortBy) {
    const [type, order] = filter.sortBy.split(".") as [
      keyof ProductProps,
      string
    ];

    data.sort((a, b) => {
      const itemA = String(a?.[type]);
      const itemB = String(b?.[type]);
      return itemA.localeCompare(itemB);
    });

    if (order === "0") {
      data.reverse();
    }
  }

  return data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<ProductFilterProps>) => {
      const { key, value } = action.payload || {};
      (state.filter as any)[key] = value;
    },
    setFilterDate: (state, action: PayloadAction<ProductDateFilterProps>) => {
      const { startDate, endDate } = action.payload || {};
      state.filter.dateFrom = startDate;
      state.filter.dateTo = endDate;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<ProductProps[]>) => {
        state.productLists = action.payload;
      }
    );
  },
});

export const { setFilter, setFilterDate } = productsSlice.actions;
export default productsSlice.reducer;
