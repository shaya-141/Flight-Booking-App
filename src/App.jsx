import { useEffect, useState } from 'react'

import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import { FlightProvider } from './Context/SearchFlightContext'
import FlightListing from './Pages/FlightListing'
import { GetFlightsProvider, } from './Context/GetDataFromDb'
import flightDetails from './utils/Flights'
import TripObj from './utils/TripObj'
import { db, doc } from './utils/firebase'
import { writeBatch } from 'firebase/firestore'
import FlightDetail from './Pages/FlightDetail'
import BookingDetail from './Pages/BookingDetail'
import FlightFlow from './Pages/FlightFlow'
import SelectSeat from './Pages/SelectSeat'
import TripsPage from './Pages/TripsPage'
import Signup from './Pages/Signup'
import { AuthContextProvider } from './Context/Auth'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import { Toaster } from 'sonner'
import TicketDetail from './Pages/TicketDetail'
import Favourites from './Pages/Favourites'
import TripBookingDetail from './Pages/TripBookingDetail'
import PrivateRouteComponent from './Components/PrivateRouteComponent'



function App() {

  // const { } = useGetFlightsContext()

  useEffect(() => {
    const addFlightsToFirestore = async () => {
      const batch = writeBatch(db); // Initialize batch
      flightDetails.forEach((flight) => {
        const flightRef = doc(db, 'flights', flight.flight_number); // Use flight_number as the document ID
        batch.set(flightRef, flight);
      });

      // Commit the batch write
      await batch.commit();
      console.log('Flight data added successfully!');
    };

    const addTripDetailToFirestore = async () => {
      const batch = writeBatch(db);
      TripObj.forEach((trip) => {
        const Tripref = doc(db, 'TripsPlan', trip.trip_id);
        batch.set(Tripref, trip);
      });
      await batch.commit();
      console.log('Trips data added successfully!');
    };

    // Call the functions only once on initial load
    addFlightsToFirestore().catch(console.error);
    addTripDetailToFirestore().catch(console.error);
  }, []); // Empty dependency array ensures this runs only once


  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>

          <GetFlightsProvider>
            <FlightProvider>
              <Toaster position="top-right" richColors />
              <Routes>
                <Route path='/' element={<Landing></Landing>}></Route>
                <Route path='/TripsDetail' element={<TripsPage></TripsPage>}></Route>
                <Route path='/FlightFlow' element={<FlightFlow></FlightFlow>}></Route>
                <Route path='/FlightListing' element={<FlightListing></FlightListing>}></Route>
                <Route path='/FlightDetails' element={<FlightDetail></FlightDetail>}></Route>
                <Route path='/BookingDetails' element={<BookingDetail></BookingDetail>}></Route>
                <Route path='/BookingDetails/Ticket' element={<TicketDetail></TicketDetail>}></Route>
                <Route path='/BookingDetails/Trip' element={<TripBookingDetail></TripBookingDetail>}></Route>
                <Route path='/SelectSeat' element={<SelectSeat></SelectSeat>}></Route>
                <Route path='/Favourites' element={<Favourites></Favourites>}></Route>
                <Route path='/Signup' element={<Signup></Signup>}></Route>
                <Route path='/Login' element={<Login></Login>}></Route>

                <Route path='/Profile' element={<PrivateRouteComponent><Profile></Profile></PrivateRouteComponent>}></Route>

              </Routes>

            </FlightProvider>
          </GetFlightsProvider>

        </AuthContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
