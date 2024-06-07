
import React, { useState } from 'react';

function Main() {
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
                    color: red;
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
                h2{
                    text-align: center;
                }
            `}</style>
            <div className="container mt-4">
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h2 style={{
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: 'bold',
                        fontSize: '36px',
                        color: '#FF4500',
                        textShadow: '2px 2px 4px #000000',
                        redSpace: 'nowrap',
                        cursor: 'pointer',
                        transition: 'transform 0.3s, color 0.3s',
                        marginBottom: '20px'
                    }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >Popular Tourist Attractions in Kolhapur</h2>
                </div>

                <div className="content-container" style={{ textAlign: 'center' }}>
                    <p className="content-paragraph" style={{ textAlign: 'center' }}>
                        Kolhapur attracts many travellers with its religious and historical attractions.
                        A sightseeing tour in Kolhapur is incomplete without a visit to places like Mahalakshmi Temple,
                        Jyotiba Temple, Rankala Lake, Chhatrapati Sahu Museum and Panhala Fort. The city makes a great destination
                        to go shopping for the spices, and leather items like the Kolhapuri Chappals. Relishing the Kolhapuri delicacies
                        is also a must do in this vivacious city.
                    </p>
                </div>
            </div>


            <table className="product-table" style={{ margin: 'auto', borderSpacing: '20px' }}>
                <tbody>
                    <tr>
                        {/* Property 1 */}
                        <td className="product-cell" style={{ width: '33.33%', padding: '10px', position: 'relative' }}>
                            <div className="card">
                                <img src="Assets\Mahalakshmi_temple.jpeg" className="card-img-top compressed-img" alt="S1" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'red', fontSize: '40px', fontWeight: 'bold'}}>महालक्ष्मी मंदिर</div>
                            </div>
                        </td>
                        
                        <td className="product-cell" style={{ width: '33.33%', padding: '10px', position: 'relative' }}>
                            <div className="card">
                                <img src="Assets\Jyotiba-Temple.jpg" className="card-img-top compressed-img" alt="S2" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'red', fontSize: '40px', fontWeight: 'bold' }}>जोतिबा मंदिर</div>
                            </div>
                        </td>
                        <td className="product-cell" style={{ width: '33.33%', padding: '10px', position: 'relative' }}>
                            <div className="card">
                                <img src="Assets\Rankala-Lake.jpg" className="card-img-top compressed-img" alt="S3" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'red', fontSize: '40px', fontWeight: 'bold' }}>रंकाळा तलाव </div>
                            </div>
                        </td>
                        {/* Repeat the same pattern for other products */}
                    </tr>
                </tbody>
            </table>
        </div>




    );
}

export default Main;
// whiteSpace: 'nowrap'