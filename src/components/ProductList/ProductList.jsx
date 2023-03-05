import React from "react";
import Button from "../Button/Button";
import Product from "../Product/Product";
import styles from "./ProductList.module.scss";

import {
  ProductImg1,
  ProductImg2,
  ProductImg3,
  ProductImg4,
  ProductImg5,
  ProductImg6,
  ProductImg7,
  ProductImg8,
} from "../Images/Images";

const Products = () => {
  const productsList = [
    { name: "Hoodie with pocket", src: ProductImg1, alt:'Product 01'},
    { name: "Flowers cotton dress", src: ProductImg2, alt:'Product 01' },
    { name: "Hoodie with pocket", src: ProductImg3, alt:'Product 01' },
    {
      name: "Oversize cotton sweatshirt",
      src: ProductImg4, alt:'Product 01'
    },
    {
      name: "Striped cotton-blend sweatshirt",
      src: ProductImg5, alt:'Product 01'
    },
    { name: "Hoodie with pocket", src: ProductImg6, alt:'Product 01' },
    { name: "Flowers cotton dress", src: ProductImg7, alt:'Product 01' },
    { name: "Hoodie with pocket", src: ProductImg8, alt:'Product 01' },
  ];
  return (
    <section className={styles.Products}>
      <div className={styles.Container}>
        <h2 className={styles.ProductsTitle}>This Week's Highlights</h2>
        <div className={styles.ProductsGrid}>
          {productsList.map((product, i) => {
            return (
              <Product
                key={i}
                alt={1}
                ProductName={product.name}
                src={product.src}
              />
            );
          })}
        </div>
        <div className={styles.ProductsBottom}>
        <Button to="/" name="Shop Now" color="white"></Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
