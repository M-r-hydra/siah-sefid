//React
import React, { Component } from "react";
//React
//Images
//Images
//CSS
import styles from "../../Components/Prints/PrintItems.module.css";
//CSS
//Modules
import {
  computerItem1__pic1,
  computerItem2__pic1,
  computerItem3__pic1,
  gameItem1__pic1,
  gameItem2__pic1,
  gameItem3__pic1,
  mobileItem1__pic1,
  mobileItem2__pic1,
  mobileItem3__pic1,
} from "../../Components/NewsImage/NewsImage";
import PrintPageMapper from "../../Components/PrintPageMapper/PrintPageMapper";
import { Fade } from "react-reveal";
//Modules
class PrintOne extends Component {
  state = {
    computerItems: [
      {
        id: "computer-item-1",
        newsName: "تبلت / لپتاپ هیبریدی چیست ؟",
        newsImage: computerItem1__pic1,
        newsTextContent: "تبلت / لپتاپ های هیبریدی چه کاربردی دارند ؟",
        writeIn: "2022/04/18",
        writeBy: "علی گودرزی",
        routeToNavigate: "computer-item-1",
      },
      {
        id: "computer-item-2",
        newsName: "آیا باتری لپتاپ من سالم است ؟",
        newsImage: computerItem2__pic1,
        newsTextContent: "تست سلامت باتری لپتاپ من",
        writeIn: "2022/04/18",
        writeBy: "علی مرادی تبار",
        routeToNavigate: "computer-item-2",
      },
      {
        id: "computer-item-3",
        newsName: "قفل کنسینگتون چیست ؟",
        newsImage: computerItem3__pic1,
        newsTextContent: "از قفل کنسینگتون چه میدانید ؟",
        writeIn: "2022/04/18",
        writeBy: "علی مرادی تبار",
        routeToNavigate: "computer-item-3",
      },
    ],
    mobileItems: [
      {
        id: "mobile-item-1",
        newsName: "پاوربانک تقلبی چجوریه ؟ تشخیص پاوربانک فیک",
        newsImage: mobileItem1__pic1,
        newsTextContent: "راهنمای تشخصی پاوربانک تقلبی",
        writeIn: "2022/04/18",
        writeBy: "علی مرادی تبار",

        routeToNavigate: "mobile-item-1",
      },
      {
        id: "mobile-item-2",
        newsName: "جک هدفون چیست ؟ معنی جک 3.5 میلی متری",
        newsImage: mobileItem2__pic1,
        newsTextContent: "بررسی ساختار جک هدفون",
        writeIn: "2022/04/18",
        writeBy: "یونس عسگری",

        routeToNavigate: "mobile-item-2",
      },
      {
        id: "mobile-item-3",
        newsName: "آیا استفاده از گوشی هنگام شارژ کردن خطرناکه ؟",
        newsImage: mobileItem3__pic1,
        newsTextContent: "آیا واقعا خطرناکه ؟",
        writeIn: "2022/04/18",
        writeBy: "علی گودرزی",
        routeToNavigate: "mobile-item-3",
      },
    ],
    gameItems: [
      {
        id: "topNews__game__18__4__2022___1",
        newsTextContent:
          "شایعه: کانیه وست ایده‌ی یک بازی را به میاموتو ارائه داده بود",
        newsImage: gameItem1__pic1,
        writeIn: "06/05/2022",
        writeBy: " علی اصغر صفری  ",
        routeToNavigate: "game-item-1",
      },
      {
        id: "topNews__game__18__4__2022___2",
        newsTextContent:
          "بازی Fortnite بدون خرید هیچ اشتراکی توسط ایکس باکس کلاود قابل استریم است",
        newsImage: gameItem2__pic1,
        writeIn: "06/05/2022",
        writeBy: " علی اصغر صفری  ",
        routeToNavigate: "game-item-2",
      },
      {
        id: "topNews__game__18__4__2022___3",
        newsTextContent:
          "بازی The Callisto Protocol شدیداً استرس‌زا و ترسناک است",
        newsImage: gameItem3__pic1,
        writeIn: "06/05/2022",
        writeBy: " علی اصغر صفری  ",
        routeToNavigate: "game-item-3",
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

export default PrintOne;
