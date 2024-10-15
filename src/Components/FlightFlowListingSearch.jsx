import React, { useEffect, useState } from 'react'
import airplaneblack from '../assets/logo-icon/airplaneblack.png';
import arrow from '../assets/logo-icon/arrow.png';
import drop from '../assets/logo-icon/drop.png';
import search from '../assets/logo-icon/search.png';
import { useFlightContext } from '../Context/SearchFlightContext';
function FlightFlowListingSearch() {

    let destinationFromto = [
        "Karachi - Lahore",
        "Karachi - Multan",
        "Karachi - Islamabad",
        "Karachi - Quetta",
        "Karachi - Peshawar",
        "Lahore - Karachi",
        "Lahore - Islamabad",
        "Lahore - Peshawar",
        "Lahore - Quetta",
        "Islamabad - Karachi",
        "Islamabad - Lahore",
        "Islamabad - Quetta",
        "Islamabad - Peshawar",
        "Islamabad - Multan"
    ]
    const {
        destination, setdestination,
        trip, settrip,
        departureDate, setdepartureDate,
        returnDate, setreturnDate,
        passengerQuantity, setpassengerQuantity,
        ticketClass, setticketClass,
        returnDateShowOrNot, setreturnDateShowOrNot,
        searchFlightObject, setsearchFlightObject,
      } = useFlightContext();
    
      const [error, setError] = useState("");  // State to track errors
    
      useEffect(() => {
        if (trip === 'oneway') {
          setreturnDateShowOrNot(false);
        } else if (trip === 'return') {
          setreturnDateShowOrNot(true);
        }
      }, [trip, setreturnDateShowOrNot]);
    
      // Get today's date in yyyy-mm-dd format
      const todayDate = new Date().toISOString().split('T')[0];
    
      const validateForm = () => {
        if (!destination) {
          setError("Please select a destination.");
          return false;
        }
        if (!trip) {
          setError("Please select a trip type.");
          return false;
        }
        if (new Date(departureDate) < new Date(todayDate)) {
          setError("Departure date cannot be in the past.");
          return false;
        }
        if (!departureDate) {
          setError("Please select a departure date.");
          return false;
        }
        if (trip === 'return' && (!returnDate || new Date(returnDate) <= new Date(departureDate))) {
          setError("Please select a valid return date that is after the departure date.");
          return false;
        }
        if (!passengerQuantity) {
          setError("Please select the number of passengers.");
          return false;
        }
        setError("");  // Clear error if validation passes
        return true;
      };
    
      const handleFlightSearch = () => {
        if (validateForm()) {
          setsearchFlightObject({
            destination, trip, departureDate, returnDate, passengerQuantity, ticketClass
          });
          console.log(searchFlightObject);
          console.log('shayan');
          
        }
      };
    
      useEffect(() => {
        console.log(searchFlightObject);
      }, [searchFlightObject]);




    return (
        <div className='w-full flex justify-center'>
            <div id='searchflight' className='w-[88%] max-w-[1280px] min-h-[100px] bg-white  rounded-2xl mt-8'>
                <div className='flex ml-6 mt-4 gap-4 flex-wrap items-center '>
                    <fieldset className='w-[230px] h-[55px] text-sm border border-[#79747E] rounded px-4'>
                        <legend>From-to</legend>
                        <div className='w-full mt-1 relative flex items-center'>
                            <select className='w-full h-full' onChange={(e) => setdestination(e.target.value)}>
                                {
                                    destinationFromto.map((data, index) => {
                                        return (

                                            <option value={data} key={index}>{data}</option>
                                        )
                                    })

                                }
                                {/* <option value="islamabadT0Lahore">Karachi - Lahore</option> */}
                            </select>
                            <img src={arrow} alt="" className='absolute h-5 bg-white right-0 z-0' />
                        </div>
                    </fieldset>
                    <fieldset className='w-[180px] h-[55px] text-sm border border-[#79747E] rounded px-4'>
                        <legend>Trip</legend>
                        <div className='w-full mt-1 relative flex items-center'>
                            <select className='w-full h-full' onChange={(e) => settrip(e.target.value)}>

                                <option value="return">Return</option>
                                <option value="oneway">One Way</option>
                            </select>
                            <img src={drop} alt="" className='absolute right-0 bg-white' />
                        </div>
                    </fieldset>
                    <fieldset className='w-[250px] h-[55px] text-sm border border-[#79747E] rounded px-4'>
                        <legend>Departure-Return</legend>
                        <div className='w-[250px] mt-1 relative flex items-center'>
                            <input type="date" className='w-[44%]' onChange={(e) => setdepartureDate(e.target.value)} />
                            <h1>--</h1>
                            {/* {
            returnDateShowOrNot ? 
              <input type="date" className='w-[44%]' onChange={(e) => setreturnDate(e.target.value)} />
              :
              null
            } */}
                        </div>
                    </fieldset>
                    <fieldset className='w-[250px] h-[55px] text-sm border border-[#79747E] rounded px-4'>
                        <legend>Passenger-Class</legend>
                        <div className='w-full mt-1 relative flex gap-3 items-center'>
                            <select className='w-[30%] h-full' onChange={(e) => setpassengerQuantity(e.target.value)}>

                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                            <select onChange={(e) => setticketClass(e.target.value)}>
                                <option value="economy">Economy</option>
                                <option value="business">Business</option>
                            </select>
                        </div>
                    </fieldset>

                    <button onClick={handleFlightSearch} className='h-[44px] w-[52px] text-sm mt-2 flex items-center justify-center gap-2 text-[#112211] bg-[#8DD3BB] font-medium rounded'>
                        <img src={search} alt="" className='h-5' />

                    </button>

                </div>

                {/* {error && <div className="text-red-500 text-sm mt-2 ml-6">{error}</div>} Displaying error message */}

            </div>
        </div>
    )
}

export default FlightFlowListingSearch