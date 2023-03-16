import React from "react";
import Image from "./Images/1.jpg";
import Youtube from "./Api";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <Youtube />
    // <div className="dashboard">
    //   <div className="video_container">
    //     <img className="thumbnail" src={Image} alt="Thumbnail" />
    //     <div className="contetnt">
    //       <img className="channel_icon" src={Image} alt="Icon" />
    //       <div className="info">
    //         <h4 className="title"> Youtube clone 2023 working properly</h4>
    //         <p className="channel_name">Afaq Azhar</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Dashboard;
