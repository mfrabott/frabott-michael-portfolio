import React from 'react';



export default function TopNav() {
    return (
        <div className="topnav">
        <p>Michael Frabott</p>
        <div id="myLinks">
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i className="fa fa-bars"></i>
        </a>
        </div>
    )
}