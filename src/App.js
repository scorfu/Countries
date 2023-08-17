import {createBrowserRouter, RouterProvider} from  'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import Country from './Pages/Country';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/country',
      element: <Country/>
    },
  ]);

  return (
    <div className='bg-light-subtle'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
