import React from "react";
import styles from './Timeline.module.css';

function Timeline() {
    return (
        <div className={ styles.timeLineContainer }>
            <span>Portfolio</span>
            <div className= { styles.projectsContainer }>
                <div>
                    <p>To Do List</p>
                    <p>Shopping Cart</p>
                </div>
                <div>
                    <p>Trybetunes</p>
                    <p>Tryunfo</p>
                </div>
                <div>
                    <p>Recipe App</p>
                    <p>Wallet</p>
                </div>
            </div>

        </div>
    )
}

export default Timeline;