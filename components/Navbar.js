import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'
 
const Navbar = () => {
    return (
        <>
       
        {/* <h1 >DEV.TO</h1>
        <nav>
           
            <ul> 
          
                <Link href='/'><a><li>Home</li></a></Link>
                <Link href='/about'><a><li>About</li></a></Link>
                <Link href='/blog'><a><li>Blog</li></a></Link>
                <Link href='/contact'><a><li>Contact</li></a></Link>
            </ul>
        </nav>
        </header> */}
         <header className={styles.header}> 
        <h1 className={styles.nav}>My Blog</h1>
        <nav>
            <ul>
            <Link href='/'><a><li>Home</li></a></Link>
                <Link href='/about'><a><li>About</li></a></Link>
                <Link href='/blog'><a><li>Blog</li></a></Link>
                <Link href='/contact'><a><li>Contact</li></a></Link>
            </ul>
        </nav>
    </header>
        </>
    )
}
 
export default Navbar