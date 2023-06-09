import React from 'react'
import Link from 'next/link';


function Menu() {
    return (
        <div>
            <div className='gap-8 hidden sm:flex items-center text-lg tracking-tight text-slate-800'>
                <Link href="#services"><button className='font-normal hover:font-bold hover:text-slate-950'>Services</button></Link>
                <Link href="#location"><button className='font-normal hover:font-bold hover:text-slate-950'>Location</button></Link>
                <Link href="#aboutus"><button className='font-normal hover:font-bold hover:text-slate-950'>About Us</button></Link>

            </div>
        </div >
    )
}

export default Menu
