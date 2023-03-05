import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.Footer}>
    <div className={styles.Container}>
      <div className={styles.FooterWrapper}>
        <p className={styles.FooterCopyright}>© Shop</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer