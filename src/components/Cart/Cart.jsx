import React from "react";
import style from "./Cart.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { ProductImg7 } from "../Images/Images";
const Cart = () => {
  return (
    <div>
      <h1 className={style.CartTitle}>Shopping Cart</h1>
      <div className={style.Container}>
        <div className={style.CartGrid}>
          <div className={style.CartList}>
            <div className={style.Item}>
              <div className={style.ItemContent}>
                <button to="#" className={style.ItemDeleteBtn}>
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

                <img
                  src={ProductImg7}
                  className={style.ItemImage}
                  alt="Partridge Bar Stool"
                />

                <div>
                  <p className={style.ItemCategory}>Dress</p>
                  <Link to="#" className={style.ItemName}>
                    Oversize cotton sweatshirt
                  </Link>
                </div>
              </div>

              <p>750$</p>
            </div>
          </div>

          <div>
            <h4 className={style.SummaryTitle}>Summary</h4>

            <div className={style.SummaryBody}>
              <div className={style.SummaryLine}>
                <div>Total</div>
                <div>$2020.00</div>
              </div>
            </div>
            <Button to="#" name="Check Out" color="dark" width="full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
