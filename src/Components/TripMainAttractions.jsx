import React from 'react'
import TripMainAtrractionCard from './TripMainAtrractionCard'

function TripMainAttractions({value}) {
  return (
    <>
    <div className='w-[90%] text-[#112211]  m-auto mt-16 p-1'>
        <h1 className='text-[22px] font-bold' >Trip Main Attractions</h1>

    </div>

    <div className='min-h-[300px]  w-[100%] p-4 flex flex-wrap justify-center gap-4  m-auto mt-4'>
            {
                value?.main_attractions.map((data,index)=>{
                    return <TripMainAtrractionCard value={data} key={index}></TripMainAtrractionCard>
                })
            }
    </div>
    
    </>
  )
}

export default TripMainAttractions