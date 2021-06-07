import React from 'react';
import {
    Link
} from "react-router-dom";

function Home() {
    return (
        <div>
            <p>
                Civics (History and Government) Questions for the Naturalization Test.
            </p>
            <Link to="/question">Let's get starter!</Link>
        </div>
    );
}

export default Home;