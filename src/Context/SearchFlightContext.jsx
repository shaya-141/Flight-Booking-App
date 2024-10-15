import {  createContext , useState ,useContext } from "react";

const FlightContext = createContext()

export const FlightProvider = ({children}) =>{
    const [destination, setdestination] = useState('karachi-lahore')
    const [trip, settrip] = useState('return')
    const [departureDate, setdepartureDate] = useState(null)
    const [returnDate, setreturnDate] = useState(null)
    const [passengerQuantity, setpassengerQuantity] = useState(1)
    const [ticketClass, setticketClass] = useState('economy')
    const [returnDateShowOrNot, setreturnDateShowOrNot] = useState(true)
    const [searchFlightObject, setsearchFlightObject] = useState(null)
    const [filterDataFromDb, setfilterDataFromDb] = useState([])
    const [copyfilterData, setcopyfilterData] = useState([])
    const [userViewDetails , setuserViewDetails] = useState({})
    const [userTicketBook, setuserTicketBook] = useState([])
    const [AirplaneSeatNumber, setAirplaneSeatNumber] = useState('')
    const [AirplaneSeatNumberPrice, setAirplaneSeatNumberPrice] = useState(0)
   

    return (
        <FlightContext.Provider
          value={{
            destination, setdestination,
            trip, settrip,
            departureDate, setdepartureDate,
            returnDate, setreturnDate,
            passengerQuantity, setpassengerQuantity,
            ticketClass, setticketClass,
            returnDateShowOrNot,
            setreturnDateShowOrNot,
            searchFlightObject,
            setsearchFlightObject,
            filterDataFromDb, setfilterDataFromDb,
            copyfilterData, setcopyfilterData,
            userViewDetails , setuserViewDetails,
            userTicketBook, setuserTicketBook,
            AirplaneSeatNumber, setAirplaneSeatNumber,
            AirplaneSeatNumberPrice, setAirplaneSeatNumberPrice,
           


          }}
        >
          {children}
        </FlightContext.Provider>
      );



}

export const useFlightContext = () => {
    return useContext(FlightContext);
  };