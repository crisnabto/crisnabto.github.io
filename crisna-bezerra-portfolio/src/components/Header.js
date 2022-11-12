import React, { useContext } from "react";
import styles from './Header.module.css';
import Context from "../Context/Context";

function Header() {
  const { setShowHome } = useContext(Context);
  const { setShowAbout } = useContext(Context);
  const { setShowTimeline } = useContext(Context);

  const handleClick = (target) => {
    if (target === 'timeline') {
      setShowTimeline(true);
      setShowAbout(false);
      setShowHome(false);
    }
    if (target === 'about') {
      setShowAbout(true);
      setShowHome(false);
      setShowTimeline(false);
    }
    if (target === 'home') {
      setShowHome(true);
      setShowAbout(false);
      setShowTimeline(false);
    }
  }

  return (
    <div className={styles.generalContainer}>
      {/* <div className={ styles.infoContainer }>
                    <div style={{ backgroundImage: 'url(/FotoCrisna.jpg)' }} className={ styles.picture }></div>
                    <h1><a href="index.html">Crisna Bezerra</a></h1>
                    <span>crisnabto@gmail.com</span>
                </div> */}

      <div className={styles.sectionsContainer}>
        <ul className={styles.linksList}>
          <li><a href="#home" onClick={ () => handleClick('home') } id="home">Home</a></li>
          <li><a href="#about" onClick={ () => handleClick('about') } id="about">About Us</a></li>
          <li><a href="#timeline" onClick={ () => handleClick('timeline') } id="timeline">Portfolio</a></li>
        </ul>
      </div>

      {/* <div className="links-container">
                    <ul>
                        <li>
                          <a 
                            href="https://github.com/crisnabto"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                          Github</a></li>
                        <li>
                          <a 
                            href="https://www.linkedin.com/in/crisna-bezerra-2144865a/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                          Linkedin</a></li>
                    </ul>
                </div> */}

      {/* <div>
                  <p><small>Made with love!</small></p>
                </div> */}

    </div>
  )
}

export default Header;