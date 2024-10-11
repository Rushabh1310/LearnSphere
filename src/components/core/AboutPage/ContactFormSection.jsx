import React from 'react';
import ContactUsForm from '../../ContactPage/ContactUsForm';

const ContactFormSection = () => {
    return(
        <div className='w-[50%] text-richblack-300 p-7 lg:p-14 flex gap-3 flex-col justify-between items-center'>
            <h1 className='text-4xl leading-10 font-semibold text-richblack-5'>
                Get In Touch
            </h1>
            <p className=''>
                We'd love to here from you, Please fill out this form.
            </p>
            <div className='mt-7'>
                <ContactUsForm/>
            </div>
        </div>
    )
}

export default ContactFormSection