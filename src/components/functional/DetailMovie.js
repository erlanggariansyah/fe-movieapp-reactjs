import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import URIConstant from "../../utils/constants/uri";
import StyledDetailMovie from "../../styled/DetailMovie.styled";
import React from "react";

const DetailMovie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState("");
    
    const fetchDetailMovie = async () => {
        const url = URIConstant.detail(id);
        const response = await axios(url);

        const data  = {
            Plot: response.data.overview,
            Title: response.data.title,
            Genre: response.data.genres.map((genre) => genre.name).join(", "),
            Poster: URIConstant.imageURL(response.data.poster_path),
            Trailer: response.data.results != null ? URIConstant.trailer(response.data.videos.results[0].key) : null
        }

        setMovie(data)
    }

    
    const redirectTrailer = () => {
        window.location.replace(movie.Trailer);
    }

    useEffect(() => {
        fetchDetailMovie();
    }, [id])

    return(
        <>
            <StyledDetailMovie>
                <div className="poster">
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                <div className="info">
                    <h2>{movie.Title}</h2>
                    <h3>{movie.Genre}</h3>
                    <p>{movie.Plot}</p>
                    <button onClick={redirectTrailer}>Watch</button>
                </div>
            </StyledDetailMovie>
        </>
    );
}

export default DetailMovie;
