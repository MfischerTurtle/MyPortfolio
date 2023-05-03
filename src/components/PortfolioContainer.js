import React, { useState } from 'react';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './pages/Header'
import Footer from './pages/Footer';
import SplashPage from './pages/SplashPage';
import '../../src/style.css'


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('SplashPage');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'SplashPage') {
      return <SplashPage />;
    } 
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>
    {renderPage()}
    <Footer></Footer>
      
    </div>
  );
}
