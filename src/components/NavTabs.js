import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className='container-fluid'>
      <ul className=" row nav nav-pills">
        <li className="col-lg-3  col-md-2 nav-item text-nowrap">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active active-tab' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="col-lg-3 col-md-2  nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active active-tab' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="col-lg-3 col-md-2 nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active active-tab' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="col-lg-3  col-md-2 nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active active-tab' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
