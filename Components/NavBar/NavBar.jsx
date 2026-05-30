import React from 'react';
import Link from 'next/link';
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbarContainer">
        <Link href="/"><h3><p>{"<"}</p>Silvina.Dev <p>{"/>"}</p></h3></Link>
        <ul className='List'>
          <li className='List_Item'><a href="/#about">About</a></li>
          <li className='List_Item'><a href="/projects">Projects</a></li>
          <li className='List_Item'><a href="/projects">QA Automation</a></li>
          <li className='List_Item'><a href="/#skills">Skills</a></li>
          <li className='List_Item'><a href="https://wa.me/5491163632288" target="_blank" rel="noopener noreferrer">Let's Talk</a></li>
        </ul>
    </div>
  )
}

export default NavBar