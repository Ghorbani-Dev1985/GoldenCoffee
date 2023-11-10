import React from "react";
import { Link } from "react-router-dom";

const categoriesItems = [
  {
    id: 1,
    categoryTo: "",
    categoryImg: "../../src/assets/Images/categories/category1.png",
    categoryName: "قهوه دمی و اسپرسو",
  },
  {
    id: 2,
    categoryTo: "",
    categoryImg: "../../src/assets/Images/categories/category2.png",
    categoryName: "لوازم جانبی و تجهیزات",
  },
  {
    id: 3,
    categoryTo: "",
    categoryImg: "../../src/assets/Images/categories/category3.png",
    categoryName: "  اسپرسو ساز",
  },
  {
    id: 4,
    categoryTo: "",
    categoryImg: "../../src/assets/Images/categories/category4.png",
    categoryName: "  پک تستر قهوه",
  },
  {
    id: 5,
    categoryTo: "",
    categoryImg: "../../src/assets/Images/categories/category5.png",
    categoryName: " قهوه ترک",
  },
];

const Categories = () => {
  return (
    <section className="mb-10 md:mb-20">
      <div className="container">
        <div className="flex justify-center items-center flex-wrap gap-y-6 gap-x-7 lg:gap-16">
          {categoriesItems.map(({ id, categoryTo , categoryImg, categoryName }) => {
            return(
                <div key={id} className="w-25 md:w-50 text-center">
            <Link to={categoryTo}  className="">
              <img src={categoryImg} alt="گلدن کافی" className="w-25 h-25 md:w-50 md:h-50 object-cover mb-3" loading="lazy" />
              <span className="inline-block font-DanaBold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5">{categoryName}</span>
            </Link>
                </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
