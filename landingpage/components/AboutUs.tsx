import React from 'react'

function AboutUs() {
    return (
        <div className='mt-20 max-w-6xl mx-auto mb-10' id="aboutus">
            <h1 className='text-5xl text-center text-slate-800'>About Us</h1>


            <div className='mt-10 flex flex-col sm:flex-row max-w-4xl mx-auto justify-around items-center'>
                <div className='relative'>
                    <img src="/ayushi.jpg" alt="" className='object-cover  max-w-xs mx-auto rounded-md hover:scale-110 transition duration-200 ease-in-out' />

                </div>
                <div className='flex flex-col'>
                    <h2 className='p-4 italic text-center text-xl tracking-tighter font-extralight text-slate-700'> "Our mission is to fix smiles and restore confidence. Through our expertise in dental care, we strive to enhance oral health, provide effective treatments, and create beautiful smiles."</h2>
                    <div className='p-4 text-center'>
                        <h1>Dr. Ayushi Verma</h1>
                        <h2>B.D.S. , M.D.S. </h2>
                        <h2>Orthodontics and Dentofacial Orthopaedics</h2>
                        <h2>(Certified Invisalign Provider)</h2>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs
