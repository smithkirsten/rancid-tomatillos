import React from "react";
import Search from "../Search/Search";
import { Link } from 'react-router-dom'
import './Header.css'
import tomatillo from "../../assets/cream-toma.png"


const Header = ({ error, handleSearch }) => {
  return (
    <nav className="Header">
      <Link to='/'><div className="logo">
        <img src={tomatillo} alt='Tomatillo Logo' className="tomatillo"/>
        <h1 className="title">Rancid <br/> Tomatillos</h1>
      </div></Link>
      {!error && <Search handleSearch={handleSearch} />}
    </nav>
  )
}

export default Header