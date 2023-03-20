import React from "react";
import styles from "./ItemCart.module.scss";
import { Link } from "react-router-dom";
import { removeFromItemCart } from "../../../store/cartSlice";
import { useDispatch } from "react-redux";

const ItemCart = (props) => {
  const { src, price, ProductName, alt, cartId } = props.item;
  const dispatch = useDispatch();

  const handleClickRemove = () => {
    dispatch(removeFromItemCart(cartId));
  };

  return (
    <div className={styles.Item}>
      <div className={styles.ItemContent}>
        <button
          to="#"
          className={styles.ItemDeleteBtn}
          onClick={handleClickRemove}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <i className="fal fa-times"></i>
        </button>

        <img src={src} className={styles.ItemImage} alt={alt} />

        <div>
          <p className={styles.ItemCategory}>Dress</p>
          <Link to="#" className={styles.ItemName}>
            {ProductName}
          </Link>
        </div>
      </div>

      <p>${price}</p>
    </div>
  );
};

export default ItemCart;
