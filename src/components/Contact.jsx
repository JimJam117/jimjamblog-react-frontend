import React from 'react';

import {Link} from 'react-router-dom';

import Header from './partials/Header';
import Footer from './partials/Footer';

const Contact = () => {
    return (
        <div className="main-container">
            <Header />

        <main>
            <div className="banner"><h1>Contact</h1></div>

            <main>
                Contact form
            </main>

            <Footer />
        </main>
            
        </div>
    );
}

export default Contact;
