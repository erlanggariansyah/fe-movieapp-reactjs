import Footer from "../components/class/Footer"
import Navbar from "../components/class/Navbar"
import Container from "../containers";
import React from "react";

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <main>
                <Container>
                    {children}
                </Container>
            </main>
            <Footer />
        </div> 
    )
}

export default Layout;
