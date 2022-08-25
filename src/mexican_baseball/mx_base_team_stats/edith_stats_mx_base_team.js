import React, { useState, useContext, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";

export const Edit_Stats_MX_Base_Team = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const params = useParams();
    const [season, setSeason] = useState(store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].season);
    const [team, setTeam] = useState(store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].team);
    const [league, setLeague] = useState(store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].league);
    const [division, setDivision] = useState(store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].division);
    const [group_type_comparation, setGroup_type_comparation] = useState(store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].group_type_comparation);
    const [season_type, setSeason_type] = useState(store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].season_type);

    const [w, setW] = useState(store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].w);
    const [L, setL] = useState(store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].L);
    const [pct, setPct] = useState(store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].pct);
    const [gb, setGb] = useState(store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].gb);
    const [home, setHome] = useState(store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].home);
    const [away, setAway] = useState(store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].away);
    const [rs, setRs] = useState(store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].rs);
    const [ra, setRa] = useState(store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].ra);
    const [diff, setDiff] = useState(store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].diff);
    const [strk, setStrk] = useState(store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].strk);
    const [L10, setL10] = useState(store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].L10);

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            season: season,
            team: team,
            league: league,
            division: division,
            season_type: season_type,
            group_type_comparation: group_type_comparation,
            w: w,
            L: L,
            pct: pct,
            gb: gb,
            home: home,
            away: away,
            rs: rs,
            ra: ra,
            diff: diff,
            strk: strk,
            L10: L10

        };

        fetch("https://sportsdata365.com/stats_baseball_mexico_team/" + store.stats_baseball_mexico_team[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);

                alert("Stadistica se creo");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));
    };
    const delet_team_nfl_stat = e => {
        fetch("https://sportsdata365.com/stats_baseball_mexico_team/" + store.stats_baseball_mexico_team[params.theid].id, {
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

    let selectLiga = ["-"];
    let selectDivision = ["Zona Norte", "Zona Sur"];
    let season_Type = ["Regular Season", "Spring Training"];
    let comparation = ["-"];

    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Edith stats by MX BASEBALL team</h3>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].team} onChange={e => setTeam(e.target.value)} required>
                            {
                                store.mx_base_teams.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].season} required>
                            {
                                selectYear.map((index) => {
                                    return (
                                        <option key={index} name="season" value={index} >{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Season Type
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason_type(e.target.value)} defaultValue={store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].season_type} required>
                            {
                                season_Type.map((index) => {
                                    return (
                                        <option key={index} name="season" value={index} >{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        League
                        <select className="form-select" name="month" aria-label="Default select example" defaultValue={store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].league} onChange={e => setLeague(e.target.value)} required>
                            {
                                selectLiga.map((index) => {
                                    return (
                                        <option key={index} name="conference" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Division
                        <select className="form-select" name="month" aria-label="Default select example" defaultValue={store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].division} onChange={e => setDivision(e.target.value)} required>
                            {
                                selectDivision.map((index) => {
                                    return (
                                        <option key={index} name="setDivision" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="text-center col-2 p-1">
                        Comparation
                        <select className="form-select" name="month" aria-label="Default select example" defaultValue={store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].group_type_comparation} onChange={e => setGroup_type_comparation(e.target.value)} required>
                            {
                                comparation.map((index) => {
                                    return (
                                        <option key={index} name="setGroup_type_comparation" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div id="edith-mlb-stats" className="py-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">W</div>
                        <div className="col-2 title-lines">L</div>
                        <div className="col-2 title-lines">Pct</div>
                        <div className="col-2 title-lines">Gb</div>
                        <div className="col-2 title-lines">Home</div>
                        <div className="col-2 title-lines">Away</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="W" aria-label="default input example" defaultValue={store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].w} onChange={e => setW(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L" aria-label="default input example" defaultValue={store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].L} onChange={e => setL(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Pct" aria-label="default input example" defaultValue={store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].pct} onChange={e => setPct(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Gb" aria-label="default input example" defaultValue={store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].gb} onChange={e => setGb(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Home" aria-label="default input example" defaultValue={store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].home} onChange={e => setHome(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Away" aria-label="default input example" defaultValue={store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].away} onChange={e => setAway(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row g-0 text-center mt-3">
                        <div className="col-2 title-lines">Rs</div>
                        <div className="col-2 title-lines">Ra</div>
                        <div className="col-2 title-lines">Diff</div>
                        <div className="col-2 title-lines">Strk</div>
                        <div className="col-2 title-lines">L10</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Rs" name="rotation_home" defaultValue={store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].rs} onChange={e => setRs(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ra" aria-label="default input example" defaultValue={store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].ra} onChange={e => setRa(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Diff" aria-label="default input example" defaultValue={store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].diff} onChange={e => setDiff(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Strk" aria-label="default input example" defaultValue={store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].strk} onChange={e => setStrk(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L10" aria-label="default input example" defaultValue={store.stats_baseball_mexico_team[params.theid] && store.stats_baseball_mexico_team[params.theid].L10} onChange={e => setL10(e.target.value)} required />
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
                                    <button className="btn btn-danger" onClick={delet_team_nfl_stat}>Yes Delete</button>
                                    {auth ? <Redirect to="/list_mx_base_stats/" /> : null}
                                </div>
                                <div className="col-6 p-2 text-center">
                                    <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {auth ? <Redirect to="/list_mx_base_stats/" /> : null}
            </form>
        </div>
    )
}