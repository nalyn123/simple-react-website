import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ProductFilterProps,
  ProductProps,
  ProductStoreProps,
} from "./interface/products.interface";
import { products } from "@utils/data/products";
import { RootState } from "./store";
import { productFilter } from "@utils/enum";

const initialState: ProductStoreProps = {
  productLists: [],
};

export const fetchProducts = createAsyncThunk<
  ProductProps[],
  ProductFilterProps,
  { state: RootState }
>(
  "products/fetchProducts",
  async ({ key, ...props }: ProductFilterProps, thunkAPI) => {
    const state = thunkAPI.getState().products;
    let data = [...products];

    if (key && props) {
      if (key === productFilter.SEARCH) {
        data = data.filter((value) => {
          return value?.title
            .toLowerCase()
            .includes(props?.value.toLowerCase());
        });
      } else if (key === productFilter.SORT_BY) {
        const [type, order] = props?.value.split(".") as [
          keyof ProductProps,
          boolean
        ];

        data.sort((a, b) => {
          const itemA = String(a?.[type]);
          const itemB = String(b?.[type]);
          return itemA.localeCompare(itemB);
        });

        if (order) {
          data.reverse();
          console.log(data);
        }
      } else if (key === productFilter.DATE) {
        const startDate = new Date(props?.startDate).getTime();
        const endDate = new Date(props?.endDate).getTime();

        data = data.filter((value) => {
          const date = new Date(value?.date).getTime();

          return date >= startDate && date <= endDate;
        });
      }
    }
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<ProductProps[]>) => {
        state.productLists = action.payload;
      }
    );
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
