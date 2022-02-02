import { combineReducers, createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initialState';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );

export const getAllColumns = (state) => state.columns;

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

export const addCard = (payload) => ({ type: 'ADD_CARD', payload });

export const updateSearchString = (payload) => ({
  type: 'UPDATE_SEARCHSTRING',
  payload,
});

const cardsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [...state, { id: shortid(), ...action.payload }];
    default:
      return state;
  }
};

const columnsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return [...state, { id: shortid(), ...action.payload }];
    default:
      return state;
  }
};

const stringReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_SEARCHSTRING':
      return action.payload;
    default:
      return state;
  }
};

const reducer = combineReducers({
  cards: cardsReducer,
  columns: columnsReducer,
  searchString: stringReducer,
});

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
