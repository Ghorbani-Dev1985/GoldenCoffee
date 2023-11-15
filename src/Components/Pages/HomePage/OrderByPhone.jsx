import React from "react";

import HeartCoffee from "../../../assets/Images/heartCoffee.png";
import { Link } from "react-router-dom";
import { HiOutlinePhone } from "react-icons/hi2";


const OrderByPhone = () => {
    return ( 
        <section className="mb-16 md:mb-28">
         <div className="container ">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-x-4 md:gap-x-5">
              <img src={HeartCoffee} alt="گلدن کافی" className="shrink-0 w-[296px]"/>
              <div className="text-zinc-700 dark:text-white">
               <h2 className="font-MorabbaMd text-2xl md:text-5xl mb-0.5  md:mb-1.5">یکی از بهترین قهوه ها !</h2> 
               <p className="font-Morabba text-lg md:text-3xl/[48px]">کیفیت قهوه را از ما بخواهید ...</p>
               <div className="flex gap-x-2.5 my-5 md:my-6">
                    <span className="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
               </div>
               <p className="text-lg md:text-2xl/[3rem] text-justify">
               فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری پیدا کنند و دسرهای خوشمزه ما را که کاملاً  با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می سازد!
               </p>
               <Link to="" className="inline-flex justify-center items-center gap-x-2 h-[40px] md:h-[60px] px-6 mt-5 md:mt-6 text-base md:text-xl tracking-tightest text-orange-300 border md:border-2 border-orange-300 rounded-full">
               <HiOutlinePhone className="text-xl md:text-3xl"/>
               ثبت سفارش تلفنی
               </Link>
              </div>
            </div>
         </div>
        </section>
     );
}
 
export default OrderByPhone;