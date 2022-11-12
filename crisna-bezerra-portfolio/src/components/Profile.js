import React, { useContext } from "react";
import styles from './Profile.module.css';
import Home from './Home';
import Context from "../Context/Context";
import Timeline from "./Timeline";
import About from "./About";

function Profile() {
    const { showHome } = useContext(Context);
    const { showAbout } = useContext(Context);
    const { showTimeline } = useContext(Context);

    return (
        <div className={styles.generalContainer}>
            <div className={styles.profileContainer}>
                <div className={styles.infoContainer}>
                    <div style={{ backgroundImage: 'url(/FotoCrisna.jpg)' }} className={styles.picture}></div>
                    <h1><a href="index.html">Crisna Bezerra</a></h1>
                    <span>crisnabto@gmail.com</span>
                    <ul className={styles.linksToPages}>
                        <li>
                            <a
                                href="https://github.com/crisnabto"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                        </li>
                        <span>|</span>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/crisna-bezerra-2144865a/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Linkedin
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.mainContainer}>
                { showHome && <Home /> }
                { showTimeline && <Timeline /> }
                { showAbout && <About /> }
            </div>
        </div>
    )
}

export default Profile;