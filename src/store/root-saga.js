import {all , call} from 'redux-saga/effects';
import { categroySaga } from './categories/categories-saga';
import { userSaga } from './user/user-saga';

export function* rootSaga(){
    yield all([call(categroySaga), call(userSaga)]);
}