import { useState } from 'react';
import logo from '../images/hospital-logo.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <Logo />
      <ul className={isOpen ? 'nav-list open' : 'nav-list close'}>
        <li className="nav-item">
          <a className="nav-link" href="1">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="2">
            Make an Appointment
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="3">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="4">
            Careers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="4">
            News
          </a>
        </li>
      </ul>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}

const logoStyle = {
  height: '9rem',
};

function Logo() {
  return (
    <div className="logo">
      <a href="#home">
        <img src={logo} style={logoStyle} alt="company logo"></img>
      </a>
    </div>
  );
}

function Hamburger({ isOpen, setIsOpen }) {
  return (
    <div
      id="hamburger"
      className="nav-hamburger"
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <span id="span1" className={isOpen ? 'open' : ''}></span>
      <span id="span2" className={isOpen ? 'open' : ''}></span>
      <span id="span3" className={isOpen ? 'open' : ''}></span>
    </div>
  );
}
