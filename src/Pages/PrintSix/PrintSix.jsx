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
  computerItem7__pic5,
  gameItem4__pic1,
  mobileItem7__pic1,
} from "../../Components/NewsImage/NewsImage";
//Modules
class PrintSix extends Component {
  state = {
    computerItems: [
      {
        id: "computer-item-7",
        newsName: "ساتا اکسپرس چیست ؟",
        newsImage: computerItem7__pic5,
        newsTextContent: "فلسفه وجودی ساتا اکسپرس",
        writeIn: "2022/07/04",
        writeBy: "امیررضا خلجی",
        routeToNavigate: "computer-item-7",
      },
    ],
    mobileItems: [
      {
        id: "mobile-item-7",
        newsName: "فرق سری A و M گوشی های سامسونگ چیست؟",
        newsImage: mobileItem7__pic1,
        newsTextContent: "سری های سامسونگ",
        writeIn: "2022/07/04",
        writeBy: "علی اصغر صفری",
        routeToNavigate: "mobile-item-6",
      },
    ],
    gameItems: [
      {
        id: "topNews__game__18__4__2022___4",
        newsTextContent:
          " گزارش: بازی Call of Duty Modern Warfare 2 در اوایل ژوئن رونمایی خواهد شد",
        newsImage: gameItem4__pic1,
        newsName: " ",
        writeIn: "2022/07/04",
        writeBy: " علی اصغر صفری  ",
        routeToNavigate: "game-item-4",
      },
    ],
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

export default PrintSix;
