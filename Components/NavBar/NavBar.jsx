import React from 'react';
import Link from 'next/link';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div className="navbarContainer" data-testid="navbar-container">
      <Link href="/" data-testid="logo-link">
        <h3>
          <p>{'<'}</p>Silvina.Dev <p>{'/>'}</p>
        </h3>
      </Link>
      <ul className="List" data-testid="nav-menu">
        <li className="List_Item" data-testid="nav-item-about">
          <Link href="/#about" data-testid="nav-link-about">
            About
          </Link>
        </li>
        <li className="List_Item" data-testid="nav-item-projects">
          <Link href="/projects" data-testid="nav-link-projects">
            Projects
          </Link>
        </li>
        <li className="List_Item" data-testid="nav-item-qa">
          <Link href="/projects" data-testid="nav-link-qa">
            QA Automation
          </Link>
        </li>
        <li className="List_Item" data-testid="nav-item-skills">
          <Link href="/#skills" data-testid="nav-link-skills">
            Skills
          </Link>
        </li>
        <li className="List_Item" data-testid="nav-item-contact">
          <Link
            href="/contact"
            data-testid="nav-link-contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Talk
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
