import React, { useEffect, useState } from 'react'
import FlightFlowNavbar from '../Components/FlightFlowNavbar'
import FlightDetailbanner from '../Components/FlightDetailbanner'
import FlightDetainName from '../Components/FlightDetailName'
import Featureimg from '../Components/Featureimg'
import Policy from '../Components/Policy'
import FlightDetailTicket from '../Components/FlightDetailTicket'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'
import { useFlightContext } from '../Context/SearchFlightContext'

function FlightDetail() {

   

    const { userViewDetails, setuserViewDetails, userTicketBook, setuserTicketBook, ticketClass, setticketClass } = useFlightContext();
    const [userTicket, setuserTicket] = useState(null);
  
    useEffect(() => {
      const savedDetails = localStorage.getItem('userViewDetails');
      if (savedDetails) {
        const parsedDetails = JSON.parse(savedDetails);
        setuserViewDetails(parsedDetails);
        setuserTicket(parsedDetails); // Setting the initial ticket state
        console.log(parsedDetails);
      }
      
    }, []); // Only run on mount
  
    const bookNow = () => {
      if (!userViewDetails) {
        console.error('No user view details available to book');
        return;
      }
  
      console.log('Booking now...', userViewDetails);
  
      // Update the userViewDetails with ticket class
      const updatedDetails = { ...userViewDetails};
      setuserTicketBook(updatedDetails);
  
      // Save the updated ticket to localStorage
      localStorage.setItem('userTicketBook', JSON.stringify(updatedDetails));
  
      console.log('Airline:', updatedDetails.airline);
    };
  
    const handleClass = (e) => {
        const isChecked = e.target.checked;
        const classValue = e.target.value;
    
        if (isChecked) {
          setticketClass(classValue); // Update state with selected class
          const updatedDetails = { ...userViewDetails, ticket_class: classValue };
          setuserTicketBook(updatedDetails);
          localStorage.setItem('userTicketBook', JSON.stringify(updatedDetails));
          console.log('Checked class:', classValue);
        } else {
          // If unchecked, reset to "Economy" class by default
          setticketClass('Economy');
          const updatedDetails = { ...userViewDetails, ticket_class: 'Economy' };
          setuserTicketBook(updatedDetails);
          localStorage.setItem('userTicketBook', JSON.stringify(updatedDetails));
          console.log('Unchecked, default to Economy');
        }
    };


  return (
    <>
    <FlightFlowNavbar></FlightFlowNavbar>
    <FlightDetainName value={userViewDetails} fun={bookNow}></FlightDetainName>
    <FlightDetailbanner></FlightDetailbanner>
    <section className='text=[#112211] w-[90%] m-auto mt-8 flex flex-wrap gap-4 justify-between'>
        <div>
            <h1 className='text-[24px] font-bold'>Basic Economy Features</h1>
        </div>
        <div className='flex items-center gap-6'>
            <label htmlFor="" className='text-[14px] flex items-center gap-1 font-medium'>
                <input type="checkbox" className='h-6 w-4' value={'Economy'}  onClick={handleClass}  />
                <span className='text-[14px] font-medium pt-[2px]'>Economy</span>
            </label>
          
            <label htmlFor="" className='text-[14px] flex items-center gap-1 font-medium'>
                <input type="checkbox" className='h-6 w-4' value={'Buisness'} onClick={handleClass}  />
                <span className='text-[14px] font-medium pt-[2px]'  >Buisness Class</span>
            </label>
        </div>
    </section>
    <Featureimg page={'flightDetail'}></Featureimg>
    <Policy></Policy>
    <FlightDetailTicket type={'oneway'} value={userViewDetails}></FlightDetailTicket>
    {
      userViewDetails.type === 'return'
      ?
      <FlightDetailTicket type={'returntrip'} value={userViewDetails}></FlightDetailTicket>
      :
      ''
    }

    <Subscribe></Subscribe>
    <Footer></Footer>

    </>
  )
}

export default FlightDetail