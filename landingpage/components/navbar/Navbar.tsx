import React from 'react'
import Image from 'next/image';
import Menu from './Menu';


function Navbar() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className='flex p-4 items-center sm:max-w-full justify-around mx-auto'>

                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="logo" width={50}
                        height={300} className='' />
                    <div className='flex-col'>
                        <h1 className='font-serif text-slate-800 text-4xl font-medium'>
                            MaxAlign Dental
                        </h1>
                        <h2 className='font-serif text-slate-800'> Marathahalli, Bangalore</h2>
                    </div>
                </div>


                <Menu />

                {/* <div className='bg-gray-400 rounded-lg sm:ml-10 hover:bg-slate-500 transition delay-75 duration-300 hover:border-2 ease-in-out'>
                    <button className='py-3 px-4 text-white hover'>
                        Book Your Visit
                    </button>
                </div> */}



            </div>
        </div>
    )
}

export default Navbar
