import React from 'react';
import errorIllustration from '../error.svg';

function Error() {
    return(
        <div className="error">
            <h3>Error, please try again.</h3>
            <img alt="" className="illustration" src={errorIllustration} />
        </div>
    )
}

export default Error;