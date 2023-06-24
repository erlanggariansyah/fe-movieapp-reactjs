import React from "react";
import style from "../../styles/Movie.module.css";

export default class Movie extends React.Component {
    render() {
        const { movie } = this.props;

        return (
            <div className={style.movie}>
                <img className={style.movie__image} src={movie.poster} alt={movie.title} />
                <h3 className={style.movie__title}>{movie.title}</h3>
                <p className={style.movie__date}>{movie.year}</p>
            </div>
        );
    }
}
