import React, { useEffect, useState } from 'react';
import airplaneblack from '../assets/logo-icon/airplaneblack.png';
import arrow from '../assets/logo-icon/arrow.png';
import drop from '../assets/logo-icon/drop.png';
import show from '../assets/logo-icon/show.png';
import search from '../assets/logo-icon/search.png';
import { useFlightContext } from '../Context/SearchFlightContext';
import { useNavigate } from 'react-router-dom';

function SearchFlight({ page, fun }) {
  const navigate = useNavigate();
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

  const [error, setError] = useState(''); // State to track errors

  let destinationFromto = [
    'Karachi - Lahore', 'Karachi - Multan', 'Karachi - Islamabad', 'Karachi - Quetta', 'Karachi - Peshawar',
    'Lahore - Karachi', 'Lahore - Islamabad', 'Lahore - Peshawar', 'Lahore - Quetta',
    'Islamabad - Karachi', 'Islamabad - Lahore', 'Islamabad - Quetta', 'Islamabad - Peshawar', 'Islamabad - Multan'
  ];

  useEffect(() => {
    if (trip === 'one-way') {
      setreturnDateShowOrNot(false);
    } else if (trip === 'return') {
      setreturnDateShowOrNot(true);
    }
  }, [trip, setreturnDateShowOrNot]);

  // Get today's date in yyyy-mm-dd format
  const todayDate = new Date().toISOString().split('T')[0];

  const validateForm = () => {
    if (!destination) return setError("Please select a destination.");
    if (!trip) return setError("Please select a trip type.");
    if (!departureDate) return setError("Please select a departure date.");
    if (new Date(departureDate) < new Date(todayDate)) return setError("Departure date cannot be in the past.");
    if (trip === 'return' && (!returnDate || new Date(returnDate) < new Date(departureDate))) {
      return setError("Please select a valid return date that is after the departure date.");
    }
    if (!passengerQuantity) return setError("Please select the number of passengers.");
    setError(''); // Clear error if validation passes
    return true;
  };

  const handleFlightSearch = () => {
    if (validateForm()) {
      setsearchFlightObject({
        destination, trip, departureDate, returnDate, passengerQuantity, ticketClass,
      });
      if (page !== 'listing') {
        navigate('/FlightListing');
        fun();
      } else {
        fun();
      }
    }
  };

  return (
    <div className={`w-full flex ${page === 'listing' ? "" : 'relative bottom-28'} justify-center`}>
      <div id="searchflight" className={`w-[85%] max-w-[1280px] ${page === 'listing' ? 'm-h-[120px] w-[88%] mb-4 mt-5' : ''} ${page === 'flightflow' ? 'w-[88%]' :''} bg-white pb-16 rounded-2xl`}>
        {page !== 'listing' && (
          <>
            <div className="flex items-center gap-1 p-6">
              <img src={airplaneblack} alt="airplane" className="h-6" />
              <h2 className="text-[16px] text-black font-semibold">Flights</h2>
            </div>
            <hr className="w-[84px] border-2 border-[#8DD3BB] ml-6" />
          </>
        )}

        <div className={`flex mt-4 ${page === 'listing' ? 'ml-4 gap-4 h-full items-center' : 'ml-6 gap-6'} flex-wrap`}>
          <fieldset className="w-[250px] h-[55px] text-sm border border-[#79747E] rounded px-4">
            <legend>From-to</legend>
            <div className="w-full mt-1 relative flex items-center">
              <select className="w-full h-full outline-none" value={destination} onChange={(e) => setdestination(e.target.value)}>
                <option value="">Select a route</option>
                {destinationFromto.map((route, index) => (
                  <option value={route} key={index}>{route}</option>
                ))}
              </select>
              <img src={arrow} alt="arrow" className="absolute h-5 bg-white right-0 z-0" />
            </div>
          </fieldset>

          <fieldset className="w-[180px] h-[55px] text-sm border border-[#79747E] rounded px-4">
            <legend>Trip</legend>
            <div className="w-full mt-1 relative flex items-center">
              <select className="w-full h-full outline-none" value={trip} onChange={(e) => settrip(e.target.value)}>
                <option value="return">Return</option>
                <option value="one-way">One Way</option>
              </select>
              <img src={drop} alt="drop" className="absolute right-0 bg-white" />
            </div>
          </fieldset>

          <fieldset className="w-[250px] h-[55px] text-sm border border-[#79747E] rounded px-4">
            <legend>Departure-Return</legend>
            <div className="w-[250px] mt-1 relative flex items-center">
              <input type="date" className="w-[44%]" value={departureDate} onChange={(e) => setdepartureDate(e.target.value)} />
              <h1>--</h1>
              {returnDateShowOrNot && (
                <input type="date" className="w-[44%]" value={returnDate} onChange={(e) => setreturnDate(e.target.value)} />
              )}
            </div>
          </fieldset>

          <fieldset className="w-[250px] h-[55px] text-sm border border-[#79747E] rounded px-4">
            <legend>Passenger-Class</legend>
            <div className="w-full mt-1 relative flex gap-3 items-center">
              <select className="w-[30%] h-full outline-none" value={passengerQuantity} onChange={(e) => setpassengerQuantity(e.target.value)}>
                {[...Array(6).keys()].map((_, i) => (
                  <option value={i + 1} key={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select className='outline-none' value={ticketClass} onChange={(e) => setticketClass(e.target.value)}>
                <option value="economy">Economy</option>
                <option value="Buisness">Buisness</option>
              </select>
            </div>
          </fieldset>

          {page === 'listing' && (
            <button onClick={handleFlightSearch} className="h-[44px] w-[52px] text-sm mt-2 flex items-center justify-center gap-2 text-[#112211] bg-[#8DD3BB] font-medium rounded">
              <img src={search} alt="search" className="h-5" />
            </button>
          )}
        </div>

        {error && <div className="text-red-500 text-sm mt-2 ml-6">{error}</div>}

        {page !== 'listing' && (
          <div className="flex justify-end m-auto h-[90px] p-6 mt-5">
            <button onClick={handleFlightSearch} className="w-[150px] h-12 text-sm flex items-center justify-center gap-2 text-[#112211] bg-[#8DD3BB] font-medium rounded">
              <img src={show} alt="show" />
              Show Results
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchFlight;
