import React, { useEffect, useState } from 'react'
import airplaneblack from '../assets/logo-icon/airplaneblack.png'
import SeatpageText from '../Components/SeatpageText'
import AirplaneSeatChoose from '../Components/AirplaneSeatChoose'
import SeatPriceCard from '../Components/SeatPriceCard'
import { useFlightContext } from '../Context/SearchFlightContext'
import { toast } from 'sonner'
function SelectSeat() {
    const [UserTicket, setUserTicket] = useState('')
    const { userTicketBook, setuserTicketBook, AirplaneSeatNumber,AirplaneSeatNumberPrice} = useFlightContext()
    
    useEffect(()=>{
        // console.log(userTicketBook);
        const userTicket = localStorage.getItem('userTicketBook')
        // console.log('userTicket',JSON.parse(userTicket));
        setUserTicket(JSON.parse(userTicket))
        
      },[userTicketBook])


      const handleSeatSelection = ()=>{
          console.log('sjauaj',AirplaneSeatNumber);

            let updated ={...UserTicket,AirplaneSeatNumber}
            localStorage.setItem('userTicketBook',JSON.stringify(updated))


        console.log(AirplaneSeatNumberPrice);
        toast.success('Seat Selected Successfully')
        // const finalobj = {...UserTicket,}
        // localStorage.setItem('userTicketBook', JSON.stringify(finalobj))
        // console.log(finalobj);
        
    }

    return (
        <div id='seatMainContainer'  className='w-[90%] m-auto text-[#112211] flex  pt-12 justify-between '>
            <SeatpageText value={UserTicket}></SeatpageText>

            {/* seats div */}
            <AirplaneSeatChoose></AirplaneSeatChoose>

            <SeatPriceCard fun={handleSeatSelection} value={UserTicket}></SeatPriceCard>

        </div>

    )
}

export default SelectSeat