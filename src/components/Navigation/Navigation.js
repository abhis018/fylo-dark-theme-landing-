import React from 'react';
import './Navigation.css';
import img from './fylologo.png';

const Navigation = () => {
    return (
        <div className="body">
            <div className="main">
                <div className="company">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-files" viewBox="0 0 20 20">
                        <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
                    </svg>
                    <img src={img} className="w4 h2"/>
                </div>
                <ul className="ul">
                    <li className="li">Features</li>
                    <li className="li">Team</li>
                    <li className="li">SignIn</li>
                </ul>
            </div>
        </div> 
    )
}

export default Navigation;