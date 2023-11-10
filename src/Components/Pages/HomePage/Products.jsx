import React from "react";
import TitleSection from "../../Common/TitleSection";
import {
  HiOutlineArrowsRightLeft,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { Rating } from "@mui/material";

const ProductsItems = [ 
  {
    id: 1,
    productImg: "../../src/assets/Images/products/p1.png",
    productName: "قهوه ترک",
    productPrice: 230_000,
    productPriceDiscount: "",
    productDiscountPresent: 0,
    productIsInStock: true,
    productStar: 4,
  },
  {
    id: 2,
    productImg: "../../src/assets/Images/products/p2.png",
    productName: "قهوه ترک بن مانو مقدار 250 گرم با کافئین متوسط",
    productPrice: 99000,
    productPriceDiscount: "",
    productDiscountPresent: 0,
    productIsInStock: false,
    productStar: 4,
  },
  {
    id: 3,
    productImg: "../../src/assets/Images/products/p3.png",
    productName: "قهوه ترک بن مانو مقدار 250 گرم با کافئین بالا",
    productPrice: 190_000,
    productPriceDiscount: 220_000,
    productDiscountPresent: 10,
    productIsInStock: true,
    productStar: 3,
  },
  {
    id: 4,
    productImg: "../../src/assets/Images/products/p4.png",
    productName: " قهوه ترک بن مانو مقدار 250 گرم با کافئین متوسط مصرف عصر",
    productPrice: 175_000,
    productPriceDiscount: "",
    productDiscountPresent: 0,
    productIsInStock: true,
    productStar: 4,
  },
  {
    id: 5,
    productImg: "../../src/assets/Images/products/p5.png",
    productName: " قهوه نورسکا بن مانو ۹ صبح با کافئین زیاد برای مصرف صبح",
    productPrice: 184_000,
    productPriceDiscount: 195_000,
    productDiscountPresent: 9,
    productIsInStock: true,
    productStar: 2,
  },
  {
    id: 6,
    productImg: "../../src/assets/Images/products/p6.png",
    productName: "قهوه نورسکا بن مانو ۶ عصر با کافئین پایین برای مصرف عصر",
    productPrice: 109_000,
    productPriceDiscount: "",
    productDiscountPresent: 0,
    productIsInStock: false,
    productStar: 1,
  },
  {
    id: 7,
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
    id: 8,
    productImg: "../../src/assets/Images/products/p8.png",
    productName:
      " قهوه نورسکا بن مانو ۲ ظهر با کافئین متوسط برای مصرف ساعات بعد از ظهر",
    productPrice: 165_000,
    productPriceDiscount: "",
    productDiscountPresent: 0,
    productIsInStock: true,
    productStar: 5,
  },
];

const Products = () => {
  const [productStarValue, setProductStarValue] = React.useState(2);
  return (
    <section className="xl:bg-products-linear xl:dark:bg-products bg-no-repeat bg-cover bg-center pt-8 md:pt-24 lg:pt-48 mb-8 md:mb-20">
      <div className="container">
        {/* Product Header */}
        <TitleSection
          mainTitle="جدیدترین محصولات"
          subTitle="فرآوری شده از دانه قهوه"
          showMoreDesktop="مشاهده همه محصولات"
          showMoreMobile="مشاهده همه"
        />
        {/* Product Body Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-4">
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
                <section
                  key={id}
                  className="bg-white dark:bg-zinc-700 shadow-normal rounded-2xl p-2 md:p-4"
                >
                  <div className="relative mb-2 md:mb-5 h-32 md:h-52">
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
                      onChange={(event, newValue) => {
                        setProductStarValue(newValue);
                      }}
                    />
                  </div>
                </section>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
