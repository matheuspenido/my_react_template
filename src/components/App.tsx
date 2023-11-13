import { Provider } from 'react-redux';
import { Counter } from './Counter/Counter.tsx';
import { store } from '../store/store.tsx';

export default function App(): React.JSX.Element {
  return (
    <>
      <h1>My first React app</h1>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
}