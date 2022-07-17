//React
import React, { Component } from "react";
//React
//Images
//Images
//CSS
import styles from "../../MASTER__STYLE.module.css";
//CSS
//Modules
import ReactTooltip from "react-tooltip";
import Comments from "../../../../Components/Comments/Comments";
import { Fade } from "react-reveal";
//Modules

class ComputerItem5 extends Component {
  state = {
    commentsArray: [
      {
        id: "c5-1",
        name: "مریم",
        comment:
          "  میخواستم لپتاپ بخرم ، این مطلب رو خوندم ، خیلی کمکم کرد ، ممنون ام ",
      },
      {
        id: "c5-2",
        name: "ایمان",
        comment: " اطلاعات خیلی مفید و کامل بود و تشکر  ",
      },
    ],
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
          <h2>لپ تاپ بدون سیستم عامل یعنی چه ؟ راهنمای خرید لپ تاپ</h2>
          <p>
            اگر لپ تاپ خریده باشید یا قصد خرید داشته باشید حتما متوجه شدین که تو
            بازار لپ تاپ هایی وجود دارن که سیستم عامل ندارن . در این پست کوتاه
            میخوام خدمت تون توضیح بدم که لپ تاپ بدون سیستم عامل یعنی چی و آیا
            […]
          </p>
          <p>
            اگر لپ تاپ خریده باشید یا قصد خرید داشته باشید حتما متوجه شدین که تو
            بازار لپ تاپ هایی وجود دارن که سیستم عامل ندارن . در این پست کوتاه
            میخوام خدمت تون توضیح بدم که لپ تاپ بدون سیستم عامل یعنی چی و آیا
            خرید لپ تاپ بدون سیستم عامل کار درستیه یا نه . اگر قصد خرید لپ تاپ
            دارید اکیدا توصیه می کنم این پست کوتاه رو بخونید چون نکاتی که در این
            صفحه عرض کردم موقع خرید لپ تاپ اهمیت بسیار زیادی دارن که موقع خرید
            فروشنده ممکنه بهتون نگه ! اگر زمان یا حوصله خوندن این متن رو ندارید
            توصیه می کنم حتما این ویدیو کوتاه رو ببینید .
          </p>
          <h2>سیستم عامل چیه ؟</h2>
          <p>
            سیستم عامل یا به انگلیسی Operating System در واقع یک نرم افزار
            سیستمی بسیار پیچیده است که روی یک دستگاه کامپیوتری نصب میشه ( مثه لپ
            تاپ یا گوشی موبایل و… ) . وظیفه سیستم عامل اینه که بین کاربر و قطعات
            سخت افزاری ارتباط ایجاد کنه . سیستم عامل از طریق برنامه ها دستورات
            کاربر رو دریافت میکنه و به سخت افزار انتقال میده و سخت افزار هم این
            دستورات رو اجرا میکنن . بحث سیستم عامل خیلی پیچیده است و تو چند خط
            نمیشه توضیح داد اما همین قدر بدونید کافیه ؛ ویندوز ، لینوکس و مک 3
            نمونه از مهم ترین و پرطرفدارترین سیستم عامل های دنیا هستن . یک
            کامپیوتر بدون سیستم عامل مثه یه انسان مرده است .
          </p>
          <h2>لپ تاپ بدون سیستم عامل یعنی چی ؟</h2>
          <p>
            شرکت های سازنده لپ تاپ ، دو نوع لپ تاپ به بازار میدن . بعضی از لپ
            تاپ ها با سیستم عامل فروخته میشن و بعضی ها شون هم بدون سیستم عامل .
            منظور از لپ تاپ بدون سیستم عامل اینه که هیچ سیستم عاملی روش نصب نیست
            ؛ به عبارت ساده تر ویندوز نداره و شما باید خودتون یه سیستم عامل روش
            نصب کنید ( مثلا ویندوز 10 ) . البته اینکه میگن « سیستم عامل نداره »
            خب درست نیست چون روی این دستگاه ها سیستم عامل DOS نصبه تا بتونید یک
            سری دستور های سیستمی رو روی دستگاه تون اجرا کنید . اما خب چون الان
            دیگه کاربران تصورشون از سیستم عامل یه نرم افزار شبیه ویندوزه دیگه تو
            بازار هم اصطلاح « لپ تاپ بدون سیستم عامل » جا افتاده .
          </p>
          <h2>سیستم عامل نصب شده روی لپ تاپ ها</h2>
          <p>لپ تاپ های موجود در بازار معمولا یکی از 3 سیستم عامل رو دارن :</p>
          <h3>■ سیستم عامل مایکروسافت ویندوز</h3>
          <p>
            ویندوز محبوب ترین سیستم عامل دنیاست که توسط شرکت مایکروسافت تولید و
            عرضه میشه ( بیل گیتس و دوستان ) . ویندوز یک سیستم عامل تجاریه ؛ یعنی
            طبق قوانین تجارت بین المللی و حقوق مولف ( کاپی رایت{" "}
            <a
              style={{ color: "red" }}
              href="https://en.wikipedia.org/wiki/Copyright"
            >
              Copy right
            </a>
            ) هر کسی که بخواد از ویندوز استفاده کنه باید یک لایسنس بخره ! قیمت
            لایسنس نسخه Home ویندوز 10 حدودا 100 دلاره و نسخه Pro هم حدودا 200
            دلار . البته لایسنس ویندوزی که شرکت ها روی لپ تاپ شون نصب می کنن از
            نوع OEM هست که خب خیلی ارزون تر از لایسنس اصلی ویندوزه . شرکت های
            سازنده لپ تاپ برای کاهش هزینه ها ، روی لپ تاپ هاشون ویندوز OEM نصب
            میکنن . &nbsp;متاسفانه لایسنس های OEM هم یه دردسر هایی دارن که آخرش
            پشیمون تون میکنه و کاربر ترجیح میده بره یه لایسنس بخره .
          </p>
          <h3>■ سیستم عامل لینوکس</h3>
          <p>
            سیستم عامل لینوکس یک نرم افزار کاملا رایگان و متن بازه . لینوکس
            امنیت بسیار بالایی داره اما متاسفانه کار کردن با لینوکس یکم سخته به
            همین دلیل خیلی از کاربران ازش میترسن و حوصله یاد گرفتنش رو هم ندارن
            . همونطور که عرض کردم و احتمالا می دونید لینوکس یه سیستم عامل متن
            بازه یعنی هر کسی می تونه کد های لینوکس رو داشته باشه و تغییر بده و
            ازش یه سیستم عامل جدید بسازه ! به همین دلیل نسخه های بسیار زیادی از
            لینوکس تولید و به کاربران سراسر دنیا عرضه شده اما شرکت های سازنده لپ
            تاپ معمولا « لینوکس اوبونتو Ubuntu » و یا « لینوکس نعنا یا مینت Mint
            » رو روی لپ تاپ ها نصب می کنن چون کار کردن با این دو نسخه از لینوکس
            یکم راحت تره . لینوکس برای کاربری عمومی خوبه اما برای بازی و کارای
            تخصصی یکم آدمو دق میده . این بد نیست بدونید که اغلب ، برنامه نویس ها
            از لینوکس استفاده می کنن و به درد کاربرای مبتدی نمیخوره .
          </p>
          <h3>■ سیستم عامل اپل مک</h3>
          <p>
            سیستم عامل مک Mac&nbsp;توسط شرکت اپل تولید و عرضه میشه . این سیستم
            عامل به طور انحصاری روی مک بوک Macbook ( ) و آیمک iMac ( کامپیوتر
            AIO اپل ) نصب میشه . این سیستم عامل رو به راحتی نمیشه روی سایر PC ها
            نصب کرد . قیمت مک بوک ها بسیار گرونه و کسی که می تونه مک بوک بخره
            پول سیستم عامل دیگه براش مهم نیست و نیازی به پردازش نداره البته مک
            بوک برای کاربران معمولی خیلی مناسب نیست و بیشتر گرفیست ها و برنامه
            نویس ها ازش استفاده میکنن .
          </p>
          <h2>مزایای لپ تاپ بدون سیستم عامل</h2>
          <p>
            به طور کلی خرید لپ تاپ بدون سیستم عامل 3 تا مزیت مهم داره که هر کدوم
            رو به اختصار خدمت تون توضیح میدم :
          </p>
          <p>
            مهم ترین مزیت لپ تاپ بدون سیستم عامل برای ما ایرانی ها اینه که نسبت
            به لپ تاپ هایی که ویندور قانونی دارن ، ارزون تره . همونطور که خدمت
            تون عرض کردم شرکت های سازنده لپ تاپ روی دستگاه هاشون ویندوز های
            لایسنس دار نصب میکنن و هزینه لایسنس ویندوز به قیمت لپ تاپ اضافه میشه
            و در واقع رایگان نیست ! در حالی که خرید ویندوز لایسنس دار برای ما
            ایرانی ها کلا خنده داره . چون از یه طرف شرکت مایکروسافت به دلیل
            تحریم های سیاسی به ایرانی ها خدمات نمیده و از طرف دیگه اگر روی
            ویندوز لایسنس دار نرم افزار کرک شده نصب کنید ، دیگه با ویندوز کرک
            شده فرقی نداره چون به لحاظ امنیتی آسیب میبینه . مسئله مهم تر اینه که
            واقعا ایرانی ها با این درآمد ناچیز ، توان خرید این همه برنامه رو
            ندارن . اگر یه حساب سرانگشتی کنید میبینید بابت همین چنتا نرم افزار
            باید چند میلیون تومن بدیم . شما می تونید بخرید ؟! خب بخرید !
          </p>
          <p>
            نکته مهم : امنیت پیچیده تر از این حرفاست و شما نمی تونید با نصب
            ویندوز لایسنس دار ( ویندوز اریجینال ) و یک برنامه آنتی ویروس امنیت
            رو به طور کامل برقرار کنید ! پس لایسنس ویندوز نمی تونه از اطلاعات
            شخصی شما حفاظت کنه .
          </p>
          <p>
            من طرفدار حقوق مولف یا همون Copy right هستم اما خب وقتی خود
            مایکروسافت نمیخواد محصولاتش رو به ما بفروشه و هیچ خدمات و پشتیبانی
            هم به ما نمیده ، برای چی باید لایسنس ویندوز رو حداقل 100 دلار بخریم
            ؟! آقا میخوای محصول با ارزشت رو بفروشی ؟ خب مثه بچه آدم بیا اینجا
            نمایندگی رسمی بزن و خدمات بده ما هم میخریم .
          </p>
          <h4>■ می تونید سیستم عامل دلخواه تون رو نصب کنید</h4>
          <p>
            ممکنه سیستم عاملی که روی لپ تاپ مورد نظر تون نصب شده اون سیستم عاملی
            نباشه که شما دوس دارید یا نیاز دارد . خیلی ها دل شون نمیاد لایسنس
            ویندوز شون رو باطل کنن اما اگر لپ تاپ بدون سیستم عامل بخرید می تونید
            بدون هیچ دردسر و نگرانی هر سیستم عاملی رو که دوس دارید روی دستگاه
            تون نصب کنید . البته اگر ویندوز اصل هم داشته باشه بازم میتونید عوضش
            کنید اما خب دستگاهی که خام باشه دردسر کمتری داره .
          </p>
          <h3>■ لپ تاپ بدون سیستم عامل پارتیشن بندی نشده</h3>
          <p>
            وقتی شرکت سازنده لپ تاپ روی دستگاه ویندوز لایسنس دار نصب میکنه ممکنه
            هارد دستگاه رو جوری پارتیشن بندی کنه که با نیاز شما مطابقت نداشته
            باشه . در این صورت اصلاح پارتیشن های هارد یکم دردسر ساز میشه . اما
            اگر روی لپ تاپ تون هیچ سیستم عاملی نصب نشده&nbsp;باشه خیلی راحت می
            تونید هارد دستگاه رو کاملا بر اساس سیلقه یا نیاز خودتون پارتیشن بندی
            کنید .
          </p>
          <Comments commentsArray={this.state.commentsArray} />
        </div>
      </Fade>
    );
  }
}

export default ComputerItem5;
