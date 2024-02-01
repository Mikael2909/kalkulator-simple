"use client"
import { Button, Navbar } from 'flowbite-react';
const NavbarComp = () => {
  return (
    <div>
     <Navbar fluid rounded>
      <Navbar.Brand href="#">
        
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Kalkulator Simple</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
       
        <Navbar.Link href="/kadar-klorin">Menghitung Kadar Klorin</Navbar.Link>
        <Navbar.Link href="#">Menghitung Kadar Air</Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default NavbarComp
