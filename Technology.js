
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
                            <h1 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '36px', color: '#FF4500', textShadow: '2px 2px 4px #000000' }}>Technology News</h1>
                        </div>
                        <tr>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Technology\News1.jpg" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">HCLTech CEO C Vijayakumar sees headwinds affecting Q1 financial services revenue</a>
                                    </h2>
                                    <button onClick={toggleInfo4} className="button">Read More</button>
                                    {infoVisible4 && (
                                        <div id="additionalInfo4">
                                            <p>Financial services that led the growth for the third largest Indian
                                                IT services firm HCLTech is set to see some revenue impact in the first quarter of FY25, said C Vijayakumar,
                                                CEO and MD, HCLTech, in an interaction with ET. Led by a 12.1% YoY growth in the financial services vertical,
                                                HCLTech delivered the highest on-year growth in the Indian IT industry at 8.3% in FY24.</p>
                                            <p>While being upbeat about HCLTech’s industry leading growth, he also called out headwinds in the current
                                                fiscal in the financial services vertical and the slowdown in discretionary spending. Other large India IT
                                                services companies have reported a slower growth rate than HCLTech in FY24.</p>
                                            <p>Within BFSI, larger rivals TCS and Infosys reported a 3.2% YoY decline in growth for the quarter with a 32%
                                                market share while Infosys, with over 26% share, posted a 8.4% YoY degrowth in Q4FY24. Younger peer Wipro's
                                                BFSI growth also dipped by 8.9%.</p>
                                        </div>

                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Technology\News2.jpg" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">Top IT companies cut over 72,000 jobs in FY24</a>
                                    </h2>
                                    <button onClick={toggleInfo5} className="button">Read More</button>

                                    {infoVisible5 && (
                                        <div id="additionalInfo5">
                                            <p>Once known for hiring hundreds of thousands every year, five of India’s
                                                top six information technology services companies reported a reduction of 73,600
                                                in their total headcount in the last fiscal year.</p>
                                            <p>HCLTech, the third largest, was the only exception among the top six,
                                                as it added 1,537 employees in the year ended March 31, even as Tata Consultancy Services,
                                                Infosys, Wipro, Tech Mahindra and LTIMindtree reported a fall in their headcount. After accounting for
                                                the addition at HCLTech, the workforce of the top six firms fell by 72,063.</p>
                                            <p>A global slowdown in tech spending and uncertainty in the demand environment had hit India’s
                                                $254 billion IT services industry in FY24, leading to muted business growth and forcing companies
                                                to cut jobs and reduce hiring. In comparison, the top six IT companies had added more than 86,500 employees in FY23,
                                                driven by strong demand for their services immediately after the pandemic.</p>
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Technology\News3.png" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">Empowering Decision-Making: The Transformative Role of Data Analytics</a>
                                    </h2>
                                    <button onClick={toggleInfo6} className="button">Read More</button>

                                    {/* <button onClick={toggleInfo6} style={{ cursor: 'pointer' }}>Read More</button> */}
                                    {infoVisible6 && (
                                        <div id="additionalInfo6">
                                            <p>In today's data-driven world, organizations are increasingly turning to data analytics
                                                to gain actionable insights, drive strategic decisions, and unlock new growth opportunities.
                                                From optimizing operations to enhancing customer experiences, data analytics has become a cornerstone of success across industries.</p>
                                            <p>In this article, we explore the significance of data analytics and how leading institutions like The Indian Institute of Management
                                                Kozhikode (IIMK), the Indian School of Business (ISB) and the Indian Institute of Technology Delhi are equipping professionals (IITD)
                                                with the skills and knowledge needed to harness the power of data effectively.</p>
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
                                    <img src="Assets\Technology\News4.jpg" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">TS EAMCET 2024 Hall Ticket Live Updates: Telangana EAPCET admit card link today at eamcet.tsche.ac.in
                                        </a>
                                    </h2>

                                    <button onClick={toggleInfo7} className="button">Read More</button>
                                    {infoVisible7 && (
                                        <div id="additionalInfo7">
                                            <p>I was at Intel Vision last week. Intel’s recent effort continues to remind me of Intel
                                                back in the Andy Grove days, with one exception that I think is the source of the firm’s current difficulties.
                                                What Intel needs is a Dennis Carter and an adequate marketing budget for AI, the biggest tech wave ever to hit the segment.
                                                Unfortunately, neither is in evidence.</p>
                                            <p>In addition, I’ve been concerned that Michael Dell retired in place, causing a lot of execution issues at Dell and causing
                                                it to lag behind its peers. Well, this is the second event where Michael Dell himself powerfully highlighted Dell (the last
                                                was at Nvidia’s event and seemed almost accidental). But this time, they hit it out of the park. It was nicely planned and
                                                well executed, suggesting Michael Dell is back. Now, Dell again has one of the most successful CEOs in history backing its plays.</p>
                                            <p>However, there are troubles ahead for Intel and the industry in general that I don’t think folks are taking seriously. I’ll cover those
                                                as well this week.</p>
                                        </div>

                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Technology\News5.webp" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">Bullet Echo India: Everything you need to know about Krafton’s latest mobile game</a>
                                    </h2>

                                    <button onClick={toggleInfo8} className="button">Read More</button>
                                    {infoVisible8 && (
                                        <div id="additionalInfo8">
                                            <p>Bullet Echo: India is a 2D top-down tactical battle royale game where the last team standing wins the round.
                                                From gameplay to heroes, here's everything you need to know about Krafton's latest mobile game.</p>
                                            <p>Krafton recently launched a new top-down 2D shooting game called “Bullet Echo: India”. Developed by the same
                                                studio that introduced us to titles like C.A.T.S: Crash Arena Turbo Stars, Cut the Rope and King of Thieves,
                                                the tactical shooter involves a team of players who need to fight their way to the end, with the last team
                                                standing winning the round. From gameplay to leagues to different game modes, here’s everything you need to
                                                know about Bullet Echo: India.</p>
                                            <p>Gameplay</p>
                                            <p>Bullet Echo: India is a top-down 2D shooting game like Supercell’s Brawl Stars, but the gameplay and mechanics
                                                are somewhat similar to PUBG, also known as BGMI. But unlike Brawl Stars, where you can see enemies on the map
                                                from a distance, Krafton’s latest game limits your vision with players only able to see what’s right ahead of
                                                them using their flashlight.</p>
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Technology\News6.avif" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">Fifty per cent off: The 10-year old Bluetooth keyboard that still rocks</a>
                                    </h2>

                                    <button onClick={toggleInfo9} className="button">Read More</button>
                                    {infoVisible9 && (
                                        <div id="additionalInfo9">
                                            <p>A decade-old Bluetooth keyboard, is still a popular choice thanks to its comfortable typing experience,
                                                ability to connect to multiple devices, and long battery life.</p>
                                            <p>In this age of fast-changing tech and multiple launches and updates, the fact that the Logitech K480
                                                Multi-Device Keyboard, which was launched in 2014, is still around and popular is a major tech miracle of sorts.
                                                That it is now available at almost half (and sometimes even less than half) its price and is still a terrific device
                                                to have makes it a candidate for being perhaps the greatest Bluetooth keyboard of all time in terms of sheer longevity,
                                                performance and now, even more value for money.</p>
                                            <p>Logitech surprised a lot of us when it unveiled the K480 Multi-Device Keyboard in early 2014, before releasing it later
                                                that year. This was the time when the tablet “revolution” was still gathering momentum, and many people were considering
                                                using their tablets as lightweight notebook substitutes but needed a proper keyboard to complete the experience. The K480
                                                was designed to be the perfect tablet companion. And a little more. It actually looked like no keyboard we had seen before,
                                                and actually still looks very different from the run-of-the-mill Bluetooth keyboards in the market today.</p>
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
