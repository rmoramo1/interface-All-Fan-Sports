import React, { useState, useContext,useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";
export const Edith_Stats_ret_player_ncaa_foot = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }
    
    const params = useParams();
    const [name, setName] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].name);
    const [height, setHeight] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].height);
    const [weight, setWeight] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].weight);
    const [birth, setBirth] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].birth);
    const [position, setPosition] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].position);
    const [dorsal, setDorsal] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].dorsal);
    const [season, setSeason] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].season);
    const [team, setTeam] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].team);
    const [games, setGames] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].games);
    const [headshot, setheadshot] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].headshot);

    const [kick_returns, setKick_returns] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].kick_returns);
    const [kick_returns_yards, setKick_returns_yards] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].kick_returns_yards);
    const [yards_p_k_p, setYards_p_k_p] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].yards_p_k_p);
    const [l_k_r, setL_k_r] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].l_k_r);
    const [k_r_td, setk_r_td] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].k_r_td);
    const [punt_r, setpunt_r] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].punt_r);

    const [punt_r_y, setPunt_r_y] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].punt_r_y);
    const [y_ppr, setY_ppr] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].y_ppr);
    const [lpr, setLpr] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].lpr);
    const [pr_td, setPr_td] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].pr_td);
    const [punt_r_fair_carches, setPunt_r_fair_carches] = useState(store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].punt_r_fair_carches);


    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            name: name,
            height: height,
            weight: weight,
            birth: birth,
            position: position,
            dorsal: dorsal,
            season: season,
            team: team,
            games: games,
            headshot: headshot,

            kick_returns: kick_returns,
            kick_returns_yards: kick_returns_yards,
            yards_p_k_p: yards_p_k_p,
            l_k_r: l_k_r,
            k_r_td: k_r_td,
            punt_r: punt_r,
            punt_r_y: punt_r_y,
            y_ppr: y_ppr,
            lpr: lpr,
            pr_td: pr_td,
            punt_r_fair_carches: punt_r_fair_carches
        };
        
       

        fetch("https://sportsdata365.com/stats_returning_player_ncaa_football/" + store.stats_return_player_ncaa_foot[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                
                alert("Stadistica de jugador se creo");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));
    };
    const delet_py_ret_stat = e => {
        fetch("https://sportsdata365.com/stats_returning_player_ncaa_football/" + store.stats_return_player_ncaa_foot[params.theid].id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .catch(err => console.log(err));
            setAuth(true);
        actualizar();
    };
    //select
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }
    let positions = ["QB", "OT", "OG", "C", "RB", "DE", "DT", "LB", "CB", "SS", "K", "P"];
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-5 p-3 text-center">
                <div className="row g-0">
                        <div className="col-6 d-flex align-items-center justify-content-end">
                            <h3>Edit stats of {store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].name} </h3>
                        </div>
                        <div className="col-6 text-start ps-3">
                            <img className="img_picture" src={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].headshot} alt="image of player"></img>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].name} onChange={e => setName(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Height
                        <input className="form-control selectInner" type="text" placeholder="Height" aria-label="default input example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].height} onChange={e => setHeight(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Weight
                        <input className="form-control selectInner" type="text" placeholder="Weight" aria-label="default input example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].weight} onChange={e => setWeight(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].birth} onChange={e => setBirth(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Position
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].position} onChange={e => setPosition(e.target.value)} required>
                            {
                                positions.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Dorsal
                        <input className="form-control selectInner" type="text" placeholder="Dorsal" aria-label="default input example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].dorsal} onChange={e => setDorsal(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Games
                        <input className="form-control selectInner" type="text" placeholder="Games" aria-label="default input example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].games} onChange={e => setGames(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Headshot
                        <input className="form-control selectInner" type="text" placeholder="Headshot" aria-label="setheadshot" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].headshot} onChange={e => setheadshot(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].team} onChange={e => setTeam(e.target.value)} required>
                            {
                                store.ncaa_foot_teams.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].season} required>
                            {
                                selectYear.map((index) => {
                                    return (
                                        <option key={index} name="season" value={index} >{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Kick Returns</div>
                        <div className="col-2 title-lines">Kick Returns Y</div>
                        <div className="col-2 title-lines">Yards P K P</div>
                        <div className="col-2 title-lines">L K R</div>
                        <div className="col-2 title-lines">K R TD</div>
                        <div className="col-2 title-lines">Punt_R</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Kick Returns" aria-label="default input example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].kick_returns} onChange={e => setKick_returns(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Kick Returns Y" aria-label="default input example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].kick_returns_yards} onChange={e => setKick_returns_yards(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Yards P K P" aria-label="default input example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].yards_p_k_p} onChange={e => setYards_p_k_p(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L K R" aria-label="default input example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].l_k_r} onChange={e => setL_k_r(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="K R TD" aria-label="default input example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].k_r_td} onChange={e => setk_r_td(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Punt_R" aria-label="default input example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].punt_r} onChange={e => setpunt_r(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Punt R Y</div>
                        <div className="col-2 title-lines">Y PPR</div>
                        <div className="col-2 title-lines">L PR</div>
                        <div className="col-2 title-lines">P RTD</div>
                        <div className="col-2 title-lines">Punt R F C</div>

                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Punt R Y" aria-label="default input example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].punt_r_y} onChange={e => setPunt_r_y(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Y PPR" aria-label="default input example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].y_ppr} onChange={e => setY_ppr(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L PR" aria-label="default input example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].lpr} onChange={e => setLpr(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="P RTD" aria-label="default input example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].pr_td} onChange={e => setPr_td(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Punt R F C" aria-label="default input example" defaultValue={store.stats_return_player_ncaa_foot[params.theid] && store.stats_return_player_ncaa_foot[params.theid].punt_r_fair_carches} onChange={e => setPunt_r_fair_carches(e.target.value)} required />
                        </div>

                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 p-3 text-end">
                        <HashLink className="btn btn-secondary  text-white" to="/admin">Back to Admin</HashLink>
                    </div>
                    <div className="col-4 text-end p-3">
                        <button type="submit" className="btn btn-success">Edit</button>
                    </div>
                    <div className="col-4 text-start p-3">
                        <div data-bs-toggle="modal" data-bs-target="#delete_stat_ret_nfl" className="btn btn-danger">Delet</div>
                    </div>
                </div>
                <div className="modal fade" id="delete_stat_ret_nfl" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content overflow-hidden">
                            <div className="col-12 text-center text-white bg-danger text-uppercase fs-5 py-3">
                                <i className="fas fa-exclamation-triangle fs-1"></i><br />are you sure you want to delete the match
                            </div>
                            <div className="row g-0">
                                <div className="col-6 p-2 text-center">
                                    <button className="btn btn-danger" onClick={delet_py_ret_stat}>Yes Delete</button>
                                    {auth ? <Redirect to="/list_stats_nfl_py/" /> : null}
                                </div>
                                <div className="col-6 p-2 text-center">
                                    <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {auth ? <Redirect to="/list_stats_nfl_py/" /> : null}
            </form>
        </div>

    )
} 