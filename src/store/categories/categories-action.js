import { createAction } from "../../utils/reducer.utills/reducer-utils";
import { CATEGORIES_ACTION_TYPES } from "./categories-types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";

export const fetchcategoriesStart =() => ( 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
);


export const fetchcategoriesSuccess =(categoriesArray) => ( 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS , categoriesArray)
);

export const fetchcategoriesfailed =(error) => ( 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);

export const fetchcategoriesSync = () => async(dispatch) =>{

dispatch(fetchcategoriesStart());

try {
    const categoriesArray = await getCategoriesAndDocuments('categories');
    dispatch(fetchcategoriesSuccess(categoriesArray));
} catch (error) {
    dispatch(fetchcategoriesfailed(error));
}
};