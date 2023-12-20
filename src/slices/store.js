import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice.js';

export default configureStore({
  reducer: {
    // Свойство counter будет внутри объекта общего состояния: state.cards
    cards: cardsReducer,
  },
});
