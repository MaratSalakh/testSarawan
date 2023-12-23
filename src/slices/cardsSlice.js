import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchImg = createAsyncThunk(
  'data/fetchImg',
  async () => {
    const data = [];
    for (let i = 0; i < 10; i += 1) {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      const splittedUrl = response.data.message.split('/');
      const name = splittedUrl[splittedUrl.length - 2];
      data.push({
        name: name,
        id: i,
        img: response.data.message,
        isLike: false,
        visible: true,
        description: response.data.status,
      });
    }
    return data;
  }
);

const cardsAdapter = createEntityAdapter();

const cardsSlice = createSlice({
  name: 'cards',
  initialState: cardsAdapter.getInitialState({ loadingStatus: 'idle', error: null }),
  reducers: {
    addLike: (state, action) => {
      if (state.entities[action.payload].isLike === true) {
        state.entities[action.payload].isLike = false;
      } else {
        state.entities[action.payload].isLike = true;
      }
    },
    changeVision: (state, action) => {
      state.entities[action.payload].visible = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImg.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchImg.fulfilled, (state, action) => {
        // Добавляем state
        cardsAdapter.addMany(state, action);
        state.loadingStatus = 'idle';
        state.error = null;
      })
      // Вызывается в случае ошибки
      .addCase(fetchImg.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        state.error = action.error;
      });
  },
});

export const { addLike, changeVision } = cardsSlice.actions;

export default cardsSlice.reducer;
