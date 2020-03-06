import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="main-container">
            <Header />

        <main>
            <div class="banner"><h1>Welcome!</h1></div>

            <main>
                    <div class="homepage-content">
                        <div>
                            <img class="homepage-profile-pic-top" src="/img/jimjam3.png" alt="Me" />
                            <p>
                                <img class="homepage-profile-pic" src="/img/jimjam3.png" alt="Me" />
                                My name's James Sparrow, I'm a 20 year old former software development student who's passionate
                                about web development.
                                Check out my portfolio or blog to see what I've been up to!
                            </p>
                            <ul class="homepage-quick-links">
                                <li><a href="/blog"><i class="fas fa-pen"></i> Blog</a></li>
                                <li><a href="/blog/projects"><i class="fas fa-project-diagram"></i> Projects</a></li>
                                <li><a href="/portfolio"><i class="far fa-gem"></i> Portfolio</a></li>
                                <li><a href="/github"><i class="fab fa-github"></i> Github</a></li>
                                <li><a href="/contact"><i class="fas fa-envelope"></i> Contact</a></li>
                            </ul>
                        </div>
                        <div class="homepage-gallery">

                            <img src="/img/logos/htmlcssjs.png" alt="" />
                            <img src="/img/logos/php.png" alt="" />
                            <img src="/img/logos/lamp.png" alt="" />
                            <img src="/img/logos/laravel.png" alt="" />
                            <img src="/img/logos/c-sharp.png" alt=""/>
                            <img src="/img/logos/unity.png" alt="" />

                        </div>
                    </div>
            </main>

            <Footer />
        </main>
            
        </div>
    );
}

export default Home;
