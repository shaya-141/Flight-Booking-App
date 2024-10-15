import React, { useEffect, useRef, useState } from 'react'
import FlightFlowNavbar from '../Components/FlightFlowNavbar'
import FlightDetainName from '../Components/FlightDetailName'
import TicketDetailName from '../Components/TicketDetailName'
import Ticket from '../Components/Ticket'
import TermsandConditions from '../Components/TermsandConditions'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'
import { useFlightContext } from '../Context/SearchFlightContext'
import html2canvas from 'html2canvas'

function TicketDetail() {
  const [MakeTicket, setMakeTicket] = useState(null)
  const [TicketDisplayOrNot, setTicketDisplayOrNot] = useState(true)
  // console.log(MakeTicket);

  useEffect(()=>{
    const userTicket = localStorage.getItem('userTicketBook')
    const ticket = JSON.parse(userTicket)
    setMakeTicket(ticket)
  },[])

  const ticketRefer = useRef()

  const downloadTicket = async ()=>{
      console.log('download');
    try {

      setTimeout(async () => {
        const canvas = await html2canvas(ticketRefer.current, {
          useCORS: true, // Ensures external assets are handled correctly
          scale: 2, // Increase resolution for a better image
        }); 
        const dataUrl = canvas.toDataURL('image/png') 

        const link = document.createElement('a')
        link.href= dataUrl
        link.download = 'Ticket.png'

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        console.log("Ticket downloaded successfully!");
      }, 300)

    } catch (error) {
      console.error("Error downloading ticket:", error);
    }

      
  }
 
   

  return (
    <>
        <FlightFlowNavbar></FlightFlowNavbar>
        <TicketDetailName download={downloadTicket} value={MakeTicket}></TicketDetailName>
        <section className='w-[90%] flex  min-h-[300px] m-auto mt-10'>
                <Ticket ticketRef={ticketRefer} display={TicketDisplayOrNot} value={MakeTicket}></Ticket>
        </section>
        <TermsandConditions></TermsandConditions>

        <Subscribe></Subscribe>
        <Footer></Footer>
        

    </>
  )
}

export default TicketDetail