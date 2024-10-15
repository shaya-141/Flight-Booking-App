import React from 'react'

function TripMainAtrractionCard({value}) {
    console.log(value);
    
  return (
    <div id='TripMainAtrractionCard' className='w-[260px] text-[#112211]  h-[220px] flex flex-col rounded gap-4  p-3' >
        <img src={value?.image} alt="" className='w-[] rounded h-[130px]' />
        <h1 className='font-semibold text-[18px]'>{value?.name}</h1>

    </div>
  )
}

export default TripMainAtrractionCard