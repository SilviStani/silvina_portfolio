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
          <a href="/#about" data-testid="nav-link-about">
            About
          </a>
        </li>
        <li className="List_Item" data-testid="nav-item-projects">
          <a href="/projects" data-testid="nav-link-projects">
            Projects
          </a>
        </li>
        <li className="List_Item" data-testid="nav-item-qa">
          <a href="/projects" data-testid="nav-link-qa">
            QA Automation
          </a>
        </li>
        <li className="List_Item" data-testid="nav-item-skills">
          <a href="/#skills" data-testid="nav-link-skills">
            Skills
          </a>
        </li>
        <li className="List_Item" data-testid="nav-item-contact">
          <a
            href="/contact"
            data-testid="nav-link-contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Talk
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
