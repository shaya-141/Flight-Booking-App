import React, { useState } from 'react'
import FlightFlowNavbar from '../Components/FlightFlowNavbar'
import UploadCoverPhoto from '../Components/UploadCoverPhoto'
import ProfilMidbar from '../Components/ProfilMidbar'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'
import AccountProfileDetail from '../Components/AccountProfileDetail'
import HistoryProfileDetail from '../Components/HistoryProfileDetail'
import { useAuthContext } from '../Context/Auth'
function Profile() {
  const {GetUser, setGetUser} = useAuthContext()

  const [AccountDisplay, setAccountDisplay] = useState('block')
  const [HistoryDisplay, setHistoryDisplay] = useState('hidden')

  const AccountDisplayFun = (e)=>{

      setHistoryDisplay('hidden')
      setAccountDisplay('block')
      
  }
  const HistoryDisplayFun = (e)=>{
      console.log('shayan',e.value);
      setAccountDisplay('hidden')
      setHistoryDisplay('block')
  }

  return (


    <>

      <FlightFlowNavbar></FlightFlowNavbar>
      <UploadCoverPhoto value={GetUser}></UploadCoverPhoto>
      <ProfilMidbar displayundeline1={AccountDisplay} displayundeline2={HistoryDisplay} fun={AccountDisplayFun} fun2={HistoryDisplayFun}></ProfilMidbar>
      <AccountProfileDetail data={GetUser} display={AccountDisplay}></AccountProfileDetail>
      <HistoryProfileDetail  display={HistoryDisplay}></HistoryProfileDetail>
      
      <Subscribe></Subscribe>
      <Footer></Footer>

    </>
  )
}

export default Profile