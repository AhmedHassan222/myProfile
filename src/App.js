import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import About from './Components/About/About';
import Project from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  const routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'project', element: <Project /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <Notfound /> }
      ]
    }
  ])


  return <RouterProvider router={routers} />
}

export default App;
