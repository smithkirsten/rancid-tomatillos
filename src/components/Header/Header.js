import React from "react";
import Search from "../Search/Search";
import './Header.css'
import tomatillo from "../../assets/cream-toma.png"


const Header = () => {
  return (
    <nav className="Header">
      <div className="logo">
        <img src={tomatillo} className="tomatillo"/>
        <h1 className="title">Rancid <br/> Tomatillos</h1>
      </div>
      <Search />
    </nav>
  )
}

export default Header