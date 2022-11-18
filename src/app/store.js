import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'; // импорт функции редюсера из слайса счетчика

export const store = configureStore({  // создание пустого хранилища Redux и его экспорт
  reducer: {
    counter: counterReducer, // поле с параметром  указавающим использовать эту функцию сокращения среза для обработки всех обновлений этого состояния. 
  },
});
