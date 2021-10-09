import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Components/Footer.module.css'

import logo from '../public/images/logo.svg';

function Footer() {
    return (
        <div className={`${styles.footer} flex flex-ai-s`}>

            <div className={`${styles.footer__logo}`}>
                <Image src={logo}  alt='logo'/>
            </div>
        

            <div className={`${styles.footer__links} flex flex-c`}>
                <h5> Product </h5>
                <Link href='/'>
                    <a>Overview</a>
                </Link>
                <Link href='/'>
                    <a>Pricing</a>
                </Link>
                <Link href='/'>
                    <a>Marketplace</a>
                </Link>
                <Link href='/'>
                    <a>Features</a>
                </Link>
                <Link href='/'>
                    <a>Integrations</a>
                </Link>
            </div>


            <div className={`${styles.footer__links} flex flex-c`}>
                <h5>Company</h5>
                <Link href='/'>
                    <a>
                        About
                    </a>
                </Link>
                <Link href='/'>
                    <a>
                        Team
                    </a>
                </Link>
                <Link href='/'>
                    <a>
                        Blog
                    </a>
                </Link>
                <Link href='/'>
                    <a>
                        Careers
                    </a>
                </Link>
            </div>


            <div className={`${styles.footer__links} flex flex-c`}>
                <h5>Connect</h5>
                <Link href='/'>
                    <a>Contact</a>
                </Link>
                <Link href='/'>
                    <a>Newsletter</a>
                </Link>
                <Link href='/'>
                    <a>LinkedIn</a>
                </Link>
            </div>
        </div>
    )
}

export default Footer
