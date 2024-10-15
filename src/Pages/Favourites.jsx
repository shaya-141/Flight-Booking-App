import React, { useState } from 'react'
import FlightFlowNavbar from '../Components/FlightFlowNavbar'
import FavouriteCard from '../Components/FavouriteCard'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'
import { useEffect } from 'react'
import { useFlightContext } from '../Context/SearchFlightContext'

function Favourites() {
  const {userViewDetails , setuserViewDetails} = useFlightContext()
  const [dataFromLocalStorage, setdataFromLocalStorage] = useState([])

  const getFavourites = () => {
    const getArray = localStorage.getItem('favourites')
    const DataArray = JSON.parse(getArray)
    setdataFromLocalStorage(DataArray)
    console.log('DataArray', DataArray);

  }

  useEffect(() => {
    getFavourites()
  }, [])

  const handleViewDetails = (e) => {

    // e.ticket_class = ticketClass
    setuserViewDetails(e)
    localStorage.setItem('userViewDetails', JSON.stringify(e));
    console.log('view s  shayan', userViewDetails);

  }


  return (
    <>
      <FlightFlowNavbar></FlightFlowNavbar>
      <section className='w-[90%]  text-[#112211] h-36 m-auto mt-16'>
        <h1 className='text-[#000000] font-bold text-[30px]'>Favourites</h1>
        <div id='favouritebar' className='w-full mt-5 rounded-xl h-[80px] py-4 px-6' >
          <h1 className='text-[16px] font-semibold '>Flights</h1>
          <span className='opacity-[40%] font-normal text-[14px]'>{dataFromLocalStorage.length} marked</span>
        </div>
      </section>

      <section className='w-[90%] mt-8 flex flex-col gap-4 m-auto'>
        {
          dataFromLocalStorage.map((item, index) => (
            <FavouriteCard handleViewDetails={handleViewDetails} value={item} key={index}></FavouriteCard>

          ))
        }

      </section>

      <Subscribe></Subscribe>
      <Footer></Footer>

    </>
  )
}

export default Favourites