import React from "react";
import Movie from "../Components/Movie";
import Header from "../Components/Header";
import Next from "../Components/Next";
import Footer from "../Components/Footer";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Movie />
            <Next />
            <Footer />
        </div>
    )
}

export default Home