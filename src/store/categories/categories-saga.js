import {all , call , put , takeLatest} from "redux-saga/effects";
import { CATEGORIES_ACTION_TYPES } from "./categories-types";
import { fetchcategoriesSuccess , fetchcategoriesfailed } from "./categories-action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";



export function* fetchcategoriesSync(){
 try {
        const categoriesArray = yield call(getCategoriesAndDocuments ,'categories');
       yield put(fetchcategoriesSuccess(categoriesArray));
    } catch (error) {
       yield put (fetchcategoriesfailed(error));
    }
    };


export function* onfetchcategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START , fetchcategoriesSync);
}

export function* categroySaga(){
    yield all([call(onfetchcategories)]);
}