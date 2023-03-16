import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Shorts from "@mui/icons-material/Theaters";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import { Tooltip } from "@mui/material";

import "./SideBar.css";
const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <Tooltip title="Home" placement="right" arrow>
          <div className="home_icon" style={{ alignItems: "center", cursor: "pointer" }}>
            <HomeIcon />
            <p>Home</p>
          </div>
        </Tooltip>
        <Tooltip title="Shorts" placement="right" arrow>
          <div className="shorts_icon" style={{ alignItems: "center", cursor: "pointer" }}>
            <Shorts />
            <p>Shorts</p>
          </div>
        </Tooltip>
        <Tooltip title="Subscription" placement="right" arrow>
          <div className="sub_icon" style={{ alignItems: "center", cursor: "pointer" }}>
            <SubscriptionsIcon />
            <p>Subscriptions</p>
          </div>
        </Tooltip>
        <Tooltip title="Library" placement="right" arrow>
          <div className="library_icon" style={{ alignItems: "center", cursor: "pointer" }}>
            <VideoLibraryIcon />
            <p>Library</p>
          </div>
        </Tooltip>
        <Tooltip title="History" placement="right" arrow>
          <div className="history_icon" style={{ alignItems: "center", cursor: "pointer" }}>
            <HistoryIcon />
            <p>History</p>
          </div>
        </Tooltip>
      </div>
    </>
  );
};

export default SideBar;
