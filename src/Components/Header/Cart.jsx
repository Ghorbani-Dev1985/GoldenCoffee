import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiChevronLeft, HiOutlineMinus, HiOutlineX, HiPlus } from "react-icons/hi";
import { HiMiniChevronLeft } from "react-icons/hi2";

const CartItems = [
  {
    id: 1,
    imgSrc: "../../src/assets/Images/products/p1.png",
    productTitle: "قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی",
    discountPrice: "14.500",
    productPrice: "175,000",
  },
  {
    id: 2,
    imgSrc: "../../src/assets/Images/products/p2.png",
    productTitle: "قهوه اسپرسو بن مانو مدل پریسکا 500 گرمی",
    discountPrice: "19.500",
    productPrice: "195,000",
  },
  {
    id: 3,
    imgSrc: "../../src/assets/Images/products/p3.png",
    productTitle: "قهوه اسپرسو بن مانو مدل پریسکا 750 گرمی با تخیفیف ویژه و ارسال رایگان مخصوص استفاده در عصر با کافئین متوسط",
    discountPrice: "25.500",
    productPrice: "275,000", 
  },
  // {
  //   id: 4,
  //   imgSrc: "../../src/assets/Images/products/p4.png",
  //   productTitle: "قهوه اسپرسو بن مانو مدل پریسکا 750 گرمی با تخیفیف ویژه و ارسال رایگان مخصوص استفاده در عصر با کافئین متوسط",
  //   discountPrice: "25.500",
  //   productPrice: "275,000", 
  // },  {
  //   id: 5,
  //   imgSrc: "../../src/assets/Images/products/p5.png",
  //   productTitle: "قهوه اسپرسو بن مانو مدل پریسکا 750 گرمی با تخیفیف ویژه و ارسال رایگان مخصوص استفاده در عصر با کافئین متوسط",
  //   discountPrice: "25.500",
  //   productPrice: "275,000", 
  // },  {
  //   id: 6,
  //   imgSrc: "../../src/assets/Images/products/p6.png",
  //   productTitle: "قهوه اسپرسو بن مانو مدل پریسکا 750 گرمی با تخیفیف ویژه و ارسال رایگان مخصوص استفاده در عصر با کافئین متوسط",
  //   discountPrice: "25.500",
  //   productPrice: "275,000", 
  // },
];

const Cart = ({showMobileCart , setShowMobileCart}) => {
 

  return (
    <>
     {/* Desktop Cart */}
    <section
      className="hidden md:block absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-[405px] p-5 space-y-4 bg-white dark:bg-zinc-700 shadow-normal text-zinc-700 dark:text-white font-Dana text-base
        tracking-normal border-t-[3px] border-orange-300 rounded-2xl transition-all delay-75 child:flex"
    >
      <div className="w-full justify-between items-center tracking-tighter">
        {/* Cart Header */}
        <span className="text-gray-300 font-DanaMd text-xs">1 مورد</span>
        <Link
          to=""
          className="flex justify-center items-center text-orange-300"
        >
          مشاهده سبد خرید  <HiMiniChevronLeft className="text-xl" />
        </Link>
      </div>
      {/* Cart Body */}
      <div className="flex flex-col divide-y divide-gray-100 dark:divide-white/5 child:pt-5 h-96 min-h-max overflow-y-auto">
        {CartItems.map(
            ({ id, imgSrc, productTitle, discountPrice, productPrice }) => {
                return (
                    <CartItemsBody
                key={id}
                src={imgSrc}
                ProductTitle={productTitle}
                ProductDiscount={discountPrice}
                ProductPrice={productPrice}
              />
              );
            }
            )}
            </div>
      {/* Cart Footer */}
      <div className="w-full flex justify-between mt-5 p-5 border-t border-t-gray-300 dark:border-t-white/10">
        <div className="flex flex-col justify-between">
          <span className="text-gray-300 font-DanaMd text-xs">
            مبلغ قابل پرداخت
          </span>
          <p className="text-2xl font-DanaBold dark:text-white">
            350,000 <span className="text-sm font-normal">تومان</span>
          </p>
        </div>
        <Link to="" className="w-[144px] h-14 flex justify-center items-center bg-teal-600 text-white text-xl dark:bg-emerald-500 rounded-xl hover:bg-teal-700 dark:hover:bg-emerald-600 transition-colors tracking-tightest">
          ثبت سفارش
        </Link>
      </div>
    </section>
      {/* Mobile Cart */}
     <section className={`${showMobileCart ? "left-0" : "-left-64"} block md:hidden transition-all ease-linear duration-500 fixed top-0 bottom-0 w-64 overflow-y-auto p-4 bg-white dark:bg-zinc-700 z-20`}>
        <div className="flex justify-between items-center pb-5 border-b border-b-gray-100 dark:border-b-white/10">
          <div onClick={() => setShowMobileCart(false)}>
        <HiOutlineX className="text-zinc-600 dark:text-white text-xl" />
          </div>
        <p className="text-zinc-700 dark:text-white text-base">سبد خرید</p>
        </div>
      
        <div className="flex flex-col child:pt-5 h-full min-h-max overflow-y-auto">
        {CartItems.map(
            ({ id, imgSrc, productTitle, discountPrice, productPrice }) => {
                return (
                    <CartItemsBody
                key={id}
                src={imgSrc}
                ProductTitle={productTitle}
                ProductDiscount={discountPrice}
                ProductPrice={productPrice}
              />
              );
            }
            )}
            <div className="w-full flex justify-between gap-x-4 mb-10 mt-auto">
        <Link to="" className="w-28 h-11 flex justify-center items-center bg-teal-600 text-white text-base dark:bg-emerald-500 rounded-xl hover:bg-teal-700 dark:hover:bg-emerald-600">
          ثبت سفارش
        </Link>
        <div className="flex flex-col justify-between">
          <span className="text-gray-300 font-DanaMd text-xs">
            مبلغ قابل پرداخت
          </span>
          <p className="text-base font-DanaBold dark:text-white">
            350,000 <span className="text-xs font-normal">تومان</span>
          </p>
        </div>
      </div>
            </div>
     
     </section>
       {/* Overlay */}
       <div onClick={() => setShowMobileCart(false)} className={`${showMobileCart ? "flex" : "hidden"} md:hidden fixed inset-0 w-full h-full bg-black/40 z-10 backdrop-blur-sm`}></div>
     </>
  );
};

export default Cart;

function CartItemsBody({ src, ProductTitle, ProductDiscount, ProductPrice }) {
  return (
    <div className="w-full flex border-b border-b-gray-100 dark:border-b-white/5 md:border-b-0">
      <img src={src} alt="CartImg" className="w-16 h-16 md:w-28 md:h-28  object-cover" />
      <div className="flex flex-col justify-between pb-6 gap-y-7">
        <h4 className="font-medium text-sm md:text-base font-DanaMd dark:text-white line-clamp-2">
          {ProductTitle}
        </h4>
        <div className="flex flex-col md:flex-row items-center gap-x-2.5">
          {/* Count Btns */}
          <div className="flex justify-center items-center shrink border border-gray-300 md:text-xl mb-2 md:mb-0 px-2 text-orange-300 border-solid rounded-[100px] w-20 h-9 md:w-24 md:h-11">
            <button className="p-1 md:p-2 cursor-pointer"><HiPlus className="text-xs"/></button>
            <p className="px-3 h-full flex justify-center items-center mt-1">2</p>
            <button className="p-1 md:p-2 cursor-pointer"><HiOutlineMinus className="text-xs"/></button>
          </div>
          {/* Cart Price */}
          <div className="flex flex-col justify-between">
            <p className="text-teal-600 dark:text-emerald-500 text-xs font-medium tracking-tighter p-1">
              {ProductDiscount} تومان تخفیف
            </p>
            <p className="text-base md:text-2xl font-DanaBold dark:text-white">
              {ProductPrice}
              <span className="text-sm font-normal mr-1">تومان</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CartItemsBody };


