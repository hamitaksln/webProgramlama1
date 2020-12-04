import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return (
           <nav className="Nav">
             <div className="Nav-menus">
               <div className="Nav-brand">
                 <a className="Nav-brand-logo" href="/">
                   Instagram
                 </a>
               </div>
               <Link to="/profile">
                <span>Profil</span>
               </Link>
             </div>
           </nav>
       );
    }   
}

export default Header;
