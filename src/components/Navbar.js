import React from "react";
import '../components/style/navbar.css';

const Navbar = ({ scrollSkills, scrollAbout, scrollProjects, scrollContact}) => {


  return (


    <div className="header">

      <div className="navName">
        <p className="name">Patrick Johnson</p>
      </div>
      <div className="navButtons">
        <button className="button" onClick={scrollAbout}>About</button>
        <button className="button" onClick={scrollProjects}>Projects</button>
        <button className="button" onClick={scrollSkills}>Skills</button>
        <button className="button" onClick={scrollContact}>Contact</button>
      </div>
    </div>

  )

}; 
export default Navbar;
