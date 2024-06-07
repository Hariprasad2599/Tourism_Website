import React, { useState } from 'react';
import './MainPage.css';
import Main from './Main';
import Footer from './Footer';

function MainPage() {
    return (
        <div className="product-page">
            <div className="container mt-4">
                <div className="video-container">
                    <img src="Assets\Brand-Kolhapur-1.jpg" height="500px" width="100%" />
                    <div className="content-container">
                        <p className="content-paragraph">
                            <span className="first-letter">K</span>olhapur is the last of the traces of the Maratha ruler, Shivaji and it is bestowed with oldest Indian civilization.
                            Kolhapur is graced by its rich culture that has evolved over the years dating back to 17th century.
                            Its history is coloured with the deeds and tells of many rulers and kings, who have time and again established their authority over this land.
                            It has gone through many regimes and has seen the rise and fall of many kingdoms. Of all, the most notable were the rule of 28 years of Chhatrapati Shahu Maharaj,
                            who came to power in 1894 thereby ushering a new phase of socio-cultural and economic changes and adaptations. The reign of Chhatrapati Shahu Maharaj is an important
                            chapter not only in the history of Kolhapur but of Maharashtra as a whole. Under his leadership, a number of progressive revolutionary reforms and movements were introduced
                            that resulted in major socio-economic transformations. Kolhapur has greatly evolved over the time and presently holds the status of one of the most developed III tier cities of India.
                            The IT and BPO sector has also flourished significantly, thus making Kolhapur the new and bestdestination. It's strategically important location at the “golden quadrangle expressway”
                            has further added to its glory.
                        </p>
                    </div>
                </div>
                <Main />
                <Footer />
            </div>
        </div>
    );
}

export default MainPage;
