import React from 'react'

function AccountText({title,value}) {
    return (
        <div className='flex gap-0 text-[#112211]  flex-col '>
            <p className='font-medium opacity-[45%]'>{title}</p>
            <h1 className='font-medium text-[18px]'>{value}</h1>
        </div>
    )
}

export default AccountText