import { createSelector } from "reselect";

const rootSelector = (state) => state.products;

export const productsListSelector = createSelector(
  [rootSelector],
  (state) => state.products || []
);
