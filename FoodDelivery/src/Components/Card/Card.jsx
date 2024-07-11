import React from 'react';
import styles from './Card.module.css';

function Card(prop) {
    function formatTime(minutes) {
        if (minutes < 60) {
          return `${minutes} mins`;
        } else {
          const hours = Math.floor(minutes / 60);
          const remainingMinutes = minutes % 60;
          return `${hours} hr${hours > 1 ? 's' : ''} ${remainingMinutes} mins`;
        }}
      
  return (
    <div className={styles.card}>
      <div style={{ position: 'relative' }}>
        <img src={prop.img} />
        <div className={styles.discountBadge}>{prop.discount}</div>
        <div className={prop.isPromoted?styles.promotedBadge:styles.hidden}>{"Promoted"}</div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardBodyLeft}><h3 className={styles.cardTitle}>{prop.title}</h3>
        <p className={styles.cardDescription}>{prop.description}</p>
        </div>
        <span className={`${styles.rating} ${styles.cardBodyRight}`}>{prop.rating}★</span>
        <div className={styles.cardFooter}>
          
          <span className={styles.price}>₹{prop.estimate} for one</span>
          <span className={styles.time}>{formatTime(prop.time)}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
