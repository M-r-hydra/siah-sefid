import React, { Component } from "react";
import { Fade } from "react-reveal";
import ReactTooltip from "react-tooltip";
import Comments from "../../../../Components/Comments/Comments";
import {
  mobileItem5__pic1,
  mobileItem5__pic2,
  mobileItem5__pic3,
} from "../../../../Components/NewsImage/NewsImage";
//React
//React
//Images
//Images
//CSS
import styles from "../../MASTER__STYLE.module.css";
//CSS
//Modules
//Modules

class MobileNews5 extends Component {
  state = {
    commentsArray: [],
  };
  componentDidMount() {
    if (window.innerWidth < 500) {
      window.scrollTo({ top: 127 });
    } else if (window.innerWidth > 1900) {
      window.scrollTo({ top: 190 });
    } else if (window.innerWidth > 1300) {
      window.scrollTo({ top: 120 });
    } else if (window.innerWidth < 800) {
      window.scrollTo({ top: 130 });
    }
  }
  render() {
    return (
      <Fade bottom>
        <div className={styles.newsContent}>
          <ReactTooltip />
          <h2>سنسور Proximity یا سنسور مجاورتی در گوشی موبایل چیست ؟</h2>
          <p>
            به محض اینکه گوشی رو به سمت گوشتون ببرید صفحه نمایش گوشی موبایل
            خاموش میشه ، خب خیلی ها می دونن این مسئله رو خیلی ها هم شاید اصلا به
            این قضیه دقت نکرده باشن . این کار توسط سنسور مجاورتی
            یا&nbsp;proximity Sensor انجام میشه . حالا تو این پست می خوام بگم که
            سنسور proximity چیه و چجوری کار میکنه .
          </p>
          <h2>
            <strong>تلفظ صحیح کلمه</strong>
            <i>&nbsp;proximity</i>
          </h2>
          <p>
            از اونجا که مردم ما مقاومت عجیب و غریبی تو یادگیری و به کار گیری
            کلمات انگلیسی دارن و سعی می کنن سریع یه کلمه معادل راحت طلبانه پیدا
            کنن ، شاید این کلمه بین کاربران خیلی استفاده نشه و بهش بگن سنسور
            مجاورت یا مجاورتی . در هر صورت من برای قشر کم جمعیتی که دوس دارن
            تلفظ صحیح کلمات انگلیسی تکنیکال رو بدونن میگم که تلفظ صحیح کلمه
            &nbsp;proximity در لهجه امریکایی به صورت prɑːkˈsɪm.ə.t̬i ( پراکسیمِتی
            ) و در لهجه بریتیش به صورت prɒkˈsɪm.ɪ.ti ( پراکسیمیتی ) هست . پس
            پراگزیمیتی نیست !
          </p>
          <h2>
            <strong>سنسور</strong>
            <strong> proximity </strong>
            <strong>چیست ؟</strong>
            <strong>&nbsp;</strong>
          </h2>
          <p>
            سنسور مجاورت یا&nbsp;سنسور proximity نوعی از سنسورهاست که بدون دخالت
            فیزیکی و معمولا با ارسال یک سیگنال و یا اشعه ای از الکترومغناطیس کار
            میکنه . سیگنال الکترومغناطیسی رو منتشر میکنه و منتظر تغییر در اون
            سیگنال میمونه . تغییرات سیگنال الکترومغناطیسی به منزله تغییر خروجی
            سنسور و عملکرد اون میشه .
          </p>
          <p>
            از سنسور proximity&nbsp;بیشتر در گوشی موبایل و تبلت استفاده میشه .
            این سنسور در بالاترین قسمت گوشی موبایل &nbsp;قرار داره و کارش اینه
            که وقتی گوشی به گوش و یا هر قسمت بدن نزدیک شد ، تصویر رو سیاه یا
            خاموش کنه&nbsp;. فلسفه وجودی سنسور proximity به علت لمسی بودن گوشی
            های جدیده . واسه اینکه موقع مکالمه ، با چونه ، گوش و دست خود به
            اشتباه روی نمایشگر گوشی ضربه نزنید از سنسور proximity استفاده میشه
            تا جلوی اتفاقاتی مثل قطع شدن مکالمه ، کم و زیاد شدن صدا ، فعال شدن
            حالت اسپیکر و … رو بگیره . از طرف دیگه موقعی که نمایشگر روشنه ،
            باتری مصرف میشه . خب چه نیازیه وقتی شما گوشی روی گوشتونه و نیازی به
            صفحه نمایش گوشی ندارید ، روشن باشه ؟
          </p>
          <img
            src={mobileItem5__pic2}
            data-tip="سنسور proximity روی گوشی موبایل سامسونگ"
            alt="سنسور proximity روی گوشی موبایل سامسونگ"
          />
          <h2>
            <strong>انواع&nbsp;سنسور</strong>
            <strong> proximity</strong>
          </h2>
          <p>
            سنسور proximity مخصوص گوشی موبایل نیست و در صنعت هم استفاده میشه ،
            به عبارت دیگه&nbsp;سنسور proximity یه عبارت کلیه و مدلهای مختلفی تو
            صنعت داره اما مدل هایی از این&nbsp;سنسور که در گوشی موبایل استفاده
            میشه معمولا ۲ مدل بیشتر نیست .
          </p>
          <p>■&nbsp;سنسور مجاورت خازنی .</p>
          <p>■سنسور مجاورت اینفرارد یا همون مادون قرمز .</p>
          <h2>سنسور proximity از نوع اینفرارد چگونه کار می کند ؟</h2>
          <p>
            از این نوع سنسور به وفور در گوشی های هوشمند ارزون و حتی گرون قیمت
            استفاده میشه مثل گوشی سامسونگ گلکسی اس ۴ و بر اساس اشعه مادون قرمز
            کار میکنه . دو تا دیود نوری داره ، یکیشون فرستنده و اون یکی گیرندست
            . &nbsp;یکی از اینا سیگنال می فرسته و دیگری دریافت می کنه . اونی که
            سیگنال می فرسته اسمش Infrared LED هست و اونی که بازتاب سیگنال رو
            دریافت می کنه&nbsp;proximity sensor . تا زمانی که جسمی بهش نزدیک
            نشده ، گیرنده سیگنال بازتابی رو دریافت نمی کنه و اتفاقی هم نمیفته
            ولی به محض دریافت بازتاب مادون قرمز ، به پردازنده مرکزی سیگنالی مبنی
            بر دریافت بازتاب ارسال میکنه و نمایشگر خاموش میشه . شکل زیر رو
            ببینید متوجه داستان میشید .
          </p>
          <p>
            وسط سنسور مجاورت ( گیرنده ) و دیود نوری ( فرستنده ) یه مانع قرار
            میدن تا سیگنال های این دوتا با هم تداخل ایجاد نکنه .
          </p>
          <img
            src={mobileItem5__pic3}
            data-tip="اساس کار سنسور proximity از نوع اینفرارد"
            alt="اساس کار سنسور proximity از نوع اینفرارد"
          />
          <p>
            وسط سنسور مجاورت ( گیرنده ) و دیود نوری ( فرستنده ) یه مانع قرار
            میدن تا سیگنال های این دوتا با هم تداخل ایجاد نکنه .
          </p>
          <p>شکل واقعی سنسور مجاورت مادون قرمز یا IR اینجوریه :</p>
          <img
            src={mobileItem5__pic1}
            alt="شکل واقعی سنسور proximity مادون قرمز"
            data-tip="شکل واقعی سنسور proximity مادون قرمز"
          />
          <h3>معایب سنسور Proximity اینفرارد :</h3>
          <p>
            مصرف باتریش زیاده ، فقط تو یه جهت می تونه حضور انسان رو تشخیص بده
            یعنی نقاط کور داره ، نور محیط می تونه روی کارش تداخل ایجاد کنه . در
            معرض گرما عملکردش مختل میشه ، رنگ پوست های مختلف می تونه تو عملکردش
            تاثیر بذاره . هزینه بالایی داره و محل جمع آوری میکروب میشه .
          </p>
          <h2>سنسور proximity خازنی</h2>
          <p>
            تقریبا میشه گفت رقیب جدی برای سنسورهای مادون قرمز همین
            سنسور&nbsp;proximity خازنی هست . این روش با تغییر ظرفیت خازنی کار
            میکنه . وقتی شما بدن خودتون رو به سنسور نزدیک میکنید ، میدان
            الکتریکی اطراف سنسور و در نیجه مقدار ظرفیت خازنی تغییر میکنه و این
            مسئله از طریق سنسور به پردازنده منتقل میشه و بقیه ماجرا . در حال
            حاضر خیلی استفاده نمیشه اما در آینده ای نزدیک شاهد ورود سنسورهای
            خازنی خواهیم بود چون مزیت های زیادی داره .
          </p>
          <h3>مزایای سنسور proximity خازنی</h3>
          <p>
            هزینه کمتری داره چون نیاز به یک عدد{" "}
            <a href="http://en.wikipedia.org/wiki/Light-emitting_diode">LED </a>
            و یه گیرنده نوری رو از بین میبره . باتری کمتری مصرف میکنه حدود ۱۰ تا
            ۱۵ میلی آمپر کمتر جریان میکشه . قابلیت اطمینان بیشتری داره چون مثل
            سنسور مادون قرمز تابع نور محیط نیست .
          </p>
          <p>
            الان دیگه وقتی گوشی تون رو دم گوشتون میگیرید و نمایشگرش خاموش میشه
            می دونید که چرا و چگونه این کار انجام میشه . اگه این پست براتون مفید
            بوده لطفا سیاه و سفید رو به دوستان خودتون هم معرفی کنید .
          </p>
          <Comments commentsArray={this.state.commentsArray} />
        </div>
      </Fade>
    );
  }
}

export default MobileNews5;
