import React from 'react'

function TermsandConditions() {
  return (
    <div className='w-[90%] mt-10 p-1 m-auto'>
        <h1 className='text-[24px] font-semibold'>Terms and Conditions</h1>
        <div className='mt-10 p-1 flex flex-col gap-4'>
            <h1 className='text-[20px] font-medium'>Payments</h1>
            <p className='text-[14px] font-normal'>. If you are purchasing your ticket using a debit or credit card via the Website, we will process these payments via the automated secure common payment gateway which will be subject to fraud screening purposes. </p>
            <p className='text-[14px] font-normal'>.If you do not supply the correct card billing address and/or cardholder information, your booking will not be confirmed and the overall cost may increase. We reserve the right to cancel your booking if payment is declined for any reason or if you have supplied incorrect card information. If we become aware of, or is notified of, any fraud or illegal activity associated with the payment for the booking, the booking will be cancelled and you will be liable for all costs and expenses arising from such cancellation, without prejudice to any action that may be taken against us. </p>
            <p className='text-[14px] font-normal'>.Golobe may require the card holder to provide additional payment verification upon request by either submitting an online form or visiting the nearest Golobe office, or at the airport at the time of check-in. Golobe reserves the right to deny boarding or to collect a guarantee payment (in cash or from another credit card) if the card originally used for the purchase cannot be presented by the cardholder at check-in or when collecting the tickets, or in the case the original payment has been withheld or disputed by the card issuing bank. Credit card details are held in a secured environment and transferred through an internationally accepted system. </p>
        </div>

        <h1 className='text-[20px] mt-8 font-medium'>Contact Us</h1>
        <div className='p-1'>
            <p className='text-[14px] font-normal'>If you have any questions about our Website or our Terms of Use, please contact:</p>
            <p className='text-[14px] font-normal'>Golobe Group Q.C.S.C</p>
            <p className='text-[14px] font-normal'>Golobe Tower</p>
            <p className='text-[14px] font-normal'>P.O. Box: 22550</p>
            <p className='text-[14px] font-normal'>Doha, State of Qatar</p>
        </div>
    </div>
  )
}

export default TermsandConditions