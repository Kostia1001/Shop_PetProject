import React from "react";
import Button from "../../../Button/Button";
import styles from "./CategoryItem.module.scss";
const CategoryItem = (props) => {
  const { src, name, alt } = props;
  return (
    <div className={styles.CategoryItem}>
      <img src={src} alt={alt} />

      <div className={styles.CategoryOverlay}>
        <Button to="#" name={name} color="dark"/>
      </div>
    </div>
  );
};

export default CategoryItem;
