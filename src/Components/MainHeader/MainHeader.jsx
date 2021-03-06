//React
import React, { Component } from "react";
import { Link } from "react-router-dom";
//React
//Images
import { FiMoon } from "react-icons/fi";
//Images
//CSS
import styles from "./MainHeader.module.css";
//CSS
//Modules
import { GiHamburgerMenu } from "react-icons/gi";
//Modules
class MainHeader extends Component {
  constructor() {
    super();
    this.nightModeRef = React.createRef();
    this.hamburgerMenuContentsRef = React.createRef();
  }
  state = {
    night: false,
  };
  makeHeaderHidden = () => {
    this.hamburgerMenuContentsRef.current.style.visibility = "hidden";
    this.hamburgerMenuContentsRef.current.style.display = "none";
    this.hamburgerMenuContentsRef.current.style.opacity = "0";
  };

  render() {
    return (
      <div
        className={`${styles.MainHeader} ${
          (
            (window.scrollY /
              (window.document.body.scrollHeight - window.innerHeight)) *
              100 >
            3
              ? true
              : false
          )
            ? styles.fixx
            : null
        }`}
        style={{
          position: (
            (window.scrollY /
              (window.document.body.scrollHeight - window.innerHeight)) *
              100 >
            3
              ? true
              : false
          )
            ? "fixed"
            : "relative",

          top: (
            (window.scrollY /
              (window.document.body.scrollHeight - window.innerHeight)) *
              100 >
            3
              ? true
              : false
          )
            ? "0"
            : "0",

          zIndex: 19,
          backgroundColor: (
            (window.scrollY /
              (window.document.body.scrollHeight - window.innerHeight)) *
              100 >
            3
              ? true
              : false
          )
            ? "#757575d8"
            : "transparent",
        }}
      >
        <div className={styles.left}>
          <div className={styles.linksContainer}>
            <Link to="/">خانه</Link>
            <Link to="/computer-news">کامپیوتر</Link>
            {/* <Link to="/newest-content">سخت افزار </Link> */}
            <Link to="/mobile-news">موبایل</Link>
            <Link to="/game-news">بازی</Link>
            <Link to="/prints">چاپ ها </Link>
          </div>
          <div
            className={styles.hamburgerContainer}
            style={{ display: window.innerWidth > 800 ? "none" : "block" }}
            onClick={() => {
              this.hamburgerMenuContentsRef.current.style.visibility =
                "visible";
              this.hamburgerMenuContentsRef.current.style.display = "flex";
              this.hamburgerMenuContentsRef.current.style.opacity = "1";
            }}
          >
            <GiHamburgerMenu />
          </div>
          <div
            className={styles.hamburgerMenuContents}
            ref={this.hamburgerMenuContentsRef}
          >
            <div className={styles.close}></div>
            <div
              className={styles.absoluteOpacity}
              onClick={this.makeHeaderHidden}
            >
              {" "}
            </div>
            <Link onClick={this.makeHeaderHidden} to="/">
              خانه
            </Link>
            <Link onClick={this.makeHeaderHidden} to="/computer-news">
              کامپیوتر
            </Link>
            <Link onClick={this.makeHeaderHidden} to="/newest-content">
              سخت افزار{" "}
            </Link>
            <Link onClick={this.makeHeaderHidden} to="/mobile-news">
              موبایل
            </Link>
            <Link onClick={this.makeHeaderHidden} to="/game-news">
              بازی
            </Link>
            <Link onClick={this.makeHeaderHidden} to="/prints">
              چاپ ها{" "}
            </Link>
          </div>
        </div>
        <div
          className={styles.right}
          ref={this.nightModeRef}
          onClick={() => {
            this.nightModeRef.current.style.color = "#fff";
            document.body.classList.toggle("night");
            this.setState({
              night: !this.state.night,
            });
          }}
        >
          <FiMoon />
        </div>
      </div>
    );
  }
}

export default MainHeader;
