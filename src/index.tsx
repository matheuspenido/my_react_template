import { createRoot } from 'react-dom/client';
import App from './components/App.tsx';

const rootElement = document.getElementById('root');

if (rootElement !== null)
  createRoot(rootElement).render(<App />);