import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({  // создание пустого хранилища Redux и его экспорт
  reducer: {
    counter: counterReducer,
  },
});
