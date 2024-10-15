import React from 'react'
import group from '../assets/logo-icon/Group.png'
import LoginForm from '../Components/LoginForm'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <section id="formSignup" className='w-[95%]  text-[#112211] flex gap-10  m-auto mt-20 justify-center min-h-[700px]'>


            <div id='fullFormContainer' className='w-2/5 '>
            <Link to={'/'}>
                <img src={group} className='h-9 mt-5' alt="" />
            </Link>

                
                <div className='flex w-[85%] '>
                    <LoginForm></LoginForm>
                    {/* <p className='font-semibold w-[300px] text-center mt-6'>Already have an account? <span className='text-[#FF8682]'>Login</span></p> */}
                </div>
            </div>







            <div id="carousellogin" className='w-2/5 h-[600px] bg-black rounded-[30px]'>

            </div>








        </section>
    )
}

export default Login