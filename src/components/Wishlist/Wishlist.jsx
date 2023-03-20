import React from "react";
import Item from "./Item/Item";
import styles from "./Wishlist.module.scss";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const stateProductSlice = useSelector((store) => store.product);
  console.log(stateProductSlice?.products);
  return (
    <div>
      <div className={styles.Container}>
        <h2 className={styles.WishlistTitle}>Wishlist</h2>
        <div>
          {stateProductSlice?.products &&
            stateProductSlice?.products.map((item, i) => (
              <Item key={item.wishListId} item={item} name={item.name} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
