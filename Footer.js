import React from 'react';
import './Footer.css'; // Importing CSS file

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Explore</h3>
                    <ul>
                        <li><a href="/destinations">Destinations</a></li>
                        <li><a href="/tours">Tours</a></li>
                        <li><a href="/activities">Activities</a></li>
                        <li><a href="/accommodation">Accommodation</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Plan Your Trip</h3>
                    <ul>
                        <li><a href="/travel-guides">Travel Guides</a></li>
                        <li><a href="/packing-list">Packing List</a></li>
                        <li><a href="/visa-information">Visa Information</a></li>
                        <li><a href="/insurance">Travel Insurance</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/career">Careers</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <p>If you have any questions,<br></br>feel free to reach out to us:</p>
                    <ul>
                        <li>Email: kolhapurtour@123.com</li>
                        <li>Phone: 7498338433</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p>&copy; {new Date().getFullYear()} KolhapurTourism. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
