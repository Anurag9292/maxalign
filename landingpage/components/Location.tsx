import React from 'react'
import Image from 'next/image'

function Location() {
    return (
        <div className='max-w-6xl mx-auto mt-24'>
            <h1 className='text-5xl text-center text-slate-800' id="location">We are Located At</h1>

            <div className='flex  flex-col items-center justify-around mt-12 gap-11'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3018685761317!2d77.70358957593726!3d12.95252548736117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae135075e27577%3A0xcf30be6c865fa9ad!2sMaxAlign%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1685536530711!5m2!1sen!2sin"

                    height={450}
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='w-full'
                />
                <div className="flex items-center gap-4 max-w-xs">
                    <Image src="logo.png" alt="" width={50}
                        height={300} className='' />
                    <div className='flex-col'>
                        <h1 className='font-serif text-slate-800 text-3xl font-medium'>
                            MaxAlign Dental
                        </h1>
                        <h2 className='font-serif text-slate-700'> Anjanadri Krest, Munnekolala </h2>
                        <h2 className='font-serif text-slate-700'> Marathahalli, Bangalore 560037</h2>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Location
