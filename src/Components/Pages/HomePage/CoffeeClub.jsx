import React from "react";
import diamond from '../../../assets/Images/club/diamond.png';
import Discovery from '../../../assets/Images/club/Discovery.svg';
import Activity from '../../../assets/Images/club/Activity.svg';
import TicketStar from '../../../assets/Images/club/Ticket-Star.svg';
import { Link } from "react-router-dom";
import { HiMiniChevronLeft } from "react-icons/hi2";


const CoffeeClub = () => {
    return ( 
        <section className="mb-8 md:mb-20">
            <div className="container">
        <div className="lg:h-36 flex justify-between items-center flex-wrap lg:flex-nowrap text-white py-8 lg:py-0 lg:gap-x-5 xl:gap-x-24 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-3 lg:px-5 xl:px-11"> 
            <div className="flex-center md:shrink-0 gap-x-3 gap-y-9 xl:gap-x-6"> 
                <img src={diamond} alt="گلدن کافی" className="w-[87px] xl:w-[110px]" />
                <div className="flex flex-col">
                <h4 className="font-MorabbaBold text-2xl md:text-5xl/[3rem] mb-2">کافی کلاب</h4>
                <p className="font-Morabba font-normal text-lg md:text-2xl/[3rem]">میدونستی میتونی با امتیاز هات قهوه بگیری ؟</p>
                </div>
            </div>
            <div className="w-full flex justify-between"> 
                <div className="flex-center gap-x-2 lg:gap-x-3 xl:gap-x-5">
                <CoffeeClubItems itemImg={Discovery} itemTitle="چرخ و فلک" /> 
                <CoffeeClubItems itemImg={Activity} itemTitle="ماموریت ها" />
                <CoffeeClubItems itemImg={TicketStar} itemTitle=" جایزه ها" />
                </div>
            <div className="flex flex-col">
               <p className="font-DanaBold text-2xl md:text-3xl mb-1">542</p>
               <p className="text-xs md:text-sm mb-1 md:mb-2">امتیـــــــاز شما</p>
               <Link className="flex-center w-[5.625rem] h-[1.625rem] md:w-[6.875rem] md:h-8 bg-gradient-to-tr from-orange-200 to-orange-300 font-DanaMd text-xs md:text-sm rounded-full">
               <span>دریافت جایزه</span>
               <HiMiniChevronLeft className="text-xl md:text-2xl" />
               </Link>
            </div>
            </div>
        </div>
            </div>
        </section>
     );
}
 
export default CoffeeClub;


const CoffeeClubItems = ({itemImg , itemTitle}) => {
    return (
        <div className="flex flex-col items-center bg-white text-emerald-600 text-center w-[4.5rem] h-[4.5rem] md:w-[6.125rem] md:h-[6.125rem] py-1.5 md:pt-5 md:pb-1 rounded-2xl">
            <img src={itemImg} alt="گلدن کافی" className="w-10 h-10 md:w-12 md:h-12 object-cover mb-1 md:mb-1.5" loading="lazy" />
            <p className="text-emerald-600 text-sm md:text-sm">{itemTitle}</p>
        </div>
    )
}

export {CoffeeClubItems}