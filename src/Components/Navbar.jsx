import React, { useState } from 'react'
import airplane from "../assets/logo-icon/airplane.png";
import LOGO from "../assets/logo-icon/Group.png";
import { Link } from 'react-router-dom';
import { useAuthContext } from '../Context/Auth';
import bar from '../assets/logo-icon/bar.png'
import menu from '../assets/logo-icon/menu.png'
import blackheart from '../assets/logo-icon/blackheart.png'
import profilepic from '../assets/banner/profilepic.png'
import ProfileCard from './ProfileCard';
function Navbar() {
    const { IsLoggedin, setIsLoggedin, GetUser } = useAuthContext()
    const [ProfileCardDisplay, setProfileCardDisplay] = useState('hidden')

    const [Display, setDisplay] = useState('hidden')
  
    const handleMenu = () => {
      setDisplay(Display === 'hidden' ? 'flex' : 'hidden');
  
    }


    const handleProfileCard = () => {
        setProfileCardDisplay(ProfileCardDisplay === 'hidden' ? 'flex' : 'hidden')
    }
    return (
        <div className='w-[100%] h-[96px]'>
            <div className='flex items-center justify-between p-4 text-white'>
                <div id='NavbarChild' className='flex justify-between items-center w-[55%] '>

                    <Link to={'/FlightFlow'}>
                        <div className='flex gap-1 font-semibold text-[14px]'>
                            <img src={airplane} className='h-[20px]' alt="" /><h3 >Find Flight</ h3>
                        </div>
                    </Link>
                    <Link to={'/'}>
                        <div><img src={LOGO} alt="" className='h-[30px]' /></div>
                    </Link>
                </div>

                <div id='LogORSignOrProfile' className=''>

              
                {
                    !IsLoggedin
                        ?
                        <>
                            <div className='flex gap-[32px] items-center'>
                                <Link to={'/Login'}>
                                    <span className='text-[14px] text-white'>Login</span>
                                </Link>
                                <Link to={'Signup'}>
                                    <button className='bg-white border rounded-md font-semibold text-[14px] text-black w-[104px] h-[40px]'>Signup</button>
                                </Link>
                            </div>
                        </>
                        :
                        <>
                            <div className='flex  gap-[10px] items-center'>
                                <Link to={'/Favourites'}>
                                    <span className='text-[14px] font-semibold flex gap-3 items-center'><img src={blackheart} className='h-5' alt="" />Favourites
                                    </span>
                                </Link>
                                <img src={bar} alt="" />

                                <div className='flex items-center gap-3'>
                                    <img src={profilepic} onClick={handleProfileCard} className='rounded-[50%] cursor-pointer h-12' alt="" />
                                    <h1 className='text-[14px] font-semibold'>{GetUser?.firstName}</h1>
                                </div>
                            </div>
                        </>
                }
                  </div>

                <img src={menu} onClick={handleMenu} id='menuMan' alt="" className='h-7 cursor-pointer hidden' />



                <div id='menucard' className={`h-[150px] w-52 rounded-lg gap-2 fixed top-[84px] p-8 flex flex-col bg-white right-5 z-[9999] text-[#112211]  ${Display}`}>
                    {IsLoggedin
                        ?
                        <>
                            <Link to={'/Favourites'}>
                                <button className=' w-full h-[40px] flex text-[14px] items-center gap-4 justify-center'><img src={blackheart} alt="" />Favourites</button>
                            </Link>
                            <Link to={'/Profile'}>
                                <button className='w-full bg-[#8DD3BB] text-white rounded flex items-center gap-2  justify-center text-[14px] h-[40px]'><img src={profilepic} alt="" className='h-6' /> My Account</button>
                            </Link>
                        </>
                        :
                        <>
                            <Link to={'/Login'}>
                                <button className='w-full h-[40px] font-medium'>Login</button>
                            </Link>
                            <Link to={'/Signup'}>
                                <button className='w-full h-[40px]  text-white rounded bg-[#112211]'>Signup</button>
                            </Link>
                        </>
                    }

                </div>




                <ProfileCard ProfileCardDisplay={ProfileCardDisplay} set={setProfileCardDisplay}></ProfileCard>


            </div>
        </div>
    )
}

export default Navbar