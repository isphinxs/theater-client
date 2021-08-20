import React from 'react';
import bannerImage from '../banner.jpg';

function Banner() {
    return(
        <div id="banner" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: "cover" }}>
        </div>
    )
}

export default Banner;