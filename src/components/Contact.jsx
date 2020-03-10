import React, {useState} from 'react';

import {Link} from 'react-router-dom';

import Header from './partials/Header';
import Footer from './partials/Footer';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");


    return (
        <div className="main-container">
            <Header />

        <main>
            <div className="banner"><h1>Contact</h1></div>

            <form action="/contact" method="post" enctype="multipart/form-data">

    <div className=" form-group row">
        <input id="name" placeholder="Name" type="name" className="form-control @error('name') is-invalid @enderror"
            name="name" onChange={(e) => setName(e.target.value)} value={name} required />
    </div>

    <div className=" form-group row">
        <input id="email" type="email" placeholder="Email" className="form-control @error('email') is-invalid @enderror"
            name="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
    </div>


    <div className=" form-group row">
        <textarea placeholder="Message" className="form-control @error('body') is-invalid @enderror" type="text"
            name="body" rows="8" onChange={(e) => setBody(e.target.value)}>{body}</textarea>
    </div>

    <div className="form-group row mb-0">
        <button aria-label="Send" className="submit-button" type="submit" name="button">Send</button>
    </div>
</form>

{/* {!! NoCaptcha::renderJs() !!} */}

            <Footer />
        </main>
            
        </div>
    );
}

export default Contact;
