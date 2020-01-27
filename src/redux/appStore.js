import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import dummyReducer from "./dummyReducer";

export default () => {
    return createStore(
        combineReducers({
            dummyReducer
            // ... Others reducers if any
        }),
        composeWithDevTools(
            applyMiddleware(thunk)
            // ... Others store enhancers if any
        )
    );
};