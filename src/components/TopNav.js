import React from 'react';


export default function TopNav( {handlePageChange} ) {
  
  

    function displayMenu() {
        var myLinksEl = document.getElementById("myLinks");
        console.log("test")
        if (myLinksEl.style.display === "block") {
          myLinksEl.style.display = "none";
        } else {
          myLinksEl.style.display = "block";
        }
      }

     function clickLink(page) {
      handlePageChange(page)
      displayMenu()
     } 

    return (
        <div className="topnav">
        <div id="myLinks">
            <a href="#about" onClick={() => clickLink('About')}>About</a>
            <a href="#portfolio" 
            onClick={() => clickLink('Portfolio')}>Portfolio</a>
            <a href="#contact" onClick={() => clickLink('Contact')}>Contact</a>
            <a href="#resume" onClick={() => clickLink('Resume')} >Resume</a>
        </div>
        <button className="icon" onClick={displayMenu}>
            <i className="fa fa-bars"></i>
        </button>
        </div>
    )
}