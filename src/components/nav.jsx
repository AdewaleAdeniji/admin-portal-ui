import React  from 'react';
import './styles/nav.css';

const NavBar =  (page) => {
    return (
        <div className="navbar">
            <div className="logo">
                <i className="fa fa-home"></i>
            </div>
            <div className="navlinks">
                <ul>
                    <li>
                        <button className="bn bn-transparent bn-active">
                            <i className="fa fa-bars"></i>
                        </button>
                    </li>
                    <li>
                        <button className="bn bn-transparent">
                            <i className="fa fa-comment-dots"></i>
                        </button>
                    </li>
                    <li>
                    <button className="bn bn-transparent">
                            <i className="fa fa-user"></i>
                        </button>
                    </li>
                    <li>
                        <button className="bn bn-transparent">
                            <i className="fa fa-cog"></i>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="navlogout">
                <i className="fas fa-sign-out-alt"></i>
            </div>
        </div>
    )
}
export default NavBar;