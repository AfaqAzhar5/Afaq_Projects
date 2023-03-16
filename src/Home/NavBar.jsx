import React, { useState } from "react";
import "./NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { Tooltip } from "@mui/material";

import Menu from "./SideBar/Menu/Menu";

const NavBar = ({ menu, propMenu }) => {
  const [show, setShow] = useState(false);
  const [crosss, setCross] = useState();
  return (
    <div className="navbar">
      <div className="left_navbar">
        <div
          className="menu_icon"
          onClick={() => {
            propMenu(!menu);
          }}
          style={{ cursor: "pointer" }}
        >
          <MenuIcon />
        </div>
        <div className="logo_icon">
          <Tooltip title="YouTube Home" placement="top">
            <a href="https://www.freeiconspng.com/img/46020" title="Image from freeiconspng.com">
              <img
                src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png"
                width="100"
                alt="Youtube Logo PNG Transparent Image"
              />
            </a>
          </Tooltip>
        </div>
      </div>
      <div className="middle_navbar">
        <div
          className={show ? (crosss ? "search_txt2" : "search_txt1") : "search_txt"}
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
        >
          {show && (
            <div className="search_icon_hide" style={{ cursor: "pointer" }}>
              <SearchIcon />
            </div>
          )}
          <input
            type="text"
            placeholder="Search"
            value={crosss}
            onChange={(e) => setCross(e.target.value)}
          />
          {crosss && (
            <div className={show ? "cross_icon_border" : ""}>
              <div
                className="cross_icon"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCross("");
                }}
              >
                <CloseIcon />
              </div>
            </div>
          )}
          <Tooltip title="Search" placement="bottom">
            <div className="search_icon" style={{ cursor: "pointer" }}>
              <SearchIcon />
            </div>
          </Tooltip>
        </div>
        <Tooltip title="Search with your voice" placement="bottom">
          <div className="mic_icon" style={{ cursor: "pointer" }}>
            <MicIcon />
          </div>
        </Tooltip>
      </div>
      <div className="right_navbar">
        <Tooltip title="Settings" placement="bottom">
          <div className="more_icon" style={{ cursor: "pointer" }}>
            <MoreVertIcon />
          </div>
        </Tooltip>
        <div className="sign_in_icon_navbar">
          <AccountCircleIcon />
          <p> Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
