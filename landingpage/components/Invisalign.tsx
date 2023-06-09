import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Invisalign() {
    return (
        <div className='border-b-2 border-slate-300  min-w-full flex-col'>
            <div className='p-4 flex items-center gap-2 w-full justify-end max-w-6xl mx-auto'>
                <Image
                    src="invisalign.svg" // Path to your image file relative to the 'public' directory
                    alt="Invisalign"
                    width={120} // The width of the displayed image (in pixels)
                    height={50}
                />
                <h1 className='tracking-tighter text-md text-slate-800'> We are certified Invisalign Provider</h1>


                <Link href="https://www.invisalign.in/" className="place-self-start hover:border-2">

                    <Image
                        src="arrow-up.svg" // Path to your image file relative to the 'public' directory
                        alt="arrow"
                        width={15} // The width of the displayed image (in pixels)
                        height={50}

                    />

                </Link>



            </div>


            <div className='h-20 md:h-10 bg-slate-200 text-center flex items-center justify-center font-bold'>
                <h1 className='text-cyan-700'>Call Us at +91-9321533345 to book your appointment.</h1>
            </div>




        </div>
    )
}

export default Invisalign
