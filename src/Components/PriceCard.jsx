import React, { useEffect, useState } from 'react'
import cardplane from '../assets/banner/cardplane.png'
import { useFlightContext } from '../Context/SearchFlightContext'
import { data } from 'autoprefixer'
function PriceCard({ value }) {
    const [Data, setData] = useState('')
    const [pricewithpassenger, setpricewithpassenger] = useState(0)
    const {passengerQuantity, setpassengerQuantity, AirplaneSeatNumber,AirplaneSeatNumberPrice} = useFlightContext()
    const [priceforClass, setPriceforClass] = useState(0)
    const [Tax, setTax] = useState(4000)
    const [Service, setService] = useState(1000)
    const [TotalFinalPrice, setTotalFinalPrice] = useState(0)
  
    useEffect(() => {
        // let seatprice = value?.seatprice
        // seatprice = seatprice ? seatprice : 0
        // console.log(seatprice);
        
        setData(value)
        console.log('data', data);
        if (value) {
            setData(value);
            let price = value.price;
            
            // Apply 40% increase for business class
            if (value.ticket_class === 'Buisness') {
                price += (value.price * 0.40);
            }
            setPriceforClass(price);
            if (value.type === 'return') {
                setpricewithpassenger((priceforClass * passengerQuantity) * 2)  
            }
            if (value.type != 'return') {
                setpricewithpassenger((priceforClass * passengerQuantity) )  
            }
           
                    
               // Calculate tax as 15% of the ticket price
            const calculatedTax = price * 0.15;
            setTax(calculatedTax);
            
            // Calculate final total price
            setTotalFinalPrice((price * passengerQuantity) + calculatedTax + Service + AirplaneSeatNumberPrice);
        }
    }, [value,priceforClass,Service])

    return (
        <div id='bookingchild2' className='w-[38%] text-[#112211] flex flex-col gap-4 rounded-2xl p-6 min-h-[460px] pb-5 '>
            <div className=' w-[100%] min-h-[100px] flex gap-4 h-[100px]'>
                <img src={cardplane} alt="" className='h-[100px] rounded-xl' />
                <div className='flex flex-col gap-1'>
                    <p className='text-[16px] font-medium opacity-[75%]'>{Data.ticket_class}</p>
                    <h2 className='text-[16px] font-semibold'>{Data.airline === 'Pakistan International Airlines'
                            ?
                            'PIA'
                            :
                            value.airline
                        } {Data?.flight_number} Airbus</h2>
                    <div className='flex items-center gap-3'>

                        <button className='border-[#8DD3BB]  w-[40px] h-10 border flex items-center justify-center font-medium rounded-[4px]'>{Data?.review}</button>
                        <span className='text-[12px] font-bold'>Very Good <span className='font-medium'>54 reviews</span></span>
                    </div>
                </div>
            </div>
            <hr className='border border-[#112211] w-full opacity-[5%]' />
            <p className='text-[16px]'>Your booking is protected by <span className='font-semibold'>golobe</span></p>
            <hr className='border border-[#112211] w-full opacity-[5%]' />

            <div className='w-full flex gap-4 flex-col'>
                <h2 className='text-[16px] font-bold'>Price Details</h2>
                <p className='text-[16px] flex justify-between font-medium'>{passengerQuantity} x Passenger  <span className='text-[16px] font-medium'>{ pricewithpassenger } rs</span></p>
                <p className='text-[16px] flex justify-between font-medium'>Discount  <span className='text-[16px] font-medium'>00 rs</span></p>
                <p className='text-[16px] flex justify-between font-medium'>Taxes  <span className='text-[16px] font-medium'>{Tax} rs</span></p>
                <p className='text-[16px] flex justify-between font-medium'>Service Fee <span className='text-[16px] font-medium'>{Service} rs</span></p>
                <p className='text-[16px] flex justify-between font-medium'>Seat Charges <span className='text-[16px] font-medium'>{AirplaneSeatNumberPrice} rs</span></p>
            </div>
            <hr className='border border-[#112211] w-full opacity-[5%]' />
            <p className='text-[16px] flex justify-between font-medium pb-4'>Total <span className='text-[16px] font-medium'>{TotalFinalPrice} rs</span></p>
        </div>
    )
}

export default PriceCard