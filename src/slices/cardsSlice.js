import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const data = createAsyncThunk(
  'getData',
  async () => {
    const response = await fetch('https://coffee.alexflipnote.dev/random.json');
    return response;
  }
);

const initialState = data;

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addLike: (state) => {
      state.like += 1;
    },
  }
});

export const { addLike } = cardsSlice.actions;

export default cardsSlice.reducer;
