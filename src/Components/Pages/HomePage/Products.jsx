import React from "react";
import TitleSection from "../../Common/TitleSection";

const Products = () => {
  return (
    <section className="xl:bg-products-linear xl:dark:bg-products h-[900px] bg-no-repeat bg-cover bg-center pt-48">
      <div className="container">
        <TitleSection
          mainTitle="جدیدترین محصولات"
          subTitle="فرآوری شده از دانه قهوه"
          showMoreDesktop="مشاهده همه محصولات"
          showMoreMobile="مشاهده همه"
        />
      </div>
    </section>
  );
};

export default Products;
