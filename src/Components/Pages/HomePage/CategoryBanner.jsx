import React from "react";
import { Link } from "react-router-dom";

const CategoryBanner = () => {
    return ( 
        <section className="mb-10 md:mb-20 text-white">
           <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link to="" className="flex flex-col justify-center pr-7 bg-CategoryBannerRight bg-cover bg-no-repeat rounded-2xl h-[142px] md:h-[248px]">
                <span className="font-DanaBold text-2xl/6 md:text-4xl/6 mb-4 md:mb-7">انواع قهوه</span>
                <span className="md:font-DanaMd md:text-xl/6">ترکیبی و تک خاستگاه</span>
            </Link>
            <Link to="" className="flex flex-col justify-center pr-7 bg-CategoryBannerLeft bg-cover bg-no-repeat rounded-2xl h-[142px] md:h-[248px]">
                <span className="font-DanaBold text-2xl/6 md:text-4xl/6 mb-4 md:mb-7">پودرهای فوری</span>
                <span className="md:font-DanaMd md:text-xl/6"> نسکافه، هات چاکلت، ماسالا</span>
            </Link>
            </div>
           </div>
        </section>
     );
}
 
export default CategoryBanner; 