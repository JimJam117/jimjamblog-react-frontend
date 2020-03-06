import React from 'react';

const Footer = () => {

    const redirect = url => window.location = url;

    return (
        <footer>
            <div className="footer-buttons">
            <button aria-label="Github" onClick={() => redirect("https://github.com/JimJam117")} type="button" className="social-button social-button-github">
                <i className="fab fa-github"></i>
            </button>
            <button aria-label="Contact" onClick={() => redirect("/contact")} type="button" className="social-button" name="button">
                <i className="fas fa-envelope"></i>
            </button>
            </div>

            <div className="footer-email">jamessparrow101@googlemail.com</div>
        </footer>
   
    );
}

export default Footer;
