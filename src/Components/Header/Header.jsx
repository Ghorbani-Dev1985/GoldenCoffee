import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingCart, HiOutlineMoon, HiOutlineSun  } from "react-icons/hi";
import { BiLogIn } from "react-icons/bi";


const CoffeeSubMenuItems = [
  {
    id: 1,
    to: "",
    title: "قهوه ویژه",
  },
  {
    id: 2,
    to: "",
    title: "ویژه در سطح جهانی",
  },
  {
    id: 3,
    to: "",
    title: "قهوه درجه یک",
  },
  {
    id: 4,
    to: "",
    title: " ترکیبات تجاری ",
  },
  {
    id: 5,
    to: "",
    title: " ترکیبات تجاری",
  },
  {
    id: 6,
    to: "",
    title: " قهوه زینو برزیلی",
  },
];

const Header = () => {
const [themeToggle , setThemeToddle] = useState(false);
  return (
    <header className="w-90p h-24 flex items-center bg-black/50 backdrop-blur-[6px] mx-auto px-10 py-5 rounded-3xl fixed top-9 right-0 left-0 z-50">
     <div className="w-full flex justify-between items-center">
         {/* Logo, Menu */}
      <nav className="flex items-center gap-x-9">
        <div>
          <img src="../../src/assets/Images/app-logo.png" alt="Golden Coffee" />
        </div>
        <ul className="flex gap-x-9 text-xl text-gray-300 tracking-tightest">
          <MenuItem to="/" title="صفحه اصلی" className="text-orange-200"/>
          <MenuItem to="/login" title="فروشگاه">
            <ul className="hidden">
              {CoffeeSubMenuItems.map(({ id, to, title }) => {
                return (
                  <li key={id} className="font-DanaMd">
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive
                          ? "font-bold text-orange-200"
                          : "text-gray-300"
                      }
                    >
                      {title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </MenuItem>
          <MenuItem to="/login2" title="دیکشنری" />
          <MenuItem to="/login3" title="بلاک" />
          <MenuItem to="/login5" title="درباره‌ ما" />
          <MenuItem to="/login6" title="تماس‌ با‌ ما" />
        </ul>
      </nav>
      {/* Cart, ThemeToggle, LoginBtn */}
      <section className="flex gap-x-10 text-orange-200 text-xl font-normal">
             <div className="flex items-center gap-x-5">
                {/* Cart */}
                <div>
                <HiOutlineShoppingCart className="w-8 h-8" />
                </div>
                {/* ThemeToggle */}
             <button onClick={()=> setThemeToddle(!themeToggle)}>
                {
                    themeToggle ? <HiOutlineSun className="w-8 h-8" /> : <HiOutlineMoon className="w-8 h-8" />
                }
             </button>
              </div>
              {/* DivideBorder */}
              <span className="h-14 w-px bg-white/20 block"></span>
              {/* LoginLink */}
             <Link className="flex items-center gap-x-2.5 tracking-tightest"><BiLogIn className="w-8 h-8" />
               ورود |‌ ثبت نام
             </Link>
      </section>
     </div>
    </header>
  );
};

export default Header;

const MenuItem = ({ to, title, children }) => {
  return (
    <li className="font-DanaMd">
        <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-orange-200"
            : "text-gray-300"
        }
      >
        {title}
      </NavLink>
      {children}
    </li>
  );
};

export { MenuItem };
