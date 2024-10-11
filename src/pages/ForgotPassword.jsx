import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';
import { FaArrowLeft } from 'react-icons/fa';

const ForgotPassword = () => {

    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const {loading} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        dispatch(getPasswordResetToken(email,setEmailSent));
    }

    return(
        <div className='mt-28'>
            {
                loading ? 
                (<div>
                    Loading...
                </div>) 
                : (<div className='w-full flex flex-col items-center h-full gap-y-6'>
                    <h1 className='text-white font-bold text-4xl w-[40%]'>
                        {
                            !emailSent ? "Reset Your Password" : "Check Your Email"
                        }
                    </h1>

                    <p className='text-md w-[40%] text-richblack-200'>
                        {
                            !emailSent ? 
                            "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
                            :`We have sent the reset email to ${email}`
                        }
                    </p>

                    <form onSubmit={handleOnSubmit} 
                    className='flex flex-col gap-y-5 w-[40%]'>
                        {
                            !emailSent && (
                                <label>
                                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-100">
                                    Email Address<sup className="text-pink-200">*</sup>
                                    </p>
                                    <input
                                        required
                                        type='email'
                                        name='email'
                                        value={email}
                                        placeholder='Enter your email address'
                                        onChange={(e) => setEmail(e.target.value)}
                                        style={{
                                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                          }}
                                          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"/>
                                </label>
                            )
                        }

                        <button type='submit' className='w-full text-center text-[16px] px-6 py-3 rounded-md font-bold
                         bg-yellow-50 text-black hover:scale-95 transition-all duration-200'>
                            {
                                !emailSent ? "Reset Password" : "Resend Email"
                            }
                        </button>
                    
                    </form>

                    <div className='w-[40%]'>
                        <Link to='/login' className='flex items-center gap-3 text-white'>
                            <FaArrowLeft/>
                            Back to Login  
                        </Link>
                    </div>

                </div>)
            }
        </div>
    )
}
export default ForgotPassword