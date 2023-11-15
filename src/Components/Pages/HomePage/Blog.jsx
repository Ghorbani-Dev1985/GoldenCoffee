import React from "react";
import TitleSection from "../../Common/TitleSection";
import LogoType from '../../../assets/Images/svgs/app-logo-type2.svg';
import { Link } from "react-router-dom";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
const Blogs = [
  {
    id: 1,
    blogImg: "../../src/assets/Images/blogs/blog-1.png",
    blogTitle: "طرز تهیه قهوه دمی با دستگاه اروپرس",
    blogDateDay: "21",
    blogDateMonth: " مرداد ",
    blogDateYear: " 1402",
  },
  {
    id: 2,
    blogImg: "../../src/assets/Images/blogs/blog-2.png",
    blogTitle: " یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز",
    blogDateDay: "18",
    blogDateMonth: " شهریور ",
    blogDateYear: " 1402",
  },
  {
    id: 3,
    blogImg: "../../src/assets/Images/blogs/blog-3.png",
    blogTitle: "طرز تهیه یک فنجان کافه زینو برزیلی ",
    blogDateDay: "5",
    blogDateMonth: " مهر ",
    blogDateYear: " 1402",
  },
  {
    id: 4,
    blogImg: "../../src/assets/Images/blogs/blog-4.png",
    blogTitle: "طرز تهیه قهوه دالگونا مناسب روز‌های کرونایی",
    blogDateDay: "15",
    blogDateMonth: " آبان ",
    blogDateYear: " 1402",
  },
];

const Blog = () => {
  return (
    <section className="mb-8 md:mb-28">
      <div className="container">
        <TitleSection
          mainTitle="مطالب خواندنی"
          showMoreDesktop="مشاهده همه مطالب"
          showMoreMobile="مشاهده همه"
        />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-5">
      {
        Blogs.map(({id , blogImg , blogTitle , blogDateDay , blogDateMonth , blogDateYear}) => {
        return(
            <div key={id} className="group flex gap-x-2.5 sm:block bg-white dark:bg-zinc-700 rounded-2xl p-2.5 md:pb-2 cursor-pointer">
                <div className="relative w-[130px] h-[130px] shrink-0 sm:w-auto sm:h-auto rounded-t-2xl rounded-br-2xl rounded-bl-4xl overflow-hidden sm:mb-4">
                <img src={blogImg} alt="گلدن کافی" className="w-full h-full object-cover" loading="lazy"/>
                 <div className="hidden md:flex-center absolute inset-0 w-full h-full invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-75">
                    <img src={LogoType} alt="گلدن کافی" className="w-[138px] h-[54px]" loading="lazy" />
                 </div>
                </div>
                <div className="w-full sm:w-auto flex justify-between sm:items-center flex-col sm:flex-row">
                <Link to="" className="sm:max-w-[11rem] text-zinc-700 dark:text-white font-DanaMd md:font-Dana text-sm/7 mt-2.5 ml-1.5 sm:ml-0 sm:mt-0 md:text-lg line-clamp-2">{blogTitle}</Link>
                <div className="hidden sm:flex flex-col text-teal-600 dark:text-emerald-500 text-sm text-left ml-3 lg:ml-[18px] -mt-1 pr-5 lg:border-r lg:border-r-gray-100 dark:border-r-white/10">
                    <span className="font-DanaBold text-2xl md:text-xl">{blogDateDay}</span>
                    <span>{blogDateMonth}</span>
                    <span>{blogDateYear}</span>
                </div>
                <div className="w-full flex sm:hidden justify-between items-end mb-2 border-t border-t-gray-100 dark:border-t-white/10 pt-[18px] mt-5">
                  <p className="text-teal-600 dark:text-emerald-500 text-sm">
                   <span>{blogDateDay}</span><span>{blogDateMonth}</span> <span>{blogDateYear}</span></p>
                <Link to="" className="flex-center gap-x-1 ml-1.5 font-DanaMd text-sm h-6 rounded-md pr-2.5 pl-2 bg-orange-200/20 text-orange-300">
                  مطالعه
                  <HiMiniArrowLongLeft className="text-lg"/>
                </Link>
                </div>
                </div>
            </div>
        )
        })
      }
      </div>
      </div>
    </section>
  );
};

export default Blog;


