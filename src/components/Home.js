import React from 'react';
import illustration from '../illustration.svg';

function Home() {
    return(
        <div className="home">
            <div className="box-left">
                <h3>Deciding what to see next?</h3>
                <p>You're in the right place. We'll help you sort through the shows you've already seen and help you choose your next show.</p>
            </div>
            <div>
                <h3>What are your friends seeing?</h3>
                <p>Chances are your friends are discussing their favorite (and least favorite) shows on Goodtheater.</p>
            </div>
            <img className="illustration" src={illustration} />
        </div>
    )
}

export default Home;