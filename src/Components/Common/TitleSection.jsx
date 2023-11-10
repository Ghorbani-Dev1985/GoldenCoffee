import React from "react";
import { HiMiniChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

const TitleSection = ({
  Children,
  mainTitle,
  subTitle,
  showMoreTo,
  showMoreDesktop,
  showMoreMobile
}) => {
  return (
    <section className="flex justify-between items-end mb-5 md:mb-12">
      <div>
        <h2 className="text-zinc-700 dark:text-white font-MorabbaMd text-2xl md:text-5xl leading-11 font-medium">
          {mainTitle}
        </h2>
        <p className="w-full flex flex-1 text-zinc-700 dark:text-white font-Morabba text-lg md:text-3xl mt-0.5 md:mt-1.5 font-normal leading-11">
          {subTitle}
        </p>
      </div>

      <Link
        to={showMoreTo}
        className="inline-flex justify-end items-center h-10 rounded-md md:gap-x-1 pr-3 pl-1 text-orange-300 text-base md:text-xl font-normal tracking-tightest md:hover:bg-orange-300/20 transition-colors"
      >
        <span className="hidden md:inline-block">{showMoreDesktop}</span>
        <span className="inline-block md:hidden">{showMoreMobile}</span>
        <HiMiniChevronLeft className="text-xl" />
      </Link>
      {Children}
    </section>
  );
};

export default TitleSection;
