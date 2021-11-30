import React from 'react'
import Link from 'next/link'
import NavBar from './NavBar'
import styles from '../styles/components/Heroe.module.css'

const Heroe = () => {
    return (
        <div className={`${styles.heroe}`}>
            <NavBar />

            <div className={`${styles.heroe__text}`}>

                <h1> A modern publishing platform </h1>

                <p>Grow your audience and build your online brand</p>   

                <div className={`${styles.heroe__cta} flex flex-jc-c`}>
                    <Link href='/'><a className='cta' >Start for Free</a></Link>
                    <Link href='/'><a className='cta red' >Learn More</a></Link>
                </div>         
            </div>
        </div>
    )
}

export default Heroe


