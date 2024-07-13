import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import DonationDetails from './components/donationDetails/DonationDetails';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('donation.json')
      },
      {
        path: '/donate/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('donation.json')
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: () => fetch('donation.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]
  }
])
const App = () =>{ 
  return(
    <RouterProvider router={router}></RouterProvider>
  )
}
export default App;
