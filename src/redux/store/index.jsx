import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { thunk } from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createHashHistory } from 'history';
import appReducer from '../reducers/appReducer';
import LanguageReducer from '../languageSwitcher/reducer';
import ThemeReducer from '../themeSwitcher/reducer';
import AuthReducer from '../auth/reducer';
// Combine reducers
const reducers = combineReducers({
    appReducer: appReducer,
    LanguageSwitcher: LanguageReducer,
    ThemeSwitcher: ThemeReducer,
    Auth: AuthReducer
});

const history = createHashHistory();

const composedEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composedEnhancers(applyMiddleware(thunk, routerMiddleware(history)));

export const store = createStore(
    reducers,
    enhancer
);

export default createStore(
    reducers,
    enhancer
);