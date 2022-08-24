import React, { useState, useContext, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";

export const Edit_Team_Canadian_Foot_Standings = () => {
    const { store } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);

        if (!user) {
            window.location.href = '/';
        }
    }, [])

    const [season, setSeason] = useState(store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].season);
    const [season_type, setSeason_type] = useState(store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].season_type);
    const [group_type_comparation, setGroup_type_comparation] = useState(store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].group_type_comparation);
    const [team, setTeam] = useState(store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].team);
    const [league, setleague] = useState(store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].league);
    const [division, setDivision] = useState(store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].division);

    const [w, setw] = useState(store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].w);
    const [L, setL] = useState(store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].L);
    const [t, sett] = useState(store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].t);
    const [pct, setpct] = useState(store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].pct);
    const [home, sethome] = useState(store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].home);
    const [away, setaway] = useState(store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].away);
    const [div, setdiv] = useState(store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].div);
    const [conf, setconf] = useState(store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].conf);
    const [pf, setpf] = useState(store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].pf);

    const [pa, setpa] = useState(store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].pa);
    const [diff, setdiff] = useState(store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].diff);
    const [strk, setstrk] = useState(store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].strk);


    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            season: season,
            season_type: season_type,
            group_type_comparation: group_type_comparation,
            team: team,
            league: league,
            division: division,

            w: w,
            L: L,
            t: t,
            pct: pct,
            home: home,
            away: away,
            div: div,
            conf: conf,
            pf: pf,
            pa: pa,
            diff: diff,
            strk: strk,

        };

        fetch("https://www.sportsdata365.com/standing_canadian_football_team/" + store.standing_canadian_football_team[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);

                alert("Stadistica se actualizo");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));
    };
    const delet_team_nfl_stat = e => {
        fetch("https://www.sportsdata365.com/standing_canadian_football_team/" + store.standing_canadian_football_team[params.theid].id, {
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
    let selectLeague = ["-"];
    let selectDivision = ["East Division", "West Division"];
    let season_Type = ["Regular Season", "Preseason"];

    return (
        <div className="container-fluid" id="statsEdith" >
            <div className="row g-0">
                <div className="col-12 text-center bg-title-edith my-2 p-3">
                    <h3>Edit Stadings Canadian Football Team</h3>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" defaultValue={store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].team} onChange={e => setTeam(e.target.value)} required>
                            {
                                store.canna_foot_teams.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Season
                        <select className="form-select" name="season" defaultValue={store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].season} onChange={e => setSeason(e.target.value)} required>
                            {
                                selectYear.map((index) => {
                                    return (
                                        <option key={index} name="season" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Season Type
                        <select className="form-select" name="season" onChange={e => setSeason_type(e.target.value)} defaultValue={store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].season_type} required>
                            {
                                season_Type.map((index) => {
                                    return (
                                        <option key={index} name="season" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        League
                        <select className="form-select" name="month" defaultValue={store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].league} onChange={e => setleague(e.target.value)} required>
                            {
                                selectLeague.map((index) => {
                                    return (
                                        <option key={index} name="conference" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Division
                        <select className="form-select" name="month" defaultValue={store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].division} onChange={e => setDivision(e.target.value)} required>
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
                <div id="crear-stats" className="">
                    <div className="row g-0 text-center">
                        <div className="col-1 title-lines">W</div>
                        <div className="col-1 title-lines">L</div>
                        <div className="col-1 title-lines">T</div>
                        <div className="col-1 title-lines">PCT</div>
                        <div className="col-1 title-lines">HOME</div>
                        <div className="col-1 title-lines">AWAY</div>
                        <div className="col-1 title-lines">DIV</div>
                        <div className="col-1 title-lines">CONF</div>
                        <div className="col-1 title-lines">PF</div>
                        <div className="col-1 title-lines">PA</div>
                        <div className="col-1 title-lines">DIFF</div>
                        <div className="col-1 title-lines">STRK</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="W" aria-label="default input example" defaultValue={store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].w} onChange={e => setw(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="L" aria-label="default input example" defaultValue={store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].L} onChange={e => setL(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="T" aria-label="default input example" defaultValue={store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].t} onChange={e => sett(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="PCT" aria-label="default input example" defaultValue={store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].pct} onChange={e => setpct(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="HOME" aria-label="default input example" defaultValue={store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].home} onChange={e => sethome(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="AWAY" aria-label="default input example" defaultValue={store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].away} onChange={e => setaway(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="DIV" aria-label="default input example" defaultValue={store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].div} onChange={e => setdiv(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="CONF" aria-label="default input example" defaultValue={store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].conf} onChange={e => setconf(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="PF" aria-label="default input example" defaultValue={store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].pf} onChange={e => setpf(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="PA" aria-label="default input example" defaultValue={store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].pa} onChange={e => setpa(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="DIFF" aria-label="default input example" defaultValue={store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].diff} onChange={e => setdiff(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="STRK" aria-label="default input example" defaultValue={store.standing_canadian_football_team[params.theid] && store.standing_canadian_football_team[params.theid].strk} onChange={e => setstrk(e.target.value)} required />
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
                                    {auth ? <Redirect to="/list_canadian_foot_standings/" /> : null}
                                </div>
                                <div className="col-6 p-2 text-center">
                                    <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {auth ? <Redirect to="/list_canadian_foot_standings/" /> : null}
            </form>
        </div>
    )
}