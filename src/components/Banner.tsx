import React from 'react';
import styles from './banner.module.css';

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <img src="/img/pic1.jpg" alt="Banner" className={styles.bannerImage} />

      <div className={styles.overlay}>
        {/* ขยายฟอนต์ where every event finds its venue */}
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          where every event finds its venue
        </h1>
        {/* ขยายฟอนต์ข้อความอธิบาย */}
        <p style={{ fontSize: '1.1rem', fontWeight: 500, maxWidth: '800px' }}>
          Finding the perfect venue has never been easier. Whether it’s a wedding, 
          corporate event, or private party, we connect people to the perfect place.
        </p>
      </div>
    </div>
  );
};

export default Banner;
