import React from "react";

function SearchCard(props) {
    return (
        <div className="container mt-3">
            <div className="card">
                <h5 className="card-header">Book Search</h5>
                <div className="card-body">
                    <form onSubmit={props.onClick}>
                        <div className="form-group">
                        <label>Book</label>
                        <input type="text" className="form-control" value={props.value} onChange={props.onChange} placeholder="Example: Reading" required/>
                        </div>
                        <button className="btn btn-sm float-right" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchCard;