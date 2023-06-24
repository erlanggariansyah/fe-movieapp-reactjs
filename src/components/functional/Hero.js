import styles from "../../styles/Hero.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import URIConstant from "../../utils/constants/uri";
import React from "react";

const Hero = () => {
    const { container, hero, hero__left, hero__right, hero__title, hero__image, hero__button, hero__genre, hero__description } = styles;
    const [movieHero, setMovieHero] = useState("")

    useEffect(() => {
        async function fetchData() {
            const response = await axios(URIConstant.TRENDING_DAY);
            const highlighted = await axios(URIConstant.detail(response.data.results[0].id));
            const genres = highlighted.data.genres.map((genre) => genre.name).join(", ");

            const data  = {
                Plot: highlighted.data.overview,
                Title: highlighted.data.title,
                Genre: genres,
                Poster: URIConstant.imageURL(highlighted.data.poster_path),
                Trailer: URIConstant.trailer(highlighted.data.videos.results[0].key)
            }

            setMovieHero(data)
        }

        fetchData()
    }, [])

    const redirectTrailer = () => {
        window.location.replace(movieHero.Trailer);
    }

    const description = <p className={hero__description}>{movieHero.Plot}</p>
    const button = <button className={hero__button} onClick={redirectTrailer}>Watch</button>
    const title = <h2 className={hero__title}>{movieHero.Title}</h2>
    const genre = <h2 className={hero__genre}>{movieHero.Genre}</h2>

    console.log(movieHero)

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
                    <img className={hero__image} src={movieHero.Poster} alt="placeholder"/>
                </div>
            </section>
        </div>
    )
}

export default Hero;
