import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.textBlock}>
        <h1>Hi, I'm Glenn</h1>
        <p>A Power Platform Specialist</p>
        <button>Check Out My Email UI Demo</button>
      </div>
    </div>
  );
}

export default HeroSection;
