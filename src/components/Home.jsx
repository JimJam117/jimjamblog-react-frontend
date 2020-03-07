import React from 'react';

import {Link} from 'react-router-dom';

import Header from './partials/Header';
import Footer from './partials/Footer';

const Home = () => {
    return (
        <div className="main-container">
            <Header />

        <main>
            <div className="banner"><h1>Welcome!</h1></div>

            
                    <div className="homepage-content">
                        <div>
                            <img className="homepage-profile-pic-top" src="/img/jimjam3.png" alt="Me" />
                            <p>
                                <img className="homepage-profile-pic" src="/img/jimjam3.png" alt="Me" />
                                My name's James Sparrow, I'm a 20 year old former software development student who's passionate
                                about web development.
                                Check out my portfolio or blog to see what I've been up to!
                            </p>
                            <ul className="homepage-quick-links">
                                <li><Link to="/blog"><i className="fas fa-pen"></i> Blog</Link></li>
                                <li><Link to="/blog/projects"><i className="fas fa-project-diagram"></i> Projects</Link></li>
                                <li><Link to="/portfolio"><i className="far fa-gem"></i> Portfolio</Link></li>
                                <li><Link to="/github"><i className="fab fa-github"></i> Github</Link></li>
                                <li><Link to="/contact"><i className="fas fa-envelope"></i> Contact</Link></li>
                            </ul>
                        </div>
                        <div className="homepage-gallery">

                            <img src="/img/logos/htmlcssjs.png" alt="" />
                            <img src="/img/logos/php.png" alt="" />
                            <img src="/img/logos/lamp.png" alt="" />
                            <img src="/img/logos/laravel.png" alt="" />
                            <img src="/img/logos/c-sharp.png" alt=""/>
                            <img src="/img/logos/unity.png" alt="" />

                        </div>
                    </div>
            

            <Footer />
        </main>
            
        </div>
    );
}

export default Home;
