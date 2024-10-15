import React, { useCallback, useEffect, useState } from 'react'
import FlightFlowNavbar from '../Components/FlightFlowNavbar'
import BookingDetailTicket from '../Components/BookingDetailTicket'
import AddSomeExtrasFeatures from '../Components/AddSomeExtrasFeatures'
import PassengerDetail from '../Components/PassengerDetail'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'
import { useFlightContext } from '../Context/SearchFlightContext'
import { useAuthContext } from '../Context/Auth'
import { collection, doc, serverTimestamp, setDoc, writeBatch } from 'firebase/firestore'
import { db } from '../utils/firebase'
import { addDoc } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

function BookingDetail() {
  const { userViewDetails, setuserViewDetails, userTicketBook, setuserTicketBook,
    passengerQuantity, setpassengerQuantity,
    AirplaneSeatNumber, setAirplaneSeatNumberPrice, setAirplaneSeatNumber,
    MakeTicket, setMakeTicket
  } = useFlightContext()
  const [loading, setLoading] = useState(false);
  const { IsLoggedin, setIsLoggedin, GetUser, userId } = useAuthContext()
  const [selectedSeat, setselectedSeat] = useState(null)
  const [UserTicket, setUserTicket] = useState('')
  const Navigate = useNavigate()


  useEffect(() => {
    const userTicket = localStorage.getItem("userTicketBook");
    if (userTicket) {
      setUserTicket(JSON.parse(userTicket));
    }
  }, [userTicketBook]); // Dependency ensures it runs when `userTicketBook` changes

  // Handle booking confirmation

  
  const handleConfirmBooking = async (e) => {
    e.preventDefault(); // Prevent form submission default behavior

    if (!AirplaneSeatNumber) {
      toast.info("Please choose a seat.");
      return;
    }

    if (!IsLoggedin) {
      toast.info("You need to be logged in!");
      return;
    }

    setLoading(true); // Start loading

    try {
      // Prepare ticket upload data
      const uniqueId = uuidv4();
      const ticketUpload = {
        ...UserTicket,
        BookingAt: serverTimestamp(),
        AirplaneSeatNumber,
        passengerQuantity,
      };

      // Create Firestore batch for atomic operations
      const batch = writeBatch(db);
      const sellTicketRef = doc(db, `SellTicket/${userId}/BookingTicket/${uniqueId}`);
      await setDoc(sellTicketRef, ticketUpload);
      // batch.set(sellTicketRef, ticketUpload); // Add ticket to batch

      // await batch.commit(); // Commit batch

      console.log("MakeTicket", MakeTicket);
      console.log("Ticket successfully added!", ticketUpload);
      console.log("Unique ID:", uniqueId);

      toast.success("Your Ticket is Booked!");
      resetBookingState(); // Reset state after booking

      Navigate("/BookingDetails/Ticket"); // Redirect to Ticket Details
    } catch (error) {
      console.error("Error adding ticket: ", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Reset booking state after successful booking
  const resetBookingState = () => {
    setAirplaneSeatNumber("");
    setAirplaneSeatNumberPrice(0);
    // setMakeTicket(null);
  };

  return (

    <>
      <FlightFlowNavbar></FlightFlowNavbar>
      
      <BookingDetailTicket value={UserTicket}></BookingDetailTicket>
      <AddSomeExtrasFeatures ></AddSomeExtrasFeatures>

      <div className='w-[95%] flex justify-end  mt-20 '>

        <button onClick={handleConfirmBooking} className='w-[270px] h-[50px] bg-[#8DD3BB] rounded font-semibold'> {loading ? 'Booking...' : 'Confirm Booking'}</button>
      </div>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>


  )
}

export default BookingDetail