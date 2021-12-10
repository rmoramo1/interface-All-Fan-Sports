
import React from "react";
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
                                    <HashLink className="nav-link nav-link-pri" to="/faqs">FAQS</HashLink>
                                    <HashLink className="nav-link nav-link-pri" to="/glosary">Glosary</HashLink>
                                    <HashLink className="nav-link nav-link-pri" to="/contact">Contact</HashLink>
                                    <HashLink className="nav-link nav-link-pri" to="/admin">Admin</HashLink>
                                    <HashLink className="nav-link ul-drop nav-link-pri" to="/allGames">Games</HashLink>
                                    <HashLink className="nav-link ul-drop" to="#">Stats
                                        <ul className="">
                                            <li className="li_drop one_ul">
                                                NFL
                                                <ul className="second_ul">
                                                    <HashLink to="/list_nfl_stats">
                                                        <li className="li_drop">
                                                            Team Stats
                                                        </li>
                                                    </HashLink>
                                                    <HashLink to="/list_stats_nfl_py">
                                                        <li className="li_drop">
                                                            Players Stats
                                                        </li>
                                                    </HashLink>
                                                </ul>
                                            </li>
                                            <li className="li_drop one_ul">NBA
                                                <ul className="second_ul">
                                                    <li className="li_drop">
                                                        <HashLink to="/list_nba_stats">
                                                            Team Stats
                                                        </HashLink>

                                                    </li>
                                                    <li className="li_drop">
                                                        <HashLink to="/list_stats_nba_py">
                                                            Players Stats
                                                        </HashLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="li_drop">
                                                <li className="li_drop one_ul">
                                                    MLB
                                                    <ul className="second_ul">
                                                        <HashLink to="/list_mlb_stats">
                                                            <li className="li_drop">
                                                                Team Stats
                                                            </li>
                                                        </HashLink>
                                                        <HashLink to="/list_stats_mlb_py">
                                                            <li className="li_drop">
                                                                Players Stats
                                                            </li>
                                                        </HashLink>
                                                    </ul>
                                                </li>
                                            </li>
                                            <li className="li_drop">
                                                <li className="li_drop one_ul">
                                                    NHL
                                                    <ul className="second_ul">
                                                        <HashLink to="/list_nhl_stats">
                                                            <li className="li_drop">
                                                                Team Stats
                                                            </li>
                                                        </HashLink>
                                                        <HashLink to="/list_stats_nhl_py">
                                                            <li className="li_drop">
                                                                Players Stats
                                                            </li>
                                                        </HashLink>
                                                    </ul>
                                                </li>
                                            </li>
                                            <li className="li_drop">
                                                <Link to="/list_stats_fighter_box">
                                                    BOX
                                                </Link>

                                            </li>
                                            <li className="li_drop">
                                                <Link to="/list_stats_fighter_mma">
                                                    MMA
                                                </Link>
                                            </li>
                                            <li className="li_drop">
                                                <Link to="list_stats_golfer">
                                                    GOLF
                                                </Link>
                                            </li>
                                            <li className="li_drop">
                                                <Link to="/list_stats_nascar_driver">
                                                    NASCAR
                                                </Link>
                                            </li>
                                            <li className="li_drop">COLLEGE</li>
                                            <li className="li_drop">
                                                <li className="li_drop one_ul">
                                                    SOCCER
                                                    <ul className="second_ul">
                                                        <HashLink to="/list_soccer_stats">
                                                            <li className="li_drop">
                                                                Team Stats
                                                            </li>
                                                        </HashLink>
                                                        <HashLink to="/list_stats_nhl_py">
                                                            <li className="li_drop">
                                                                Players Stats
                                                            </li>
                                                        </HashLink>
                                                    </ul>
                                                </li>


                                            </li>
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