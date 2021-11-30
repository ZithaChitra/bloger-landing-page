import React from 'react'
import Image from 'next/image'
import Link from 'next/link' 

import styles from '../styles/components/Navbar.module.css'
import logo from '../public/images/logo.svg'


const NavBar = () => {
    return (
        <div className={`${styles.nav} flex flex-jc-sb`}>
            <div className='flex flex-ai-c'>
                <div className={`${styles.nav__logo} img`}>
                    <Image src={logo} alt='' layout='fill'/>
                </div>

                <div className={`${styles.nav__links} hide-for-tablet`}>
                    <Link href='/'><a>Product</a></Link>
                    <Link href='/'><a>Company</a></Link>
                    <Link href='/'><a>Connect</a></Link>
                </div>
            </div>


            <div className={`${styles.nav__cta} hide-for-tablet flex flex-ai-c`}>
                <Link href='/'><a className=''>Login</a></Link>
                <Link href='/'><a className='cta'>Sign Up</a></Link>
            </div>


            <div className='hide-for-desktop flex flex-ai-c'>
                <div className={`${styles.nav__toggle}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
                
            
        </div>
    )
}

export default NavBar
