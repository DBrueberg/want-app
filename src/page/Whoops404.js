import React from 'react';

function Whoops404({location}) {
    return (
        <div className="whoops-404">
            <h1>
                Sorry there was an error at '{location.pathname}'!
            </h1>
        </div>
    )
}

export default Whoops404;