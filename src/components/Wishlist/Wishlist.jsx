import React from "react";
import Item from "./Item/Item";
import { ProductImg7 } from "../Images/Images";
import styles from "./Wishlist.module.scss";
const Wishlist = () => {
  const wishlist = [
    {
      name: "Add To Cart",
      src: ProductImg7,
      alt: "Flowers cotton dress",
      price: "$29.00",
      title: "Flowers",
    },
    {
      name: "Add To Cart",
      src: ProductImg7,
      alt: "Flowers cotton dress",
      price: "$29.00",
      title: "Flowers",
    },
  ];
  return (
    <div className={styles.Container}>
      <h2 className={styles.WishlistTitle}>Wishlist</h2>
      <div className={styles}>
        {wishlist.map((item, i) => (
          <Item
            key={i}
            name={item.name}
            src={item.src}
            alt={item.alt}
            price={item.price}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
