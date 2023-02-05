import { 
  //BrowserRouter, 
  createBrowserRouter,
  createRoutesFromElements,
  // Routes, 
  Route,
  RouterProvider
} from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';

// layouts
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      {/* same approach below <Route path='/' element={<Home/>} /> */}
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App
