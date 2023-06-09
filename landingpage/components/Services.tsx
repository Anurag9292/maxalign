import React from 'react'

function Services() {
    return (
        <div className='mt-16 max-w-6xl mx-auto'>
            <h1 className="text-5xl text-center text-slate-800" id="services">Our Services</h1>
            <div className='flex mx-auto flex-col sm:flex-wrap sm:flex-row mt-20 gap-10 justify-between items-center'>

                <div className='bg-slate-300 h-96 w-80 flex flex-col items-center justify-center rounded-2xl overflow-hidden relative hover:scale-110 transition duration-200 ease-in-out'>
                    <img src="/ortho.png" alt="" className='object-cover w-full h-full' />
                    <div className='absolute bg-slate-400 z-10 h-10 w-full flex items-center justify-center bottom-0'>
                        <h1 className='text-lg absolute text-center mx-auto font-bold text-slate-800'>Orthodontics</h1>
                    </div>
                </div>

                <div className='bg-slate-300 h-96 w-80 flex flex-col items-center justify-center rounded-2xl overflow-hidden relative hover:scale-110 transition duration-200 ease-in-out'>
                    <img src="/whitening.png" alt="" className='object-cover w-full h-full' />
                    <div className='absolute bg-slate-400 z-10 h-10 w-full flex items-center justify-center bottom-0'>
                        <h1 className='text-lg absolute text-center mx-auto font-bold text-slate-800'>Teeth Whitening</h1>
                    </div>
                </div>

                <div className='bg-slate-300 h-96 w-80 flex flex-col items-center justify-center rounded-2xl overflow-hidden relative hover:scale-110 transition duration-200 ease-in-out'>
                    <img src="/cavity.png" alt="" className='object-cover w-full h-full' />
                    <div className='absolute bg-slate-400 z-10 h-10 w-full flex items-center justify-center bottom-0'>
                        <h1 className='text-lg absolute text-center mx-auto font-bold text-slate-800'>Cavity Treatment</h1>
                    </div>
                </div>

                <div className='bg-slate-300 h-96 w-80 flex flex-col items-center justify-center rounded-2xl overflow-hidden relative hover:scale-110 transition duration-200 ease-in-out'>
                    <img src="/implants.png" alt="" className='object-cover w-full h-full' />
                    <div className='absolute bg-slate-400 z-10 h-10 w-full flex items-center justify-center bottom-0'>
                        <h1 className='text-lg absolute text-center mx-auto font-bold text-slate-800'> Dental Implants</h1>
                    </div>
                </div>

                <div className='bg-slate-300 h-96 w-80 flex flex-col items-center justify-center rounded-2xl overflow-hidden relative hover:scale-110 transition duration-200 ease-in-out'>
                    <img src="/aligners.png" alt="" className='object-cover w-full h-full' />
                    <div className='absolute bg-slate-400 z-10 h-10 w-full flex items-center justify-center bottom-0'>
                        <h1 className='text-lg absolute text-center mx-auto font-bold text-slate-800'>Aesthetic Aligners</h1>
                    </div>
                </div>

                <div className='bg-slate-300 h-96 w-80 flex flex-col items-center justify-center rounded-2xl overflow-hidden relative hover:scale-110 transition duration-200 ease-in-out'>
                    <img src="/gum.png" alt="" className='object-cover w-full h-full' />
                    <div className='absolute bg-slate-400 z-10 h-10 w-full flex items-center justify-center bottom-0'>
                        <h1 className='text-lg absolute text-center mx-auto font-bold text-slate-800'>Gum Problems</h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Services
