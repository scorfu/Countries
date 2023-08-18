import {createBrowserRouter, RouterProvider} from  'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import Country from './Pages/Country';
import NotFound from './Pages/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: '/Countries',
      element: <HomePage/>
    },
    {
      path: '/country',
      element: <Country/>
    },    {
      path: '*',
      element: <NotFound/>
    },
  ]);

  return (
    <div className='bg-light-subtle'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
