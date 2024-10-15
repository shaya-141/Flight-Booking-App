import React from 'react'

import ChangeButton from './ChangeButton'
import AccountText from './AccountText'

function AccountProfileDetail({display,data}) {
  console.log('data',data);
  
  return (

    <div className={`w-[90%] ${display} text-[#112211] m-auto mt-10`}>
        <h1 className='text-[#000000] text-[32px] font-bold'>Account</h1>

        <div id='AccountDetail' className='w-full  mt-4 py-8 px-6'>

            <div className='w-full flex justify-between min-h-[52px]'>
                   <AccountText title={'Name'} value={data?.firstName + ' ' + data?.lastName}></AccountText>
                  <ChangeButton></ChangeButton>

            </div>

            <div className='w-full mt-7 flex justify-between min-h-[52px]'>
                   <AccountText title={'Email'} value={data?.Email}></AccountText>
                  <ChangeButton></ChangeButton>

            </div>

            <div className='w-full mt-7 flex justify-between min-h-[52px]'>
                   <AccountText title={'Password'} value={data?.Password}></AccountText>
                  <ChangeButton></ChangeButton>

            </div>

            <div className='w-full mt-7 flex justify-between min-h-[52px]'>
                   <AccountText title={'Phone number'} value={data?.phoneNumber}></AccountText>
                  <ChangeButton></ChangeButton>

            </div>

        </div>

    </div>
  )
}

export default AccountProfileDetail