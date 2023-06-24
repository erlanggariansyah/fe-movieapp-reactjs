import { useNavigate } from "react-router-dom";
import styles from "../../styles/AddMovieForm.module.css";
import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../../features/movieSlice";

const AddMovieForm = () => {
    const { container, form, form__field, form__left, form__right, form__title, form__image, form__button, form__subtitle } = styles;
    const [ title, setTitle ] = useState("")
    const [ date, setDate ] = useState("")
    const [ link, setLink ] = useState("")
    const [ genre, setGenre ] = useState("")
    const [ isTitleNull, setIsTitleNull ] = useState(false)
    const [ isDateNull, setIsDateNull ] = useState(false)
    const [ isLinkNull, setIsLinkNull ] = useState(false)
    const [ isGenreNull, setIsGenreNull ] = useState(false)
    const navigator = useNavigate()
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()

        if (title === "") {
            setIsTitleNull(true)
        } else if (date === "") { 
            setIsDateNull(true) 
        } else if (link === "") {
            setIsLinkNull(true)
        } else if (genre === "") {
            setIsGenreNull(true)
        } else {
            const movie = {
                id: Math.random().toString(),
                title: title,
                year: date,
                type: genre,
                poster: link,
            }

            dispatch(addMovie(movie))
        }

        navigator("/")
    }

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeDate = (e) => {
        setDate(e.target.value)
    }

    const handleChangeLink = (e) => {
        setLink(e.target.value)
    }

    const handleChangeGenre = (e) => {
        setGenre(e.target.value)
    }
    
    const button = <button className={form__button} type="submit">Submit</button>
    const titleForm = <h2 className={form__title}>Add Movie</h2>
    const movieTitle = <label className={form__subtitle}>Title</label>
    const movieYear = <label className={form__subtitle}>Year</label>
    const movieLink = <label className={form__subtitle}>Image Link</label>
    const movieGenre = <label className={form__subtitle}>Genre</label>
    const movieForm = (
            <div>
                <form onSubmit={handleClick}>
                    { isTitleNull ? <p>Title wajib di isi.</p> : null }
                    <div className={form__field}>
                        {movieTitle}
                        <input type="text" title={movieTitle} name="title" onChange={handleChangeTitle} />
                    </div>
                    { isDateNull ? <p>Date wajib di isi.</p> : null }
                    <div className={form__field}>
                        {movieYear}
                        <input type="text" title={movieYear} name="year" onChange={handleChangeDate} />
                    </div>
                    { isLinkNull ? <p>Link wajib di isi.</p> : null }
                    <div className={form__field}>
                        {movieLink}
                        <input type="text" title={movieLink} name="link" onChange={handleChangeLink} />
                    </div>
                    { isGenreNull ? <p>Genre wajib di isi.</p> : null }
                    <div className={form__field}>
                        {movieGenre}
                        <select value={genre} onChange={handleChangeGenre}>
                            <option value="Action" selected>Action</option>
                            <option value="Drama" selected>Drama</option>
                            <option value="Horror" selected>Horror</option>
                            <option value="Comedy" selected>Comedy</option>
                        </select>
                    </div>
                    {button}
                </form>
            </div>
    )

    return (
            <div className={container}>
                <section className={form}>
                    <div className={form__left}>
                        <img className={form__image} src="https://picsum.photos/536/354" alt="placeholder"/>
                    </div>
                    <div className={form__right}>
                        {titleForm}
                        {movieForm}
                    </div>
                </section>
            </div>
    )
}

export default AddMovieForm;
