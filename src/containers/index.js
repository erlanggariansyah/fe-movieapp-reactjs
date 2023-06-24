import styles from "./index.module.css"
import React from "react";

const Container = ({children}) => {
    const { container } = styles;

    return (
        <div className={container}>
            {children}
        </div>
    )
}

export default Container;
