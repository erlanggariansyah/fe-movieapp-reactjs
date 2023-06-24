import { useEffect, useState } from "react";
import DetailMovie from "../../../components/functional/DetailMovie";
import axios from "axios";
import Movie from "../../../models/movie";
import data from "../../../utils/constants/data";
import URIConstant from "../../../utils/constants/uri";
import { useParams } from "react-router-dom";
import Movies from "../../../components/functional/Movies";
import React from "react";

const Detail = () => {
    const { id } = useParams();
    const [movies, setMovies] = useState(data)

    const fetchData = async () => {
        const response = await axios(URIConstant.recommendation(id))
        const recommendationMovies = response.data.results.map((recommedationMovie) => {
            return new Movie(recommedationMovie.id, recommedationMovie.title, recommedationMovie.release_date.substring(0, 4), URIConstant.imageURL(recommedationMovie.poster_path))
        })

        setMovies(recommendationMovies)
    }

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        <>
            <DetailMovie />
            <Movies movies={movies} setMovies={setMovies} title="Recommendations" />
        </>
    )    
}

export default Detail;
