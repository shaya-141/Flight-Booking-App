// import React, { useState } from 'react'
// import airplaneblack from "../assets/logo-icon/airplaneblack.png";
// import LOGO from "../assets/logo-icon/Group.png";
// import menu from "../assets/logo-icon/menu.png";
// import { Link } from 'react-router-dom';
// import bar from '../assets/logo-icon/bar.png'


// // import blackheart from '../assets/logo-icon/blackheart.png'

// import profilepic from '../assets/banner/profilepic.png'
// import blackheart from '../assets/logo-icon/blackheart.png'
// import { toast } from 'sonner';
// import { getAuth, signOut } from 'firebase/auth';
// import { useAuthContext } from '../Context/Auth';
// import ProfileCard from './ProfileCard';

// function FlightFlowNavbar() {
//   const [Display, setDisplay] = useState('hidden')
//   const [ProfileCardDisplay, setProfileCardDisplay] = useState('hidden')
//   const { IsLoggedin, setIsLoggedin, GetUser } = useAuthContext()

//   const handleMenu = () => {
//     setDisplay(Display === 'hidden' ? 'flex' : 'hidden');

//   }
//   const handleProfileCard = () => {
//     setProfileCardDisplay(ProfileCardDisplay === 'hidden' ? 'flex' : 'hidden')
//   }


//   return (
//     <nav id='FlightFlowNavbar' className='w-full h-[90px] flex items-center justify-between  '>
//       <div className='flex items-center  justify-between   w-[90%] m-auto'>
//         <div id='logoOrLink' className=' w-[55%] flex justify-between'>

//           <div className='flex gap-1 font-semibold text-[14px] relative cursor-pointer'>


//             <Link to={'/FlightFlow'} className='flex gap-1'>
//               <img src={airplaneblack} className='h-[20px]' alt="" /><h3 >Find Flight</h3>

//             </Link>

//             <hr className='w-[100px]  border-[#8DD3BB] border-2 absolute top-10' />
//           </div>

//           <div ><Link to={'/'}> <img src={LOGO} alt="" className='h-[30px]' /> </Link></div>
//         </div>

//         <div id='logsignbtn' className='flex  gap-[20px]  items-center'>

//           {
//             IsLoggedin ?
//               <>
//                 <Link to={'/Favourites'}>
//                   <span className='text-[14px] font-semibold flex gap-3 items-center'><img src={blackheart} className='h-5' alt="" />Favourites</span>
//                 </Link>
//                 <img src={bar} alt="" />
//                 <div className='flex items-center gap-3'>
//                   <img src={profilepic} onClick={handleProfileCard} className='rounded-[50%] cursor-pointer h-12' alt="" />
//                   <h1 className='text-[12px] font-semibold'>{GetUser?.firstName}</h1>
//                 </div>
//               </>
//               :
//               <>
//                 <Link to={'/Login'}>
//                   <span className='text-[14px] text-[#112211] font-semibold'>Login</span>
//                 </Link>
//                 <Link to={'/Signup'}>
//                   <button className='bg-[#112211] border rounded-md font-semibold text-[14px] text-white w-[104px] h-[48px]'>Signup</button>
//                 </Link>
//               </>

//           }

//         </div>


//         <img src={menu} onClick={handleMenu} id='menu' alt="" className='h-7 cursor-pointer' />



//         <div id='menucard' className={`h-[150px] w-52 rounded-lg gap-2 fixed top-[84px] p-8 flex flex-col bg-white right-5 z-[9999]  ${Display}`}>
//           {IsLoggedin
//             ?
//              <>
//              <Link to={'/Favourites'}>
//               <button className=' w-full h-[40px] flex text-[14px] items-center gap-4 justify-center'><img src={blackheart} alt="" />Favourites</button>
//              </Link>
//              <Link to={'/Profile'}>
//               <button className='w-full bg-[#8DD3BB] text-white rounded flex items-center gap-2  justify-center text-[14px] h-[40px]'><img src={profilepic} alt="" className='h-6' /> My Account</button>
//              </Link>
//             </>
//             :
//             <>
//             <Link to={'/Login'}>
//               <button className='w-full h-[40px] text-[#112211]'>Login</button>
//             </Link>
//             <Link to={'/Signup'}>
//               <button className='w-full h-[40px]  text-white rounded bg-[#112211]'>Signup</button>
//             </Link>
//             </>
//             }

//             </div>


//         <ProfileCard ProfileCardDisplay={ProfileCardDisplay}></ProfileCard>


//       </div>
//     </nav>
//   )
// }

// export default FlightFlowNavbar