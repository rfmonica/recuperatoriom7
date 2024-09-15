// src/redux/dictionarySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  words: [], // {es: 'palabra', en: 'word', pt: 'palavra'}
};

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    addWord: (state, action) => {
      state.words.push(action.payload);
    },
    removeWord: (state, action) => {
      state.words = state.words.filter(
        (word) =>
          word.es !== action.payload &&
          word.en !== action.payload &&
          word.pt !== action.payload
      );
    },
    translateWord: (state, action) => {
      const { word, targetLang } = action.payload;
      const foundWord = state.words.find(
        (w) => w.es === word || w.en === word || w.pt === word
      );
      return foundWord ? foundWord[targetLang] : null;
    },
  },
});

export const { addWord, removeWord, translateWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;
