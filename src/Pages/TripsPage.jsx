import React, { useEffect, useState } from 'react'
import FlightFlowNavbar from '../Components/FlightFlowNavbar';
import FlightDetainName from '../Components/FlightDetailName';
import TripDetailName from '../Components/TripDetailName';
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'
import TripDetailBanner from '../Components/TripDetailBanner';
import Featureimg from '../Components/Featureimg';
import FeatureTripImage from '../Components/FeatureTripImage';
import TripMainAttractions from '../Components/TripMainAttractions';
function TripsPage() {
    const [GetTripFormLocalStorage, setGetTripFormLocalStorage] = useState(null)
    // const [TripLocalStorage, setTripLocalStorage] = useState('')
    useEffect(() => {
        const data = localStorage.getItem('userViewTripDetail')
        setGetTripFormLocalStorage(JSON.parse(data))
        // console.log(JSON.parse(data));
        
        // console.log('GetTripFormLocalStorage',data);
        
        
    }, [])

    


    return (
        <>
            <FlightFlowNavbar></FlightFlowNavbar>
            <TripDetailName value={GetTripFormLocalStorage}></TripDetailName>
            <TripDetailBanner value={GetTripFormLocalStorage}></TripDetailBanner>
            <FeatureTripImage></FeatureTripImage>
            <section className=' bg-[#8DD3BB99] rounded-lg  text-[#112211] flex flex-col gap-4 p-4 w-[90%] m-auto mt-10 min-h-[105px] flex-wrap'>
            <div>
                <h1 className='text-[22px] font-bold'>Activites</h1>
            </div>
            <div className='flex items-center flex-wrap gap-10'>
                <div className='flex items-center gap-4'>
                <p className='text-[16px]  font-medium opacity-[75%]' >- {GetTripFormLocalStorage?.activities[0].name}</p>
                <p className='text-[16px]  font-medium opacity-[75%]' >- {GetTripFormLocalStorage?.activities[1].name}</p>
                <p className='text-[16px]  font-medium opacity-[75%]' >- {GetTripFormLocalStorage?.activities[2].name}</p>
                </div>
                
            </div>
            </section>
            <TripMainAttractions value={GetTripFormLocalStorage}></TripMainAttractions>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </>
    )
}

export default TripsPage