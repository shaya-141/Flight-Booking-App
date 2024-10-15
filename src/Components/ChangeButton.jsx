import React from 'react'
import Edit from '../assets/logo-icon/Edit.png'
function ChangeButton() {
  return (
    <button className='border-[#8DD3BB] flex items-center justify-center gap-2 rounded border w-[140px] h-12'><img src={Edit} alt="" className='h-4' /> Change</button>
  )
}

export default ChangeButton