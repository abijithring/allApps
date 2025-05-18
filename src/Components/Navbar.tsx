import React from 'react'
import { Nav, NavMenu, NavLink } from './styles/NavbarElements';

const Navbar= ()=>{
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/allapps" >All Apps</NavLink>
                    <NavLink to="/bootstrap" >Bootstrap</NavLink>
                    <NavLink to="/contact" >Contact</NavLink>
                </NavMenu>                    
            </Nav>
        </>
    );
}
export default Navbar;
