//import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from './dictionarySlice';
// aca importamos nuestro reducer
//import rootReducer from './reducers';

//const store = createStore(rootReducer);
export const store = configureStore({
    reducer: {
      dictionary: dictionaryReducer,
    },
  });

export default store;