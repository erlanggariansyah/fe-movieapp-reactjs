import React from "react";
import styles from "../../styles/Navbar.module.css"
import { Link } from "react-router-dom";

class Navbar extends React.Component {    
    render() {
        const { container, navbar, navbar__brand, navbar__list, navbar__item, navbar__link, navbar_list } = styles;

        return (
            <div className={container}>
                <nav className={navbar}>
                    <div>
                        <h1 className={navbar__brand}>Movie App</h1>
                    </div>
                    <div className={navbar_list}>
                        <ul className={navbar__list}>
                            <li className={navbar__item}>
                                <Link className={navbar__link} to="/">Home</Link>
                            </li>
                            <li className={navbar__item}>
                                <Link className={navbar__link} to="/movie/add">Add Movie</Link>
                            </li>
                            <li className={navbar__item}>
                                <Link className={navbar__link} to="/movie/popular">Popular</Link>
                            </li>
                            <li className={navbar__item}>
                                <Link className={navbar__link} to="/movie/playing">Now Playing</Link>
                            </li>
                            <li className={navbar__item}>
                                <Link className={navbar__link} to="/movie/rated">Top Rated</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
