import React from 'react'
import Image from 'next/image'

function Hero() {
    return (
        <div className='h-[60vh] mt-10 mx-auto relative flex items-center'>
            <div className='flex justify-around max-w-6xl mx-auto'>

                <div className='text-7xl font-black text-center bg-slate-200 bg-clip-text text-transparent mx-auto'>
                    <h1>Crafting beautiful smiles, <br /> one patient  <br />at a time</h1>
                </div>


                <div className=" ">
                    <Image src="/dental1.png" alt="Your alt text" width={500}
                        height={300} className="w-screen h-full object-cover absolute top-0  left-0 -z-20" />
                    <div className="absolute w-full h-full bg-black opacity-50 top-0  left-0 -z-10"></div>
                </div>


            </div>



        </div>
    )
}

export default Hero
