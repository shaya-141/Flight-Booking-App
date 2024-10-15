import React, { useState } from 'react'
import { useFlightContext } from '../Context/SearchFlightContext'

function AirplaneSeat({seatnumber,price,fun,selectedSeat}) {
  const [selectedColor, setselectedColor] = useState('#C2C1C1')
    const {AirplaneSeatNumber, setAirplaneSeatNumber, AirplaneSeatNumberPrice, setAirplaneSeatNumberPrice}= useFlightContext()
    

    const isSelected = selectedSeat === seatnumber


  return (
    <button className={`w-[30px] h-[40px] rounded ${
      isSelected ? 'bg-[#8DD3BB]' : 'bg-[#C2C1C1]'
    }`}  onClick={(e)=>{
        fun(seatnumber,price)
        setAirplaneSeatNumber(seatnumber)
        setAirplaneSeatNumberPrice(price)
       
      
        setselectedColor('#8DD3BB')
        
        
    }}></button>
  )
}

export default AirplaneSeat