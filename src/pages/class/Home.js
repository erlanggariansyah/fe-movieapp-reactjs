import React from "react";
import Footer from "../../components/class/Footer";
import Main from "../../components/class/Main";
import Navbar from "../../components/class/Navbar";

class Home extends React.Component {
    render() {
        return (    
            <React.Fragment>
                <Navbar />
                <Main />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;
