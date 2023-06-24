import React from "react";
import styles from "../../styles/Footer.module.css"

class Footer extends React.Component {
    render() {
        const { container, footer, footer__title, footer__author } = styles;
        return (
            <div className={container}>
                <footer className={footer}>
                    <h2 className={footer__title}>Movie App</h2>
                    <p className={footer__author}>Created by Erlangga Riansyah</p>
                </footer>
            </div>
        )
    }
}

export default Footer;
