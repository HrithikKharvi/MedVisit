import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from './pages/Navigation.js';
import About from './pages/About.js'
import DashBoard from './pages/Dashboard.js'
import Doctors from './pages/Doctors.js'
import Patients from './pages/Patients.js'
import Preferences from './pages/Preferences.js'
import Schedules from './pages/Schedules.js'

import RootPage from './pages/RootPage.js'

function App() {

  const router = createBrowserRouter([
    {
      path: "/", element: <RootPage/>,
      children: [
        {path:"", element:<DashBoard/>},
        {path:"schedules", element:<Schedules/>},
        {path:"patients", element:<Patients/>},
        {path:"doctors", element:<Doctors/>},
        {path:"about", element:<About/>},
        {path:"preferences", element:<Preferences/>},
      ]
    }
  ])

  return (<RouterProvider router={router}></RouterProvider>);
}

export default App;
