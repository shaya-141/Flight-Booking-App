import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { collection, doc, setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

function SignupForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [loading, setloading] = useState(false)
    const Navigate = useNavigate()

    const handleSignupForm = async (e) => {
        e.preventDefault(); // Prevent page reload
    
        // Basic form validation
        if (Password !== confirmPassword) {
          toast.error("Passwords do not match.");
          return;
        }
    
        if (Password.length < 8) {
          toast.error("Password must be at least 8 characters long.");
          return;
        }
    
        try {
         setloading(true)
          const auth = getAuth();
          const userCredential = await createUserWithEmailAndPassword(auth, Email, Password);
          const user = userCredential.user;
    
          // Create user object for Firestore
          const userRef = doc(db, "Users", user.uid);
          const userData = { firstName, lastName, Password,confirmPassword, Email, phoneNumber };
    
          await setDoc(userRef, userData); // Store user data in Firestore
          toast.success("User registered successfully!");
            setloading(false)
          // Reset form fields after successful registration
          setFirstName("");
          setlastName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setphoneNumber("");
    
          Navigate("/Login"); // Navigate to home page
        } catch (error) {
          console.error("Signup Error:", error);
          toast.error(error.message); // Display relevant error message to the user
        setloading(false)
        }
      };

    return (
        <form action="" onSubmit={handleSignupForm}>
            <div className='mt-10'>
                <h1 className='text-[36px] font-bold text-[#000000]'>Sign up</h1>
                <p className='font-normal mt-3'>Let’s get you all st up so you can access your personal account.</p>
            </div>
            <div id='insideSignup' className='flex  gap-4 mt-4 w-full flex-wrap'>
                <fieldset className='w-[300px] h-[60px] relative flex items-center border px-5 rounded border-[#79747E]'>
                    <legend>First Name</legend>
                    <input type="text" value={firstName} required onChange={(e) => {
                        setFirstName(e.target.value)


                    }} className=' w-full absolute bottom-0 font-medium bg-transparent h-[45px] outline-none ' />

                </fieldset>

                <fieldset className=' w-[300px] h-[60px] relative flex items-center border px-5 rounded border-[#79747E]'>
                    <legend>Last Name</legend>
                    <input type="text" value={lastName} required onChange={(e) => {
                        setlastName(e.target.value)


                    }} className='w-full bg-transparent  absolute bottom-0 font-medium h-[45px] outline-none ' />

                </fieldset>

                <fieldset className=' w-[300px] h-[60px] relative flex items-center border px-5 rounded border-[#79747E]'>
                    <legend>Email</legend>
                    <input type="email" value={Email} required onChange={(e) => {
                        setEmail(e.target.value)


                    }} className='w-full bg-transparent absolute bottom-0 font-medium  h-[45px] outline-none ' />

                </fieldset>

                <fieldset className=' w-[300px] h-[60px] relative flex items-center border px-5 rounded border-[#79747E]'>
                    <legend>Phone Number</legend>
                    <input type="text" value={phoneNumber} required onChange={(e) => {
                        setphoneNumber(e.target.value)


                    }} className='w-full bg-transparent absolute bottom-0 font-medium  h-[45px] outline-none ' />

                </fieldset>


                <fieldset className=' w-[300px] h-[60px] relative flex items-center border px-5 rounded border-[#79747E]'>
                    <legend>Password</legend>
                    <input type="text" value={Password} required onChange={(e) => {
                        setPassword(e.target.value)


                    }} className='w-full bg-transparent absolute bottom-0 font-medium  h-[45px] outline-none ' />

                </fieldset>


                <fieldset className=' w-[300px] h-[60px] relative flex items-center border px-5 rounded border-[#79747E]'>
                    <legend>Confirm Password</legend>
                    <input type="text" value={confirmPassword}  required onChange={(e) => {
                        setConfirmPassword(e.target.value)


                    }} className=' w-full bg-transparent absolute bottom-0 font-medium h-[45px] outline-none ' />

                </fieldset>

                <input type="submit" id='signupsubmit' value={loading ? 'Sign in...' : 'Create Account'} className='h-[50px] cursor-pointer rounded mt-5 w-[600px] bg-[#8DD3BB] font-semibold' />
            </div>
        </form>

    )
}

export default SignupForm