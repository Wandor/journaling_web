import actions from "../actions";

const initialState = {
    pageTitle: '',
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_PAGE_TITLE:
            return { ...state, pageTitle: action.pageTitle };


        default:
            return state;
    }
}

export default appReducer;