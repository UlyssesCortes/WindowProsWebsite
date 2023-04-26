import React from 'react'
import '../CSS/Navbar.css'
import HamburgerNav from './NavComponents/HamburgerNav';
import DeskNav from './NavComponents/DeskNav';

export default function Navbar({ expandResidential, setExpandResidential }) {

    return (
        <nav className='navBar' id='top'>
            <div className='leftNav'>
                <a className='title ' href="#">WindowPros</a>
            </div>

            <DeskNav {...{ expandResidential, setExpandResidential }} />
            <HamburgerNav {...{ expandResidential, setExpandResidential }} />

        </nav>
    )
}
