import React, { useEffect, useRef, useState } from 'react'
import HistoryBar from './HistoryBar'
import FlightTicketHistory from '../Components/FlightTicketHistory'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'
import { useAuthContext } from '../Context/Auth'
import HistoryTicket from './HistoryTicket'
import html2canvas from 'html2canvas'
const HistoryProfileDetail = ({ display }) => {
  const { IsLoggedin, setIsLoggedin, GetUser, userId } = useAuthContext()
  const [TicketValue, setTicketValue] = useState([])
  const [checkId, setcheckId] = useState(null)
  const [TicketDisplayORNot, setTicketDisplayORNot] = useState(false)

  const ticketRef = useRef([]) 
  

  const getBookedTicketFromFirestore = async () => {
    try {

      const ticketColl = collection(db, `SellTicket/${userId}/BookingTicket`)
      const ticketSnapShot = await getDocs(ticketColl)
      const ticketList = ticketSnapShot.docs.map((doc) => doc.data())
      setTicketValue(ticketList)
      console.log('ticketList', ticketList);



    } catch (error) {
      console.log('error', error);

    }

  }

  const handleTicketDisplay = (key) => {
    setcheckId(key)
    console.log(key);
    
    setTicketDisplayORNot(TicketDisplayORNot === true ? false : true)
    
    // console.log('click hua',checkId);
    
    
  }

  const DownloadTicket = async (index)=>{

    const ticketElement = ticketRef.current[index]
    if (!ticketElement) {
        console.log('ticket ref is not available');
        console.log(ticketElement);
        
      }
      console.log(ticketElement);

    console.log('download');
    try {
      setTicketDisplayORNot(true)
      const canvas = await html2canvas(ticketElement, { useCORS: true, scale: 2 })
      const dataUrl = canvas.toDataURL('image/png')
      
      const link = document.createElement('a')
      link.href= dataUrl
      link.download = 'Ticket.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      
      console.log("Ticket downloaded successfully!");

      
    } catch (error) {
      console.error("Error downloading ticket:", error);
    }
    
  }


  useEffect(() => {
    if (userId) {
      getBookedTicketFromFirestore(); // Fetch only if userId is available
    }
  }, [userId]);




  return (
    <div className={`min-h-96 w-[90%] ${display}  m-auto mt-4`}>
      <h1 className='text-[32px] font-bold text-[#000000]'>Tickets/Bookings</h1>
      <HistoryBar></HistoryBar>
      <div className='flex w-[100%]   flex-col gap-5 '>
        {

          TicketValue.map((data, index) => (
            <div className={` mt-4 rounded-[16px] flex flex-col gap-4 ${TicketDisplayORNot ? 'border ' : ''}`}>
              <>
                <FlightTicketHistory  index={index} fun={handleTicketDisplay} data={data} key={index} download={DownloadTicket}></FlightTicketHistory >
                <div ref={(element) => ticketRef.current[index] = element} className={`${checkId === index && TicketDisplayORNot === true ? 'block' : 'hidden'}`}>
                 <HistoryTicket ticketRef={ticketRef}  value={data}>   </HistoryTicket>

                </div>
          
              </>
            </div>
          ))

        }
      </div>
    </div>
  )
}

export default HistoryProfileDetail