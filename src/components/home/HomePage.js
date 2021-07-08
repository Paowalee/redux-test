import React from 'react';
import { Link } from "rect-router-dom";

const HomePage = () => (
    <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router for ultra-responsive web apps.</p>
        <link to="about" className="btn btn-primary btn-lg">
            Learn more
        </link>
    </div>
);

export default HomePage;