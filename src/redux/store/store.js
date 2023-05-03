import {applyMiddleware, combineReducers, createStore} from "redux";
import {MainReducer} from "../reducer/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {BasketReducer} from "../reducer/BasketReducer";
import {FavoriteReducer} from "../reducer/FavoriteReducer";
import thunk from "redux-thunk";

export const store = createStore(combineReducers({
    main: MainReducer,
    basket: BasketReducer,
    favorite: FavoriteReducer,
}), composeWithDevTools(applyMiddleware(thunk)))