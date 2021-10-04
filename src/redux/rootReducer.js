import { combineReducers } from "redux";


const testReducer = (state={}, action) => {
    switch (action.type) {
        case "SetTest":
            return {
                state
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    test: testReducer
});

export default rootReducer;