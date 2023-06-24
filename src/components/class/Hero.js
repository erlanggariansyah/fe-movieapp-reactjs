import React from "react";
import styles from "../../styles/Hero.module.css"

class Hero extends React.Component {
    render() {
        const { container, hero, hero__left, hero__right, hero__title, hero__image, hero__button, hero__genre, hero__description } = styles;
        const description = <p className={hero__description}>lorem</p>
        const button = <button className={hero__button}>Watch</button>
        const title = <h2 className={hero__title}>Spiderman</h2>
        const genre = <h2 className={hero__genre}>Genre: Thriller, Drama, Romance</h2>

        return (
            <div className={container}>
                <section className={hero}>
                    <div className={hero__left}>
                        {title}
                        {genre}
                        {description}
                        {button}
                    </div>
                    <div className={hero__right}>
                        <img className={hero__image} src="https://picsum.photos/536/354" alt="placeholder"/>
                    </div>
                </section>
            </div>
        )
    }
}

export default Hero;
