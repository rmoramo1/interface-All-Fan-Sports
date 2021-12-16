import React, { useState,useContext,useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Stats_ret_player_nfl = () => {
    const { store} = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [birth, setBirth] = useState("");
    const [position, setPosition] = useState("QB");
    const [dorsal, setDorsal] = useState("");
    const [season, setSeason] = useState("2021");
    const [team, setTeam] = useState("Arizona Cardinals");
    const [games, setGames] = useState("");

    const [kick_returns, setKick_returns] = useState("");
    const [kick_returns_yards, setKick_returns_yards] = useState("");
    const [yards_p_k_p, setYards_p_k_p] = useState("");
    const [l_k_r, setL_k_r] = useState("");
    const [k_r_td, setk_r_td] = useState("");
    const [punt_r, setpunt_r] = useState("");

    const [punt_r_y, setPunt_r_y] = useState("");
    const [y_ppr, setY_ppr] = useState("");
    const [lpr, setLpr] = useState("");
    const [pr_td, setPr_td] = useState("");
    const [punt_r_fair_carches, setPunt_r_fair_carches] = useState("");

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        window.location.reload(true);
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
        
       

        fetch("https://interfaceroy.herokuapp.com/stats_returning_player_nfl", {
            method: "POST",
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

    //select
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }
    let positions=["QB","OT","OG","C","RB","DE","DT","LB","CB","SS","K","P"];
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create Stats Returning Player of NFL</h3>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" onChange={e => setName(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Height
                        <input className="form-control selectInner" type="text" placeholder="Height" aria-label="default input example" onChange={e => setHeight(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Weight
                        <input className="form-control selectInner" type="text" placeholder="Weight" aria-label="default input example" onChange={e => setWeight(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" onChange={e => setBirth(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Position
                        <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setPosition(e.target.value)} required>
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
                        <input className="form-control selectInner" type="text" placeholder="Dorsal" aria-label="default input example" onChange={e => setDorsal(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Games
                        <input className="form-control selectInner" type="text" placeholder="Games" aria-label="default input example" onChange={e => setGames(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setTeam(e.target.value)} required>
                            {
                                store.nfl_teams.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={2021} required>
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
                            <input className="form-control selectInner" type="text" placeholder="Kick Returns" aria-label="default input example" onChange={e => setKick_returns(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Kick Returns Y" aria-label="default input example" onChange={e => setKick_returns_yards(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Yards P K P" aria-label="default input example" onChange={e => setYards_p_k_p(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L K R" aria-label="default input example" onChange={e => setL_k_r(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="K R TD" aria-label="default input example" onChange={e => setk_r_td(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Punt_R" aria-label="default input example" onChange={e => setpunt_r(e.target.value)} required />
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
                            <input className="form-control selectInner" type="text" placeholder="Punt R Y" aria-label="default input example" onChange={e => setPunt_r_y(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Y PPR" aria-label="default input example" onChange={e => setY_ppr(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L PR" aria-label="default input example" onChange={e => setLpr(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="P RTD" aria-label="default input example" onChange={e => setPr_td(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Punt R F C" aria-label="default input example" onChange={e => setPunt_r_fair_carches(e.target.value)} required />
                        </div>

                    </div>
                </div>
                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_stats_nfl_py/" /> : null}
            </form>
        </div>

    )
} 