import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk, RootState } from '../store.tsx';

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount: number): AppThunk =>
  async dispatch => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount));
    }, 1000);
  };

// export const thunkSendMessage = (message: string): ThunkAction<void, RootState, unknown, AnyAction> =>
//   async dispatch => {
//     const asyncResp = await exampleAPI();
//     dispatch(
//       sendMessage({
//         message,
//         user: asyncResp,
//         timestamp: new Date().getTime()
//       })
//     );
//   };

// async function exampleAPI(): Promise<string> {
//   return await Promise.resolve('Async Chat Bot');
// };

export const selectCount = (state: RootState): number => state.counter.value;

export default counterSlice.reducer;