import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Product.module.scss";
import { addToItem } from "../../../../store/productSlice";
import { useDispatch } from "react-redux";

const Product = (product) => {
  const { src, ProductName, alt, price, id } = product;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToItem(product));
  };

  return (
    <div className={styles.Product} id={id}>
      <div className={styles.ProductsImage}>
        <NavLink to="/home" className={styles.ProductsImageBlock}>
          <img src={src} alt={alt} />
        </NavLink>

        <button onClick={handleClick} className={styles.AddToWishlist}>
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
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
      <div className={styles.ProductBody}>
        <h3>
          <NavLink to="/home">{ProductName}</NavLink>
        </h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Product;
