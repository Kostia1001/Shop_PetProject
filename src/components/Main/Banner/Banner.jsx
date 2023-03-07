import React from "react";
import styles from "./Banner.module.scss";
import Button from "../../Button/Button";
import { HomeImg07 } from "../../Images/Images";
const Banner = () => {

  return (
    <section className={styles.Banner}>
      <div className={styles.Container}>
        <div className={styles.BannerWrapper}>
          <img src={HomeImg07} alt="" />
          <div className={styles.BannerOverlay}>
            <div>
              <h1 className={styles.BannerTitle}>Waffle Hooded Coat</h1>
              <Button to="/" name="Shop Now" color="dark"></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// src="../img/image-home-07.jpg"
export default Banner;
