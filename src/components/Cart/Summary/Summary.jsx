import React from "react";
import Button from "../../Button/Button";
import { useSelector } from "react-redux";
import styles from "./Summary.module.scss";
const Summary = () => {
  const cart = useSelector((store) => store.cart);
  return (
    <div>
      <h4 className={styles.SummaryTitle}>Summary</h4>
      <div className={styles.SummaryBody}>
        <div className={styles.SummaryLine}>
          <div>Total</div>
          <div>${cart.cartSum}</div>
        </div>
      </div>
      <Button to="#" name="Check Out" color="dark" width="full" />
    </div>
  );
};

export default Summary;
