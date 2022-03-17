import React, { useState, useContext , useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";

export const Edit_Stats_NHL_Team = () => {
    const { store } = useContext(Context);

    let date = new Date();
    let year = date.getFullYear();

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }
    const params = useParams();
    
    const [season, setSeason] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].season);
    const [season_type, setSeason_type] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].season_type);
    const [group_type_comparation, setGroup_type_comparation] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].group_type_comparation);
    const [team, setTeam] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].team);
    const [conference, setconference] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].conference);
    const [division, setDivision] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].division);

    const [gp, setGp] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].gp);
    const [w, setW] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].w);
    const [L, setL] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].L);

    const [otl, setotl] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].otl);
    const [pts, setpts] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].pts);
    const [rw, setrw] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].rw);
    const [row, setrow] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].row);
    const [sow, setsow] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].sow);
    const [sol, setsol] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].sol);
    const [home, sethome] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].home);
    const [away, setaway] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].away);
    const [gf, setgf] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].gf);
    const [ga, setga] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].ga);
    const [diff, setdiff] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].diff);
    const [l10, setl10] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].l10);
    const [strk, setstrk] = useState(store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].strk);

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            season: season,
            group_type_comparation: group_type_comparation,
            season_type: season_type,
            team: team, season_type,
            conference: conference,
            division: division,
            gp: gp,
            w: w,
            L: L,
            otl: otl,
            pts: pts,
            rw: rw,
            row: row,
            sow: sow,
            sol: sol,
            home: home,
            away: away,
            gf: gf,
            ga: ga,
            diff: diff,
            l10: l10,
            strk: strk

        };
        
       

        fetch("https://sportsdata365.com/stats_nhl_team/"+ store.nhl_stats_teams[params.theid].id, {
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
    const delet_team_nhl_stat = e => {
        fetch("https://sportsdata365.com/stats_nhl_team/" + store.nhl_stats_teams[params.theid].id, {
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

    let selectDivision = ["Atlantic", "Metropolitan","Central","Peaceful"];
    let selectConference = ["East", "West"];
    let season_Type = ["Regular Season", "Preseason"];
    let comparation = ["League", "Conference", "Division"];


    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create stats by NBA team</h3>
                </div>
            </div>
            <form onSubmit={crear}>
            <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setTeam(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].team} required>
                            {
                                store.nhl_teams.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].season} required>
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
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason_type(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].season_type}  required>
                            {
                                season_Type.map((index) => {
                                    return (
                                        <option key={index} name="season" value={index} >{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Division
                        <select className="form-select" name="month" aria-label="Default select example" onChange={e => setDivision(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].division} required>
                            {
                                selectDivision.map((index) => {
                                    return (
                                        <option key={index} name="conference" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Conference
                        <select className="form-select" name="month" aria-label="Default select example" onChange={e => setconference(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].conference} required>
                            {
                                selectConference.map((index) => {
                                    return (
                                        <option key={index} name="setConference" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="div g-0">
                <div className="text-center col-2 p-1">
                    Comparation
                        <select className="form-select" name="month" aria-label="setGroup_type_comparation" onChange={e => setGroup_type_comparation(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].group_type_comparation} required>
                            {
                                comparation.map((index) => {
                                    return (
                                        <option key={index} name="setConference" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div id="crear-stats" className="py-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">GP</div>
                        <div className="col-2 title-lines">W</div>
                        <div className="col-2 title-lines">L</div>
                        <div className="col-2 title-lines">Otl</div>
                        <div className="col-2 title-lines">Pts</div>
                        <div className="col-2 title-lines">RW</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="GP" aria-label="Gp" onChange={e => setGp(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].gp} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="W" aria-label="default input example" onChange={e => setW(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].w} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L" aria-label="default input example" onChange={e => setL(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].L} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Otl" aria-label="default input example" onChange={e => setotl(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].otl} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Pts" aria-label="default input example" onChange={e => setpts(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].pts} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="RW" aria-label="default input example" onChange={e => setrw(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].rw} required />
                        </div>

                    </div>
                    <div className="row g-0 text-center mt-3">
                        <div className="col-2 title-lines">ROW</div>
                        <div className="col-2 title-lines">SOW</div>
                        <div className="col-2 title-lines">SOL</div>
                        <div className="col-2 title-lines">Home</div>
                        <div className="col-2 title-lines">Away</div>
                        <div className="col-2 title-lines">GF</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="ROW" aria-label="default input example" onChange={e => setrow(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].row}  required />
                        </div>
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="SOW" name="rotation_home" onChange={e => setsow(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].sow} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="SOL" aria-label="default input example" onChange={e => setsol(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].sol} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Home" aria-label="default input example" onChange={e => sethome(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].home} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Away" aria-label="default input example" onChange={e => setaway(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].away} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="GF" aria-label="default input example" onChange={e => setgf(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].gf} required />
                        </div>
                    </div>
                    <div className="row g-0 text-center mt-3">
                        <div className="col-2 title-lines">GA</div>
                        <div className="col-2 title-lines">DIFF</div>
                        <div className="col-2 title-lines">L10</div>
                        <div className="col-2 title-lines">Strk</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="GA" aria-label="default input example" onChange={e => setga(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].ga} required />
                        </div>
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="DIFF" name="rotation_home" onChange={e => setdiff(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].diff} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L10" aria-label="default input example" onChange={e => setl10(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].l10} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Strk" aria-label="default input example" onChange={e => setstrk(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid] && store.nhl_stats_teams[params.theid].strk} required />
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
                        <div data-bs-toggle="modal" data-bs-target="#delete_stat_team_nhl" className="btn btn-danger">Delet</div>
                    </div>
                </div>
                <div className="modal fade" id="delete_stat_team_nhl" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content overflow-hidden">
                            <div className="col-12 text-center text-white bg-danger text-uppercase fs-5 py-3">
                                <i className="fas fa-exclamation-triangle fs-1"></i><br />are you sure you want to delete the match
                            </div>
                            <div className="row g-0">
                                <div className="col-6 p-2 text-center">
                                    <button className="btn btn-danger" onClick={delet_team_nhl_stat}>Yes Delete</button>
                                    {auth ? <Redirect to="/list_nhl_stats/" /> : null}
                                </div>
                                <div className="col-6 p-2 text-center">
                                    <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {auth ? <Redirect to="/list_nhl_stats/" /> : null}
            </form>
        </div>
    )
}