import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiLogIn, BiMenuAltRight } from "react-icons/bi";
import DarkMode from "../DarkMode/DarkMode";
import Cart from "./Cart";
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
              <img
                src="../../src/assets/Images/app-logo.png"
                alt="Golden Coffee"
              />
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

const MenuItem = ({ to, title, children, className }) => {
  return (
    <li className={`font-DanaMd ${className}`}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-orange-200"
            : "text-gray-300 transition-colors hover:text-orange-300"
        }
      >
        <span className="transition-colors group-hover:text-orange-300">
          {title}
        </span>
      </NavLink>
      {children}
    </li>
  );
};

export { MenuItem };

const MobileNav = () => {
  return (
    <header className="flex justify-between items-center h-16 px-4 md:hidden bg-white dark:bg-zinc-700">
      {/* Nav Icon */}
      <BiMenuAltRight className="text-zinc-700 dark:text-white text-2xl" />
      {/* Logo Type */}
      <div>
        <img src={LogoTypeLight} alt="logo" className="w-28 h-10 hidden dark:inline-block" />
        <img src={LogoTypeDark} alt="logo" className="w-28 h-10 inline-block dark:hidden" />
      </div>
      {/* Cart Icon */}
      <HiOutlineShoppingCart className="text-3xl cursor-pointer text-zinc-700 dark:text-white" />
    </header>
  );
};

export { MobileNav };
