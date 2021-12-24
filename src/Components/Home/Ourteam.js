import React, { useState } from "react";
import "./Ourteam.css";
import zaid_pic from '../../Assets/team/im11.jpg';
import aya_pic from '../../Assets/team/im10.webp';
import tharaa_pic from '../../Assets/team/im1.jpg';
import mahdi_pic from '../../Assets/team/im16.jpg';
import shatnawi_pic from '../../Assets/team/im23.jpg';
function Team (props) {
const [state,setState] = useState([ { name: "Zaid Samamah", title: "Scrum Master", image: zaid_pic },
    { name: "Tharaa Ibrahim", title: "Product Owner", image: tharaa_pic },
    { name: "Aya Mohammad", title: "Web Developer", image: aya_pic },
    { name: "Mahdi Suleiman", title: "Web Developer", image: mahdi_pic },
    { name: "Abdelrahman Shatnawi", title: "Web Developer", image: shatnawi_pic }])
    
    return (
      <div className='ourteam-container'>
        <h2 className="home-heading">Our Team</h2>
        <div className="memberContainer">
          {state.map((teamInfo,index) => {
            return (
              <div id={index} className="members">
                <img width="100%" src={teamInfo.image} alt="Team Member" className='ourteam-img'/>
                <h4>{teamInfo.name}</h4>
                <p>{teamInfo.title}</p>
                <a
                  id="contactIcon"
                  href="https://www.facebook.com/"
                  ><i className="fab fa-facebook-f"></i></a>
                <a
                  id="contactIcon"
                  href="https://www.linkedin.com/"
                  ><i className="fab fa-linkedin-in"></i></a>
                <a
                  id="contactIcon"
                  href="https://www.twitter.com/"
                  ><i className="fab fa-twitter"></i></a>
              </div>
            );
          })}
      </div>
      </div>
    );
  }
  export default Team;
  