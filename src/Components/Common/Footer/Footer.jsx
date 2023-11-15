import React from "react";
import { HiMiniChevronUp } from "react-icons/hi2";
import FooterLogo from '../../../assets/Images/svgs/footeLogo.svg';
import LogoType from '../../../assets/Images/svgs/footer-logo-type.svg';
import { Link } from "react-router-dom";


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
      <section className="flex flex-col md:flex-row justify-between w-98p lg:w-90p mx-auto px-4 md:px-0">
        {/* Logo And Text */}
        <div>
            {/* Logo */}
            <div className="flex-center gap-x-5 mb-6 md:mb-4.5">
            <img src={FooterLogo} alt="گلدن کافی" />
            <img src={LogoType} alt="گلدن کافی" />
            </div>
            <p className="max-w-[37.875rem] text-lg md:text-xl/[48px] text-justify">ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.</p>
        </div>
        {/* Menu */}
        <div className="mt-10 md:mt-7">
            <h5 className="font-DanaBold text-2xl mb-6 md:mb-7">دسترسی سریع</h5>
            <div className="flex flex-col flex-wrap gap-y-2.5 md:gap-y-5 gap-x-10 md:gap-x-16 h-44">
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
        <div></div>
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