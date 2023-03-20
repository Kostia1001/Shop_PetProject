import React from "react";
import styles from "./Cart.module.scss";
import ItemCart from "./ItemCart/ItemCart";
import { useSelector } from "react-redux";
import Summary from "./Summary/Summary";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  console.log(cart?.cartProducts);
  return (
    <div>
      <h1 className={styles.CartTitle}>Shopping Cart</h1>
      <div className={styles.Container}>
        <div className={styles.CartGrid}>
          <div className={styles.CartList}>
            {cart?.cartProducts &&
              cart?.cartProducts.map((item) => (
                <ItemCart key={item.cartId} item={item} name={item.name} />
              ))}
          </div>
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
