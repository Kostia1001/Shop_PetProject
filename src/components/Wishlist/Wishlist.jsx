import React from "react";
import Item from "./Item/Item";
import styles from "./Wishlist.module.scss";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const value = useSelector((store) => store.product);

  return (
    <div className={styles.Container}>
      <h2 className={styles.WishlistTitle}>Wishlist</h2>
      <div>
        {value?.products &&
          value?.products.map((item, i) => (
            <Item key={i} id={i} item={item} name={item.name} />
          ))}
      </div>
    </div>
  );
};

export default Wishlist;
