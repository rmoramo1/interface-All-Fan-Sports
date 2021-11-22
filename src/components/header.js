import { Button } from "bootstrap";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import logo from "../assets/img/logo.png"

export const Header = () => {
    return (
        <div className="container-fluid bg-header p-0">
            <div className="row g-0">
                <div className="col-10 col-lg-2">
                    <HashLink to="/">
                        <img src={logo} className="img-fluid" alt="logo of the site"></img>
                    </HashLink>
                </div>
                <div className="col-2  d-flex justify-content-center align-items-center d-block d-lg-none">
                    <HashLink className="navbar-toggler fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </HashLink>
                </div>
                <div className="col-4"></div>
                <div className="col-5 d-flex justify-content-center align-items-center">
                    <nav className="navbar navbar-expand-lg p-0">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <Link className="nav-link"to="faqs">FAQS</Link>
                                    <HashLink className="nav-link" to="glosary">Glosary</HashLink>
                                    <HashLink className="nav-link" to="contact">Contact</HashLink>
                                    <HashLink className="nav-link" to="admin">Admin</HashLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}