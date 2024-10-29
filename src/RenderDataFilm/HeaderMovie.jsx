import React from "react";

function HeaderMovie() {
  return (
    <div>
      <nav style={{backgroundColor : "rgba(125, 86, 187, 0.9)"}} className="navbar navbar-expand-sm ">
        <a style={{color: "white", marginLeft : "10px"}} className="navbar-brand" href="#">
          BETA CINEMA MOVIE
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a style={{color: "white"}} className="nav-link active" href="#" aria-current="page">
                Home <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a style={{color: "white"}} className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a style={{color: "white"}}
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Action 1
                </a>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li>
          </ul>
          
        </div>
      </nav>
    </div>
  );
}

export default HeaderMovie;
