import React from "react";
import Search from "../Search/Search";
import './Header.css'
import tomatillo from "../../assets/cream-toma.png"


const Header = () => {
  return (
    <nav className="Header">
      <img src={tomatillo}/>
      <h1>Rancid <br/> Tomatillos</h1>
      <Search />
    </nav>
  )
}

export default Header