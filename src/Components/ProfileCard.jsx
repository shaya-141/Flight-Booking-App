import React from 'react'
import forward from '../assets/logo-icon/forward.png'
import profilepic from '../assets/banner/profilepic.png'
import user from '../assets/logo-icon/user.png'
import Logout from '../assets/logo-icon/Logout.png'
import { getAuth, signOut } from 'firebase/auth';
import { useAuthContext } from '../Context/Auth';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

function ProfileCard({ProfileCardDisplay,set}) {
    
  const Navigate = useNavigate()

    const handleSignout = () =>{
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
          toast.success('Signout Successfully')
          // set('hidden')
          Navigate('/')
        }).catch((error) => {
          // An error happened.
          toast.error(error.message)
        });
      }
    

  return (
    <div id='profileCard' className={`w-[320px] text-[#112211] ${ProfileCardDisplay} h-[300px] bg-white fixed right-5 p-8 top-24 z-[999] rounded-bl-[12px] rounded-br-[12px] gap-6 flex flex-col
    `}>
      <div className='w-full flex items-center  gap-4'>
          <img src={profilepic} className='h-14 ' alt="" />
          <div className='flex flex-col'>
            <h1 className='font-semibold text-[16px]'>John Doe.</h1>
            <p>online</p>
          </div>
      </div>

      <hr className='w-full border-[#112211] border opacity-[25%]' />
            <Link to={'/Profile'}>
            <div className='w-full cursor-pointer flex items-center justify-between'>
              <h1 className='font -medium flex items-center gap-2'><img src={user} className='h-4' alt="" /> My account</h1>
              <img src={forward} className='h-4' alt="" />
            </div>

            </Link>
            <div className='w-full cursor-pointer flex items-center justify-between'>
              <h1 onClick={handleSignout} className='font-medium  flex items-center gap-2'><img src={Logout} className='h-4' alt="" /> Logout</h1>
              <img src={forward} className='h-4' alt="" />
            </div>

    </div>
  )
}

export default ProfileCard