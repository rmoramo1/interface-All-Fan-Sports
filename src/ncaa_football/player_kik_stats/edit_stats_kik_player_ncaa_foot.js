import React, { useState, useContext, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";
export const Stats_kik_player_ncaa_football = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

    const params = useParams();

    const [name, setName] = useState(store.stats_kiking_player_ncaa_foot[params.theid].name);
    const [height, setHeight] = useState(store.stats_kiking_player_ncaa_foot[params.theid].height);
    const [weight, setWeight] = useState(store.stats_kiking_player_ncaa_foot[params.theid].weight);
    const [birth, setBirth] = useState(store.stats_kiking_player_ncaa_foot[params.theid].birth);
    const [position, setPosition] = useState(store.stats_kiking_player_ncaa_foot[params.theid].position);
    const [dorsal, setDorsal] = useState(store.stats_kiking_player_ncaa_foot[params.theid].dorsal);
    const [season, setSeason] = useState(store.stats_kiking_player_ncaa_foot[params.theid].season);
    const [team, setTeam] = useState(store.stats_kiking_player_ncaa_foot[params.theid].team);
    const [games, setGames] = useState(store.stats_kiking_player_ncaa_foot[params.theid].games);

    const [fgm, setFgm] = useState(store.stats_kiking_player_ncaa_foot[params.theid].fgm);
    const [fga, setFga] = useState(store.stats_kiking_player_ncaa_foot[params.theid].fga);
    const [fg_AVG, setFg_AVG] = useState(store.stats_kiking_player_ncaa_foot[params.theid].fg_AVG);
    const [lng, setLng] = useState(store.stats_kiking_player_ncaa_foot[params.theid].lng);
    const [yars_f_goals_1_19, setYars_f_goals_1_19] = useState(store.stats_kiking_player_ncaa_foot[params.theid].yars_f_goals_1_19);
    const [yars_f_goals_20_29, setYars_f_goals_20_29] = useState(store.stats_kiking_player_ncaa_foot[params.theid].yars_f_goals_20_29);

    const [yars_f_goals_30_49, setYars_f_goals_30_49] = useState(store.stats_kiking_player_ncaa_foot[params.theid].yars_f_goals_30_49);
    const [yars_f_goals_40_49, setYars_f_goals_40_49] = useState(store.stats_kiking_player_ncaa_foot[params.theid].yars_f_goals_40_49);
    const [more_50, setMore_50] = useState(store.stats_kiking_player_ncaa_foot[params.theid].more_50);
    const [xpm, setXpm] = useState(store.stats_kiking_player_ncaa_foot[params.theid].xpm);
    const [xpa, setXpa] = useState(store.stats_kiking_player_ncaa_foot[params.theid].xpa);
    const [xp_AVG, setXp_AVG] = useState(store.stats_kiking_player_ncaa_foot[params.theid].xp_AVG);


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

            fgm: fgm,
            fga: fga,
            fg_AVG: fg_AVG,
            lng: lng,
            yars_f_goals_1_19: yars_f_goals_1_19,
            yars_f_goals_20_29: yars_f_goals_20_29,
            yars_f_goals_30_49: yars_f_goals_30_49,
            yars_f_goals_40_49: yars_f_goals_40_49,
            more_50: more_50,
            xpm: xpm,
            xpa: xpa,
            xp_AVG: xp_AVG
        };
        
       

        fetch("https://allfansports.herokuapp.com/stats_kiking_player_ncaa_football/" + store.stats_kiking_player_ncaa_foot[params.theid].id, {
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
        fetch("https://allfansports.herokuapp.com/stats_kiking_player_ncaa_football/" + store.stats_kiking_player_ncaa_foot[params.theid].id, {
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
                    <h3>Edit stats of {store.stats_kiking_player_ncaa_foot[params.theid].name} </h3>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].name} onChange={e => setName(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Height
                        <input className="form-control selectInner" type="text" placeholder="Height" aria-label="default input example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].height} onChange={e => setHeight(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Weight
                        <input className="form-control selectInner" type="text" placeholder="Weight" aria-label="default input example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].weight} onChange={e => setWeight(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].birth} onChange={e => setBirth(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Position
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].position} onChange={e => setPosition(e.target.value)} required>
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
                        <input className="form-control selectInner" type="text" placeholder="Dorsal" aria-label="default input example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].dorsal} onChange={e => setDorsal(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Games
                        <input className="form-control selectInner" type="text" placeholder="Games" aria-label="default input example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].games} onChange={e => setGames(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].team} onChange={e => setTeam(e.target.value)} required>
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
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].season} required>
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
                        <div className="col-2 title-lines">Fgm</div>
                        <div className="col-2 title-lines">Fga</div>
                        <div className="col-2 title-lines">Fg AVG</div>
                        <div className="col-2 title-lines">Lng</div>
                        <div className="col-2 title-lines">Y F G 1 19</div>
                        <div className="col-2 title-lines">Y F G 20 29</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fgm" aria-label="default input example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].fgm} onChange={e => setFgm(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fga" aria-label="default input example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].fga} onChange={e => setFga(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fg AVG" aria-label="default input example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].fg_AVG} onChange={e => setFg_AVG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Lng" aria-label="default input example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].lng} onChange={e => setLng(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Y F G 1 19" aria-label="default input example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].yars_f_goals_1_19} onChange={e => setYars_f_goals_1_19(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Y F G 20 29" aria-label="default input example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].yars_f_goals_20_29} onChange={e => setYars_f_goals_20_29(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Y F G 30 49</div>
                        <div className="col-2 title-lines">Y F G 40 49</div>
                        <div className="col-2 title-lines">M 50</div>
                        <div className="col-2 title-lines">Xpm</div>
                        <div className="col-2 title-lines">Xpa</div>
                        <div className="col-2 title-lines">Xp AVG</div>

                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Y F G 30 49" aria-label="default input example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].yars_f_goals_30_49} onChange={e => setYars_f_goals_30_49(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Y F G 40 49" aria-label="default input example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].yars_f_goals_40_49} onChange={e => setYars_f_goals_40_49(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="M 50" aria-label="default input example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].more_50} onChange={e => setMore_50(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Xpm" aria-label="default input example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].xpm} onChange={e => setXpm(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Xpa" aria-label="default input example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].xpa} onChange={e => setXpa(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Xp AVG" aria-label="default input example" defaultValue={store.stats_kiking_player_ncaa_foot[params.theid].xp_AVG} onChange={e => setXp_AVG(e.target.value)} required />
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