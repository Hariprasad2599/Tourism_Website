
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Entertainment.css';


function ProductPage() {
    const [infoVisible4, setInfoVisible4] = useState(false);
    const [infoVisible5, setInfoVisible5] = useState(false);
    const [infoVisible6, setInfoVisible6] = useState(false);
    const [infoVisible7, setInfoVisible7] = useState(false);
    const [infoVisible8, setInfoVisible8] = useState(false);
    const [infoVisible9, setInfoVisible9] = useState(false);

    const toggleInfo4 = () => {
        setInfoVisible4(!infoVisible4);
        setInfoVisible5(false);
        setInfoVisible6(false);
    };

    const toggleInfo5 = () => {
        setInfoVisible5(!infoVisible5);
        setInfoVisible4(false);
        setInfoVisible6(false);
    };

    const toggleInfo6 = () => {
        setInfoVisible6(!infoVisible6);
        setInfoVisible7(false);
        setInfoVisible8(false);
    };


    const toggleInfo7 = () => {
        setInfoVisible7(!infoVisible7);
        if (infoVisible7) {
            setInfoVisible8(false);
            setInfoVisible9(false);
        }
    };

    const toggleInfo8 = () => {
        setInfoVisible8(!infoVisible8);
        if (infoVisible8) {
            setInfoVisible7(false);
            setInfoVisible9(false);
        }
    };

    const toggleInfo9 = () => {
        setInfoVisible9(!infoVisible9);
        if (infoVisible9) {
            setInfoVisible8(false);
            setInfoVisible6(false);
        }
    };

    return (
        <div className="product-page">
            <style>{`
                .product-cell {
                    width: 33.33%;
                    padding: 10px;
                    position: relative;
                }

                .image-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: rgba(0, 0, 0, 0.7);
                    color: white;
                    padding: 10px;
                    font-size: 40px;
                    font-weight: bold;
                }

                .link-style {
                    text-decoration: none;
                    color: inherit;
                    cursor: pointer;
                }

                .link-style:hover {
                    color: blue;
                }

                /* Disable image zoom on hover for images inside the product-table */
                .product-table img {
                    pointer-events: none;
                }
                .button {
                    background: linear-gradient(to bottom, #4CAF50 0%, #45a049 100%);
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 2px;
                    transition-duration: 0.4s;
                    cursor: pointer;
                    border-radius: 12px;
                    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
                }

                .button:hover {
                    background: linear-gradient(to bottom, #45a049 0%, #4CAF50 100%);
                    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.5);
                }
                //css
                /* Advanced CSS for tables */
                .product-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                
                .product-table th, .product-table td {
                    border: 1px solid #dddddd;
                    padding: 8px;
                    text-align: left;
                }
                
                .product-table th {
                    background-color: #f2f2f2;
                }

                /* Additional CSS for table cells */
                .product-cell {
                    width: 33.33%;
                    padding: 10px;
                    position: relative;
                }
 
            `}</style>

            <div className="container mt-4">
                <table className="product-table">
                    <tbody>
                        <div className="center-text">
                            <h1 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '36px', color: '#FF4500', textShadow: '2px 2px 4px #000000' }}>Sports News</h1>
                        </div>
                        <tr>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Sports\News1.webp" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">KKR vs DC LIVE Score, IPL 2024: Shaw, Jake to open as Delhi win toss vs Kolkata; Playing XI updates</a>
                                    </h2>
                                    <button onClick={toggleInfo4} className="button">Read More</button>
                                    {infoVisible4 && (
                                        <div id="additionalInfo4">
                                            <p>Kolkata Knight Riders vs Delhi Capitals Live Score, IPL 2024: Rishabh Pant's DC won the toss and
                                                opted to bat first against Shreyas Iyer's KKR at the Eden Gardens on Monday.</p>
                                            <p>Kolkata Knight Riders vs Delhi Capitals IPL 2024 Live Score: Rishabh Pant’s DC won the toss and opted
                                                to bat first against Shreyas Iyer’s KKR at the Eden Gardens on Monday.</p>
                                            <p>On the other hand, with four wins in their last five matches, the Rishabh Pant-led side is gradually
                                                assembling their pieces and starting to look like a force to be reckoned with. Pant is also making rapid progress with every match
                                                as the DC top-five in Fraser-McGurk, Abhishek Porel, Shai Hope, Pant and Stubbs will be a cause of concern for KKR bowling.</p>
                                            <p>KKR replaced injured Mitchell Starc with Sri Lankan pacer Dushmantha Chameera against Punjab Kings but the latter gave away 16 runs
                                                per over in his debut for KKR and failed to inspire any confidence. Barring spinner Sunil Narine, who returned with 1/24 from his four overs,
                                                none of the KKR bowlers made any impact.</p>
                                        </div>

                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Sports\News2.webp" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">Thomas Cup 2024 Live Updates: Prannoy, Satwik-Chirag and Co blank England 5-0; India qualify for quarterfinals</a>
                                    </h2>
                                    <button onClick={toggleInfo5} className="button">Read More</button>

                                    {infoVisible5 && (
                                        <div id="additionalInfo5">
                                            <p>BWF Thomas & Uber Cup 2024 Live Updates: After beating Thailand in their first match,
                                                India blanked England in their second match and assured a place in the Thomas Cup quarterfinals.</p>
                                            <p>Thomas Cup 2024, India vs England Live Updates: Defending world men’s team champions India assured
                                                themselves of a place in the Thomas Cup 2024 quarterfinals as they defeated England 5-0 on Monday in Chengdu in a Group C encounter.</p>
                                            <p>HS Prannoy got back to winning ways as he put India into the lead, defeating Harry Huang in straight games. In the second match, world No3
                                                Satwiksairaj Rankireddy – Chirag Shetty were once again made to work hard, in what was the toughest assignment of this tie against Ben Lane
                                                and Sean Vendy. But SatChi prevailed in three games to put India 2-0 up. Then, in Lakshya Sen’s absence, Srikanth stepped up to seal the tie
                                                for India in straight-games. MR Arjun – Dhruv Kapila made it 4-0 by clinching the 2nd doubles tie. The finishing touches were applied by Kiran
                                                George, who played his first match and won in straight games as well.</p>
                                            <p>With Indonesia defeating Thailand as well, India and Indonesia – 2022 finalists – qualified out of Group C into the knockouts. Their match on
                                                Wednesday will decide the group toppers.</p>
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Sports\News3.webp" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">Sunrisers Hyderabad’s feared batting lineup comes undone as Chennai Super Kings return to winning ways at Chepauk</a>
                                    </h2>
                                    <button onClick={toggleInfo6} className="button">Read More</button>

                                    {/* <button onClick={toggleInfo6} style={{ cursor: 'pointer' }}>Read More</button> */}
                                    {infoVisible6 && (
                                        <div id="additionalInfo6">
                                            <p>SYNOPSIS: Having blown hot and cold
                                                so far in the campaign, Chennai Super Kings put up their first all-round show to thump Sunrisers Hyderabad by 78 runs.</p>
                                            <p>As Aiden Markram was cleaned up by Mathesha Pathirana’s yorker, the Chepauk DJ played the hit number “Enga area ula varadha
                                                (Don’t enter our territory). Both Chennai Super Kings and Sunrisers Hyderabad are not just headquartered in Chennai, their
                                                offices are just a stone’s throw away from each other in MRC Nagar. Their owners are next-door neighbours, just separated by a road.</p>
                                            <p>Right through this season, Hyderabad have been a thorn in the flesh of opposition teams. Their batting unit has three 250-plus scores this IPL.
                                                Against a weak Chennai attack, with dew in play, 213 was definitely not beyond Hyderabad. But for the second successive match, their batting unit,
                                                especially the top order, failed to fire as Tushar Deshpande accounted for Travis Head, Anmolpreet Singh and Abhishek Sharma in his first two overs.</p>
                                        </div>
                                    )}
                                </div>
                            </td>
                            {/* Rest of your code */}
                        </tr>
                        {/* Repeat the same pattern for other rows and products */}
                        <tr>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Sports\News4.webp" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">TS EAMCET 2024 Hall Ticket Live Updates: Telangana EAPCET admit card link today at eamcet.tsche.ac.in
                                        </a>
                                    </h2>

                                    <button onClick={toggleInfo7} className="button">Read More</button>
                                    {infoVisible7 && (
                                        <div id="additionalInfo7">
                                            <p>Will shows the way: How Jacks broke free with his neat swings down the ground in RCB’s
                                                stunning chase against GT</p>
                                            <p>Royal Challengers Bengaluru's Virat Kohli and Will Jacks celebrate after winning the Indian
                                                Premier League (IPL) 2024 T20 cricket match between Gujarat Titans and Royal Challengers Bengaluru, at the Narendra Modi Stadium,
                                                in Ahmedabad, Sunday, April 28, 2024. (PTI Photo)</p>
                                            <p>Belting Jacks</p>
                                            <p> Will Jacks sleeps so soundly that he once failed to wake up during an earthquake of 5.2 magnitude in Antigua, when he was touring the West Indies with England last year.
                                                “Some of the guys said their whole room was shaking. But I was not aware of anything. I was in my sleeping zone.”</p>
                                        </div>

                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Sports\News5.webp" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">Gukesh: ‘Right now just want to be the best, don’t care about youngest ever and other records’</a>
                                    </h2>

                                    <button onClick={toggleInfo8} className="button">Read More</button>
                                    {infoVisible8 && (
                                        <div id="additionalInfo8">
                                            <p>After Gukesh become the youngest-ever player to qualify for the prestigious World Chess Championship,
                                                a clip of him as an 11-year-old surfaced. In it he says: “I want to be the youngest world chess champion!”</p>
                                            <p>After India’s D Gukesh become the youngest-ever Candidates winner — which also made him the youngest ever player
                                                to qualify for the prestigious World Chess Championship, the 17-year-old said that the tag of being the youngest
                                                to do things once mattered to him. But at the moment, his goal is just one: to be the best in the world.</p>
                                            <p>In his fledgling career, Gukesh has had many pathbreaking moments already, besides becoming a World Championship
                                                Challenger as a teenager (he will be 18 when he plays in November). Gukesh became India’s youngest grandmaster ever at the
                                                age of 12 years, seven months, 17 days, missing the tag of the world’s youngest by a mere 17 days. Last year, he overtook five-time
                                                world champion Viswanathan Anand as the country’s top ranked player for the first time after 36 years.</p>
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Sports\News6.webp" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">Rafael Nadal’s comeback match: A few trademark points, aggression from baseline but rustiness shows in win</a>
                                    </h2>

                                    <button onClick={toggleInfo9} className="button">Read More</button>
                                    {infoVisible9 && (
                                        <div id="additionalInfo9">
                                            <p>681 days since he lifted the 2022 Roland Garros trophy, Rafael Nadal returned to professional clay-court tennis on the court that adorns his name,
                                                marking his comeback with a win over the 65th-ranked Flavio Cobolli in the first round of the ATP 500 event in Barcelona on Tuesday. In front of
                                                a raucous home crowd on Pista Rafa Nadal, he took apart Cobolli 6-2, 6-3 despite showing evident signs of rustiness and being far from his usual
                                                best on his favoured surface.</p>
                                            <p>The Spaniard has been absent from the tour for most of the last two seasons, ever since he suffered a hip-flexor injury at the 2023 Australian Open.
                                                Nadal announced that 2024 is likely to be his final season, but after making his comeback in Brisbane in January, injury concerns have forced him to pull
                                                out of four more tournaments this year, including the Australian Open.</p>
                                            <p>But one final shot at the French Open — where Nadal is a record 14-time champion – will be the primary motivation for the 37-year-old, making the clay-court
                                                tournaments he can play before the Major kicks off in the last week of May, crucial to his preparations. Presently, he is stuck in a dilemma between needing
                                                matches and momentum to be competitive, while simultaneously hoping not to aggravate his injury-struck body.</p>
                                        </div>
                                    )}
                                </div>
                            </td>
                            {/* Rest of your code */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductPage;
