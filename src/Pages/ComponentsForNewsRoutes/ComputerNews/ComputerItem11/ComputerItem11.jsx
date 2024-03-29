//React
import React, { Component } from "react";
//React
//Images
//Images
//CSS
import styles from "../../MASTER__STYLE.module.css";
//CSS
//Modules
import { Fade } from "react-reveal";
import {
  computerItem11__pic1,
  computerItem11__pic2,
  computerItem11__pic3,
  computerItem11__pic4,
} from "../../../../Components/NewsImage/NewsImage";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
//Modules

class ComputerItem11 extends Component {
  state = {};
  render() {
    return (
      <Fade bottom>
        <div className={styles.newsContent}>
          <ReactTooltip />
          <h2>چرا اطلاعات حافظه رم RAM با قطع برق پاک می شود ؟</h2>
          <p>
            حافظه رم RAM با قطع برق اطلاعاتش پاک میشه ، همه این مسئله رو می دونن
            اما شاید خیلی ها علت اصلی این قضیه رو ندونن چون دلیل این امر کاملا
            الکترونیکی هست و مربوط به ساختار حافظه رم RAM اون هم از نوع{" "}
            <a
              title="رم داینمیک"
              href="https://en.wikipedia.org/wiki/Dynamic_random-access_memory"
              rel="noreferrer"
            >
              DRAM{" "}
            </a>
            هست . در ادامه به طور مفصل توضیح میدم .
          </p>
          <h3>■ حافظه رم RAM داینمیک یا DRAM</h3>
          <p>
            از یک خازن و یک عدد ترانزیستور برای نگه داشتن یک بیت استفاده میکنه
            یعنی به زبون ساده تر ، اگه رم 128 بیت باشه از 128 عدد خازن و 128 عدد
            ترانزیستور کنار اون خازن ها استفاده میشه . در ادامه طرز کار DRAM رو
            میگم .
          </p>
          <h3>■ حافظه رم RAM استاتیک یا SRAM</h3>
          <p>
            از 4 یا 6 عدد ترانزیستور برای نگهداری هر بیت استفاده میکنه . در واقع
            اون 4 یا 6 ترانزیستور باهم دیگه تشکیل یک FLIP-FLOP رو میدن که بچه
            های الکترونیک آشنایی کامل دارن و بچه های کامپیوتر هم کم و بیش می
            دونن چی میگم . از حافظه رم RAM استاتیک یا SRAM به دلیل سرعت بالا ،
            بیشتر در حافظه های کش که در پردازنده یا CPU به کار میره ، استفاده
            میشه .
          </p>
          <p>
            دونستن طرز کار حافظه رم RAM تغییر فاز یا PRAM هم نه به درد این دنیا
            تون می خوره و نه به درد آخرت تون .
          </p>
          <h2>
            حافظه رم RAM&nbsp;مورد استفاده در کامپیوتر و لپ تاپ از چه نوع است ؟
          </h2>
          <p>
            حافظه ای که در کامپیوتر و لپ تاپ استفاده میشه ( منظور همون رمی که
            روی اسلات مادربورد نصب میشه ) از نوع DRAM هست . حالا چرا ؟ حافظه رم
            RAM داینمیک یا DRAM برای نگه داشتن هر بیت فقط به یک خازن و یک
            ترانزیستور احتیاج داره که با پیشرفت تکنولوژی ساخت مدارات مجتمع ، این
            خازن و ترانزیستور بسیار بسیار کوچک ساخته میشن و خب ابعاد کوچک یک
            کالای تولیدی به منزله ارزون تموم شدن اونه ( در بسیاری از موارد ) .
            از طرفی حافظه رم RAM استاتیک یا SRAM به دلیل استفاده از 4 یا&nbsp; 6
            ترانزیستور برای نگه داشتن یک بیت ، هم فضای بیشتری می طلبه و هم گرون
            تر تموم میشه اما خب در عوض سرعتش بیشتر از حافظه رم RAM داینمیک یا
            DRAM هست .
          </p>
          <img
            src={computerItem11__pic1}
            alt="حافظه رم RAM داینمیک یا DRAM با 8 مدار مجتمع"
            data-tip="حافظه رم RAM داینمیک یا DRAM با 8 مدار مجتمع"
          />
          <h2>
            چرا اطلاعات موجود در&nbsp;حافظه رم RAM موقتی است و با قطع برق از بین
            می رود ؟
          </h2>
          <p>
            گفتم که داخل چیپ ست های رم کامپیوتر و لپ تاپ ، ترکیبی از ترانزیستور
            و خازن هست که مامور نگهداری بیت ها هستند . خازن ها شارژ و دشارژ میشن
            . شارژ که میشن یعنی بیت روشن یا 1 منطقی یا 5 ولت و وقتی دشارژ میشن
            یعنی بیت خاموش یا 0 منطقی یا 0 ولت . ترانزیستور هم به عنوان سوئیچ
            عمل میکنه و به مدارات کنترل اجازه میده تا اطلاعات موجود در خازن ها
            رو بخونن و یا تغییر بدن .
          </p>
          <p>
            خازن یه خاصیتی داره ، شما اگه یه خازن رو شارژ کنی و کوچکترین مسیری
            برای تخلیه شارژ اون واسش بسازی ، به مرور زمان و بسته به ثابت زمانی
            مدار ( افراد غیر الکترونیکی خیلی جدی نگیرن عبارت آخر رو ) شارژ خازن
            خالی میشه . در حافظه رم RAM هم خازن با ترانزیستور در ارتباط هست و
            مسیر تخلیه شارژ براش فراهم شده . اگه حتی میلی ثانیه ای برق بهش نرسه
            ، شارژش تخلیه میشه و تخلیه شارژ خازن در حافظه رم RAM هم به منزله از
            دست رفتن اطلاعات است . به همین منظور ، وظیفه کنترل کننده حافظه که به
            طور مفصل در پست ”{" "}
            <Link to="/computer-item-11" style={{ color: "red" }}>
              Dual channel{" "}
            </Link>
            &nbsp;چیست ” توضیح دادم ، اینه که به طور مرتب این خازن ها رو زنده
            نگه داره یا به اصطلاح رفرش refresh کنه .
          </p>
          <img
            src={computerItem11__pic2}
            alt="
            شکل موج شارژ و دشارژ خازن
            "
            data-tip="
          شکل موج شارژ و دشارژ خازن
          "
          />
          <h2>نگاهی به ساختار DRAM</h2>
          <p>
            در تصویر زیر نحوه اتصال خازن و ترانزیستور رو می بینید که با همدیگه
            تشکیل یک سلول حافظه رو میدن . از کنار هم گذاشتن این سلول ها به سطر و
            ستون های زیادی می رسیم . هر کدوم از این سلول ها توسط یک سطر و یک
            ستون آدرس پذیر میشن . یعنی مثلا اگه بخوایم به سلول 6 که در تصویر
            مشخص کردم، آدرس بدیم و کنترلش کنیم باید خط آدرس های متصل به سطر 2 و
            ستون 2 فعال بشن و یا اگه سلول 7 رو بخوایم باید سطر 2 و ستون 3 فعال
            بشن .
          </p>
          <img
            src={computerItem11__pic3}
            alt="ساختار حافظه رم RAM داینمیک یا DRAM"
            data-tip="ساختار حافظه رم RAM داینمیک یا DRAM"
          />
          <p>
            در نگاه کلی تر میشه تصویر زیر رو هم نشون بدیم . خطوط قرمز ، همین سطر
            و ستون هایی هستند که در هر کدوم از مختصاتش ( مثلا محل تقاطع سطر یک و
            ستون 3 و یا هر چی دیگه) یک سلول حافظه ( یک خازن و یک ترانزیستور )
            قرار داره .
          </p>
          <img
            src={computerItem11__pic4}
            alt="سطر و ستون سلول حافظه در DRAM"
            data-tip="سطر و ستون سلول حافظه در DRAM"
          />
        </div>
      </Fade>
    );
  }
}

export default ComputerItem11;
