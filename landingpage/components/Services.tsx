import React from 'react'
import Image from 'next/image'

function Services() {
    return (
        <div className='mt-16 max-w-6xl mx-auto'>
            <h1 className="text-5xl text-center text-slate-800" id="services">Our Services</h1>
            <div className='flex mx-auto flex-col sm:flex-wrap sm:flex-row mt-20 gap-10 justify-between items-center'>

                <div className='bg-slate-300 h-96 w-80 flex flex-col items-center justify-center rounded-2xl overflow-hidden relative hover:scale-110 transition duration-200 ease-in-out'>
                    <Image src="/ortho.png" alt="ortho" width={500}
                        height={300} className='object-cover w-full h-full' />
                    <div className='absolute bg-slate-400 z-10 h-10 w-full flex items-center justify-center bottom-0'>
                        <h1 className='text-lg absolute text-center mx-auto font-bold text-slate-800'>Orthodontics</h1>
                    </div>
                </div>

                <div className='bg-slate-300 h-96 w-80 flex flex-col items-center justify-center rounded-2xl overflow-hidden relative hover:scale-110 transition duration-200 ease-in-out'>
                    <Image src="/whitening.png" alt="whitening" width={500}
                        height={300} className='object-cover w-full h-full' />
                    <div className='absolute bg-slate-400 z-10 h-10 w-full flex items-center justify-center bottom-0'>
                        <h1 className='text-lg absolute text-center mx-auto font-bold text-slate-800'>Teeth Whitening</h1>
                    </div>
                </div>

                <div className='bg-slate-300 h-96 w-80 flex flex-col items-center justify-center rounded-2xl overflow-hidden relative hover:scale-110 transition duration-200 ease-in-out'>
                    <Image src="/cavity.png" alt="cavity" width={500}
                        height={300} className='object-cover w-full h-full' />
                    <div className='absolute bg-slate-400 z-10 h-10 w-full flex items-center justify-center bottom-0'>
                        <h1 className='text-lg absolute text-center mx-auto font-bold text-slate-800'>Cavity Treatment</h1>
                    </div>
                </div>

                <div className='bg-slate-300 h-96 w-80 flex flex-col items-center justify-center rounded-2xl overflow-hidden relative hover:scale-110 transition duration-200 ease-in-out'>
                    <Image src="/implants.png" alt="implants" width={500}
                        height={300} className='object-cover w-full h-full' />
                    <div className='absolute bg-slate-400 z-10 h-10 w-full flex items-center justify-center bottom-0'>
                        <h1 className='text-lg absolute text-center mx-auto font-bold text-slate-800'> Dental Implants</h1>
                    </div>
                </div>

                <div className='bg-slate-300 h-96 w-80 flex flex-col items-center justify-center rounded-2xl overflow-hidden relative hover:scale-110 transition duration-200 ease-in-out'>
                    <Image src="/aligners.png" alt="aligners" width={500}
                        height={300} className='object-cover w-full h-full' />
                    <div className='absolute bg-slate-400 z-10 h-10 w-full flex items-center justify-center bottom-0'>
                        <h1 className='text-lg absolute text-center mx-auto font-bold text-slate-800'>Aesthetic Aligners</h1>
                    </div>
                </div>

                <div className='bg-slate-300 h-96 w-80 flex flex-col items-center justify-center rounded-2xl overflow-hidden relative hover:scale-110 transition duration-200 ease-in-out'>
                    <Image src="/gum.png" alt="gums" width={500}
                        height={300} className='object-cover w-full h-full' />
                    <div className='absolute bg-slate-400 z-10 h-10 w-full flex items-center justify-center bottom-0'>
                        <h1 className='text-lg absolute text-center mx-auto font-bold text-slate-800'>Gum Problems</h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Services
