import { useEffect, useState } from "react";
import URIConstant from "../../../utils/constants/uri";
import Movies from "../../../components/functional/Movies";
import data from "../../../utils/constants/data";
import axios from "axios";
import Movie from "../../../models/movie";
import Hero from "../../../components/functional/Hero";
import React from "react";

const Popular = () => {
    const [movies, setMovies] = useState(data)

    const fetchData = async () => {
        const response = await axios(URIConstant.POPULAR)
        const nowPlayingMovies = response.data.results.map((nowPlayingMovie) => {
            return new Movie(nowPlayingMovie.id, nowPlayingMovie.title, nowPlayingMovie.release_date.substring(0, 4), URIConstant.imageURL(nowPlayingMovie.poster_path))
        })

        setMovies(nowPlayingMovies)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Hero />
            <Movies movies={movies} setMovies={setMovies} title="Popular Films" />
        </>
    );
}

export default Popular;
