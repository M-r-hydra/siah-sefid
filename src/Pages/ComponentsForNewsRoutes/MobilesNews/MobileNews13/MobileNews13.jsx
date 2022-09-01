import React, { Component } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import Comments from "../../../../Components/Comments/Comments";

//React
//React
//Images
//Images
//CSS
import styles from "../../MASTER__STYLE.module.css";
//CSS
//Modules
//Modules

class MobileNews13 extends Component {
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
          <h2>شارژ اولیه گوشی موبایل و تبلت</h2>
          <p>
            شارژ اولیه گوشی موبایل و تبلت یکی از تصورات رایج بین مردم هست .
            هنوزم که هنوزه خیلی ها نمی دونن که آیا واقعا باید گوشی جدید رو شارژ
            بکنن یا نه . هنوزم که هنوزه بعضی از فروشنده ها واسه خالی نموندن
            عریضه&nbsp;و اینکه نشون بدن از تکنولوژی سر در میارن ، به مشتری هاشون
            میگن که گوشی جدید رو 12 ساعت بزنید به شارژ . حالا مشتری بنده خدا با
            هزار ذوق و شوق گوشی یا تبلت جدید خریده باید 12 ساعتم منتظر باشه تا
            شارژ باتری کامل بشه . در این پست کوتاه به صورت خلاصه خدمتتون توضیح
            میدم که آیا گوشی ها و تبلت های جدید به شارژ اولیه نیاز دارن یا نه .
            حتما پست رو برای دوستان خودتون هم بفرستید .
          </p>
          <h2>قضیه شارژ اولیه گوشی دقیقا چیه ؟</h2>
          <p>
            قبل از اینکه باتری های لیتیوم یون و لیتیوم پلیمر معرفی بشن ، یه نوع
            باتری تو گوشی ها استفاده میشد به نام ” نیکل کادمیوم ” ( تلفظ صحیح ،
            نیکِل کَدمیِم : ˈkæd.mi.əm) . باتری های نیکل کادمیوم رو طوری ساخته
            بودن که حتما باید از کل فضای باتری استفاده می کردید تا باتری با کل
            فضای خودش آشنا بشه وگرنه اون قسمت هایی که بدون استفاده می موند به
            مرور زمان توسط باتری نادیده گرفته میشد . در واقع یه جورایی انگار
            باتری حافظه داشت . مثلا اگه باتری 20 درصد شارژ داشت و شما باتری رو
            تا 70 درصد شارژ می کردید ، محدوده بین 20 تا 70 درصد توی حافظه باتری
            ثبت میشد و بقیه فضای باتری یعنی زیر 20 درصد و بالای 70 درصد ، عملا
            نادیده گرفته میشد .
          </p>
          <img
            src=""
            alt=""
            data-tip="اثر حافظه یا memory effect در باتری های نیکل کادمیوم"
          />
          <p>
            البته این مسئله در طول زمان اتفاق میفتاد یه وقت فکر نکنید با یه بار
            دوبار اینجوری میشده ها ! به این عمل باتری های نیکل کادمیومی می گفتن
            Memory Effect یا ” اثر حافظه ” . البته&nbsp;منظور از حافظه این نیست
            که داخل باتری یه چیپ حافظه وجود داشته باشه ، ماهیت این باتری ها
            اینجوری بود .
          </p>
          <p>
            بنا به&nbsp;مسائلی که خدمتتون گفتم ، از همون زمان ، موقع خرید گوشی
            جدید ، فروشنده ها توصیه می کردن که باتری گوشی رو اول تخلیه کنید و
            بعد 12 ساعت شارژ کنید تا مشکل اثر حافظه بوجود نیاد . خلاصه اینجوری
            شد که قضیه شارژ اولیه گوشی موبایل شکل گرفت و تا همین الان هم بین
            مردم و فروشنده ها وجود داره .
          </p>
          <p>
            ضمنا تلفظ صحیح ” لیتیوم یون ” به صورت لیثیم آیِن
            :&nbsp;lɪθ.i.əm&nbsp;aɪ.ɑːn هست .
          </p>
          <h2>شارژ اولیه گوشی و تبلت ضرورت داره یا نه ؟</h2>
          <p>
            خب مسلما مشکل شارژ اولیه گوشی و تبلت خیلی آزار دهنده است چون فقط
            مربوط به اولین شارژ باتری نمیشه و شما باید همیشه حواستون به نحوه
            شارژ کردن گوشی یا تبلت تون باشه . واسه همین باتری های جدیدی طراحی شد
            مثل لیتیوم یون و لیتیوم پلیمر . در حال حاضر 100&nbsp;درصد گوشی ها و
            تبلت های جدید یا باتری لیتیوم یونی دارن ، یا لیتیوم پلیمر . همینجا
            بگم که باتری های لیتیوم پلیمری از لیتیوم یونی جدید تر و بهترن اما نه
            لیتیوم پلیمر و نه لیتیوم یون ، دیگه به شارژ اولیه نیاز ندارن .
          </p>
          <img src="" alt="" data-tip="شارژ اولیه گوشی و تبلت" />
          <p>
            شاید واستون جالب باشه که باتری های جدید مثل دقیقا بر عکس باتری های
            قدیمین یعنی دیگه اینجوری نیست که حتما تخلیه بشن و حتما فول شارژ بشن
            . اتفاقا همیشه توصیه میشه که هر وقت که پریز برق گیرتون اومد گوشی تون
            رو شارژ کنید درواقع شارژ پراکنده برای باتری های جدید بهتره .
          </p>
          <p>
            باتری های جدید دیگه مشکل Memory Effect یا اثر حافظه رو ندارن به همین
            دلیل ، شارژ اولیه گوشی برای باتری های جدید کلا یه چیز بی معنیه .
          </p>
          <p>
            بهترین حالت برای نگهداری باتری های جدید اینه که میزان شارژشون رو بین
            40 تا 80 درصد نگه دارید . توصیه میشه شارژ&nbsp;باتری های جدید زیر 15
            درصد نیاد و از اونطرف هم همیشه باتری رو تا 100 درصد شارژ نکنید چون
            در هر دو حالت فشار زیادی به باتری میاد . علمی تر بخوام توضیح بدم
            اینجوریه که ولتاژ توصیه شده برای باتری های جدید حدود 3.84 ولت هست و
            این ولتاژ در محدوده شارژ بین 40 تا 80 درصد اتفاق میفته . واسه اینه
            که وقتی شما گوشی جدید می خرید ، شارژ باتریش روی 40 &nbsp;50 درصد
            تنظیم شده در واقع خود شرکت سازنده باتری رو روی 40 &nbsp;50 درصد قرار
            میده تا فشار به باتری نیاد . به همین دلیل شارژ اولیه گوشی بعد از
            خرید لازم نیست و می تونید همون موقع که گوشی رو تحویل گرفتید هرجوری
            که دوست دارید با گوشی کار کنید ، مثلا بازی کنید ، برید تو اینترنت و
            یا هر کار دیگه …
          </p>
          <p>
            در انتها لازمه خدمتتون بگم که شرکت های سازنده خیلی باهوش تر این
            حرفان که به این مشکلات فکر نکنن چون اونا می خوان مشتری راحت باشه و
            عملیات فروش یه محصول زودتر انجام بشه پس خیال تون راحت باشه هیچ کدوم
            از گوشی ها و تبلت های جدید به شارژ اولیه نیاز ندارن .
          </p>
          <ReactTooltip />
          <Comments commentsArray={this.state.commentsArray} />
        </div>
      </Fade>
    );
  }
}

export default MobileNews13;
