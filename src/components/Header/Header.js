import React from 'react';
import './Header.css';
import img from './illustration-intro.png';

const Header = () => {
    return (
        <div className="body">
           <img className="hed" src={img}/>
           <h1>All your files in one secure location, accessible anywhere.</h1>
           <p>Fylo stores all your most important files in one secure location.Access them wherever 
                you need,share and collaborate with friends family, and co-workers.
            </p>
            <button className="but grow white b">Get Started</button>
        </div> 
    )
}

export default Header;