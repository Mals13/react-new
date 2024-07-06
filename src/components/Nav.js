import React from 'react'
import Logo from "../assets/output-onlinepngtools.png"


function Nav() {
    return (
        <div className='Nav'>
            <div className='Leftnav'>
                <img src={Logo} width={'100px'}></img>


            </div>
            <div className='Rightnav'>
                <div className='home'><a href='home.html'>HOME</a> </div>
                <div className='about'><a href='#'>ABOUT</a> </div>
                <div className='contact'><a href='#'>CONTACT US</a> </div>
            </div>
        </div>
    )
}

export default Nav