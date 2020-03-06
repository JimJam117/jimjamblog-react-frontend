import React from 'react';

const Header = () => {
    return (
            <header className="topbar">
                <div className="topbar-section">
                    <div className="title">
                        <h1>James Sparrow</h1>
                        <h3>Web Developer</h3>
                    </div>

                    <nav className="navbar">
                        <a href="/home">Home</a>
                        <a href="/posts">Blog</a>
                        <a href="/portfolio">Portfolio</a>
                    </nav>    
                </div>
            </header>
    );
}

export default Header;
