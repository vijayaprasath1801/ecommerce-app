import { createSelector } from "reselect";

export const selectCategoryReducer = (state) => state.categories;

export const selectCategoriesMap = createSelector(
  [selectCategoryReducer],
  (categoriesSlice)=> categoriesSlice.categories
);

export const selectCategories = createSelector([selectCategoriesMap] , 
  (categories)=> categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {}) 
  );

  export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
  )