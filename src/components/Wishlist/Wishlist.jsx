import React from "react";
import Item from "./Item/Item";
import styles from "./Wishlist.module.scss";
import { useContext } from "react";
import { ShopContext } from "../../context/ProductsContext";

const Wishlist = () => {
  const { state } = useContext(ShopContext);

  return (
    <div className={styles.Container}>
      <h2 className={styles.WishlistTitle}>Wishlist</h2>
      <div>
        {state?.products && state?.products.map((item, i) => (
          <Item key={i} id={i} item={item} name={item.name}/>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
