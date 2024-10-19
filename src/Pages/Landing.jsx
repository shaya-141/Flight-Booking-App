import React, { useEffect } from 'react'
import Landingbanner from '../Components/Landingbanner'
import SearchFlight from '../Components/SearchFlight'
import TripPlanChip from '../Components/TripPlanChip'
import FlightsLanding from '../Components/FlightsLanding'
import ReviewCard from '../Components/ReviewCard'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'
import reviewimg1 from '../assets/banner/reviewimg1.png'
import reviewimg2 from '../assets/banner/reviewimg2.png'
import reviewimg3 from '../assets/banner/reviewimg3.png'
import { useFlightContext } from '../Context/SearchFlightContext'
import { useGetFlightsContext } from '../Context/GetDataFromDb'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'
import { useAuthContext } from '../Context/Auth'

function Landing() {
  const { flightDetailsFromDB, setflightDetailsFromDB, TripDetailsFromDB, setTripDetailsFromDB } = useGetFlightsContext()
  const {
    destination, setdestination,
    trip, settrip,
    setfilterDataFromDb
  } = useFlightContext();


  const filterDataFromInput = async () => {

    let output = await flightDetailsFromDB.filter((data) => {
      return destination.toLowerCase()
        === data.from_to.toLowerCase() && trip.toLowerCase() === data.type.toLowerCase()
      // && data.departure_date === departureDate
    }
    )
    setfilterDataFromDb(output)



  }

  const getTripsFromFirestore = async () => {
    try {
      const tripCollection = collection(db, 'TripsPlan')
      const tripSnapshot = await getDocs(tripCollection)
      const TripList = tripSnapshot.docs.map((doc) => doc.data());
      // console.log(TripList);

      setTripDetailsFromDB(TripList)
      console.log(TripDetailsFromDB);

    } catch (error) {
      console.error("Error fetching trip data: ", error);
    }
  }
  const getTripWhenClick = (e) => {
    console.log(e);
    localStorage.setItem('userViewTripDetail', JSON.stringify(e))

  }

  useEffect(() => {

    getTripsFromFirestore()


  }, []);



  return (
    <>
      <Landingbanner></Landingbanner>
      <SearchFlight fun={filterDataFromInput}></SearchFlight>
      <div className='w-full flex  items-center justify-center'>
        <div className='w-[85%] '>
          <h1 className='text-black font-semibold text-3xl'>Plan Your Perfect Trip</h1>
          <p className='text-[#112211] text-[16px] font-normal mt-5 opacity-[80%]'>Search Flights & Places Hire to our most popular destinations</p>
        </div>
      </div>
      {/* <div className='w-[85%]  m-auto flex items-center flex-wrap mt-8 gap-3'>
        {

          TripDetailsFromDB.map((trip, index) => {
            return <TripPlanChip value={trip} key={index} fun={getTripWhenClick}></TripPlanChip>

          })
        }

      </div> */}

      <div className='w-[full] flex mt-14 justify-center'>
        <FlightsLanding></FlightsLanding>
      </div>
      <div className='w-[full] flex mt-14 justify-center'>
        <div className='w-[85%] '>

          <h1 className='text-3xl font-semibold '>Reviews</h1>
          <p className='mt-4'>What people says about Golobe facilities</p>
        </div>
      </div>
      <div className='w-[full] flex mt-14 justify-center'>
        <div className='w-[90%] flex flex-wrap justify-center  gap-12 '>

          <ReviewCard img={reviewimg1}></ReviewCard>
          <ReviewCard img={reviewimg2}></ReviewCard>
          <ReviewCard img={reviewimg3}></ReviewCard>
        </div>
      </div>

      <Subscribe></Subscribe>
      <Footer></Footer>


    </>
  )
}

export default Landing