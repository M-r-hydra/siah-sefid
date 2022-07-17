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
  computerItem10__pic1,
  computerItem10__pic2,
  computerItem10__pic3,
  computerItem10__pic4,
  computerItem10__pic5,
  computerItem10__pic6,
  computerItem10__pic7,
} from "../../../../Components/NewsImage/NewsImage";
import ReactTooltip from "react-tooltip";
//Modules

class ComputerItem10 extends Component {
  state = {};
  render() {
    return (
      <Fade bottom>
        <div className={styles.newsContent}>
          <ReactTooltip />
          <h2>کلاک پالس Clock Pulse یا پالس ساعت چیست ؟</h2>
          <p>
            کلاک پالس همون چیزیه که خیلی شنیدین . کلاک پالس همون چیزیه که برای
            فهم ساده تر ، به “سرعت پردازنده” تعبیر شده . وقتی میگید فلان
            پردازنده ۲.۳ گیگا هرتز هست منظور فرکانس کلاک پالس هست . موقع خرید
            پردازنده قطعا سرعت CPU به گوشتون خورده . امروز می خوام در مورد کلاک
            پالس یا پالس ساعت صحبت کنم . چیزی که باعث همزمانی المان های سخت
            افزاری موجود روی یک مدار الکترونیکی دیجیتال میشه . توضیحات طبقه بندی
            و به زبون ساده بیان شده بنابراین ازتون می خوام که تا انتهای پست رو
            بخونید .
          </p>
          <p>
            در این پست &nbsp;
            <a
              title="سیگنال"
              href="http://en.wikipedia.org/wiki/Signal_(electrical_engineering)"
              target="_blank"
              rel="noreferrer"
              style={{ color: "red" }}
            >
              سیگنال{" "}
            </a>
            = شکل موج
          </p>
          <h2>کلاک پالس یا سیگنال کلاک چیست ؟</h2>
          <p>
            کلاک پالس یک شکل موج مربعی هست که بین دو حالت بالا ( معمولا ۱ منطقی
            یا ۵ ولت واقعی ) &nbsp;و یک حالت پایین ( معمولا ۰ منطقی یا ۰ ولت )
            تغییر وضعیت میده . این شکل موج مربعی باعث هماهنگی بی نقصی بین اجزای
            یک مدار الکترونیکی میشه . کلاک پالس&nbsp;ویژگی های خاص خودش رو داره
            که در ادامه بیشتر توضیح میدم .
          </p>
          <img
            src={computerItem10__pic1}
            alt="
            کلاک پالس در حالت کلی و ایده ال"
            data-tip="
          کلاک پالس در حالت کلی و ایده ال"
          />
          <p>
            در شکل بالا VH و VL داریم . V که مخفف ولتاژ هست . H مخفف High یا
            بالا و L مخفف Low به معنی پایین هست . بسته به مدارات گوناگون ، یک
            منطقی می تونه متغیر باشه ، در برخی مدارات ، یک منطقی ۵ ولت هست و در
            برخی دیگه ۳ ولت . پس تا اینجا فهمیدیم که کلاک پالس یه شکل موج مربعی
            هست که اکثر مواقع بین دو مقدار ۵ ولت و صفر ولت و یا بین ۳ ولت و صفر
            ولت تغییر وضعیت میده . این کلاک پالس به صورت ایده ال هست یعنی هیچ
            وقفه زمانی برای صفر و یک شدن نداره اما کلاک پالس واقعی اینجوری نیست
            در ادامه میگم که چجوریه .
          </p>
          <h2>کلاک پالس چگونه درست می شود ؟</h2>
          <p>
            کلاک پالس در واقع حاصل دست رنج چندین قطعه و فرمول مهندسی است . تولید
            کننده پالس یا به انگلیسی Clock Generator کارش ساختن کلاک پالس هست .
            چیزی که تو همه مدارات تولید کننده پالس مشترک هست قسمت نوسانساز و
            قسمت{" "}
            <a
              title="فیدبک"
              href="http://en.wikipedia.org/wiki/Feedback"
              target="_blank"
              rel="noreferrer"
            >
              فیدبک{" "}
            </a>
            یا به عبارت دیگه تقویت کننده هست .
          </p>
          <p>
            کار نوسانساز ها و یا به انگلیسی اسیلاتور ( Oscilator ) ساختن یک شکل
            موج متناوب هست . این شکل موج در ابتدا وجود نداره و نوسانساز با
            استفاده از سلف و خازن و مقاومت و یا کریستال کوارتز درستش می کنه . در
            واقع کار اسیلاتور یه جورایی تبدیل سیگنال DC ( ولتاژ باتری یا منبع
            تغذیه DC ) به سیگنال متناوب ( نوسانی ) یا AC هست . یعنی یک ولتاژ
            ثابت مثلا ۱۰ ولتی رو به یه ولتاژ متغیر با زمان تبدیل می کنه که این
            ولتاژ به وسیله آمپلی فایر یا تقویت کننده ، تقویت و آماده استفاده
            میشه . خیلی ساده بگم که نوسان یک سیگنال الکترونیکی از شارژ و دشارژ
            خازن و یا سلف ( که کمتر از سلف استفاده میشه ) درست میشه .&nbsp;بسته
            به مقدار خازن و مقاومتی که در اسیلاتور استفاده میشه ، می تونیم زمان
            نوسان و مقدار سیگنال رو تنظیم کنیم . شکل زیر یک نوسانساز رو نشون
            میده .
          </p>
          <img
            src={computerItem10__pic2}
            alt="
            نوسانساز RC برای تولید کلاک پالس"
            data-tip="
          نوسانساز RC برای تولید کلاک پالس"
          />
          <p>
            در شکل بالا حرف R مخفف Resistor به معنی مقاومت و حرف C مخفف
            Capacitor به معنی خازن است . همونطور که می بینید شکل موج مربعی
            وابسته به شکل موج دندانه اره ای هست که خازن نوسان می کنه . یعنی خازن
            و مقاومت ( مجموعا نوسانساز ) تعیین می کنن که کلاک پالس چه مقدار در
            موقعیت یک یا High و چه مقدار در موقعیت صفر یا Low بمونه . خروجی مدار
            بالا مثل شکل موج بنفش هست فقط کمی دامنه ولتاژ بیشتری داره . شکل موج
            مشکی ، شارژ و دشارژ خازن هست . وقتی خازن شارژ میشه ، کلاک پالس High
            و وقتی خازن تخلیه میشه کلاک پالس Low میشه .
          </p>
          <p>
            نوع دیگر نوسانساز ، کریستال پیزوالکتریک هست که بسیار بسیار دقیقه .
            پیزوالکتریک به معنی تولید برق از طریق فشار هست . بسته به اندازه و
            ویژگی های کریستال ، فرکانس خاصی از داخل این کریستال نوسان می کنه .
            در مدارات کامپیوتری برای تولید کلاک از همین کریستال پیزوالکتریک
            استفاده می کنن . شکل زیر رو ببینید :
          </p>
          <img
            src={computerItem10__pic3}
            alt="کریستال نوسانساز برای تولید کلاک پالس – مادربورد کامپیوتر"
            data-tip="کریستال نوسانساز برای تولید کلاک پالس – مادربورد کامپیوتر"
          />
          <p>
            این نوسانساز با یک فرکانس خاصی کار می کنه و این سیگنال با فرکانس خاص
            به یک تولید کننده پالس یا به انگلیسی Pulse Generator فرستاده میشه .
            در شکل بالا قطعه ای که با رنگ قرمز مشخص شده کریستال هست و چیپ کناریش
            هم تولید و هماهنگ کننده کلاک پالس . داخل این چیپ ، قسمت هایی مثل
            تقسیم کننده فرکانس ( Frequency Divider ) و یا ضرب کننده کلاک ( Clock
            Multiplier ) وجود دارن . یه فرکانس مرجع که فرکانس کریستال هست باید
            به چندین و چند فرکانس تبدیل بشه مثلا پردازنده یا CPU احتیاج به کلاک
            پالس خیلی سریع داره بنابراین کلاک پالس مورد نیاز CPU داخل این چیپ و
            توسط مدار ضرب کننده کلاک ساخته میشه .
          </p>
          <p>
            سیگنال خروجی نوسانساز معمولا شکل موج سینوسی یا دندانه اره ای هست
            &nbsp;. حالا این سیگنال به تولید کننده پالس میره و خروجی تولید کننده
            پالس رو تعیین می کنه . به زبون ساده ، شکل موج دندانه اره ای که خروجی
            نوسانساز هست مشخص می کنه که چه مقدار ( از نظر زمانی ) خروجی تولید
            کننده پالس روشن و چه مقدار خاموش باشه . روشن بودن خروجی تولید کننده
            پالس یعنی یک منطقی و خاموش بودن خروجی&nbsp;تولید کننده پالس یعنی صفر
            منطقی . کلاک پالس هم همینه . صفر میشه ، یک میشه دوباره&nbsp;صفر میشه
            ، یک میشه . به شکل زیر دقت کنید .
          </p>
          <img
            src={computerItem10__pic4}
            alt="ساخت کلاک پالس با آی سی ۵۵۵"
            data-tip="ساخت کلاک پالس با آی سی ۵۵۵"
          />
          <p>
            در شکل بالا همونطور که می بینید خروجی{" "}
            <a
              title="آی سی 555"
              href="http://en.wikipedia.org/wiki/555_timer_IC"
              target="_blank"
              rel="noreferrer"
            >
              آی سی ۵۵۵
            </a>{" "}
            که یک شکل موج مربعی یا همون کلاک پالس هست ( شکل موج آبی ) به شکل موج
            دندانه اره ای که خازن تولید کرده ( شکل موج سبز ) وابسته هست و t1 و
            t2 در سیگنال سبز با t1 و t2 کلاک پالس برابره . تا زمانی که شکل موج
            خازن شکلی صعودی داره کلاک پالس یک هست و به محض نزولی شدن موج خازن
            کلاک پالس هم صفر میشه . اینجوری میشه که می تونیم زمان بندی یک کلاک
            پالس رو در اختیار بگیریم یعنی تعیین کنیم چه مدت یک باشه و چه مدت صفر
            . شکل زیر &nbsp;:
          </p>
          <img
            src={computerItem10__pic5}
            alt="
            خروجی آی سی ۵۵۵ – کلاک پالس بر اساس نوسان خازن"
            data-tip="
          خروجی آی سی ۵۵۵ – کلاک پالس بر اساس نوسان خازن"
          />
          <h2>کلاک پالس چه ویژگی هایی دارد ؟</h2>
          <h3>■ سیکل یا Cycle کلاک پالس</h3>
          <p>
            حرکت نقطه به نقطه یک شکل موج یا سیگنال رو سیکل میگن . سیکل در واقع
            قسمتی از سیگنال هست که مرتبا تکرار میشه . در ادامه با شکل نشون میدم
            .
          </p>
          <h3>■ دوره تناوب یا پریود کلاک پالس</h3>
          <p>
            بازه زمانی که کلاک پالس از یک نقطه شروع میشه و دوباره به همون نقطه
            بر میگرده رو ” دوره تناوب ” یا ” پریود ” می گن که با T نشون میدن .
            به عبارت دیگه مدت زمانی که طول میکشه تا یک سیکل کامل بشه رو دوره
            تناوب میگن . این زمان هر چی کمتر باشه بهتره و میگن فرکانس سیگنال
            بیشتره ( سرعت بیشتره ) . فرکانس و دوره تناوب برعکس همدیگه هستن .
          </p>
          <p>
            اینکه چه مدت زمان ، کلاک پالس یک باشه و چه مدت صفر ، به نیازهای مدار
            و قطعات بر میگرده . معمولا کلاک پالس ۵۰ درصد یک هست و ۵۰ درصد صفر .
            حالا طراحان مدارهای الکترونیکی ، قطعات رو طوری طراحی می کنن که با هر
            بار یک شدن و یا صفر شدن کلاک پالس ، اطلاعات جابجا بشه . در واقع واسه
            همینه که سرعت صفر و یک شدن کلاک پالس اهمیت داره . همونطور که در عکس
            زیر می بینید ، کلاک پالس از یک نقطه یک میشه ، یه مدت زمانی یک می
            مونه و صفر میشه باز یه مدت صفر می مونه و دوباره یک میشه .
          </p>
          <img
            src={computerItem10__pic6}
            alt="
            کلاک پالس در حالت واقعی
            "
            data-tip="
          کلاک پالس در حالت واقعی
          "
          />
          <p>
            یه توضیح داخل پرانتز بگم که هیچ قطعه الکترونیکی به صورت ایده ال کار
            نمی کنه همیشه یک سری تلفات زمانی و گرمایی داریم . ایده ال برای قصه و
            کتاب هاست . کلاک پالس واقعی به صورت شکل بالاست . یعنی یک مدت زمان
            کوتاهی طول میکشه تا شکل موج تغییر وضعیت بده که به زمان صعود ( Rising
            Time ) &nbsp;و زمان نزول ( Falling Time ) تعبیر میشن . واسه همینه که
            سیگنال بالا یه مقدار کج رسم شده .
          </p>
          <h3>■ فرکانس کلاک پالس</h3>
          <p>
            تعداد دفعاتی که کلاک پالس در مدت زمان ۱ ثانیه ( دقت کنید ) از یک
            نقطه شروع و به همون نقطه بر میگرده رو فرکانس میگن که با حرف F نشون
            میدن . به زبون ساده تعداد سیکل در یک ثانیه رو فرکانس میگن .
          </p>
          <p>
            واحد فرکانس Hertz به فارسی هرتز هست که به طور اختصار Hz نمایش میدن .
            الان مثلا فرکانس برق شهر ۵۰ هرتز هست یعنی ۵۰ بار در ثانیه از یک نقطه
            شروع و به همون نقطه حرکت میکنه . یعنی در یک ثانیه ۵۰ تا سیکل رو کامل
            می کنه . حالا اگه تعداد دفعات حرکت از یک نقطه به همون نقطه زیاد باشه
            میگن سیگنال ، فرکانسش بالا هست و به کیلو هرتز ، مگا هرتز و گیگاهرتز
            بیان می کنن .&nbsp;مثلا میگن سرعت پردازنده&nbsp;&nbsp;۲.۳ گیگاهرتز
            هست این یعنی کلاک پالس داخلی پردازنده ۲ میلیارد و ۳۰۰ میلیون بار در
            ثانیه از یه نقطه به نقطه مشابه حرکت می کنه ( خیلی حرفه تو ۱ ثانیه !!
            ) . یعنی پردازنده قادر به پردازش ۲ میلیارد و ۳۰۰ میلیون داده در یک
            ثانیه هست و به همین دلیله که این سرعت مهمه . البته پردازش اطلاعات و
            تعداد اون به عوامل زیادی در پردازنده بستگی داره که جاش اینجا نیست .
          </p>
          <img
            src={computerItem10__pic7}
            alt="تعریف سیکل و فرکانس کلاک پالس"
            data-tip="تعریف سیکل و فرکانس کلاک پالس"
          />
          <p>
            مثلا در شکل بالا فرکانس سیگنال ۲ هرتز هست یعنی در هر ۱ ثانیه دو سیکل
            زده میشه . سیکل رو از هر نقطه شکل موج می تونید فرض کنید اما باید به
            همون نقطه برگرده . در شکل بالا نقاط قرمز رو مشخص کردم .
          </p>
          <h2>
            منظور از همزمانی یا Synchronous توسط کلاک پالس در مدارات الکترونیکی
            چیست ؟
          </h2>
          <p>
            با یه مثال عمل همزمانی در الکترونیک رو توضیح میدم . فرض کنید ۱۰ تا
            اتاق داریم که هر کدوم یه مامور دارن ، این آقایون مامور ( شاید زن
            باشن معلوم نیست ! ) در هر بار که در باز میشه به صورت هماهنگ با
            همدیگه ، فقط اجازه ورود ۲ نفر رو به داخل میدن . پس به صورت همزمان ۲۰
            نفر وارد میشن ، نه کمتر نه بیشتر ، درسته ؟ در مدارات الکترونیک هم
            همینه ، به جای اینکه مامور بزارن اومدن یک سیگنال ( کلاک پالس ) درست
            کردن که قطعات الکترونیکی رو به صورت همزمان فعال میکنه . به عبارت
            دیگه ، با هر بار روشن شدن کلاک پالس ، قطعات اجازه ورود اطلاعات
            محدودی رو دارن و برای دریافت اطلاعات بعدی باید تا روشن شدن کلاک بعدی
            صبر کنن . البته این صبر انقدر زود تموم میشه که هیچ بنی جنبنده ای
            متوجه نمیشه .
          </p>
          <h2>چرا از کلاک پالس در مدارات الکترونیکی استفاده می شود ؟</h2>
          <p>
            به این لیل که سر هر چهار راه چراغ راهنمایی نصب کردن . فقط ۱۰ ثانیه ۱
            چهار راه پر ترافیک رو بدون چراغ راهنمایی تصور کنید ، همینجوری با
            وجود چراغ راهنمایی هر راننده فکر می کنه حق با اونه حالا فکر کنید
            واقعا چراغ نباشه و هر کی بخواد وارد چهار راه بشه . در مورد قطعات
            الکترونیکی هم همین مسئله صدق می کنه . اگه هر قطعه ای بخواد هر زمان
            که دوس داره اطلاعات رو به پردازنده بفرسته و پردازنده هم هر ورودی که
            میگیره رو هر جور که دوس داره به خروجی تبدیل کنه ، دیگه معلومه چی
            میشه . کلاک پالس میاد میگه هر وقت من یک شدم ، فلان دستور و هر وقت
            صفر شدم و دوباره یک شدم دستور بعدی اجرا بشه .
          </p>
          <p>
            از طرف دیگه ، ورودی هایی که به مدارات الکترونیکی داده میشه بعد از
            پردازش به خروجی تبدیل میشه ، این پردازش معمولا زمان می بره ( زمانی
            که خیلی خیلی کمه اما وجود داره ) . خروجی یه مدار می تونه ورودی یه
            مدار دیگه باشه حالا اگه ورودی بعد از گذشت زمان تبدیل به خروجی بشه و
            این خروجی به ورودی مدار بعدی بره و … فکر کنید چه نا هماهنگی زمانی
            بوجود میاد . حالا اگه مدت کلاک پالس رو بیشتر از مدت زمان پردازش
            اطلاعات در نظر بگیرن مشکل حل خواهد شد .
          </p>
          <p>
            بحث کلاک پالس واقعا پیچیده اس منظور اینکه اینجا نمیشه بجث رو بیشتر
            از این باز کرد فقط خواستم یه ذهنیتی در مورد سرعت پردازنده ها پیدا
            کنید و وقتی صحبت از سرعت کلاک ، فرکانس کلاک و … شد ، بدونید که دارن
            در مورد چی صحبت می کنن .
          </p>
        </div>
      </Fade>
    );
  }
}

export default ComputerItem10;
