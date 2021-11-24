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
                                    <HashLink className="nav-link" to="/faqs">FAQS</HashLink>
                                    <HashLink className="nav-link" to="/glosary">Glosary</HashLink>
                                    <HashLink className="nav-link" to="/contact">Contact</HashLink>
                                    <HashLink className="nav-link" to="/admin">Admin</HashLink>
                                    <HashLink className="nav-link ul-drop" to="#">Stats
                                        <ul className="">
                                            <li className="li_drop one_ul">
                                                NFL
                                                <ul className="second_ul">
                                                    <li className="li_drop">
                                                        <HashLink to="/list_nfl_stats">
                                                            Team Stats
                                                        </HashLink>
                                                    </li>
                                                    <li className="li_drop">Players</li>
                                                </ul>
                                            </li>
                                            <li className="li_drop one_ul">NBA
                                                <ul className="second_ul">
                                                    <li className="li_drop">Team Stats</li>
                                                    <li className="li_drop">Players</li>
                                                </ul>
                                            </li>
                                            <li className="li_drop">MLB</li>
                                            <li className="li_drop">NHL</li>
                                            <li className="li_drop">BOX</li>
                                            <li className="li_drop">MMA</li>
                                            <li className="li_drop">GOLF</li>
                                            <li className="li_drop">NASCAR</li>
                                            <li className="li_drop">COLLEGE</li>
                                            <li className="li_drop">SOCCER</li>
                                        </ul>
                                    </HashLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}