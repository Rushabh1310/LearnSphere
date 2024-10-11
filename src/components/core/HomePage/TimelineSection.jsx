import React from 'react';
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeline = [
    {
        Logo:Logo1,
        heading:"Leadership",
        Description:"Fully committed to the success company"
    },
    {
        Logo:Logo2,
        heading:"Responsibility",
        Description:"Students will always be our top priority"
    },
    {
        Logo:Logo3,
        heading:"Flexibility",
        Description:"The ability to switch is an important skills"
    },
    {
        Logo:Logo4,
        heading:"Solve the Problem",
        Description:"Code your way to a solution"
    },
]
const TimelineSection = () => {
    return(
        <div>
            <div className='flex flex-row items-center gap-15'>

                <div className='w-[45%] flex flex-col gap-y-20'>
                    {
                        timeline.map((element,index)=>{
                            return(
                                <div className='flex flex-row gap-6' key={index}>
                                    <div className='w-[50px] h-[50px] bg-white flex items-center'>
                                        <img src={element.Logo}/>
                                    </div>
                                    <div>
                                        <h2 className='font-semibold text-[20px]'>{element.heading}</h2>
                                        <p className='text-base'>{element.Description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='relative shadow-[10px_-5px_50px_-5px] shadow-blue-200'>
                    <img src={timelineImage}
                    alt='timelineImage'
                    className='shadow-white object-cover h-fit shadow-[20px_20px_rgba(255,255,255)]'/>

                    <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7 w-[80%]
                                    left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <div className='flex flex-row gap-5 px-5 items-center border-r border-caribbeangreen-300'>
                            <p className='text-3xl font-bold'>10</p>
                            <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
                        </div>

                        <div className='flex gap-5 items-center px-5'>
                            <p className='text-3xl font-bold'>250</p>
                            <p className='text-caribbeangreen-300 text-sm'>Types of Courses</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimelineSection