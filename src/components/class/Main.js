import React from "react";
import Movies from "../functional/Movies";
import AddMovieForm from "./AddMovieForm";
import Hero from "./Hero";

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Hero />
                <Movies />
                <AddMovieForm />
            </main>
        )
    }
}
