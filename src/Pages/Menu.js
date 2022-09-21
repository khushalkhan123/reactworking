import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

function Menu () {
    return(
        <Fragment>
             <nav className="navbar navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src="assets/imgs/logo.svg" alt="" />
            </a>
            <div className="socials">
                <a href="javascript:void(0)"><i className="ti-facebook"></i></a>
                <a href="javascript:void(0)"><i className="ti-twitter"></i></a>
                <a href="javascript:void(0)"><i className="ti-pinterest-alt"></i></a>
                <a href="javascript:void(0)"><i className="ti-instagram"></i></a>
                <a href="javascript:void(0)"><i className="ti-youtube"></i></a>
            </div>
        </div>
    </nav>
    <nav className="navbar custom-navbar navbar-expand-md navbar-light bg-primary sticky-top">
        <div className="container">
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">                     
                    <li className="nav-item">
                        {/* <Link to="/">Home</Link> */}
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                       {/*  <Link to="/sidebar">No Sidebar</Link> */}
                       <a class="nav-link" href="/sidebar">No SideBar</a>
                    </li>
                    <li className="nav-item">
                        {/* <Link to="/">Single Post</Link> */}
                        <a class="nav-link" href="/singlepost">Single Post</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="components.html" className="ml-4 btn btn-dark mt-1 btn-sm">Components</a>
                    </li>
                </div>
            </div>
        </div>
    </nav>
    <header className="page-header"></header>
        </Fragment>

    )
}

export default Menu;