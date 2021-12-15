import React, { useState, useContext, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";
export const Edit_stats_player_soccer = () => {
    const { store } = useContext(Context);
    const params = useParams();

        useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);
        
        if(!user){
            window.location.href = '/';
        }
    }, [])

    const [name, setName] = useState(store.soccer_stats_player[params.theid].name);
    const [height, setHeight] = useState(store.soccer_stats_player[params.theid].height);
    const [weight, setWeight] = useState(store.soccer_stats_player[params.theid].weight);
    const [birth, setBirth] = useState(store.soccer_stats_player[params.theid].birth);
    const [position, setPosition] = useState(store.soccer_stats_player[params.theid].position);
    const [dorsal, setDorsal] = useState(store.soccer_stats_player[params.theid].dorsal);
    const [team, setTeam] = useState(store.soccer_stats_player[params.theid].team);
    const [season, setSeason] = useState(store.soccer_stats_player[params.theid].season);

    const [games, setgames] = useState(store.soccer_stats_player[params.theid].games);
    const [strt, setstrt] = useState(store.soccer_stats_player[params.theid].strt);
    const [fc, setfc] = useState(store.soccer_stats_player[params.theid].fc);

    const [fa, setfa] = useState(store.soccer_stats_player[params.theid].fa);
    const [yc, setyc] = useState(store.soccer_stats_player[params.theid].yc);
    const [rc, setrc] = useState(store.soccer_stats_player[params.theid].rc);
    const [goals, setgoals] = useState(store.soccer_stats_player[params.theid].goals);
    const [ast, setast] = useState(store.soccer_stats_player[params.theid].ast);
    const [sh, setsh] = useState(store.soccer_stats_player[params.theid].sh);
    const [st, setst] = useState(store.soccer_stats_player[params.theid].st);
    const [off, setoff] = useState(store.soccer_stats_player[params.theid].off);



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
            strt: strt,
            fc: fc,
            fa: fa,
            yc: yc,
            rc: rc,
            goals: goals,
            ast: ast,
            sh: sh,
            st: st,
            off: off,
        };

        fetch("https://interfaceroy.herokuapp.com/stats_soccer_player/" + store.soccer_stats_player[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("Stadistica de jugador se Actualizo");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));
    };
    const delet_py_ret_stat = e => {
        fetch("https://interfaceroy.herokuapp.com/stats_soccer_player/" + store.soccer_stats_player[params.theid].id, {
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
    let positions = ["GK", "CB", "LB", "RB", "LWB", "RWB", "SW"];
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-5 p-3 text-center">
                    <h3>Edit stats of {store.soccer_stats_player[params.theid].name} </h3>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" defaultValue={store.soccer_stats_player[params.theid].name} onChange={e => setName(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Height
                        <input className="form-control selectInner" type="text" placeholder="Height" aria-label="default input example" defaultValue={store.soccer_stats_player[params.theid].height} onChange={e => setHeight(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Weight
                        <input className="form-control selectInner" type="text" placeholder="Weight" aria-label="default input example" defaultValue={store.soccer_stats_player[params.theid].weight} onChange={e => setWeight(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" defaultValue={store.soccer_stats_player[params.theid].birth} onChange={e => setBirth(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Position
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.soccer_stats_player[params.theid].position} onChange={e => setPosition(e.target.value)} required>
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
                        <input className="form-control selectInner" type="text" placeholder="Dorsal" aria-label="default input example" defaultValue={store.soccer_stats_player[params.theid].dorsal} onChange={e => setDorsal(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.soccer_stats_player[params.theid].team} onChange={e => setTeam(e.target.value)} required>
                            {
                                store.nba_teams.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={store.soccer_stats_player[params.theid].season} required>
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
                        <div className="col-2 title-lines">Games</div>
                        <div className="col-2 title-lines">Strt</div>
                        <div className="col-2 title-lines">Fc</div>
                        <div className="col-2 title-lines">Fa</div>
                        <div className="col-2 title-lines">YC</div>
                        <div className="col-2 title-lines">RC</div>

                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Games" aria-label="default input example" defaultValue={store.soccer_stats_player[params.theid].games} onChange={e => setgames(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Strt" aria-label="default input example" defaultValue={store.soccer_stats_player[params.theid].strt} onChange={e => setstrt(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fc" aria-label="default input example" defaultValue={store.soccer_stats_player[params.theid].fc} onChange={e => setfc(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fa" aria-label="default input example" defaultValue={store.soccer_stats_player[params.theid].fa} onChange={e => setfa(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="YC" aria-label="default input example" defaultValue={store.soccer_stats_player[params.theid].yc} onChange={e => setyc(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="RC" aria-label="default input example" defaultValue={store.soccer_stats_player[params.theid].rc} onChange={e => setrc(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Goals</div>
                        <div className="col-2 title-lines">Ast</div>
                        <div className="col-2 title-lines">Sh</div>
                        <div className="col-2 title-lines">St</div>
                        <div className="col-2 title-lines">Off</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Goals" aria-label="default input example" defaultValue={store.soccer_stats_player[params.theid].goals} onChange={e => setgoals(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ast" aria-label="default input example" defaultValue={store.soccer_stats_player[params.theid].ast} onChange={e => setast(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sh" aria-label="default input example" defaultValue={store.soccer_stats_player[params.theid].sh} onChange={e => setsh(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="St" aria-label="default input example" defaultValue={store.soccer_stats_player[params.theid].st} onChange={e => setst(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Off" aria-label="default input example" defaultValue={store.soccer_stats_player[params.theid].off} onChange={e => setoff(e.target.value)} required />
                        </div>
                    </div>

                </div>
                <div className="row g-0">
                    <div className="col-4 p-3 text-end">
                        <HashLink className="btn btn-secondary text-white" to="/admin">Back to Admin</HashLink>
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
                {auth ? <Redirect to="/list_stats_soccer_py/" /> : null}
            </form>
        </div>

    )
} 