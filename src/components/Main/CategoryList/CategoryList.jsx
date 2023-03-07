import React from "react";
import CategoryItem from "./CategoryItem/CategoryItem";
import styles from "./CategoryList.module.scss";
import { BannerImg20, BannerImg21, BannerImg22 } from "../../Images/Images";

const Category = () => {
  const categoryList = [
    { name: "Glasses", src: BannerImg20, alt: "Glasses" },
    { name: "Sneakers", src: BannerImg21, alt: "Sneakers" },
    { name: "Handbags", src: BannerImg22, alt: "Handbags" },
  ];
  return (
    <section className={styles.Category}>
      <div className={styles.Container}>
        <h2 className={styles.CategoryTitle}>This Season Collection</h2>
        <div className={styles.CategoryGrid}>
          {categoryList.map((category, i) => (
            <CategoryItem
              name={category.name}
              src={category.src}
              alt={category.alt}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
