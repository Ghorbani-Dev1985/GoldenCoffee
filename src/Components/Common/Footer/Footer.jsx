import React from "react";
import { HiMiniChevronUp, HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import FooterLogo from '../../../assets/Images/svgs/footeLogo.svg';
import LogoType from '../../../assets/Images/svgs/footer-logo-type.svg';
import { Link } from "react-router-dom";
import { HiOutlinePhone } from "react-icons/hi";
import { BiLogoInstagram, BiLogoTelegram } from "react-icons/bi";


const Footer = () => {
  return (
    <footer className="relative bg-zinc-700 text-gray-300 py-8 md:py-11 md:pt-[62px]">
        {/* Footer Top Curve */}
      <svg
        width="100"
        height="22"
        viewBox="0 0 100 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 left-0 mx-auto fill-gray-100 dark:fill-zinc-800"
      >
        <path
          d="M50 22C31 22 19 -3.26655e-06 1.9233e-06 -3.02023e-06L100 -3.8147e-06C81.25 -5.45387e-06 69 22 50 22Z"
        />
      </svg>
      <div className="w-[1.875rem] h-[1.875rem] absolute top-0 right-0 left-0 mx-auto flex-center -translate-y-2/4 border-2 border-orange-300 rounded-full">
      <HiMiniChevronUp className="text-zinc-700 dark:text-white text-xl" />
      </div>
      {/* Footer Content Section */}
      <section className="flex flex-col lg:flex-row justify-between flex-wrap sm:w-94p lg:w-90p mx-auto px-4 md:px-0">
        {/* Logo And Text */}
        <div>
            {/* Logo */}
            <div className="flex-center gap-x-5 mb-6 md:mb-4.5">
            <img src={FooterLogo} alt="گلدن کافی" />
            <img src={LogoType} alt="گلدن کافی" />
            </div>
            <p className="max-w-[37.875rem] md:max-w-full xl:max-w-[37.875rem] text-lg md:text-xl/[48px] text-justify">ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.</p>
        </div>
        {/* Menu */}
        <div className="mt-10 md:mt-7">
            <h5 className="font-DanaBold text-2xl mb-6 md:mb-7">دسترسی سریع</h5>
            <div className="grid grid-cols-2 gap-y-2.5 md:gap-y-5 gap-x-10 md:gap-x-16">
            <FooterLinkMenu linkTo="" linkTitle="حریم خصوصی" />
            <FooterLinkMenu linkTo="" linkTitle="عودت کالا " />
            <FooterLinkMenu linkTo="" linkTitle="شرایط استفاده " />
            <FooterLinkMenu linkTo="" linkTitle=" ثبت سفارش" />
            <FooterLinkMenu linkTo="" linkTitle="پرسش های متداول" />
            <FooterLinkMenu linkTo="" linkTitle=" فرصت های شغلی" />
            <FooterLinkMenu linkTo="" linkTitle=" ضمانت نامه ها " />
            <FooterLinkMenu linkTo="" linkTitle=" ارتباط با ما " />
            </div>
        </div>
        {/* Contact US */}
        <div>
        <h5 className="font-DanaBold text-2xl mb-6 md:mb-7"> در تماس باشیم</h5>
        <div>
            <div className="md:text-xl mb-6 md:mb-10">
                <span className="flex-center gap-x-2 md:gap-x-3 mb-4">
            <HiOutlineMapPin className="text-xl md:text-2xl shrink-0" />
                بلوار میرداماد،خیابان البرز،کوچه قبادیان شرقی،پلاک ۳۳
                </span>
            <div className="flex flex-wrap gap-x-3 gap-y-4 font-DanaMd">
                <a href="mailto:info@Coffee.com" className="flex items-center gap-x-2 md:gap-x-3 text-orange-300">
                <HiOutlineEnvelope />
                info@Coffee.com
                </a>
                <div className="flex-center gap-x-2 md:gap-x-3">
                <HiOutlinePhone className="text-xl md:text-2xl" />
                 <a href="tel:989021236628">09021236628</a>
                 <a href="tel:98216789012">021-6789012</a>
                </div>
            </div>
            </div>
            <div className="flex gap-x-1.5 md:gap-x-6 font-DanaMd md:text-xl">
                <a className="flex-center flex-grow h-12 gap-x-2 border border-orange-200 text-orange-200 rounded-xl" href="https://www.instagram.com/golden_coffee" target="_blank">
            <BiLogoInstagram className="text-2xl md:text-4xl"/>
            <span className="dir-ltr">@golden_coffee</span>
                </a>
                <a className="flex-center flex-grow gap-x-2 text-zinc-700 bg-gradient-to-tr from-orange-200 to-orange-300 rounded-xl" href="https://t.me/golden_coffee" target="_blank">
            <BiLogoTelegram className="text-2xl md:text-4xl"/>
            <span className="dir-ltr"> @golden_coffee</span>
                </a>
            </div>
        </div>
        </div>
        {/* Line before Copyright */}
        <p className="w-full h-px bg-white/10 mt-[3.38rem] mb-[2.94rem]"></p>
        {/* Copyright */}
        <div className="w-full flex flex-wrap justify-between items-center gax-4 font-DanaMd text-sm/5 md:text-base">
        <div className="flex items-center gap-x-2.5 mb-4 md:mb-0">
          <div className="flex-center shrink-0 w-8 h-8 rounded-full border border-white/10">
            <div className="flex-center w-5 h-5 rounded-full border border-white/20">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-t from-orange-200 to-orange-300"></div>
            </div>
          </div>
          <p>تمام حقوق مادی و معنوی متعلق به <span className="text-orange-200">گلدن کافی</span> میباشد
           و هر گونه کپی برداری مجاز نمیباشد.</p>
        </div>
         <span className="dir-ltr mr-auto">Copyright © 2023 Golden Coffee. All rights reserved.</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

const FooterLinkMenu = ({linkTo , linkTitle}) => {
    return(
      <Link to={linkTo} className="flex items-center gap-x-2 md:gap-x-3 text-base md:text-xl hover:text-orange-300 transition-colors">
        <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
        {linkTitle}
      </Link>
    )
}
export {FooterLinkMenu}
