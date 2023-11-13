import { type ThunkAction, type AnyAction, configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice.tsx';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;