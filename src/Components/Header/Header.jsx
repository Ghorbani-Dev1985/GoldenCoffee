import React, { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HiChevronDown,
  HiChevronUp,
  HiOutlineBriefcase,
  HiOutlineChatAlt,
  HiOutlineDocumentText,
  HiOutlineHome,
  HiOutlinePhoneOutgoing,
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiOutlineX,
} from "react-icons/hi";
import { BiLogIn, BiMenuAltRight } from "react-icons/bi";
import DarkMode from "../DarkMode/DarkMode";
import Cart from "./Cart";
import Logo from "../../assets/Images/svgs/logo.svg";
import LogoTypeLight from "../../assets/Images/svgs/logo-type.svg";
import LogoTypeDark from "../../assets/Images/svgs/app-logo-type.svg";

const CoffeeSubMenuItems = [
  {
    id: 1,
    to: "/login",
    title: "قهوه ویژه",
  },
  {
    id: 2,
    to: "/login2",
    title: "ویژه در سطح جهانی",
  },
  {
    id: 3,
    to: "/login3",
    title: "قهوه درجه یک",
  },
  {
    id: 4,
    to: "/login4",
    title: " ترکیبات تجاری ",
  },
  {
    id: 5,
    to: "/logi5",
    title: " ترکیبات تجاری",
  },
  {
    id: 6,
    to: "/logi6",
    title: " قهوه زینو برزیلی",
  },
];

const Header = () => {
  return (
    <>
      <MobileNav />
      <header className="w-98p lg:w-90p h-24 hidden md:flex items-center bg-black/50 backdrop-blur-[6px] mx-auto px-5 lg:px-10 py-5 rounded-3xl fixed top-9 right-0 left-0 z-50">
        <div className="w-full flex justify-between items-center">
          {/* Logo, Menu */}
          <nav className="flex items-center gap-x-5 lg:gap-x-9 h-14">
            <div className="shrink-0">
              <img src={Logo} alt="Golden Coffee" />
            </div>
            <ul className="flex gap-x-5 lg:gap-x-9 h-full text-xl text-gray-300 tracking-tightest child:leading-[56px]">
              <MenuItem to="/" title="صفحه اصلی" className="text-orange-200" />
              <MenuItem to="/login" title="فروشگاه" className="relative group">
                <div
                  className="absolute top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible w-52 p-6 space-y-4 bg-white dark:bg-zinc-700 shadow-normal text-zinc-700 dark:text-white font-Dana text-base
               tracking-normal border-t-[3px] border-orange-300 rounded-2xl transition-all delay-75 child:inline-block child:transition-colors child-hover:text-orange-300"
                >
                  {CoffeeSubMenuItems.map(({ id, to, title }) => {
                    return (
                      <NavLink
                        key={id}
                        to={to}
                        className={({ isActive }) =>
                          isActive
                            ? "transition-colors text-orange-200"
                            : "text-zinc-700 dark:text-white"
                        }
                      >
                        {title}
                      </NavLink>
                    );
                  })}
                </div>
              </MenuItem>
              <MenuItem to="/login7" title="دیکشنری" />
              <MenuItem to="/login3" title="بلاک" />
              <MenuItem to="/login5" title="درباره‌ ما" />
              <MenuItem to="/login6" title="تماس‌ با‌ ما" />
            </ul>
          </nav>
          {/* Cart, ThemeToggle, LoginBtn */}
          <section className="flex gap-x-4 lg:gap-x-5 xl:gap-x-10 text-orange-200 text-xl font-normal">
            <div className="flex items-center gap-x-4 lg:gap-x-5">
              {/* Cart */}
              <div className="relative group">
                <div className="py-3">
                  <HiOutlineShoppingCart className="text-3xl cursor-pointer" />
                </div>
                {/* Cart Box */}
                <Cart />
              </div>
              {/* ThemeToggle */}
              <DarkMode />
            </div>
            {/* DivideBorder */}
            <span className="h-14 w-px bg-white/20 block"></span>
            {/* LoginLink */}
            <Link className="flex items-center gap-x-2.5 tracking-tightest">
              <BiLogIn className="text-3xl" />
              <span className="hidden xl:inline-block"> ورود |‌ ثبت نام</span>
            </Link>
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;

const MenuItem = ({ to, title, icon, className, onClick }) => {
  return (
    <li
      className={`w-full md:w-auto h-10 md:h-auto font-DanaMd flex items-center gap-x-2 ${className}`}
    >
      <NavLink
        onClick={onClick}
        to={to}
        className={({ isActive }) =>
          isActive
            ? "w-full flex h-10 items-center gap-x-2 px-2.5 bg-orange-200/20  text-orange-300 rounded-md md:bg-transparent md:text-orange-200"
            : "w-full flex h-10 items-center gap-x-2 px-2.5 text-zinc-600 dark:text-white md:text-gray-300 transition-colors hover:text-orange-300"
        }
      >
        {icon}
        <span className="transition-colors text-base md:text-lg md:group-hover:text-orange-300">
          {title}
        </span>
      </NavLink>
    </li>
  );
};

export { MenuItem };


function useClickOutside(ref, onClickOutside) {
  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    // Bind
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // dispose
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}

const MobileNav = () => {
  const [showMobileNav , setShowMobileNav] = useState(false);
  const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);
  const MobileSubMenu = useRef('menu');
  useClickOutside(MobileSubMenu , () => {
      setShowMobileSubMenu(false);
  });

  return (
    <header className="flex flex-col md:hidden justify-between items-center h-16 p-3 bg-white dark:bg-zinc-700">
      {/* Nav Icon */}
      <div className="w-full flex justify-between items-center">
      <div >
      <BiMenuAltRight className="text-zinc-700 dark:text-white text-2xl" />
      </div>
      {/* Logo Type */}
      <div>
        <img
          src={LogoTypeLight}
          alt="logo"
          className="w-28 h-10 hidden dark:inline-block"
        />
        <img
          src={LogoTypeDark}
          alt="logo"
          className="w-28 h-10 inline-block dark:hidden"
        />
      </div>
      <div>
        <HiOutlineShoppingCart className="text-3xl cursor-pointer text-zinc-700 dark:text-white" />
      </div>
        <Cart />
      </div>
      {/* Mobile Nav */}
      <nav className={`${showMobileNav ? "right-0" : "-right-64"} transition-all ease-linear duration-500 fixed top-0 bottom-0 w-64 overflow-y-auto min-h-screen pt-3 px-4 bg-white dark:bg-zinc-700 z-20`}>
        <div className="flex justify-between items-center pb-5 mb-6 border-b border-b-gray-100 dark:border-b-white/10">
          <div className="flex justify-center items-center gap-x-3.5">
            <img src={Logo} alt="logo" className="w-10 h-10" />
            <img src={LogoTypeDark} alt="logoType" className="w-28 h-10" />
          </div>
          <div onClick={() => setShowMobileNav(false)}>
            <HiOutlineX className="text-zinc-600 dark:text-white text-xl" />
          </div>
        </div>
        {/* Mobile Nav Items */}
        <ul className="flex flex-col text-xl gap-y-4 text-gray-300 child:leading-[56px]">
          <MenuItem
            to="/"
            title="صفحه اصلی"
            icon={<HiOutlineHome className="text-xl" />}
          />
          <div ref={MobileSubMenu}>
          <div
            onClick={() => setShowMobileSubMenu(!showMobileSubMenu)}
            className={`flex justify-between items-center h-10 text-base pr-2.5 ${
              showMobileSubMenu
                ? "text-orange-300"
                : "text-zinc-600 dark:text-white"
            }`}
          >
            <div className="flex justify-center items-center gap-x-2">
              <HiOutlineShoppingBag className="text-xl" />
              <span>فروشگاه</span>
            </div>
            <div>{showMobileSubMenu ? <HiChevronDown /> : <HiChevronUp />}</div>
          </div>
          {
            showMobileSubMenu && 
          <div
            className="flex flex-col pr-9 text-zinc-600 dark:text-white gap-y-4 font-Dana text-base transition-all">
            {CoffeeSubMenuItems.map(({ id, to, title }) => {
              return (
                <NavLink
                  key={id}
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? "transition-colors text-orange-300 before:content-['•'] before:ml-1 before:text-base"
                      : "text-zinc-700 dark:text-white"
                  }
                >
                  {title}
                </NavLink>
              );
            })}
          </div>
          }
          </div>
          <MenuItem
            to="/login"
            title="دیکشنری"
            icon={<HiOutlineChatAlt className="text-xl" />}
          />
          <MenuItem
            to="/login2"
            title="درباره ما"
            icon={<HiOutlineBriefcase className="text-xl" />}
          />
          <MenuItem
            to="/login3"
            title="بلاگ"
            icon={<HiOutlineDocumentText className="text-xl" />}
          />
          <MenuItem
            to="/login4"
            title="تماس با ما"
            icon={<HiOutlinePhoneOutgoing className="text-xl" />}
          />
        </ul>

        <div className="text-orange-300 py-8 px-2.5 mt-8 space-y-6 border-t border-t-gray-100 dark:border-t-white/10">
          <Link
            to=""
            className="inline-flex items-center gap-x-2 tracking-tightest"
          >
            <BiLogIn className="text-xl" />
            <span>ورود | ثبت‌ نام</span>
          </Link>
          <DarkMode />
          <Link
            to=""
            className="inline-flex items-center gap-x-2 tracking-tightest"
          >
            <HiOutlineShoppingCart className="text-xl cursor-pointer" />
            <span>سبد خرید</span>
          </Link>
        </div>
      </nav>
      {/* Overlay */}
      <div onClick={() => setShowMobileNav(false)} className={`${showMobileNav ? "flex" : "hidden" } md:hidden fixed inset-0 w-full h-full bg-black/40 z-10 backdrop-blur-sm`}></div>
      {/* Cart Icon */}
      
    </header>
  );
};

export { MobileNav };
