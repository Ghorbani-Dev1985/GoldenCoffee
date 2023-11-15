import React from "react";
import Support from '../../../assets/Images/svgs/services/support.svg';
import SupportDark from '../../../assets/Images/svgs/services/support-dark.svg';
import ExpressDelivery from '../../../assets/Images/svgs/services/express-delivery.svg';
import ExpressDeliveryDark from '../../../assets/Images/svgs/services/express-delivery-dark.svg';
import Coffee from '../../../assets/Images/svgs/services/coffee.svg';
import CoffeeDark from '../../../assets/Images/svgs/services/coffee-dark.svg';
import Pitcher from '../../../assets/Images/svgs/services/pitcher.svg';
import PitcherDark from '../../../assets/Images/svgs/services/pitcher-dark.svg';

const Services = () => {
    return ( 
        <section className="Services mb-12 md:mb-36 relative before:md:hidden after:md:hidden">
        <div className="container">
        <div className="flex justify-between items-center flex-wrap child:w-1/2 lg:child:w-auto gap-y-11 text-zinc-700 dark:text-white">
            <ServiceItem itemImgLight={Support} itemImgDark={SupportDark} itemTitle="پشتیبانی شبانه روزی" itemSubtitle="7 روز هفته ، 24 ساعته" />
            <ServiceItem itemImgLight={ExpressDelivery} itemImgDark={ExpressDeliveryDark} itemTitle="امکان تحویل اکسپرس" itemSubtitle="ارسال بسته با سرعت باد" />
            <ServiceItem itemImgLight={Coffee} itemImgDark={CoffeeDark} itemTitle="اکسسوری قهوه" itemSubtitle="وسایل و ادوات دم آوری" />
            <ServiceItem itemImgLight={Pitcher} itemImgDark={PitcherDark} itemTitle="رست تخصصی" itemSubtitle="تازه برشته شده و با کیفیت" />
        </div>
        </div>
        </section>
     );
}
 
export default Services;



const ServiceItem = ({itemImgLight , itemImgDark , itemTitle , itemSubtitle}) => {
    return(
        <div className="flex items-center text-center md:text-right flex-col md:flex-row gap-x-4 gap-y-5">
            <img src={itemImgLight} alt="گلدن کافی" className="inline-block dark:hidden" />
            <img src={itemImgDark} alt="گلدن کافی" className="hidden dark:inline-block" />
            <div>
                <h4 className="font-DanaBold text-sm md:text-lg mb-1 md:mb-3.5">{itemTitle}</h4>
                <p className="text-xs md:text-sm">{itemSubtitle}</p>
            </div>
        </div>
    )
}
export {ServiceItem}