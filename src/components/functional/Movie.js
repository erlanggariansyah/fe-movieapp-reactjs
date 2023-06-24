import { Link } from "react-router-dom";
import style from "../../styles/Movie.module.css";
import React from "react";

const Movie = (props) => {
    const { poster, title, year, id } = props.movie;

    return (
        <div className={style.movie}>
                <img className={style.movie__image} src={poster} alt={title} />
                <Link to={`/movie/${id}`}>
                    <h3 className={style.movie__title}>{title}</h3>
                </Link>
                <p className={style.movie__date}>{year}</p>
        </div>
    )
}

export default Movie;
