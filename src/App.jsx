import React from 'react'

const App = () => {
  return (
    <div>
      <h1> Portfolio </h1>
    </div>
  )
}

export default App


return (
  <nav className={styles.navbar}>
    <a className={styles.title} href="/">
      Portfolio
    </a>
    <div className={styles.menu}>
      <img
        className={styles.menuBtn}
        src={
          menuOpen
            ? getImageUrl("nav/closeIcon.png")
            : getImageUrl("nav/menuIcon.png")
        }
        alt="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <ul
        className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}
      >
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);
};
