
import { createContext, useState, useContext } from "react";


const GetFlightsContext = createContext();

export const GetFlightsProvider = ({ children }) => {

    const [flightDetailsFromDB, setflightDetailsFromDB] = useState([])
    const [TripDetailsFromDB, setTripDetailsFromDB] = useState([])

    return(
        <GetFlightsContext.Provider value={{flightDetailsFromDB , setflightDetailsFromDB,TripDetailsFromDB, setTripDetailsFromDB}}>
            {children}
        </GetFlightsContext.Provider>
    )


}
export const useGetFlightsContext = ()=>{
   return useContext(GetFlightsContext)

}
