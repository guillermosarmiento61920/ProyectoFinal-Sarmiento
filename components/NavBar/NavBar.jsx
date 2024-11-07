import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./navBar.css"

const NavBar = () => {
    return (
        <div className='flex'>
            <h3>HomePage</h3>
            <img src="./src/assets/favicon.ico" alt="" />
            <CartWidget/>
        </div>
    )
}

export default NavBar