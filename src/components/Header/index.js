import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';

class Header extends React.Component{
    profilePhotoSrc = "https://avatars0.githubusercontent.com/u/48477105?s=460&u=395a5e8d8ee34d6f616549bc1f2ea08058355aa8&v=4";
    render(){
        return (
           <nav className="Nav">
             <div className="Nav-menus">
               <div className="Nav-brand">
                 <a className="Nav-brand-logo" href="/">
                 </a>
               </div>
               <div className="Nav-profile">
                   <Link to="/profile">
                <img className="profileImage" src={this.profilePhotoSrc}></img>
               </Link>

               </div>
             </div>
           </nav>
       );
    }   
}

export default Header;
