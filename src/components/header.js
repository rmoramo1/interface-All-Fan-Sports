import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";
import logo from "../assets/img/logo.webp"

export const Header = () => {
    const { store } = useContext(Context);
    const [auth, setAuth] = useState(false);
    let refrescar = () => {
        window.localStorage.removeItem("my_token");
        window.location.reload(true)
    };

    useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);
    }, []);
    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    let nav = "d-none";
    if (!roy) {
        nav = "d-none";
    } else {
        nav = "d-block col";
    }
    return (
        <div className="container-fluid bg-header p-0">
            <div className="row g-0" id="navbarNavAltMarkup">
                <div className="col-10 col-lg-2">
                    <HashLink to="/admin">
                        <img src={logo} className="img-fluid" alt="logo of the site"></img>
                    </HashLink>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center d-block d-lg-none">
                    <HashLink className="navbar-toggler fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </HashLink>
                </div>
                <div className="col-2">

                </div>
                <div className={nav}>
                    <div className="row g-0">
                        <div className="col-5">
                            <div className="d-flex justify-content-center align-items-center">
                                <nav className="navbar navbar-expand-lg p-0">
                                    <div className="container-fluid">
                                        <div className="collapse navbar-collapse" >
                                            <div className="navbar-nav">
                                                {/* <HashLink className="nav-link nav-link-pri" to="/faqs">FAQS</HashLink>
                                    <HashLink className="nav-link nav-link-pri" to="/glosary">Glosary</HashLink>
                                    <HashLink className="nav-link nav-link-pri" to="/contact">Contact</HashLink> */}

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
                                                        <li className="li_drop one_ul">
                                                            NCAA FOOTBALL
                                                            <ul className="second_ul">
                                                                <HashLink to="/list_ncaa_fot_stats">
                                                                    <li className="li_drop">
                                                                        Team Stats
                                                                    </li>
                                                                </HashLink>
                                                                <HashLink to="/list_stats_ncaa_foot_py">
                                                                    <li className="li_drop">
                                                                        Players Stats
                                                                    </li>
                                                                </HashLink>
                                                            </ul>
                                                        </li>
                                                        <li className="li_drop one_ul">
                                                            NCAA BASKETBALL
                                                            <ul className="second_ul">
                                                                <HashLink to="/list_ncaa_basket_stats">
                                                                    <li className="li_drop">
                                                                        Team Stats
                                                                    </li>
                                                                </HashLink>
                                                                <HashLink to="/list_stats_ncaa_basket_py">
                                                                    <li className="li_drop">
                                                                        Players Stats
                                                                    </li>
                                                                </HashLink>
                                                            </ul>
                                                        </li>
                                                        <li className="li_drop one_ul">
                                                            NCAA BASEBALL
                                                            <ul className="second_ul">
                                                                <HashLink to="/list_ncaa_baseball_stats">
                                                                    <li className="li_drop">
                                                                        Team Stats
                                                                    </li>
                                                                </HashLink>
                                                                <HashLink to="/list_stats_baseball_py">
                                                                    <li className="li_drop">
                                                                        Players Stats
                                                                    </li>
                                                                </HashLink>
                                                            </ul>
                                                        </li>
                                                        <li className="li_drop">
                                                            <li className="li_drop one_ul">
                                                                SOCCER
                                                                <ul className="second_ul">
                                                                    <HashLink to="/list_soccer_stats">
                                                                        <li className="li_drop">
                                                                            Team Stats
                                                                        </li>
                                                                    </HashLink>
                                                                    <HashLink to="/list_stats_soccer_py">
                                                                        <li className="li_drop">
                                                                            Players Stats
                                                                        </li>
                                                                    </HashLink>
                                                                </ul>
                                                            </li>
                                                        </li>
                                                    </ul>
                                                </HashLink>
                                                <HashLink className="nav-link ul-drop nav-link-pri" to="/logos">Logos</HashLink>
                                                <HashLink className="nav-link ul-drop nav-link-pri" to="/casinos_page">Casinos</HashLink>
                                                <HashLink className="nav-link ul-drop nav-link-pri" to="/odds_page">Odds</HashLink>
                                                <HashLink className="nav-link ul-drop nav-link-pri" to="/props_page">Props</HashLink>
                                                <HashLink className="nav-link ul-drop nav-link-pri" to="/injuries_page">Injuries</HashLink>
                                                <HashLink className="nav-link ul-drop nav-link-pri" to="/futures_page">Futures</HashLink>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="col-5 d-flex justify-content-center align-items-center">
                            <div className="fw-bold">{store.username_temp}</div>
                            <div className="col-1 float-left" id="btnLogOut">
                                <a href="#" onClick={refrescar} className="text-danger ps-3 fs-3">
                                    <span>
                                        <i className="fas fa-sign-out-alt" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {auth ? <Redirect to="/" /> : null}
        </div>
    )
}