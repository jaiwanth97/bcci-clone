import React from "react";
import "./AboutUs.css";

const images = [
  { src: "./Board/RBinny1.jpg", title: "Honorary President: Roger Binny", description: "Roger Binny, born on July 19, 1955, in Bangalore, India, is a former Indian cricketer renowned for his pivotal role in India's 1983 Cricket World Cup victory. As a right-arm medium-fast bowler and a competent batsman, Binny was the highest wicket-taker for India in the 1983 World Cup, claiming 18 wickets. His ability to swing the ball both ways made him a formidable opponent on the field. Post-retirement, Binny transitioned into coaching and cricket administration. He served as a national selector and was the president of the Karnataka State Cricket Association. In October 2022, Binny was elected as the 36th President of the BCCI, succeeding Sourav Ganguly. Under his leadership, the BCCI has focused on strengthening domestic cricket infrastructure and promoting the sport at the grassroots level. Binny's extensive experience as a player and administrator continues to contribute significantly to the development of Indian cricket" },
  { src: "./Board/RajeevShukla.jpg", title: "Honorary Vice President: Rajeev Shukla", description: "Rajeev Shukla, born on September 13, 1959, in Kanpur, Uttar Pradesh, is a seasoned cricket administrator, journalist, and politician. He has been associated with the BCCI for several years and has held the position of Vice President since December 2020. Shukla is also known for his tenure as the chairman of the Indian Premier League (IPL) Governing Council, where he played a crucial role in the expansion and commercialization of the league. Beyond cricket administration, Shukla is a prominent political figure, serving multiple terms as a Member of Parliament in the Rajya Sabha representing the Indian National Congress. His dual expertise in politics and sports administration has been instrumental in navigating the complex landscape of Indian cricket governance." },
  { src: "./Board/Dev.jpg", title: "Honorary Secretary: Devajit Saikia", description: "Devajit Saikia, born on April 19, 1969, in Guwahati, Assam, is an Indian advocate, former first-class cricketer, and cricket administrator. He completed his education at Cotton College under Gauhati University, earning a bachelor's and master's degree in Economics, followed by an LLB from Old Earle Law College. Saikia represented Assam in various age-group cricket tournaments, including the CK Nayudu Trophy, Vijay Merchant Trophy, and the Ranji Trophy, playing as a wicketkeeper and middle-order batsman. Transitioning to law, he began his legal practice in December 1997 and has held positions such as Additional Advocate General of Assam and Meghalaya. In May 2021, he was appointed as the Advocate General of Assam. In cricket administration, Saikia served as the Secretary of the Assam Cricket Association and was elected as the Joint Secretary of the BCCI in October 2022. He became the Honorary Secretary of the BCCI on January 12, 2025, succeeding Jay Shah. Saikia is also a Board Director of the International Cricket Council (ICC), representing the BCCI." },
  { src: "./Board/Prabhtej-Singh-Bhatia.jpg", title: "Honorary Treasurer: Prabhtej Singh Bhatia", description: "Prabhtej Singh Bhatia has been associated with cricket administration in India, particularly through his involvement with the Chhattisgarh State Cricket Sangh. He served as the President of the Chhattisgarh State Cricket Sangh and was a member of the BCCI Apex Council until 2022. On January 12, 2025, Bhatia was elected as the Honorary Treasurer of the BCCI, following the resignation of Ashish Shelar. His experience in cricket administration at the state level and his previous involvement with the BCCI's governing bodies equip him with the expertise required to manage the financial operations of the board." },
  { src: "./Board/Gans.jpg", title: "Honorary Joint Secretary: Rohan Gauns Dessai", description: "Rohan Gauns Dessai, hailing from Xeldem in Curchorem, Goa, has been an active figure in Goan cricket administration. He served as the General Secretary of the Goa Cricket Association (GCA), where he focused on promoting transparency in operations and selections. Dessai emphasized the development of cricket infrastructure, initiating seven coaching centers across Goa and encouraging women's cricket in the state. His dedication to fostering young talent and ensuring fair selection processes has been well recognized. In January 2025, Dessai was appointed as the Honorary Joint Secretary of the BCCI, bringing his commitment to cricket development to the national stage. ." },
  { src: "./Board/Hemang-Amin.jpg", title: "Chief Operating Officer: ​Hemang Amin", description: "Hemang Amin is a prominent cricket administrator in India, serving as the Chief Operating Officer (COO) of the Indian Premier League (IPL) and previously as the Interim Chief Executive Officer (CEO) of the Board of Control for Cricket in India (BCCI) in 2020. He has been associated with the BCCI since 2010, initially handling finance and commercial operations before rising to a leadership role. Amin played a pivotal role in managing the logistics, scheduling, and execution of IPL seasons, particularly during critical periods such as the 2019 Indian General Elections and the COVID-19 pandemic, ensuring smooth conduct of the tournament. He was instrumental in securing the lucrative IPL media rights deal and streamlining the tournament’s financial operations. A finance and law expert, Amin worked with Deutsche Bank and the Bombay Stock Exchange (BSE) before joining cricket administration. His leadership is marked by strategic planning, operational efficiency, and a low-profile yet highly effective approach in managing one of the world's biggest cricket leagues." },
  { src: "./Board/justice.jpg", title: "BCCI Ethics Officer and Ombudsman:Justice Vineet Saran", description: "In July 2022, former Supreme Court judge Justice Vineet Saran was appointed as the BCCI's Ethics Officer and Ombudsman, succeeding Justice (Retd) D. K. Jain. Justice Saran, born on May 11, 1957, has had a distinguished career in the Indian judiciary. He graduated from Allahabad University in 1976 and obtained his LL.B degree subsequently. Beginning his legal practice in 1980 at the Allahabad High Court, he specialized in constitutional, civil, and criminal matters. In 1995, he served as the Additional Advocate General for Uttar Pradesh.As the BCCI's Ethics Officer and Ombudsman, Justice Saran is responsible for addressing conflicts of interest, ensuring ethical governance, and adjudicating disputes within the BCCI. His appointment reflects the BCCI's commitment to maintaining transparency and integrity in its operations​." },
];

const ImageGallery = () => {
  return (
    <div className="gallery-container">
      {images.map((img, index) => (
        <div 
          key={index} 
          className={`gallery-item ${index % 2 === 0 ? 'left' : 'right'}`}
        >
          {index % 2 === 0 ? (
            <>
              <img src={img.src} alt={img.title} className="gallery-image" />
              <div className="gallery-text">
                <h2>{img.title}</h2>
                <p>{img.description}</p>
              </div>
            </>
          ) : (
            <>
              <img src={img.src} alt={img.title} className="gallery-image" />
              <div className="gallery-text">
                <h2>{img.title}</h2>
                <p>{img.description}</p>
              </div>
              
            </>
          )}
        </div>
      ))}
    <div className="BB">
      <h2 className="BBS">BCCI Board Sub-Committees</h2>
        <p className="bbstext">The Board of Control for Cricket in India (BCCI) has established several formal Sub-Committees to oversee key cricketing, operational, and regulatory functions. 
             The Cricket Sub-Committees focus on different aspects of the game, including the Tours, Fixtures, and Technical Committee, which manages the scheduling and planning 
             of domestic and international fixtures; the Senior Tournament Committee, responsible for organizing major domestic tournaments; and the Umpires Committee, which 
             oversees the training, assessment, and appointments of match officials. The Differently-Abled Cricket Committee is dedicated to promoting inclusivity and developing 
             cricket programs for differently-abled players. On the corporate side, the Finance Committee handles budgeting and financial governance, while the Marketing and Media 
             Committee manages the promotion and broadcast rights of Indian cricket. The Disciplinary Committee ensures compliance with BCCI regulations and investigates disputes, 
             while the Cricket Advisory Committee provides guidance on team selection and player development. These sub-committees work collaboratively to uphold the integrity, 
             success, and expansion of Indian cricket at all levels.</p>
      </div>
    </div>
    
  );
  
};

export default ImageGallery;
