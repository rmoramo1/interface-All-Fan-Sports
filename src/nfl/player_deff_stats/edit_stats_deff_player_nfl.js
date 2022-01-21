import React, { useState, useContext, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import { useParams, Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";
export const Stats_deff_player_nfl = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const params = useParams();

    const [name, setName] = useState(store.stats_deff_player_nfl[params.theid].name);
    const [height, setHeight] = useState(store.stats_deff_player_nfl[params.theid].height);
    const [weight, setWeight] = useState(store.stats_deff_player_nfl[params.theid].weight);
    const [birth, setBirth] = useState(store.stats_deff_player_nfl[params.theid].birth);
    const [position, setPosition] = useState(store.stats_deff_player_nfl[params.theid].position);
    const [dorsal, setDorsal] = useState(store.stats_deff_player_nfl[params.theid].dorsal);
    const [season, setSeason] = useState(store.stats_deff_player_nfl[params.theid].season);
    const [team, setTeam] = useState(store.stats_deff_player_nfl[params.theid].team);
    const [games, setGames] = useState(store.stats_deff_player_nfl[params.theid].games);
    const [headshot, setheadshot] = useState(store.stats_deff_player_nfl[params.theid].headshot);

    const [tack_solo, setTack_solo] = useState(store.stats_deff_player_nfl[params.theid].tack_solo);
    const [tack_ast, setTack_ast] = useState(store.stats_deff_player_nfl[params.theid].tack_ast);
    const [tack_total, setTack_total] = useState(store.stats_deff_player_nfl[params.theid].tack_total);
    const [sacks, setSacks] = useState(store.stats_deff_player_nfl[params.theid].sacks);
    const [sacks_yards, setSacks_yards] = useState(store.stats_deff_player_nfl[params.theid].sacks_yards);
    const [tfl, setTfl] = useState(store.stats_deff_player_nfl[params.theid].tfl);

    const [pd, setPd] = useState(store.stats_deff_player_nfl[params.theid].pd);
    const [Int, setInt] = useState(store.stats_deff_player_nfl[params.theid].Int);
    const [yds, setYds] = useState(store.stats_deff_player_nfl[params.theid].yds);
    const [ing, setIng] = useState(store.stats_deff_player_nfl[params.theid].ing);
    const [td, setTd] = useState(store.stats_deff_player_nfl[params.theid].td);
    const [ff, setFf] = useState(store.stats_deff_player_nfl[params.theid].ff);
    const [fr, setFr] = useState(store.stats_deff_player_nfl[params.theid].fr);
    const [ftd, setFtd] = useState(store.stats_deff_player_nfl[params.theid].ftd);
    const [kb, setKb] = useState(store.stats_deff_player_nfl[params.theid].kb);
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

            tack_solo: tack_solo,
            tack_ast: tack_ast,
            tack_total: tack_total,
            sacks: sacks,
            sacks_yards: sacks_yards,
            tfl: tfl,
            pd: pd,
            Int: Int,
            yds: yds,
            ing: ing,
            td: td,
            ff: ff,
            fr: fr,
            ftd: ftd,
            kb: kb
        };



        fetch("https://sportsdata365.com/stats_defensive_player_nfl/" + store.stats_deff_player_nfl[params.theid].id, {
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
    const delet_py_nfl_stat = e => {
        fetch("https://sportsdata365.com/stats_defensive_player_nfl/" + store.stats_deff_player_nfl[params.theid].id, {
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
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <div className="row g-0">
                        <div className="col-6 d-flex align-items-center justify-content-end">
                            <h3>Edit stats of {store.stats_deff_player_nfl[params.theid].name} </h3>
                        </div>
                        <div className="col-6 text-start">
                            <img className="img_picture" src={store.stats_deff_player_nfl[params.theid].headshot} alt="image of player"></img>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].name} onChange={e => setName(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Height
                        <input className="form-control selectInner" type="text" placeholder="Height" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].height} onChange={e => setHeight(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Weight
                        <input className="form-control selectInner" type="text" placeholder="Weight" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].weight} onChange={e => setWeight(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].birth} onChange={e => setBirth(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Position
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.stats_deff_player_nfl[params.theid].position} onChange={e => setPosition(e.target.value)} required>
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
                        <input className="form-control selectInner" type="text" placeholder="Dorsal" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].dorsal} onChange={e => setDorsal(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Games
                        <input className="form-control selectInner" type="text" placeholder="Games" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].games} onChange={e => setGames(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Headshot
                        <input className="form-control selectInner" type="text" placeholder="Headshot" aria-label="setheadshot" defaultValue={store.stats_deff_player_nfl[params.theid].headshot} onChange={e => setheadshot(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.stats_deff_player_nfl[params.theid].team} onChange={e => setTeam(e.target.value)} required>
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
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={store.stats_deff_player_nfl[params.theid].season} required>
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
                        <div className="col-2 title-lines">Tack Solo</div>
                        <div className="col-2 title-lines">Tack Ast</div>
                        <div className="col-2 title-lines">Tack Total</div>
                        <div className="col-2 title-lines">Sacks</div>
                        <div className="col-2 title-lines">Sacks Yards</div>
                        <div className="col-2 title-lines">T FL</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Tack Solo" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].tack_solo} onChange={e => setTack_solo(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Tack Ast" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].tack_ast} onChange={e => setTack_ast(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Tack Total" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].tack_total} onChange={e => setTack_total(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sacks" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].sacks} onChange={e => setSacks(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sacks Yards" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].sacks_yards} onChange={e => setSacks_yards(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="T FL" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].tfl} onChange={e => setTfl(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">PD</div>
                        <div className="col-2 title-lines">Int</div>
                        <div className="col-2 title-lines">Yds</div>
                        <div className="col-2 title-lines">Ing</div>
                        <div className="col-2 title-lines">Td</div>
                        <div className="col-2 title-lines">Ff</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="PD" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].pd} onChange={e => setPd(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Int" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].Int} onChange={e => setInt(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Yds" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].yds} onChange={e => setYds(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ing" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].ing} onChange={e => setIng(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Td" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].td} onChange={e => setTd(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ff" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].ff} onChange={e => setFf(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Fr</div>
                        <div className="col-2 title-lines">Ftd</div>
                        <div className="col-2 title-lines">Kb</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fr" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].fr} onChange={e => setFr(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ftd" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].ftd} onChange={e => setFtd(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Kb" aria-label="default input example" defaultValue={store.stats_deff_player_nfl[params.theid].kb} onChange={e => setKb(e.target.value)} required />
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
                        <div data-bs-toggle="modal" data-bs-target="#delete_stat_team_nfl" className="btn btn-danger">Delet</div>
                    </div>
                </div>
                <div className="modal fade" id="delete_stat_team_nfl" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content overflow-hidden">
                            <div className="col-12 text-center text-white bg-danger text-uppercase fs-5 py-3">
                                <i className="fas fa-exclamation-triangle fs-1"></i><br />are you sure you want to delete the match
                            </div>
                            <div className="row g-0">
                                <div className="col-6 p-2 text-center">
                                    <button className="btn btn-danger" onClick={delet_py_nfl_stat}>Yes Delete</button>
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