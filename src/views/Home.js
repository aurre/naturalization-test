import React from 'react';
import {
    Link
} from "react-router-dom";
import logo from '../logo.png';
import Button from '@material-ui/core/Button';
import './Home.css';

function Home() {
    return (
        <div>
            <div>
                <div className="login-container">
                    <Button variant="contained" color="primary">
                        Login
                    </Button>
                    <Button variant="contained" color="primary">
                        Sign Up
                    </Button>
                </div>
                <img src={logo} className="App-logo" alt="logo" />
                <p className="t-b">
                    Civics (History and Government) Questions for the Naturalization Test.
                </p>
                <Link to="/question" className="t-b">Start Practice!</Link>
            </div>
        </div>
    );
}

export default Home;