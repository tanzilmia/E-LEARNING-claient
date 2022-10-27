
import { RouterProvider } from 'react-router-dom';
import router from '../src/routing/router'
import {Toaster} from 'react-hot-toast'
import './App.css';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <div><Toaster/></div>
    </div>
  );
}

export default App;
