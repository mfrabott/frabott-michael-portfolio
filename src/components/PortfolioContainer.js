import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import NavTabs from './NavTabs';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // TODO: Add a comment describing the functionality of this method
  // conditionally render the componenet depending the current page
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='background-body'>
      <header>
        <Header />
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <main>
        {renderPage()}
        <Footer />
      </main>
    </div>
  );
}
