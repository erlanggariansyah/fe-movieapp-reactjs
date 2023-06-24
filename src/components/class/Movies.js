import styles from "../../styles/Movies.module.css"
import Movie from "../functional/Movie";

export default class Movies {
    render() {
        const { movies, setMovies } = this.props
        const { container, movies__title, movie__container } = styles;

        return (
            <div>
                <div className={container}>
                    <section className={styles.movies}>
                        <h2 className={movies__title}>Latest Movie</h2>
                        <div className={movie__container}>
                            {
                                movies
                            }
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
