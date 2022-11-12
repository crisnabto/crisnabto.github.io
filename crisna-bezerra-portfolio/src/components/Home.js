import React from "react";
import styles from './Home.module.css'

class Home extends React.Component {
    render() {

        return (
            <div className={ styles.homeContainer }>
                {/* <body onload="document.body.className += ' loaded';" class="fadein"></body> */}
                <div className={ styles.portfolioContainer }>
                    <p>Portfolio</p>
                </div>
                <div className={ styles.picture }></div>
            </div>
        )
    }
}

export default Home;