import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Success } from './Success';
import Subscribe from './Subscribe';

const App = createBrowserRouter([
  {
    path: '/',
    element: <Subscribe/>
  },
  {
    path: '/success',
    element: <Success/>
  }
]);

export default App;
