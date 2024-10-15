import React, { useEffect, useState } from 'react'
import down from '../assets/logo-icon/drop.png';
import { useFlightContext } from '../Context/SearchFlightContext';
import { useGetFlightsContext } from '../Context/GetDataFromDb';
function Filtersidebar() {

  const { filterDataFromDb, setfilterDataFromDb,
    copyfilterData, setcopyfilterData } = useFlightContext()
  const { flightDetailsFromDB, setflightDetailsFromDB } = useGetFlightsContext()
  const [MinPrice, setMinPrice] = useState(0)
  const [MaxPrice, setMaxPrice] = useState(0)
  const [selectedPrice, setSelectedPrice] = useState(0); 
  
  // const [oldDataWithOutFilter, setoldDataWithOutFilter] = useState(filterDataFromDb)
  const oldDataWithOutFilter = filterDataFromDb
  let check

  let companyFilter = []
  useEffect(() => {
    // setfilterDataFromDb(filterDataFromDb)
    // setoldDataWithOutFilter(filterDataFromDb)
    if (filterDataFromDb && filterDataFromDb.length > 0) {
      let newMin = Infinity;
      let newMax = -Infinity;

      filterDataFromDb.forEach((flight) => {
        if (flight.price < newMin) {
          newMin = flight.price;
        }
        if (flight.price > newMax) {
          newMax = flight.price;
        }
      });

      setMinPrice(newMin);
      setMaxPrice(newMax);
      setSelectedPrice(newMax);
      // console.log('Min Price:', newMin);
      // console.log('Max Price:', newMax);
    }

  },[filterDataFromDb])
  const filterFlightCompany = (e) => {

    let flightName = e.target.value
    const isChecked = e.target.checked;
    check = isChecked

    if (isChecked === true) {
      if (filterDataFromDb) {

        companyFilter = filterDataFromDb.filter((data, index) => {
          return flightName.toLowerCase() === data.airline.toLowerCase()
        })
        // console.log('companyFilter', companyFilter);
      }
      setfilterDataFromDb(companyFilter)
    }
    console.log('this', e.target.value);
    if (isChecked === false) {
      
      setfilterDataFromDb(copyfilterData)
     

    }
  }

  const priceFilter = (e)=>{
    if(filterDataFromDb && filterDataFromDb.length > 0){
      const newValue = parseInt(e.target.value, 10);
      setSelectedPrice(newValue);
      // console.log(e.target.value);
      
     let priceControl  =   filterDataFromDb.filter((data)=>{
        return data.price <= newValue 
      })
      // console.log(priceControl); 
   

    }
  }

  const ratingFilter =  (e)=>{
      console.log(e);
      
  }

  return (
    <>
      <section id='filter' className='  w-2/2 flex flex-col gap-8 '>
        <h1 className='font-semibold text-xl'>Filters</h1>
        <div id="priceinput" className='w-full flex flex-col gap-4 h-[85px]'>
          <h2 className='text-[16px] font-semibold flex justify-between'>Price <span><img src={down} alt="" /></span></h2>
          <input className='range' type="range" name="" id="" onChange={priceFilter} min={MinPrice} max={MaxPrice} value={selectedPrice}  />
          <span className='text-[12px] text-[#112211] font-medium flex justify-between'><h2>{MinPrice}</h2> <h2>{MaxPrice}</h2></span>
        </div>
        <hr className='border border-[#112211]  w-full opacity-[5%]' />


        <div id="ratinginput" className='w-full flex flex-col gap-4 h-[85px]'>
          <h2 className='text-[16px] font-semibold flex justify-between'>Ratings <span><img src={down} alt="" /></span></h2>
          <div id='ratbtn' className='flex gap-4 text-[12px] font-medium'>

            <button className='border-[#8DD3BB] w-[40px] h-8 border flex items-center justify-center rounded-[4px]' onClick={()=>{
              ratingFilter(4.1)
            }}>4.1+</button>

            <button className='border-[#8DD3BB] w-[40px] h-8 border flex items-center justify-center rounded-[4px]' onClick={()=>{
              ratingFilter(4.2)
            }}>4.2+</button>

            <button className='border-[#8DD3BB] w-[40px] h-8 border flex items-center justify-center rounded-[4px]' onClick={()=>{
              ratingFilter(4.3)
            }}>4.3+</button>

            <button className='border-[#8DD3BB] w-[40px] h-8 border flex items-center justify-center rounded-[4px]' onClick={()=>{
              ratingFilter(4.4)
            }}>4.4+</button>

            <button className='border-[#8DD3BB] w-[40px] h-8 border flex items-center justify-center rounded-[4px]' onClick={()=>{
              ratingFilter(4.5)
            }}>4.5+</button>


          </div>
        </div>

        <hr className='border border-[#112211] w-full opacity-[5%]' />

        <div id="airlines" className='w-full flex flex-col gap-4 '>
          <h2 className='text-[16px] font-semibold flex justify-between'>Airlines <span><img src={down} alt="" /></span></h2>

          <div className='flex-col flex gap-2'>
            <span className='flex items-center gap-2'> <input type="checkbox" className='w-[18px] h-[18px] border-2 border-[#112211]' name="" id="" onClick={(e) => { filterFlightCompany(e) }} value={'Pakistan International Airlines'} /> <span className='font-medium'>PIA</span> </span>

            <span className='flex items-center gap-2'> <input type="checkbox" className='w-[18px] h-[18px] border-2 border-[#112211]' name="" id="" onClick={(e) => { filterFlightCompany(e) }} value={'Serene Air'} /> <span className='font-medium' >Serene Air</span> </span>

            <span className='flex items-center gap-2'> <input type="checkbox" className='w-[18px] h-[18px] border-2 border-[#112211]' name="" id="" onClick={(e) => { filterFlightCompany(e) }} value={'Airblue'} /> <span className='font-medium'>Airblue</span> </span>


          </div>

        </div>
        <hr className='border border-[#112211] w-full opacity-[5%]' />


        <div id="Trips" className='w-full flex flex-col gap-4 '>
          <h2 className='text-[16px] font-semibold flex justify-between'>Trips <span><img src={down} alt="" /></span></h2>

          <div className='flex-col flex gap-2 '>
            <span className='flex items-center gap-2'> <input type="checkbox" className='w-[18px] h-[18px] border-2 border-[#112211]' name="" id="" /> <span className='font-medium'>Return</span> </span>

            <span className='flex items-center gap-2'> <input type="checkbox" className='w-[18px] h-[18px] border-2 border-[#112211]' name="" id="" /> <span className='font-medium'>One Way</span> </span>

          </div>

        </div>

      </section>

    </>
  )
}

export default Filtersidebar