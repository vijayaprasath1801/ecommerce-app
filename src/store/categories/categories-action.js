import { createAction } from "../../utils/reducer.utills/reducer-utils";
import { CATEGORIES_ACTION_TYPES } from "./categories-types";

export const fetchcategoriesStart =() => ( 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
);


export const fetchcategoriesSuccess =(categoriesArray) => ( 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS , categoriesArray)
);

export const fetchcategoriesfailed =(error) => ( 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);
 