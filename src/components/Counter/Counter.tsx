import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks.ts';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync
} from './../../store/reducers/counterSlice.tsx';

export function Counter(): JSX.Element {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div>
        <input
          aria-label='Set Increment Amount'
          value={incrementAmount}
          onChange={e => { setIncrementAmount(e.target.value); }}
        />
        <button
          onClick={() => { dispatch(incrementByAmount(Number(incrementAmount) ?? 0)); }}
        >
          Add Amount
        </button>
        <button
          onClick={() => { dispatch(incrementAsync(Number(incrementAmount) ?? 0)); }}
        >
          Add Async
        </button>
      </div>
    </div >
  );
}