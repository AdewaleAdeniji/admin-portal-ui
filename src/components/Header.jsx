import React from "react";
import './styles/header.css';

const Header = (props) => {
    return (
        <header>
            <div className="headertitle">
                {props.title ? props.title : ''}
            </div>
            <div className="sidebar">
                <i className="fa fa-search"></i>
                <i className="fa fa-bell"></i>
                <img src="https://devferanmi.netlify.app/img/ME.jpg" alt="Profile image"/>
            </div>
        </header>
    )
}
export default Header;