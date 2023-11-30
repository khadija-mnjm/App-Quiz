import React, { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../home.css'; 
import imgQ from '../img/imgQ.png';
const Home = () => {
    useEffect(() => {
        // Side effects can be placed here, similar to componentWillMount
        // This will be called after the component is mounted

        // For example, you can fetch data or perform other asynchronous operations here
        // Make sure to clean up any resources in the cleanup function if necessary
        return () => {
            // Cleanup code here (if needed)
        };
    }, []); // The empty dependency array [] ensures that this effect runs once, similar to componentDidMount

    return (
        <Fragment>
            <Helmet><title>Home - Quiz App</title></Helmet>
            <div id="home">
                <section>
                    <div style={{ textAlign: 'center' }}>
                        <span className="mdi mdi-cube-outline cube"></span>
                    </div>
                    <h1 className='h1Q'>Welcome to quiz</h1>
                    <div className="play-button-container">
                        <ul>
                            <li><Link className="play-button" to="/login">Play</Link></li>
                        </ul>
                    </div>
                    <div>
                    <img  className="cuteimg" src={imgQ} alt="Description of the image" />
                    </div>
                    {/* <div className="auth-container">
                        <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
                        <Link to="/register" className="auth-buttons" id="signup-button">Sign up</Link>
                    </div> */}
                </section>
            </div>
        </Fragment>
    );
};

export default Home;
