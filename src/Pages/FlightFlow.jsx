import React from 'react'
import FlightFlowNavbar from '../Components/FlightFlowNavbar'
import SearchFlight from '../Components/SearchFlight'
import TextBar from '../Components/TextBar'
import Footer from '../Components/Footer'
import FallinTravelCard from '../Components/FallinTravelCard'
import { useGetFlightsContext } from '../Context/GetDataFromDb'
import { useFlightContext } from '../Context/SearchFlightContext'
import BackPacking from '../Components/BackPacking'
import Subscribe from '../Components/Subscribe'
import backpack1 from '../assets/banner/backpack1.png'
import backpack2 from '../assets/banner/backpack2.png'
import backpack3 from '../assets/banner/backpack3.png'
import backpack4 from '../assets/banner/backpack4.png'
function FlightFlow() {

  const { flightDetailsFromDB, setflightDetailsFromDB } = useGetFlightsContext()
  const {
    destination, setdestination,
    trip, settrip,
    departureDate, setdepartureDate,
    returnDate, setreturnDate,
    passengerQuantity, setpassengerQuantity,
    ticketClass, setticketClass,
    returnDateShowOrNot, setreturnDateShowOrNot,
    searchFlightObject, setsearchFlightObject,
    filterDataFromDb, setfilterDataFromDb
  } = useFlightContext();
  const filterDataFromInput = async () => {

    let output = await flightDetailsFromDB.filter((data) => {
      return destination.toLowerCase()
        === data.from_to.toLowerCase() && trip.toLowerCase() === data.type.toLowerCase() && data.departure_date === departureDate
    }
    )
    setfilterDataFromDb(output)
    console.log('filterDataFromInput', filterDataFromDb);
  }

  return (
    <>
      <FlightFlowNavbar></FlightFlowNavbar>
      <section id="flowbannerimg" className='w-[full] h-[550px] bg-black'>
        <div id="flowbanner" className='h-full w-full'>
          <div className='w-[420px] text-white '>
            <h1 className='text-[40px] font-semibold '>Make your travel whishlist, we’ll do the rest</h1>
            <h3 className='mt-2 font-medium text-[20px]'>Special offers to suit your plan</h3>
          </div>
        </div>
      </section>
      <SearchFlight page="flightflow" fun={filterDataFromInput}></SearchFlight>
      <TextBar h1={"Let's go places together"} p={'Discover the latest offers and news and start planning your next trip with us.'}></TextBar>
      <section id="flowbannerimg2" className='w-full h-[490px]'>

      </section>
      <TextBar mt={'mt-12'} h1={'Fall into travel'} p={'Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.'}></TextBar>

      <section id="fallin" className='w-[90%]  mt-10 flex gap-3 justify-center flex-wrap  m-h-[420px] m-auto'>
        <FallinTravelCard></FallinTravelCard>
        <FallinTravelCard></FallinTravelCard>
        <FallinTravelCard></FallinTravelCard>
        <FallinTravelCard></FallinTravelCard>
      </section>

      <TextBar mt={'mt-12'} h1={'Fall into travel'} p={'Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.'}></TextBar>

      <section id="backpacking" className='w-[88%] flex gap-4  mt-10 m-auto'>
        <BackPacking></BackPacking>
        <div id='smallpack' className='w-[55%] min-h-[420px] flex flex-wrap items-center justify-center gap-4  '>
          <div className='w-[240px] h-[200px]'>
            <img src={backpack2} alt="" className='w-full h-full' />
          </div>
          <div className='w-[240px] h-[200px]'>
            <img src={backpack1} alt="" className='w-full h-full' />
          </div>
          <div className='w-[240px] h-[200px]'>
            <img src={backpack3} alt="" className='w-full h-full' />
          </div>
          <div className='w-[240px] h-[200px]'>
            <img src={backpack4} alt="" className='w-full h-full' />
          </div>
        </div>
      </section>

      <Subscribe></Subscribe>
      <Footer></Footer>

    </>
  )
}

export default FlightFlow