import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: {
    pizza1: { id: 'pizza1', count: 0, price: 10, img: './src/assets/1.jpg', name: 'Pepperoni Pizza', isLike: false, description: 'A classic Pepperoni Pizza with a rich, tangy sauce and a generous layer of cheese.' },
    pizza2: { id: 'pizza2', count: 0, price: 15, img: './src/assets/2.jpg', name: 'Margherita Pizza', isLike: false, description: 'A delicious Margherita Pizza, perfect for those who love a balance of tomato, mozzarella, and basil.' },
    pizza3: { id: 'pizza3', count: 0, price: 12, img: './src/assets/3.jpg', name: 'BBQ Chicken Pizza', isLike: false, description: 'Our BBQ Chicken Pizza is a must-try. Grilled chicken, tangy BBQ sauce, and a perfect crust.' },
    pizza4: { id: 'pizza4', count: 0, price: 14, img: './src/assets/4.jpg', name: 'Cheese Delight Pizza', isLike: false, description: 'A delightful cheese pizza for cheese lovers. Layered with a creamy cheese, it\'s a heavenly experience.' },
    pizza5: { id: 'pizza5', count: 0, price: 15, img: './src/assets/5.jpg', name: 'Veggie Paradise Pizza', isLike: false, description: 'A pizza paradise for vegetable lovers. Packed with fresh vegetables and a flavorful sauce.' },
    pizza6: { id: 'pizza6', count: 0, price: 15, img: './src/assets/6.jpg', name: 'Hawaiian Dream Pizza', isLike: false, description: 'A dreamy Hawaiian pizza for all. With sweet pineapple, tangy ham, and a hint of cheese.' },
    pizza7: { id: 'pizza7', count: 0, price: 20, img: './src/assets/7.jpg', name: 'Pepperoni Extravaganza Pizza', isLike: false, description: 'An extravagant pepperoni pizza for all. Layered with pepperoni, mushrooms, and a tangy sauce.' },
    pizza8: { id: 'pizza8', count: 0, price: 25, img: './src/assets/8.jpg', name: 'Margherita Delight Pizza', isLike: false, description: 'A delightful margherita pizza for all. With a generous layer of mozzarella and fresh basil.' },
    pizza9: { id: 'pizza9', count: 0, price: 15, img: './src/assets/1.jpg', name: 'BBQ Chicken Paradise Pizza', isLike: false, description: 'A paradise for BBQ Chicken pizza lovers. Grilled chicken, tangy BBQ sauce, and a perfect crust.' },
    pizza10: { id: 'pizza10', count: 0, price: 17, img: './src/assets/2.jpg', name: 'Cheese Dream Pizza', isLike: false, description: 'A dreamy cheese pizza for all. Layered with a creamy cheese, it\'s a heavenly experience.' },
    pizza11: { id: 'pizza11', count: 0, price: 16, img: './src/assets/3.jpg', name: 'Veggie Extravaganza Pizza', isLike: false, description: 'An extravagant vegetable pizza for all. Packed with fresh vegetables and a flavorful sauce.' },
    pizza12: { id: 'pizza12', count: 0, price: 14, img: './src/assets/4.jpg', name: 'Hawaiian Delight Pizza', isLike: false, description: 'A delightful Hawaiian pizza for all. With sweet pineapple, tangy ham, and a hint of cheese.' },
    pizza13: { id: 'pizza13', count: 0, price: 14, img: './src/assets/5.jpg', name: 'Pepperoni Dream Pizza', isLike: false, description: 'A dreamy pepperoni pizza for all. Layered with pepperoni, mushrooms, and a tangy sauce.' },
    pizza14: { id: 'pizza14', count: 0, price: 15, img: './src/assets/6.jpg', name: 'Margherita Extravaganza Pizza', isLike: false, description: 'An extravagant margherita pizza for all. With a generous layer of mozzarella and fresh basil.' },
  },
  ids: ['pizza1', 'pizza2', 'pizza3', 'pizza4', 'pizza5', 'pizza6', 'pizza7', 'pizza8', 'pizza9', 'pizza10', 'pizza11', 'pizza12', 'pizza13', 'pizza14',],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addLike: (state, action) => {
      if (state.entities[action.payload].like === true) {
        state.entities[action.payload].like = false;
      } else {
        state.entities[action.payload].like = true;
      }
    },
  },
});

export const { addLike } = cardsSlice.actions;

export default cardsSlice.reducer;
