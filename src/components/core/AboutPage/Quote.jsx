import React from 'react';
import HighlightText from '../HomePage/HighlightText';

const Quote = () => {
    return(
        <div className='text-4xl font-bold'>
            We are passionate about revolutionalizing the way we learn. Our innovative platform
            <HighlightText text={" Combines technology,"}/>
            <span className='font-bold bg-gradient-to-b from-[#ff711f] via-[#fa6f12]
         to-[#ffc1a6] text-transparent bg-clip-text'>
                {" "}expertise{" "}
            </span>
            ,and community to create an
            <span className='font-bold bg-gradient-to-b from-[#ff881f] via-[#fab012]
         to-[#ffdba6] text-transparent bg-clip-text'>
                {" "}unparalleled educational experience.
            </span>
        </div>
    )
}

export default Quote