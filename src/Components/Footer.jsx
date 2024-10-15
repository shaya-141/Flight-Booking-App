import React from 'react'
import footlogo from '../assets/logo-icon/footerlogo.png'
import facebook from '../assets/logo-icon/facebook.png'
import twitter from '../assets/logo-icon/twitter.png'
import insta from '../assets/logo-icon/insta.png'
import youtube from '../assets/logo-icon/youtube.png'
function Footer() {
    return (
        <div className='w-full min-h-[450px]   bg-[#8DD3BB]'>
            <div className='w-[100%] justify-center min-h-[200px] m-auto bg-[#8DD3BB]  flex gap-28 mt-10   flex-wrap  relative top-48'>
                <div>
                    <img src={footlogo} alt="" className='h-10' />
                    <span className='flex gap-3 mt-6'>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={youtube} alt="" />
                        <img src={insta} alt="" />
                    </span>
                </div>
                <div className='text-[#112211]'>
                    <h1 className=' font-bold text-base'>Our Destinations</h1>
                    <div className='flex flex-col gap-3 mt-4'>

                        <p>Canada</p>
                        <p>Alaksa</p>
                        <p>France</p>
                        <p>Iceland</p>
                    </div>
                </div>
              
                {/* <div className='text-[#112211]'>
                    <h1 className=' font-bold text-base'>Travel Blogs</h1>
                    <div className='flex flex-col gap-3 mt-4'>

                        <p>Bali Travel Guide</p>
                        <p>Sri Lanks Travel Guide</p>
                        <p>Peru Travel Guide</p>
                        <p>Bali Travel Guide</p>
                    </div>
                </div> */}
                <div className='text-[#112211]'>
                    <h1 className=' font-bold text-base'>About Us</h1>
                    <div className='flex flex-col gap-3 mt-4'>

                        <p>Our Story</p>
                        <p>Work with us</p>
                        
                    </div>
                </div>
                <div className='text-[#112211]'>
                    <h1 className=' font-bold text-base'>Contact Us</h1>
                    <div className='flex flex-col gap-3 mt-4'>

                        <p>Our Story</p>
                        <p>Work with us</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer