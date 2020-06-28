import React from "react";

function Nav() {
    return (
        < nav classame="nav navbar-expand-lg navbar-dark">
            <a className="nav-link" href="/">
                <h3>Google Books</h3>
            </a>
            <a className="nav-link mt-2" href="/">Search</a>
            <a className="nav-link mt-2" href="/saved">Saved</a>
        </nav>
    );
}

export default Nav;