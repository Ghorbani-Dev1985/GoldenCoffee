import React, { useRef, useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineArrowsRightLeft,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Rating } from "@mui/material";

const ProductsItems = [
  {
    id: 1,
    productImg: "../../src/assets/Images/products/p5.png",
    productName: " قهوه نورسکا بن مانو ۹ صبح با کافئین زیاد برای مصرف صبح",
    productPrice: 184_000,
    productPriceDiscount: 195_000,
    productDiscountPresent: 9,
    productIsInStock: true,
    productStar: 2,
  },
  {
    id: 2,
    productImg: "../../src/assets/Images/products/p6.png",
    productName: "قهوه نورسکا بن مانو ۶ عصر با کافئین پایین برای مصرف عصر",
    productPrice: 109_000,
    productPriceDiscount: "",
    productDiscountPresent: 0,
    productIsInStock: false,
    productStar: 1,
  },
  {
    id: 3,
    productImg: "../../src/assets/Images/products/p7.png",
    productName:
      " قهوه نورسکا بن مانو ۸ شب بدون کافئین برای مصرف شب بدون بی خوابی",
    productPrice: 240_000,
    productPriceDiscount: "",
    productDiscountPresent: 0,
    productIsInStock: true,
    productStar: 0,
  },
  {
    id: 4,
    productImg: "../../src/assets/Images/products/p8.png",
    productName:
      " قهوه نورسکا بن مانو ۲ ظهر با کافئین متوسط برای مصرف ساعات بعد از ظهر",
    productPrice: 165_000,
    productPriceDiscount: "",
    productDiscountPresent: 0,
    productIsInStock: true,
    productStar: 5,
  },
  {
    id: 5,
    productImg: "../../src/assets/Images/products/p1.png",
    productName: "قهوه ترک",
    productPrice: 230_000,
    productPriceDiscount: "",
    productDiscountPresent: 0,
    productIsInStock: true,
    productStar: 4,
  },
  {
    id: 6,
    productImg: "../../src/assets/Images/products/p2.png",
    productName: "قهوه ترک بن مانو مقدار 250 گرم با کافئین متوسط",
    productPrice: 99000,
    productPriceDiscount: "",
    productDiscountPresent: 0,
    productIsInStock: false,
    productStar: 4,
  },
  {
    id: 7,
    productImg: "../../src/assets/Images/products/p3.png",
    productName: "قهوه ترک بن مانو مقدار 250 گرم با کافئین بالا",
    productPrice: 190_000,
    productPriceDiscount: 220_000,
    productDiscountPresent: 10,
    productIsInStock: true,
    productStar: 3,
  },
  {
    id: 8,
    productImg: "../../src/assets/Images/products/p4.png",
    productName: " قهوه ترک بن مانو مقدار 250 گرم با کافئین متوسط مصرف عصر",
    productPrice: 175_000,
    productPriceDiscount: "",
    productDiscountPresent: 0,
    productIsInStock: true,
    productStar: 4,
  },
];

const Bestselling = () => {
  const [productStarValue, setProductStarValue] = useState(2);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <section className="mb-8 md:mb-20 ">
      <div className="container">
        {/* Head Title */}
        <div className="flex justify-between items-end mb-5 md:mb-12">
          <div>
            <h2 className="text-zinc-700 dark:text-white font-MorabbaMd text-2xl md:text-5xl leading-11 font-medium">
              محصولات پر فروش
            </h2>
            <p className="w-full flex flex-1 text-zinc-700 dark:text-white font-Morabba text-lg md:text-3xl mt-0.5 md:mt-1.5 font-normal leading-11">
              پیشنهاد قهوه خور ها ...
            </p>
          </div>
          {/* Head Chevron */}
          <div className="flex-center gap-x-3 md:gap-x-[1.12rem]">
            <div
              ref={navigationPrevRef}
              className="flex-center swiper-button"
            >
              <HiChevronRight className="text-xl md:text-[1.625rem]" />
            </div>
            <div
              ref={navigationNextRef}
              className="flex-center swiper-button"
            >
              <HiChevronLeft className="text-xl md:text-[1.625rem]" />
            </div>
          </div>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation , Autoplay]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={14}
          slidesPerView={2}
          centeredSlides={true}
          breakpoints={{
            0:{
                slidesPerView: 1,
                spaceBetween: 14,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 14,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides : true,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
          }}
        >
            {ProductsItems.map(
              ({
                id,
                productImg,
                productName,
                productPrice,
                productPriceDiscount,
                productDiscountPresent,
                productIsInStock,
                productStar,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <section className="bg-white dark:bg-zinc-700 shadow-normal rounded-2xl p-2 md:p-4">
                      <div className="relative mb-2 md:mb-5 lg:h-[271px] h-32 md:h-52">
                        <img
                          src={productImg}
                          alt="گلدن کافی"
                          className="w-32 md:w-auto mx-auto object-cover"
                          loading="lazy"
                        />
                        {productDiscountPresent > 0 && (
                          <span className="absolute block h-5 md:h-[30px] bg-orange-300 top-0 right-0 font-DanaBold text-xs/[24px] md:text-base/[34px] text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full">
                            {productDiscountPresent}%
                          </span>
                        )}
                      </div>
                      <h4 className="font-DanaMd text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 h-10 md:h-14 mb-1.5 md:mb-2.5">
                        {productName}
                      </h4>

                      {productIsInStock ? (
                        <>
                          <div className="flex items-center gap-x-2 md:gap-x-2.5">
                            <p className="text-base md:text-xl text-teal-600 dark:text-emerald-500 font-DanaBold font-semibold">
                              {productPrice.toLocaleString("fa-IR")}
                              <span className="text-xs md:text-sm tracking-tighter">
                                {" "}
                                تومان
                              </span>
                            </p>
                            {productPriceDiscount && (
                              <p className="text-gray-400 relative text-sm md:text-xl after:absolute after:top-2 after:md:top-3.5 after:right-0 after:w-full after:h-[0.0625rem] after:bg-red-500">
                                {productPriceDiscount.toLocaleString("fa-IR")}
                                <span className="hidden text-xs md:text-sm xl:inline-flex tracking-tighter">
                                  {" "}
                                  تومان
                                </span>
                              </p>
                            )}
                          </div>
                        </>
                      ) : (
                        <p className="text-red-400 text-base md:text-xl">
                          فعلا موجود نیست
                        </p>
                      )}
                      <div className="w-full flex justify-between items-center mt-4">
                        <div className="flex-center gap-x-3">
                          <button className="w-7 h-7 md:w-9 md:h-9 flex-center bg-gray-100 hover:bg-teal-600 dark:hover:bg-emerald-500 text-gray-400 hover:text-white transition-colors dark:bg-zinc-800 rounded-full">
                            <HiOutlineShoppingCart className="text-base md:text-[22px] cursor-pointer" />
                          </button>
                          <p className="w-7 h-7 md:w-9 md:h-9 flex-center text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500 cursor-pointer transition-colors">
                            <HiOutlineArrowsRightLeft className="text-2xl" />
                          </p>
                        </div>
                        <Rating
                          value={productStar}
                          size="small"
                          onChange={(event, newValue) => {
                            setProductStarValue(newValue);
                          }}
                        />
                      </div>
                    </section>
                  </SwiperSlide>
                );
              }
            )}
        </Swiper>
      </div>
    </section>
  );
};

export default Bestselling;
