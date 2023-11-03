import React from "react";
import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";

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
  {
    id: 4,
    imgSrc: "../../src/assets/Images/products/p4.png",
    productTitle: "قهوه اسپرسو بن مانو مدل پریسکا 750 گرمی با تخیفیف ویژه و ارسال رایگان مخصوص استفاده در عصر با کافئین متوسط",
    discountPrice: "25.500",
    productPrice: "275,000", 
  },  {
    id: 5,
    imgSrc: "../../src/assets/Images/products/p5.png",
    productTitle: "قهوه اسپرسو بن مانو مدل پریسکا 750 گرمی با تخیفیف ویژه و ارسال رایگان مخصوص استفاده در عصر با کافئین متوسط",
    discountPrice: "25.500",
    productPrice: "275,000", 
  },  {
    id: 6,
    imgSrc: "../../src/assets/Images/products/p6.png",
    productTitle: "قهوه اسپرسو بن مانو مدل پریسکا 750 گرمی با تخیفیف ویژه و ارسال رایگان مخصوص استفاده در عصر با کافئین متوسط",
    discountPrice: "25.500",
    productPrice: "275,000", 
  },
];

const Cart = () => {
  return (
    <div
      className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-[400px] p-5 space-y-4 bg-white dark:bg-zinc-700 shadow-normal text-zinc-700 dark:text-white font-Dana text-base
        tracking-normal border-t-[3px] border-orange-300 rounded-2xl transition-all delay-75 child:flex"
    >
      <div className="w-full justify-between items-center tracking-tighter">
        {/* Cart Header */}
        <span className="text-gray-300 font-DanaMd text-xs">1 مورد</span>
        <Link
          to=""
          className="flex justify-center items-center text-orange-300"
        >
          مشاهده سبد خرید <HiChevronLeft className="w-5 h-5" />
        </Link>
      </div>
      {/* Cart Body */}
      <div className="flex flex-col divide-y divide-gray-100 dark:divide-white/5 child:pt-5 h-96 min-h-max overflow-y-scroll scrollbar scrollbar-thumb-orange-200 dark:scrollbar-thumb-gray-700 scrollbar-track-gray-100 dark:scrollbar-track-gray-400">
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
    </div>
  );
};

export default Cart;

function CartItemsBody({ src, ProductTitle, ProductDiscount, ProductPrice }) {
  return (
    <div className="w-full flex">
      <img src={src} alt="CartImg" className="w-28 h-28  object-cover" />
      <div className="flex flex-col justify-between pb-6 gap-y-7">
        <h4 className="font-medium text-base font-DanaMd dark:text-white line-clamp-2">
          {ProductTitle}
        </h4>
        <div className="flex items-center gap-x-2.5">
          {/* Count Btns */}
          <div className="flex justify-center items-center border border-gray-300 text-xl text-orange-300 border-solid rounded-[100px] w-24 h-11">
            <button className="p-2 cursor-pointer">+</button>
            <span className="px-3">2</span>
            <button className="p-2 cursor-pointer">-</button>
          </div>
          {/* Cart Price */}
          <div className="flex flex-col justify-between">
            <p className="text-teal-600 dark:text-emerald-500 text-xs font-medium tracking-tighter p-1">
              {ProductDiscount} تومان تخفیف
            </p>
            <p className="text-2xl font-DanaBold dark:text-white">
              {ProductPrice}
              <span className="text-sm font-normal">تومان</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CartItemsBody };
