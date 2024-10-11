import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../services/operations/authAPI';
import { useLocation } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const UpdatePassword = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const[formData, setFormData] = useState({
        password:"",
        confirmPassword:"",
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {loading} = useSelector((state)=>state.auth);

    const{password,confirmPassword} = formData;

    const handleOnChange = (e) => {
        setFormData((prevData)=>(
            {
                ...prevData,
                [e.target.name] : e.target.value,
            }
        ))
    }

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(password,confirmPassword,token));
    }
    return(
        <div className='mt-28'>
            {
                loading ? 
                (<div>Loading...</div>)
                :(<div className='w-full flex flex-col items-center h-full gap-y-6'>
                    <h1 className='text-white font-bold text-4xl w-[40%]'>Choose new Password</h1>
                    <p className='text-md w-[40%] text-richblack-200'>Almost Done. Enter your new password and you're all set!</p>
                    <form onSubmit={handleOnSubmit} className='flex flex-col'>
                        <label>
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-100">
                            New Password<sup className="text-pink-200">*</sup>
                        </p>
                            <input
                            required
                            type={showPassword?"text":"password"}
                            name='password'
                            value={password}
                            placeholder='Password'
                            onChange={handleOnChange}
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                              }}
                              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"/>
                            <span
                            onClick={(prev)=>setShowPassword((prev)!=prev)}>
                                {
                                    showPassword ? 
                                    (<AiFillEyeInvisible fontSize={24}/>):(<AiFillEye fontSize={24}/>)
                                }
                            </span>
                        </label>

                        <label>
                            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-100">
                            Confirm Password<sup className="text-pink-200">*</sup>
                            </p>
                            <input
                            required
                            type={showConfirmPassword?"text":"password"}
                            name='confirmPassword'
                            value={confirmPassword}
                            placeholder='Confirm Password'
                            onChange={handleOnChange}
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                              }}
                              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"/>
                            <span
                            onClick={(prev)=>setShowConfirmPassword((prev)!=prev)}>
                                {
                                    showConfirmPassword ? 
                                    (<AiFillEyeInvisible fontSize={24}/>):(<AiFillEye fontSize={24}/>)
                                }
                            </span>
                        </label>

                        <button type='submit' className='w-full text-center text-[16px] px-6 py-3 rounded-md font-bold
                         bg-yellow-50 text-black hover:scale-95 transition-all duration-200'>
                            Reset Password
                        </button>

                        <div className='w-[40%]'>
                        <Link to='/login' className='flex items-center gap-3 text-white'>
                            <FaArrowLeft/>
                            <p>Back to Login</p>
                        </Link>
                        </div>
                    </form>
                </div>)
            }
        </div>
    )
}

export default UpdatePassword