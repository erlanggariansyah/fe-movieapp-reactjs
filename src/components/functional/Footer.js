import styles from "../../styles/Footer.module.css"

const Footer = () => {
    const { container, footer, footer__title, footer__author } = styles;
    const title = <h2 className={footer__title}>Movie App</h2>;
    const author = <p className={footer__author}>Created by Erlangga Riansyah</p>;

    return (
        <div className={container}>
            <footer className={footer}>
                {title}
                {author}
            </footer>
        </div>
    )
}

export default Footer;
