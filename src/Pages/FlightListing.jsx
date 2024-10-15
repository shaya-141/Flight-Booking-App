import React, { useEffect, useState } from 'react'
import FlightFlowNavbar from '../Components/FlightFlowNavbar'
// import SearchFlight from '../Components/SearchFlight'
import SearchFlight from '../Components/SearchFlight'
import { app, db, flightDetails, getDocs,doc } from '../utils/firebase'
import { collection,  writeBatch } from 'firebase/firestore'
import { useGetFlightsContext } from '../Context/GetDataFromDb'
import { useFlightContext } from '../Context/SearchFlightContext'
import Filtersidebar from '../Components/Filtersidebar'
import Ticketshowtop from '../Components/Ticketshowtop'
import Ticketscard from '../Components/Ticketscard'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'

function FlightListing() {
  const currentDate = new Date();

  const year = currentDate.getFullYear(); 
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
  const day = String(currentDate.getDate()).padStart(2, '0'); 
  let curDate = `${year}-${month}-${day}`;
  const {flightDetailsFromDB, setflightDetailsFromDB,TripDetailsFromDB, setTripDetailsFromDB} = useGetFlightsContext()
  const [TripDetailData, setTripDetailData] = useState(null)
  const [ifDataNotAvailable, setifDataNotAvailable] = useState(false)
    
    const {
    destination, setdestination,
    trip, settrip,
    departureDate, setdepartureDate,
    returnDate, setreturnDate,
    passengerQuantity, setpassengerQuantity,
    ticketClass, setticketClass,
    returnDateShowOrNot, setreturnDateShowOrNot,
    searchFlightObject, setsearchFlightObject,
    filterDataFromDb, setfilterDataFromDb,
    copyfilterData, setcopyfilterData
  } = useFlightContext();

  const getFlightsFromFirestore = async () => {
    try {
      const flightCollection = collection(db, 'flights'); // Access the 'flights' collection
      const flightSnapshots = await getDocs(flightCollection); // Get flight documents
      const flightList = flightSnapshots.docs.map((doc) => doc.data()); // Map through docs to get data
      

      // Set the flight data into context state
      setflightDetailsFromDB(flightList); // Update context with fetched flights
      
    } catch (error) {
      console.error("Error fetching flight data: ", error); // Handle errors
    }
  };

  

  const filterDataFromInput = async () =>{

   
      let output = flightDetailsFromDB.filter((data) => {
        return destination.toLowerCase() === data.from_to.toLowerCase()
          && trip.toLowerCase() === data.type.toLowerCase()
          && data.departure_date >= curDate;
      });
      setfilterDataFromDb(output)
      setcopyfilterData(output)
      console.log('filterDataFromInput',filterDataFromDb);
      
    
    }
    
     
    
  
    useEffect(() => {
     
      getFlightsFromFirestore();
     
      
    }, []); 
  
  
  



  return (
    <>
      <FlightFlowNavbar></FlightFlowNavbar>
      {/* <FlightFlowListingSearch></FlightFlowListingSearch> */}
      <SearchFlight page={'listing'} fun={filterDataFromInput}></SearchFlight>

      <section id='filterSection' className='w-[88%] m-auto flex mt-8 gap-4  text-[#112211] '>

        <Filtersidebar></Filtersidebar>


        <section id="ticketshow" className=' w-3/4  min-h-screen '>
          <Ticketshowtop></Ticketshowtop>

          <div className='flex flex-col gap-6 px-1 py-3'>
          
            
            
            <Ticketscard></Ticketscard>

          </div>
        </section>
      </section>

    <Subscribe></Subscribe>
    <Footer></Footer>

    </>

  )
}

export default FlightListing;