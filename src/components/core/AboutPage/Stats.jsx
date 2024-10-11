import React from 'react';

const Stat = [
    {count: "5K", label: "Active Students"},
    {count: "10+", label: "Mentors"},
    {count: "200+", label: "Courses"},
    {count: "50+", label: "Awards"},
];

const StatsComponent = () => {
    return(
        <section className='my-20'>
           <div className=''>
            <div className='bg-richblack-600 py-10 px-40 flex justify-between items-between'>
                {
                    Stat.map((data,index)=>{
                        return(
                            <div key={index} className='flex flex-col justify-center items-center'>
                                <h1 className='text-3xl font-bold text-white'>{data.count}</h1>
                                <h1 className='text-richblack-400 font-bold'>{data.label}</h1>
                            </div>
                        )
                    })
                }
            </div>
           </div>
        </section>
    )
}

export default StatsComponent