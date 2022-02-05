import { combineReducers, createStore } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import stringReducer from './searchStringRedux';

const subreducers = {
  lists: listsReducer,
  cards: cardsReducer,
  columns: columnsReducer,
  searchString: stringReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
