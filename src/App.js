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
import Faq from './pages/help/Faq';
import Contact, { contactSubmit } from './pages/help/Contact';
import NotFound from './pages/NotFound';
import Careers, { careersLoader } from './pages/careers/Careers';
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails';

// layouts
import RootLayout from './layout/RootLayout';
import HelpLayout from './layout/HelpLayout';
import CareersLayout from './layout/CareersLayout';
import CareersError from './pages/careers/CareersError';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      {/* same approach below <Route path='/' element={<Home/>} /> */}
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      {/* paths will be relative to the parent to no need / and /help/
      before the new child route faq & contact  */}

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} action={contactSubmit} />
      </Route>

      <Route path='careers' element={<CareersLayout />} errorElement={<CareersError />}>
        <Route 
          index 
          element={<Careers />} 
          // everytime we go to this route
          // loaders will fetch the data ahead of time
          loader={careersLoader}
          // errorElement={<CareersError />}
        />
        <Route
          // route params
          path=':careerId'
          element={<CareerDetails />}
          loader={careerDetailsLoader}
          // errorElement={<CareersError />}
        />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
