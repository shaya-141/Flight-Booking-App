import React from 'react'

function PassengerDetail({key,value}) {
  return (
    <div className='w-[90%] mt-8 m-auto text-[#112211] '>
        <h1 className='text-[20px]  font-semibold '>Passenger Detail</h1>
        <div className='w-full flex items-center  mt-12 p-4 h-[50px] bg-white'>
            <div className='w-[200px] h-[50px]   bg-[]'>

              <h1 className=' rounded   text-[16px] font-medium cursor-pointer'>Passenger {value + 1}</h1>
            </div>
        </div>
        <form action="" className='p-4 mt-2 w-full  flex items-center justify-start gap-8 flex-wrap'>
         
        <fieldset className='border flex items-center border-[#79747E] w-[260px]  px-4 h-[60px] rounded'>
            <legend>Title</legend>
                <select name="" id="" className='border flex items-center border-[#79747E] w-[260px] border-none mb-5 p-2  h-[40px] mt-3 rounded outline-none'>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                </select>
        </fieldset>
           
            <fieldset className='border flex items-center border-[#79747E] w-[260px]  px-4 h-[60px] rounded'>
                <legend>Name</legend>
                <input type="text" required className='w-full h-full  outline-none' />
            </fieldset>

            <fieldset className='border flex items-center border-[#79747E] w-[260px]  px-4 h-[60px] rounded'>
                <legend>Nationality</legend>
                <select name="" id="" className='border flex items-center border-[#79747E] w-[260px] border-none mb-5 p-2  h-[40px] mt-3 rounded outline-none'>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Paris">Paris</option>
                    <option value="France">France</option>
                    <option value="Canada">Canada</option>
                </select>
            </fieldset>
            <fieldset className='border flex items-center border-[#79747E] w-[260px]  px-4 h-[60px] rounded'>
                <legend>Date of Birth</legend>
                <input type="date" required className='w-full h-full  outline-none' />
            </fieldset>
            <fieldset className='border flex items-center border-[#79747E] w-[260px]  px-4 h-[60px] rounded'>
                <legend>Email</legend>
                <input type="email" required className='w-full h-full  outline-none' />
            </fieldset>
            <fieldset className='border flex items-center border-[#79747E] w-[260px]  px-4 h-[60px] rounded'>
                <legend>phone no</legend>
                <input type="text" required className='w-full h-full  outline-none' />
            </fieldset>
            <div className='mt-3'>
            <div>

            <input type="submit" value="submit" className='w-[240px] h-[44px] font-semibold rounded bg-[#8DD3BB] cursor-pointer'  />
            </div>
            </div>
        </form>
        <div className='w-full flex justify-end  mt-16 '>

        <button className='w-[270px] h-[50px] bg-[#8DD3BB] rounded font-semibold'>Confirm Booking</button>
      </div>
      
    </div>
  )
}

export default PassengerDetail