'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const pathName = usePathname()

     const links =[
        {
            title:'Home',
            path:'/'
        },
        {
            title:'About',
            path:'/about'
        },
        {
            title:'Service',
            path:'/service'
        },
        {
            title:'Blog',
            path:'/blog'
        },
        ,
        {
            title:'Post',
            path:'/post'
        },
        {
            title:'Meals',
            path:'/meals'
        },
        {
            title:'Dashboard',
            path:'/dashboard'
        }
     ]

     if(pathName.includes('dashboard'))
        return <div> <h1 className=' text-4xl font-bold mt-3 text-center' > dashboard Page </h1> </div> 


    return (
        <div className=' flex items-center justify-around  space-x-4  ' >
            
                <h1 className=' text-red-700  text-3xl py-3 ' > Next Hero </h1>
         
             
             <ul className=' flex items-center  gap-5' >
             {
                links.map((link)=> <Link className={`${pathName === link.path && 'text-red-600'}`} key={link.path} href={link.path} > {link.title} </Link> )
             }
             </ul>

             <Link href={'/login'} > <button className=' font-semibold ' > Login </button> </Link>

        </div>
    );
};

export default Navbar;