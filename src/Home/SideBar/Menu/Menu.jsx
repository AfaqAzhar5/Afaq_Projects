import React from "react";
import "./Menu.css";
import HomeIcon from "@mui/icons-material/Home";
import Shorts from "@mui/icons-material/Theaters";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TrendingIcon from "@mui/icons-material/Whatshot";
import MusicIcon from "@mui/icons-material/MusicNote";
import GamingIcon from "@mui/icons-material/SportsEsports";
import NewsIcon from "@mui/icons-material/Feed";
import SportsIcon from "@mui/icons-material/EmojiEvents";
import BrowseChannel from "@mui/icons-material/AddCircleOutline";
import YtMusic from "@mui/icons-material/PlayCircle";
import KidsYt from "@mui/icons-material/QueueMusic";
import TvIcon from "@mui/icons-material/Tv";
import SettingsIcon from "@mui/icons-material/Settings";
import ReportHistory from "@mui/icons-material/Flag";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FeedbackIcon from "@mui/icons-material/Feedback";

const Menu = () => {
  return (
    <div className="menu_bar">
      <div className="menu_home">
        <div className="home_icon_menu">
          <HomeIcon />
        </div>
        <div className="menu_home_txt">
          <p>Home</p>
        </div>
      </div>
      <div className="menu_shorts">
        <div className="shorts_icon_menu">
          <Shorts />
        </div>
        <div className="menu_shorts_txt">
          <p>Shorts</p>
        </div>
      </div>
      <div className="menu_sub">
        <div className="sub_icon_menu">
          <SubscriptionsIcon />
        </div>
        <div className="menu_sub_txt">
          <p>Subscriptions</p>
        </div>
      </div>
      <div className="line_menu"></div>
      <div className="menu_library">
        <div className="library_icon_menu">
          <VideoLibraryIcon />
        </div>
        <div className="menu_library_txt">
          <p>Library</p>
        </div>
      </div>
      <div className="menu_history">
        <div className="history_icon_menu">
          <HistoryIcon />
        </div>
        <div className="menu_history_txt">
          <p>History</p>
        </div>
      </div>
      <div className="line_menu"></div>
      <div className="sign_in">
        <div className="sign_in_text">
          <p>
            Sign in to like videos,
            <br />
            comment, and subscribe.
          </p>
        </div>
        <div className="sign_in_icon">
          <PermIdentityIcon />
          <p> Sign in</p>
        </div>
      </div>
      <div className="line_menu"></div>
      <div className="explore_menu">
        <p>Explore</p>
      </div>
      <div className="menu_trending">
        <div className="trending_icon_menu">
          <TrendingIcon />
        </div>
        <div className="menu_trending_txt">
          <p>Trending</p>
        </div>
      </div>
      <div className="menu_music">
        <div className="music_icon_menu">
          <MusicIcon />
        </div>
        <div className="menu_music_txt">
          <p>Music</p>
        </div>
      </div>
      <div className="menu_gaming">
        <div className="gaming_icon_menu">
          <GamingIcon />
        </div>
        <div className="menu_gaming_txt">
          <p>Gaming</p>
        </div>
      </div>
      <div className="menu_news">
        <div className="news_icon_menu">
          <NewsIcon />
        </div>
        <div className="menu_news_txt">
          <p>News</p>
        </div>
      </div>
      <div className="menu_sports">
        <div className="sports_icon_menu">
          <SportsIcon />
        </div>
        <div className="menu_sports_txt">
          <p>Sports</p>
        </div>
      </div>
      <div className="line_menu"></div>
      <div className="menu_browse">
        <div className="browse_icon_menu">
          <BrowseChannel />
        </div>
        <div className="menu_browse_txt">
          <p>Browse Channels</p>
        </div>
      </div>
      <div className="line_menu"></div>
      <div className="more_youtube_menu">
        <p>More from Youtube</p>
      </div>
      <div className="menu_yt_music">
        <div className="yt_music_icon_menu">
          <YtMusic />
        </div>
        <div className="menu_yt_music_txt">
          <p>YouTube Music</p>
        </div>
      </div>
      <div className="menu_yt_kids">
        <div className="yt_kids_icon_menu">
          <KidsYt />
        </div>
        <div className="menu_yt_kids_txt">
          <p>YouTube Kids</p>
        </div>
      </div>
      <div className="menu_yt_tv">
        <div className="yt_tv_icon_menu">
          <TvIcon />
        </div>
        <div className="menu_yt_tv_txt">
          <p>YouTube TV</p>
        </div>
      </div>
      <div className="line_menu"></div>
      <div className="menu_settings">
        <div className="settings_icon_menu">
          <SettingsIcon />
        </div>
        <div className="menu_settings_txt">
          <p>Settings</p>
        </div>
      </div>
      <div className="menu_report">
        <div className="report_icon_menu">
          <ReportHistory />
        </div>
        <div className="menu_report_txt">
          <p>Report history</p>
        </div>
      </div>
      <div className="menu_help">
        <div className="help_icon_menu">
          <HelpOutlineIcon />
        </div>
        <div className="menu_help_txt">
          <p>Help</p>
        </div>
      </div>
      <div className="menu_feedback">
        <div className="feedback_icon_menu">
          <FeedbackIcon />
        </div>
        <div className="menu_feedback_txt">
          <p>Send feedback</p>
        </div>
      </div>
      <div className="line_menu"></div>
      <div className="first_section_txt">
        <div className="txt_section">
          <div>
            <p>About</p>
          </div>
          <div>
            <p>Press</p>
          </div>
          <div>
            <p>Copyright</p>
          </div>
        </div>
        <div className="txt_section">
          <div className="contact_link">
            <li>
              <a href="/contact">Contact us</a>
            </li>
          </div>
          <div>
            <p>Creators</p>
          </div>
        </div>
        <div className="txt_section">
          <div>
            <p>Advertise</p>
          </div>
          <div>
            <p>Developers</p>
          </div>
        </div>
      </div>
      <div className="line_menu"></div>
      <div className="second_section_txt">
        <div>
          <div className="txt_section_second">
            <div>
              <p>Terms</p>
            </div>
            <div>
              <p>Privacy</p>
            </div>
            <div>
              <p>Policy & Safety</p>
            </div>
          </div>
        </div>
        <div className="txt_section_txt">
          <p>How YouTubr works</p>
        </div>
        <div className="txt_section_txt">
          <p>Test new features</p>
        </div>
      </div>
      <div className="footer">
        <p>© 2023 Goggle LLC</p>
      </div>
    </div>
  );
};

export default Menu;
