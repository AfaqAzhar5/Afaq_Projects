import React from "react";
import Image from "./Images/1.jpg";
import "./Dashboard.css";

// const YOUTUBE_API_KEY = "AIzaSyDyueKazZ8fND2pEHaPsJGF2mMlvRYnnkI";

// function Youtube() {
//   const [videos, setVideos] = useState([]);
//   console.log("videos", videos);
//   useEffect(() => {
//     axios
//       .get(
//         `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=reactjs&key=${YOUTUBE_API_KEY}`
//       )
//       .then((response) => {
//         console.log("response", response);
//         setVideos(response.data.items);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

const Youtube = () => {
  const videoData = [
    {
      id: 1,
      imageUrl: Image,
      title: "First Video",
      channelName: "First Channel",
    },
    {
      id: 2,
      imageUrl: Image,
      title: "Second Video",
      channelName: "Second Channel",
    },
    {
      id: 3,
      imageUrl: Image,
      title: "Third Video",
      channelName: "Third Channel",
    },
    {
      id: 4,
      imageUrl: Image,
      title: "Fourth Video",
      channelName: "Fourth Channel",
    },
    {
      id: 5,
      imageUrl: Image,
      title: "Fifth Video",
      channelName: "Fifth Channel",
    },
    {
      id: 6,
      imageUrl: Image,
      title: "Sixth Video",
      channelName: "Sixth Channel",
    },
    {
      id: 7,
      imageUrl: Image,
      title: "Seventh Video",
      channelName: "Seventh Channel",
    },
    {
      id: 8,
      imageUrl: Image,
      title: "Eight Video",
      channelName: "Eight Channel",
    },
    {
      id: 9,
      imageUrl: Image,
      title: "Ninth Video",
      channelName: "Ninth Channel",
    },
    {
      id: 10,
      imageUrl: Image,
      title: "Ninth Video",
      channelName: "Ninth Channel",
    },
    {
      id: 11,
      imageUrl: Image,
      title: "Eleventh Video",
      channelName: "Eleventh Channel",
    },
    {
      id: 12,
      imageUrl: Image,
      title: "Twelveth Video",
      channelName: "Twelveth Channel",
    },
  ];

  return (
    <div className="main">
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {videoData.map((item) => (
          <div className="dashboard">
            <div className="video_container">
              <img className="thumbnail" src={item?.imageUrl} alt="Thumbnail" />
              <div className="contetnt">
                <img className="channel_icon" src={item?.imageUrl} alt="Icon" />
                <div className="info">
                  <h4 className="title">{item?.title}</h4>
                  <p className="channel_name">{item?.channelName}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Youtube;
