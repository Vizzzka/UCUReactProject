import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => (
    <footer className="footer-distributed">
        <div className="footer-left">
            <h3>Personality tests<span>Tricks</span></h3>
            <p className="footer-links">
                <Link exact to="">Home</Link>
                <Link exact to="/contacts">Contacts</Link>
            </p>
            <p className="footer-company-name">reactUCUcourse &copy; 2019</p>
        </div>
        <div className="footer-center">
            <div>
                <i className="fa fa-map-marker"></i>
                <p><span>21 Revolution Street</span> Kharkiv, Ukraine</p>
            </div>
            <div>
                <i className="fa fa-phone"></i>
                <p>(+380)-99-482-21-65</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p><Link href="">contact@webdevtrick.com</Link></p>
            </div>
        </div>
        <div className="footer-right">
            <p className="footer-company-about">
                <span>About the company</span>
                React UCU Course is a personality tests resource for everyone even for
                for web designers, graphic designers, web developers &amp; SEO Learner.
            </p>
            <div className="footer-icons">
                <a href=""><i className="fa fa-facebook"></i></a>
                <a href=""><i className="fa fa-twitter"></i></a>
                <a href=""><i className="fa fa-github"></i></a>
            </div>
        </div>
    </footer>
);


export default Footer;
