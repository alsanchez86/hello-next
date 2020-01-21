import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import dummy from "./dummy";

export default () => {
    return createStore(
        combineReducers({
            dummy
            // ... Others reducers if any
        }),
        composeWithDevTools(
            applyMiddleware(thunk)
            // ... Others store enhancers if any
        )
    );
};