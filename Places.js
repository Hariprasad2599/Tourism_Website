import React, { useState } from 'react';
import './Places.css';
import Footer from './Footer';



function Places() {
    const [selectedPlace, setSelectedPlace] = useState(null);

    const placesData = {
        "Mahalakshmi Temple": {
            heading: "Mahalakshmi Temple",
            paragraph: "The temple takes its name from Ambabai/Mahalaxmi, and it is believed that the divine couple reside in the area. The temple belongs architecturally to the Chalukya empire and may have been first built in circa 700 AD. Mounted on a stone platform, the image of the four-armed and crowned goddess is made of sandstone. The image of Mahalaxmi carved in black stone is 2 feet 8.5 inches in height. The Shri Yantra is carved on one of the corners opposite to Mahakali in the temple premises. A stone lion, the vahana of the goddess, stands behind the statue. The Sanskrit inscription on a stone tablet in the wall of the house of Annacharya Panditrao, now in the town hall museum, says, 'The great King Bhojadeva was reigning peacefully with pleasing conversation at Panhala; in 1190. He, with a view to ensure the prosperity of his kingdom, The crown contains an image of the nag ling and yoni, the symbols of kal (the time), purush (the creator), and prakruti (the origin of the universe). In Her four hands, the deity of Ambabai holds objects of symbolic value. The lower right hand holds a mhalunga (a citrus fruit), in the upper right, a large mace (kaumodaki) with its head touching the ground, in the upper left a shield (khetaka), and in the lower left, a bowl (panpatra). Unlike most Hindu sacred images, which face north or east, the image of this deity looks west (Pashchim). Sunrays came directly from Mahadwar in the evening; the rays of the setting sun fall on the face of the idol for three days (31 January, 01, 02 February, and 09, 10, 11 November). There are a number of other shrines in the courtyard to the Datta Mandir, Dkpal Mandap, Navagrahas, Surya, Mahishasuramardini, Vitthal-Rakhmai, Krishna, Panchanganga & Swami Smarth Dashavartar, Ram Mandir, Sheshashai, Mahavishnu, Hanuman, Laxmi-narayan, Khandoba, Atibaleshwar, Krishna, Kalbhairav, Sidhivinyak, Sinhwahini, Tulja Bhavani, Indrashabha, Ek Mukhi Datta. Some of these images date back to the 11th century, while some are of recent origin. Also located in the courtyard, there was the temple tank Manikarnika Kund, near Datta Mandir now there is a garden.",
            images: [
                "Assets/Mahalakshmi_temple.jpeg",
                "Assets/Aai.jpg",
                "Assets/Mahalakshmi_temple,_Kolhapur.jpg"
            ]
        },
        "Bhavani-Mandap": {
            heading: "Bhavani Mandap",
            paragraph: "Bhavani Mandap was an important meeting venue in yesteryears. It housed the offices of various court officials and was centre of many celebrations. It also saw a famous murder in the central courtyard. The place has the nostalgic charm and typical architecture of the British Raj bringing back memories of the rich princely state Kolhapur used to be.At Bhavani Mandap, we can find the life size statue of Kolhapur's most loved prince Shahu Maharaj. Although, he was deemed king by the city dwellers, most of his political life was spent under the Raj. On display are stuffed animals actually hunted by Shri Shahu Maharaj including a giant bison (who has achieved some spiritual importance considering the amount of saffron spread over it), Panthers, a pair of deer and few others. It also exhibits a modest wooden throne believed to be the one used by Shivaji on his visits to Kolhapur, strengthening the idea that He was more a man on a mission with not much regards to worldly comfort. In its present form it functions as a collective tomb of Kolhapur's Maratha royalty.Bhavani Mandap is a great place to visit for both pilgrims and tourist. Within the complex there is a small museum which has a statue of Chatrapati Shahuji Maharaj installed along with collection of stuffed bodies of wild animals like Tigers,Deers and Bisons that were hunted by the members of the royal family. Also on display is a wooden throne presumed to be the one used by Shivaji Maharaj.",

            images: [
                "Assets/Bhavani-Mandap.jpg",
                "Assets/Bhavani-Mandap1.webp",
                "Assets/Bhavani-Mandap2.jpg"
            ]
        },
        // Add data for other places similarly
        "New_Palace": {
            heading: "New Palace",
            paragraph: "New Palace, Kolhapur is a palace situated in Kolhapur, in the Indian state of Maharashtra. The Palace took 7 years to complete, from 1877 to 1884,[1] costing about seven lakhs of rupees.[2] Being an excellent specimen of Indian architecture built in black polished stone, it has been an attraction for tourists. It has extensive premises with a garden, fountain and wrestling ground. The whole building is eight-angled and has a tower in the middle. The clock on it was fixed in 1877. At separate distances there are small towers. On every glass are painted the events of Chhatrapati Shivaji Maharaj's life, the founder of Maratha Empire. There is a zoo and a ground lake. Even today, it is the residence of Chhatrapati Shahu Maharaja, the direct descendant of Chhatrapati Shivaji Maharaja.Mant's masterpiece at Kolhapur, however, is the New Palace, 1.5 km further north on Bhausingji Road. Completed in the same year as the Hospital, this complex presents a novel blend of disparate features in contrasting basalt and sandstone. The principal south facade presents a double-storeyed range, with Neo-Mughal lobed arches beneath and temple-like columns and brackets above. This scheme is interrupted by trefoil arches capped with curving cornices and small domes. The same elements cap the octagonal corner towers. The ground floor of the New Palace accommodates the Shahaji Chhatrapati Museum, given over to memorabilia of the Kolhapur rulers. Several tourists from across the country visit the New Palace each year. This museum exhibits royal ways of existence.",

            images: [
                "Assets/New_Palace.jpg",
                "Assets/New_Palace1.avif",
                "Assets/Shahu_Chhatrapati_Maharaj.jpg"
            ]
        }, 
        "Rankala-Lake": {
            heading: "Rankala Lake",
            paragraph: "Before the eighth century, Rankala was a stone quarry. In the 9th century, an earthquake caused immense structural damage to the quarry, causing water to accumulate from an underground source forming the Rankala Lake. This historic lake features a Hindu temple with a Nandi.[1] According to local Hindu beliefs, Lord Shiva uses the Nandi, moves a single wheat grain towards the lake, and backs about a distance of single rice grain daily. Hindu beliefs state that if Lord Shiva reaches Rankala, the apocalypse will begin.Rankala Lake is on the western side of Ambabai temple , it is a popular evening spot and recreation centre. This lake was constructed by late Maharajah, Shri Shahu Chhatrapati. The Lake is surrounded by Chaupati and other gardens. In the backdrop stands majestic Shalini Palace. Shalini Palace is the only star-rated Palace Hotel in Maharashtra. Chaupati also brings memories of Chatak daar Bhel-Puri and Ragda-Patties and variety of food snacks. In past, Kolhapur was famous as a centre for Film Industry. Many Marathi movies, Hindi movies have been shot in studios in Kolhapur. ShantKiran Studio on Rankala Lake was shot in numerous movies. This studio was owned by V. Shantaram (V stands Vanakudre), gift to Indian Film industry. Today, those days in history is being remembered as golden past.Witness of historical events during 750-850 AD Formerly, this was an extensive mine of black stone. During 800-900 AD, there were earthquakes, which transformed the mine. There across big holes through which water from under ground collect. Located at a distance of half a kilometer from the Mahalakshmi Temple is a huge lake called “RANKALA LAKE”. This is the oldest of all, it is thought and was given more importance in the past as a big temple of Nandi and a fine resort called ‘Sandhya Math’ have been built. The idol of Nandi is very big and rare. To the northern end of the lake is the Shalini Palace. To the southeast is Padmaraje garden. This lake is picturesque and it’s a pleasure to go for a walk along this lake. At two spots one can reach the water, at Rajghat and Maratha ghat. There is a tower on the Rajghat. In front of this tower are the Shalini Palace and Ambai swimming tank. The spot is famous for movie shootings. The ‘Sandhya Math’ in the lake is most ly under water during the rainy reason.",

            images: [
                "Assets/Rankala-Lake.jpg",
                "Assets/Rankala-Lake1.png",
                "Assets/Rankala-Lake2.webp"
            ]
        },
        "Jyotiba-Temple": {
            heading: "Jyotiba Temple",
            paragraph: "Shri Jyotiba or Kedareshvar is incarnation of Bramha, Vishnu, Mahesh and part of sage Jamadgni’s anger; and shine of 12 sun. It is another story that Adishakti created another set of Tridev i.e. Bramha, Vishnu and Mahesh which was 100 times more powerful than original Tridev to down their ego; when her motive become successful she ordered her newly created trideva to come again when she will call for her help. When Kolhasura & his army was ruling at karvir kshetra with full of unjust mehods Mahalaxmi decided to go back karvir at this time she called the trideva & they appeared in hands of Mata Vimalambuja, in the form flame. After knowing Mata’s wish that flame took form of eight years child bearing khadag (Sward), Damaru (Drum) Trishul (Trident) and Amrut Patra (Pot filled with nectar).There was a small temple in the place of today’s Jyotiba’s big temple. The original temple is built by the devotee named Naavji from village kival near Karad. In 1730, Maharaja Ranoji Shinde of Gwalior renovated the original place in a grand place. This temple is simple and has been constructed with fine black basalt stone.The other (second) kedareshvar temple is particularly standing without pillars. This temple is build about 155 years ago means in 1808 by Doulatrao Shinde. There is chopdai Temple present in between Kedarling and kedareshvar temple which is built by Pritirao Chavan, Himmatbahadur in 1750. So particularly this is a group of three temples.The 4th Temple of Goddess Rameshwari has built in 1780 by Malji Nikam, Panhalakar. In front of Kedareshvar, on a small square platform, there are two nandi’s in black stone. This is also installed by Daulatrao Shinde. On the east side of temple there is a Goddess Satvai facing towards east. On west side of temple Shree Ramling is situated facing towards east. At five to six places of temple wall, the veergal stones are fixed. The 4th Temple of Goddess Rameshwari has built in 1780 by Malji Nikam, Panhalakar. In front of Kedareshvar, on a small square platform, there are two nandi’s in black stone. This is also installed by Daulatrao Shinde. On the east side of temple there is a Goddess Satvai facing towards east. On west side of temple Shree Ramling is situated facing towards east. At five to six places of temple wall, the veergal stones are fixed. Shri Kedarnath has established twelve Jyotirlingas around Jyotiba Mountain, so he is also called as Jyotirling. In order to establish the twelve Jyotirlingas, they first established Badrikedar ling in the remembrance of their original place in Himalaya so it is called as Kedarling too.",

            images: [
                "Assets/Jyotiba-Temple.jpg",
                "Assets/Jyotiba.jpg",
                "Assets/Jyotiba1.jpg"
            ]
        },
        "Siddhagiri_Museum": {
            heading: "Siddhagiri Museum",
            paragraph: "This museum showcases different aspects of Gramjivan (village life). Gram means village and jeevan means life in the Marathi language. This initiative was the dream of Mahatma Gandhi, and was created through the vision and efforts of Siddhagiri Gurukul Foundation co. The history of self-sufficient village life in Maharshtra, before the invasion of the Mughals, is depicted in the form of cement sculptures. Each sculpture is lifelike and represents activities performed in daily village life. There were 12 Balutedars (essentially artisan castes), and 18 Alutedars who provided equipment to carry out domestic and professional tasks.The museum is spread over 7 acres (28,000 m2), and the surrounding countryside is beautiful, with lush greenery. Every aspect of village life has been depicted in almost 80 scenes that showcase more than 300 statues.The scenes of village life include:Village priest’s abode. The first scene is the house of a highly educated village priest. He performs his duties, rites and rituals like weddings and thread ceremonies, and is tasked to find auspicious days and times for any major activity such as house-building and house-warming activities, digging wells, sowing seeds, piercing nose or ears. He earns his livelihood from Dakshina (donations) he receives. He consults the Panchaang (almanac) for finding auspicious dates.Goldsmith at workIronsmith shoeing a bullockBarber shop  Village well - villagers fetching water from the public well. Nursing an elder family member Grocer’s shop - a woman visiting the grocery shop with her son. The shop-keeper is weighing items in an old weighing machine. Items like jaggery, sugar, chillies, salt, wheat, and rice are stocked. The son is asking his mother to buy kites for him.Farmer’s wada (house)House of VaidyaGrandma stitching a godhadi (quilt) Farmers ploughing his farm using a bullock-drawn plowShepherd boy with his herd of sheep Villagers performing Bhajan and Kirtan (singing Hindu devotional songs)",
            images: [
                "Assets/Siddhagiri_Museum.jpg",
                "Assets/Shiv.webp",
                "Assets/siddhagiri.jpg"
            ]
        },
        "Pahnala": {
            heading: "Pahnala Fort",
            paragraph: "Panhala is a quaint and scenic hill station situated at a height of 3200 feet above sea level and is about 20 km northwest of Kolhapur. The little hill town is credited for being the smallest city in the state of Maharashtra and measures about 7 km in circumference. Panhala offers a beautiful view of the picturesque mountains and valleys of the Sahyadri mountain ranges and it allows easy access to the Konkan region.The main attraction here is the historical Panhala Fort which is mostly identified with the Maratha warrior Chhatrapati Shivaji Maharaj. The fort has an interesting history, built between the period of 1178 and 1209 AD, by King Bhoja II, a Shilahara ruler, Panhala fort then passed on into the hands of many rulers like the Yadavas, the Bahamanis of Bidar, Mahmud Gawan and by the beginning of the 16th century it became a part of the Kingdom of Bijapur. The Adil Shahi's rebuilt most part of the Panhala Fort to give it much of its current look. In the year 1659 Shivaji Maharaj raided the fort and finally captured it in 1673, he lived here for about 1.5 years. Panhala was the state capital of the Marathas until 1782, till it was captured by the British in 1827.Sajja Kothi-Sajja Kothi built by the Mohammedans in 1008 AD, Sajja Kothi literally means 'Punishment Cell', it is a 2 storied building offering a panoramic view of the Warana valley below.It is here that Shivaji had imprisoned his son, Sambhaji for his errant ways.Built by Raja Bhoj II, the Ambar Khana includes three buildings named Ganga, Jamuna and Saraswati. The Ganga Kothi is the largest amongst them and it covers an area of around 950 sq. m and is 10.7 m in height.The reason for building the Ambar Khana was since the soil of the region was not suitable for agriculture, it was very important for the rulers to stock sufficient provisions for their armies during a siege. The granaries can store as much as 25,000 khandis of grain.The complex also has an armoury and an underground mint.Just close to this complex stands a small Shiva temple which has a peculiar linga, which changes its colour according to the temperature. Sunset point -Sunset point is located on the northern end of the Panhala fort, from this point one can  see stunning views of the rays of the setting sun strike against the western walls of the fort.Botanical Gardens -The Botanical gardens at Panhala fort, is maintained by the forest department of Panhala.With large lawns, lush greenery and tall trees around, the park offers its visitors a refreshing walk. Furthermore food stalls, boat rides and horse rides make the garden a popular picnic spot.The serene gardens on the banks of the Mund river make it a peaceful and quiet place for tourist to relax and de-stress.",
            images: [
                "Assets/Pahnala.jpeg",
                "Assets/baji-prabhu-deshpande.jpg",
                "Assets/panhala-fort.jpg"
            ]
        },
        "Kopeshwar_Mandir": {
            heading: "Kopeshwar Mandir",
            paragraph: "Panhala is a quaint and scenic hill station situated at a height of 3200 feet above sea level and is about 20 km northwest of Kolhapur. The little hill town is credited for being the smallest city in the state of Maharashtra and measures about 7 km in circumference. Panhala offers a beautiful view of the picturesque mountains and valleys of the Sahyadri mountain ranges and it allows easy access to the Konkan region.The main attraction here is the historical Panhala Fort which is mostly identified with the Maratha warrior Chhatrapati Shivaji Maharaj. The fort has an interesting history, built between the period of 1178 and 1209 AD, by King Bhoja II, a Shilahara ruler, Panhala fort then passed on into the hands of many rulers like the Yadavas, the Bahamanis of Bidar, Mahmud Gawan and by the beginning of the 16th century it became a part of the Kingdom of Bijapur. The Adil Shahi's rebuilt most part of the Panhala Fort to give it much of its current look. In the year 1659 Shivaji Maharaj raided the fort and finally captured it in 1673, he lived here for about 1.5 years. Panhala was the state capital of the Marathas until 1782, till it was captured by the British in 1827.Sajja Kothi-Sajja Kothi built by the Mohammedans in 1008 AD, Sajja Kothi literally means 'Punishment Cell', it is a 2 storied building offering a panoramic view of the Warana valley below.It is here that Shivaji had imprisoned his son, Sambhaji for his errant ways.Built by Raja Bhoj II, the Ambar Khana includes three buildings named Ganga, Jamuna and Saraswati. The Ganga Kothi is the largest amongst them and it covers an area of around 950 sq. m and is 10.7 m in height.The reason for building the Ambar Khana was since the soil of the region was not suitable for agriculture, it was very important for the rulers to stock sufficient provisions for their armies during a siege. The granaries can store as much as 25,000 khandis of grain.The complex also has an armoury and an underground mint.Just close to this complex stands a small Shiva temple which has a peculiar linga, which changes its colour according to the temperature. Sunset point -Sunset point is located on the northern end of the Panhala fort, from this point one can  see stunning views of the rays of the setting sun strike against the western walls of the fort.Botanical Gardens -The Botanical gardens at Panhala fort, is maintained by the forest department of Panhala.With large lawns, lush greenery and tall trees around, the park offers its visitors a refreshing walk. Furthermore food stalls, boat rides and horse rides make the garden a popular picnic spot.The serene gardens on the banks of the Mund river make it a peaceful and quiet place for tourist to relax and de-stress.",
            images: [
                "Assets/Kopeshwar_Mandir.jpg",
                "Assets/Khidrapur.jpeg",
                "Assets/Khidrapur1.jpg"
            ]
        }
    };

    const handleReadMoreClick = (place) => {
        setSelectedPlace(place);
    };

    const handleCloseClick = () => {
        setSelectedPlace(null);
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
                    background-color: rgba(0, 0, 0, 0.7); /* Black transparent background */
                    color: white;
                    padding: 10px;
                    font-size: 40px;
                    font-weight: bold;
                }

                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
                    z-index: 999; /* Ensure it's above other elements */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow-y: auto; /* Enable scrolling if needed */
                }

                .place-info {
                    background-color: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                    max-width: 80%;
                    max-height: 80%;
                    overflow: auto;
                    text-align: center;
                }

                .place-info h2 {
                    margin-bottom: 20px;
                }

                .place-info p {
                    text-align: left;
                }

                .image-circle {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .image-circle img {
                    width: 300px; /* Increased size */
                    height: 300px; /* Increased size */
                    border-radius: 50%;
                    object-fit: cover;
                    margin: 10px; /* Added margin for spacing between images */
                }
                .read-more-button {
                    color: white !important; /* Set text color to white */
                    background-color: orange !important; /* Set background color to orange */
                    border: none; /* Remove border */
                    padding: 8px 16px; /* Add padding for better appearance */
                    border-radius: 5px; /* Add border radius for rounded corners */
                    cursor: pointer; /* Add cursor pointer for better UX */
                    transition: background-color 0.3s, color 0.3s; /* Add smooth transition effect */
                }
                
                .read-more-button:hover {
                    background-color: darkorange !important; /* Change background color on hover */
                }
                
                
            `}</style>

            <div className="container mt-4">
                <table className="product-table">
                    <tbody>
                        <div className="center-text">
                            <h1>Places Must To Visit</h1>
                        </div>
                        <tr>
                            {/* Card 1 */}
                            <td className="product-cell">
                                <div className="card">
                                    <center><h2>महालक्ष्मी मंदिर</h2></center>
                                    <img src={placesData["Mahalakshmi Temple"].images[0]} className="card-img-top compressed-img" alt="S1" style={{ width: '100%', height: 'auto' }} />
                                    <button className="button read-more-button" onClick={() => handleReadMoreClick("Mahalakshmi Temple")}>Read More</button>
                                </div>
                            </td>
                            {/* Card 2 */}
                            <td className="product-cell">
                                <div className="card">
                                    <center><h2>भवानी मंडप</h2></center>
                                    <img src={placesData["Bhavani-Mandap"].images[0]} className="card-img-top compressed-img" alt="S2" style={{ width: '100%', height: 'auto' }} />
                                    <button className="button read-more-button" onClick={() => handleReadMoreClick("Bhavani-Mandap")}>Read More</button>
                                </div>
                            </td>
                        </tr>

                        {/* Repeat for other rows and places */}
                        <tr>
                            {/* Card 3 */}
                            <td className="product-cell">
                                <div className="card">
                                    <center><h2>न्यु पॅलेस</h2></center>
                                    <img src={placesData["New_Palace"].images[0]} className="card-img-top compressed-img" alt="S3" style={{ width: '100%', height: 'auto' }} />
                                    <button className="button read-more-button" onClick={() => handleReadMoreClick("New_Palace")}>Read More</button>
                                </div>
                            </td>
                            {/* Card 4 */}
                            <td className="product-cell">
                                <div className="card">
                                    <center><h3>रंकाळा तलाव</h3></center>
                                    <img src={placesData["Rankala-Lake"].images[0]} className="card-img-top compressed-img" alt="S2" style={{ width: '100%', height: 'auto' }} />
                                    <button className="button read-more-button" onClick={() => handleReadMoreClick("Rankala-Lake")}>Read More</button>
                                </div>
                            </td>
                        </tr>
                        {/* Repeat for other rows and places */}
                        <tr>
                            {/* Card 5 */}
                            <td className="product-cell">
                                <div className="card">
                                    <center><h2>ज्योतिबा मंदिर</h2></center>
                                    <img src={placesData["Jyotiba-Temple"].images[0]} className="card-img-top compressed-img" alt="S3" style={{ width: '100%', height: 'auto' }} />
                                    <button className="button read-more-button" onClick={() => handleReadMoreClick("Jyotiba-Temple")}>Read More</button>
                                </div>
                            </td>
                            {/* Card 6 */}
                            <td className="product-cell">
                                <div className="card">
                                    <center><h2>कणेरी मठ</h2></center>
                                    <img src={placesData["Siddhagiri_Museum"].images[0]} className="card-img-top compressed-img" alt="S2" style={{ width: '100%', height: 'auto' }} />
                                    <button className="button read-more-button" onClick={() => handleReadMoreClick("Siddhagiri_Museum")}>Read More</button>
                                </div>
                            </td>
                        </tr>
                        {/* Repeat for other rows and places */}
                        <tr>
                            {/* Card 5 */}
                            <td className="product-cell">
                                <div className="card">
                                    <center><h2>पन्हाळा किल्ला</h2></center>
                                    <img src={placesData["Pahnala"].images[0]} className="card-img-top compressed-img" alt="S3" style={{ width: '100%', height: 'auto' }} />
                                    <button className="button read-more-button" onClick={() => handleReadMoreClick("Pahnala")}>Read More</button>
                                </div>
                            </td>
                            {/* Card 6 */}
                            <td className="product-cell">
                                <div className="card">
                                    <center><h2>कोपेश्वर महादेव मंदिर</h2></center>
                                    <img src={placesData["Kopeshwar_Mandir"].images[0]} className="card-img-top compressed-img" alt="S2" style={{ width: '100%', height: 'auto' }} />
                                    <button className="button read-more-button" onClick={() => handleReadMoreClick("Kopeshwar_Mandir")}>Read More</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Overlay for displaying place info */}
            {selectedPlace && placesData[selectedPlace] && (
                <div className="overlay" onClick={handleCloseClick}>
                    <div className="place-info">
                        {placesData[selectedPlace].heading && <h2>{placesData[selectedPlace].heading}</h2>}
                        {placesData[selectedPlace].paragraph && <p>{placesData[selectedPlace].paragraph}</p>}
                        {placesData[selectedPlace].images && (
                            <div className="image-circle">
                                {placesData[selectedPlace].images.map((image, index) => (
                                    <img key={index} src={image} alt={`Image ${index + 1}`} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
            <Footer/>

        </div>
    );
}

export default Places;
