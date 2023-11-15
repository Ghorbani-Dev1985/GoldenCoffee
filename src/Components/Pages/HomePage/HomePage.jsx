import React from "react";
import { HiMiniChevronDown } from "react-icons/hi2";
import Products from "./Products";
import CategoryBanner from "./CategoryBanner";
import Categories from "./Categories";
import Bestselling from "./Bestselling";
import CoffeeClub from "./CoffeeClub";
import Blog from "./Blog";

const Main = () => {
  return (
    <>
      {/* Top Section */}
      <section className="h-[24.375rem] relative xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-sm md:bg-xl bg-no-repeat bg-cover bg-[center_top]">
        <div className="container h-full relative overflow-y-hidden md:min-h-screen flex justify-end items-center">
          <div className="text-white">
            <h1 className="font-MorabbaBold text-2xl md:text-6xl/[62px] font-bold drop-shadow-lg mb-0.5 md:mb-2">
              قهوه‌ عربیکا تانزانیا
            </h1>
            <p className="font-Morabba text-xl md:text-5xl/[64px] font-light">
              یک فنجان بالانس !
            </p>
            <span className="block w-[6.25rem] h-px md:h-0.5 bg-orange-300 shadow-6 my-3 md:my-8"></span>
            <p className="max-w-[12.5625rem] md:max-w-[28.75rem] text-sm leading-6 text-justify md:text-2xl font-normal">
              قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه
              است که در نواحی مختلف کمربند قهوه کشت میشود.
            </p>
          </div>
          {/* CircleBubbles */}
          <div className="CircleBubble CircleBubbleParent CircleBubble__lg">
            <div className="CircleBubble CircleBubble__md">
              <div className="CircleBubble CircleBubble__sm"></div>
            </div>
          </div>
        </div>
        {/* Curve */}
        <svg
          width="100"
          height="22"
          className="absolute bottom-0 right-0 left-0 mx-auto fill-gray-100 dark:fill-zinc-800"
          viewBox="0 0 100 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z" />
        </svg>

        {/* Arrow Circle Bubbles */}
        <div className="w-[1.875rem] h-[1.875rem] absolute bottom-0 right-0 left-0 mx-auto flex-center translate-y-2/4 border-2 border-orange-300 rounded-full">
          <HiMiniChevronDown className="text-zinc-700 dark:text-white text-xl" />
        </div>
      </section>
      {/* Products Section */}
      <Products />
      {/* Category Banner */}
      <CategoryBanner />
      {/* Categories */}
      <Categories />
      {/* Bestselling Section */}
      <Bestselling />
     {/* Coffee Club Section */}
     <CoffeeClub />
     {/* Blog Section */}
     <Blog />
    </>
  );
};

export default Main;
