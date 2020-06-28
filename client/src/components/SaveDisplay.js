import React from "react";

function saveDisplay({ children }) {
    return (
        <div className="container mt-3">
            <div className="card">
                <h5 className="card-header">Saved Books</h5>
                <div className="card-body">{children}</div>
            </div>
        </div>    
    );
}

export default saveDisplay;