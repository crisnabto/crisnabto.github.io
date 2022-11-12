import React from "react";
import styles from './About.module.css';

function About() {
    return (
        <div className={ styles.aboutContainer }>
            <span>About Us</span>
            <div className= { styles.generalContainer }>
                <div className= { styles.whoAmIContainer }>
                    <h2>Who Am I?</h2>
                    <p>I'm Crisna, nice to meet you! I'm 31 years old, and currently living in Brazil. I have a bachelor's degree in Architecture, but I never truly loved working as an Architect. So I decided to go after something that would make my eyes spark! Since I was a kid I enjoyed spending hours in front of the computer, and that was in fact when I first had the opportunitty to get to know the HTML world. I would create a simple blog and just spend countless hours trying to change and style everything I could! But then life took me to different ways, and now I'm bringing that dream back! </p>
                </div>

                <div className= { styles.skillsContainer }>
                    <h2>Education and Skills</h2>
                    <p>I studied Web Development at Trybe, a private institution, where I had the opportunitty to learn more about HTML, CSS, Javascript, React, Context, React Hooks, React Testing Library and so many more in the Front-End part of the course. In the Back-End module, I was able to learn Docker, MySQL, Node.js, Express, MSC Architecture, Sequelize, Typescript and so many more. </p>
                </div>
            </div>
        </div>
    )
}

export default About;