//React
import React, { Component } from "react";
//React
//Images
//Images
//CSS
import styles from "../../Components/Prints/PrintItems.module.css";
//CSS
//Modules
import { Fade } from "react-reveal";
import PrintPageMapper from "../../Components/PrintPageMapper/PrintPageMapper";
import {
  computerItem10__pic1,
  mobileItem5__pic2,
} from "../../Components/NewsImage/NewsImage";
//Modules
class PrintFour extends Component {
  state = {
    computerItems: [
      {
        id: "computer-item-10",
        newsName: "کلاک پالس یا پالس ساعت چیست ؟ ",
        newsImage: computerItem10__pic1,
        newsTextContent: "سیگنال کلاک چیست ؟",
        writeIn: "2022/04/18",
        writeBy: "علی مرادی تبار",
        routeToNavigate: "computer-item-10",
      },
    ],
    mobileItems: [
      {
        id: "mobile-item-5",
        newsName: "حسگر مجاورتی گوشی موبایل چیست و چه کاربردی داره ؟",
        newsImage: mobileItem5__pic2,
        newsTextContent: "وظیفه سنسور مجاورت گوشی چیست ؟",
        writeIn: "2022/06/06",
        writeBy: " حسین سیاهوشی ",
        routeToNavigate: "mobile-item-5",
      },
    ],
    gameItems: [],
  };
  render() {
    return (
      <div className={styles.printCustomConntainer}>
        <h1>کامپیوتر</h1>
        <Fade top>
          <PrintPageMapper printItems={this.state.computerItems} />
        </Fade>
        <h1>موبایل</h1>
        <Fade bottom>
          <PrintPageMapper printItems={this.state.mobileItems} />
        </Fade>
        <h1>بازی</h1>
        <Fade top>
          <PrintPageMapper printItems={this.state.gameItems} />
        </Fade>
      </div>
    );
  }
}

export default PrintFour;
