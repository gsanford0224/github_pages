import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li>Home</li>
          <li>Skills</li>
          <li>About Me</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
