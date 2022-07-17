import React, { Component } from "react";
import { Fade } from "react-reveal";
import Comments from "../../../../Components/Comments/Comments";
import {
  mobileItem4__pic1,
  mobileItem4__pic2,
  mobileItem4__pic3,
  mobileItem4__pic4,
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

class MobileNews4 extends Component {
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
      <Fade left>
        <div className={styles.newsContent}>
          <h2>اینفرارد گوشی موبایل چیست و چه کاربردی داره ؟</h2>
          <p>
            اینفرارد گوشی ، چه عبارت آشنایی واسه دهه شصتیا ! الانو نگاه نکنید که
            54 روش مختلف واسه انتقال فایل اومده ، یه زمانی بود حتی بلوتوث هم
            نبود و ما با اینفرارد ، اطلاعات رو از گوشی هامون انتقال میدادیم . چه
            مصیبت هایی کشیدیم بخدا ! اما خب خیلی چیزا رو هم تجربه کردیم . خیلی
            چیزا دیدیم که بچه های الان ندیدن . اما یه سوال ، الان دیگه چرا تو
            گوشی های جدید از اینفرارد استفاده میشه ؟
          </p>
          <h2>کاربرد اینفرارد گوشی موبایل</h2>
          <p>
            الان دیگه اینفرارد در گوشی موبایل ، مثل قدیم استفاده نمیشه . الان
            گوشی های جدید اینفرارد دارن که به عنوان کنترل دستگاه های مختلف
            استفاده بشن . به این سنسور اینفرارد در گوشی ها میگن اینفرارد بلستر
            Infrared Blaster .
          </p>
          <img
            src={mobileItem4__pic2}
            data-tip="سنسور انفرارد در گوشی موبایل ال جی جی 5"
            alt="سنسور انفرارد در گوشی موبایل ال جی جی 5"
          />
          <p>
            با استفاده از اینفرارد گوشی ، شما می تونید گوشی تون رو به یه ریموت
            کنترل جهانی تبدیل کنید ، یعنی دیگه می تونید تلویزیون ، کولر گازی ،
            دی وی دی پلیر ، ریسیور ، ویدیو پروژکتور ، دوربین مدار بسته و … رو با
            گوشی تون کنترل کنید . شاید باورتون نشه اما شما با گوشی تون می تونید
            تقریبا&nbsp;232740 عدد دستگاه الکترونیکی رو کنترل کنید .&nbsp;خیلی
            خوبه دیگه نه ؟<strong>&nbsp;</strong>بعضی از گوشی ها هم به شما اجازه
            میدن که دستگاه مورد نظر خودتون رو به لیست اضافه کنید . اون دستگاه
            باید گیرنده اینفرارد داشته باشه .
          </p>
          <h2>گوشی هایی که اینفرارد دارن</h2>
          <p>
            من معروف ترین گوشی هایی که سنسور اینفرارد دارن و می تونید باهاشون
            دستگاه های مختلف رو کنترل کنید ، بهتون می گم .
          </p>
          <p>
            شرکت سامسونگ در گوشی های جدیدش مثل گلکسی اس 7 ، دیگه از اینفرارد
            استفاده نکرده . شرکت اپل هم هیچ وقت در گوشی های آیفون از اینفرارد
            استفاده نکرده . اگه گوشی ای دارید که اینفرارد نداره ، می تونید یه
            اینفرارد خارجی یا جانبی بهش وصل کنید . معمولا یه سنسور با یه کابل
            3.5 میلی متری هستش . اون کابل 3.5 میلی متری رو می زنید به جک هدفون
            گوشی تون . شکل زیر رو نگاه کنید .
          </p>
          <img
            src={mobileItem4__pic1}
            data-tip="سنسور اینفرارد جانبی برای گوشی"
            alt="سنسور اینفرارد جانبی برای گوشی"
          />
          <h2>سنسور اینفرارد گوشی موبایل کجاست ؟</h2>
          <p>
            معمولا بالای گوشی قرارش میدن . واسه اینکه شما بتونید با گوشی تون یه
            دستگاه دیگه رو کنترل کنید ، باید فرستنده اینفرارد ( گوشی ) رو در جهت
            گیرنده ( مثلا تلویزیون ) بگیرید . دقیقا مثل کنترل ، پس اینفرارد گوشی
            باید جلو باشه تا بتونید به راحتی در جهت دستگاه مقصد بگیریدش . روی
            گوشی تون رو نگاه کنید ، باید یه چیزی شبیه به عکس های زیر ببینید :
          </p>
          <img
            src={mobileItem4__pic3}
            data-tip="سنسور اینفرارد موبایل گلکسی اس 6"
            alt="سنسور اینفرارد موبایل گلکسی اس 6"
          />
          <p>
            سنسور اینفرارد یه قطعه2 یا 3 پایه است که در ابعاد خیلی کوچیک می تونه
            طراحی بشه و رنگش مشکیه . در شکل زیر ، سنسور اینفرارد گوشی گلکسی اس 5
            سامسونگ رو مشاهده می کنید .
          </p>
          <img
            src={mobileItem4__pic4}
            data-tip="اینفرارد گوشی گلکسی اس 5"
            alt="اینفرارد گوشی گلکسی اس 5"
          />
          <Comments commentsArray={this.state.commentsArray} />
        </div>
      </Fade>
    );
  }
}

export default MobileNews4;