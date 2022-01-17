import React, { useState, useContext , useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";

export const Edit_Stats_NHL_Team = () => {
    const { store } = useContext(Context);
    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }
    const params = useParams();

    const [season, setSeason] = useState(store.nhl_stats_teams[params.theid].season);
    const [team, setTeam] = useState(store.nhl_stats_teams[params.theid].team);
    const [conference, setConference] = useState(store.nhl_stats_teams[params.theid].conference);
    const [division, setDivision] = useState(store.nhl_stats_teams[params.theid].division);

    const [w, setW] = useState(store.nhl_stats_teams[params.theid].w);
    const [L, setL] = useState(store.nhl_stats_teams[params.theid].L);
    const [Ga_a, setGa_a] = useState(store.nhl_stats_teams[params.theid].Ga_a);
    const [otl, setotl] = useState(store.nhl_stats_teams[params.theid].otl);
    const [sa, setsa] = useState(store.nhl_stats_teams[params.theid].sa);
    const [ga, setga] = useState(store.nhl_stats_teams[params.theid].ga);
    const [s, sets] = useState(store.nhl_stats_teams[params.theid].s);
    const [sv_AVG, setsv_AVG] = useState(store.nhl_stats_teams[params.theid].sv_AVG);
    const [so, setso] = useState(store.nhl_stats_teams[params.theid].so);
    const [so_sa, setso_sa] = useState(store.nhl_stats_teams[params.theid].so_sa);
    const [sos, setsos] = useState(store.nhl_stats_teams[params.theid].sos);
    const [sos_AVG, setsos_AVG] = useState(store.nhl_stats_teams[params.theid].sos_AVG);

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            season: season,
            team: team,
            conference: conference,
            division: division,
            w: w,
            L: L,
            
            Ga_a: Ga_a,
            otl: otl,
            sa: sa,
            ga: ga,
            s: s,
            sv_AVG: sv_AVG,
            so: so,
            so_sa: so_sa,
            sos: sos,
            sos_AVG: sos_AVG

        };
        
       

        fetch("https://allfansports.herokuapp.com/stats_nhl_team/"+ store.nhl_stats_teams[params.theid].id, {
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
        fetch("https://allfansports.herokuapp.com/stats_nhl_team/" + store.nhl_stats_teams[params.theid].id, {
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
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.nhl_stats_teams[params.theid].team} onChange={e => setTeam(e.target.value)} required>
                            {
                                store.nhl_teams.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example"  onChange={e => setSeason(e.target.value)} defaultValue={store.nhl_stats_teams[params.theid].season} required>
                            {
                                selectYear.map((index) => {
                                    return (
                                        <option key={index} name="season" value={index} >{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                    Conference
                        <select className="form-select" name="month" aria-label="Default select example" defaultValue={store.nhl_stats_teams[params.theid].conference} onChange={e => setConference(e.target.value)} required>
                            {
                                selectConference.map((index) => {
                                    return (
                                        <option key={index} name="conference" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Division
                        <select className="form-select" name="month" aria-label="Default select example" defaultValue={store.nhl_stats_teams[params.theid].division} onChange={e => setDivision(e.target.value)} required>
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
                <div id="edith-mlb-stats" className="py-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">W</div>
                        <div className="col-2 title-lines">L</div>
                        <div className="col-2 title-lines">Ga A</div>
                        <div className="col-2 title-lines">Otl</div>
                        <div className="col-2 title-lines">Sa</div>
                        <div className="col-2 title-lines">Ga</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="W" aria-label="default input example" defaultValue={store.nhl_stats_teams[params.theid].w} onChange={e => setW(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L" aria-label="default input example" defaultValue={store.nhl_stats_teams[params.theid].L} onChange={e => setL(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ga A" aria-label="default input example" defaultValue={store.nhl_stats_teams[params.theid].Ga_a} onChange={e => setGa_a(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Otl" aria-label="default input example" defaultValue={store.nhl_stats_teams[params.theid].otl} onChange={e => setotl(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sa" aria-label="default input example" defaultValue={store.nhl_stats_teams[params.theid].sa} onChange={e => setsa(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ga" aria-label="default input example" defaultValue={store.nhl_stats_teams[params.theid].ga} onChange={e => setga(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row g-0 text-center mt-3">
                        <div className="col-2 title-lines">S</div>
                        <div className="col-2 title-lines">Sv AVG</div>
                        <div className="col-2 title-lines">So</div>
                        <div className="col-2 title-lines">So Sa</div>
                        <div className="col-2 title-lines">Sos</div>
                        <div className="col-2 title-lines">Sos AVG</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="S" name="rotation_home" defaultValue={store.nhl_stats_teams[params.theid].s} onChange={e => sets(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sv AVG" aria-label="default input example" defaultValue={store.nhl_stats_teams[params.theid].sv_AVG} onChange={e => setsv_AVG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="So" aria-label="default input example" defaultValue={store.nhl_stats_teams[params.theid].so} onChange={e => setso(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="So Sa" aria-label="default input example" defaultValue={store.nhl_stats_teams[params.theid].so_sa} onChange={e => setso_sa(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sos" aria-label="default input example"defaultValue={store.nhl_stats_teams[params.theid].sos} onChange={e => setsos(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sos AVG" aria-label="default input example" defaultValue={store.nhl_stats_teams[params.theid].sos_AVG} onChange={e => setsos_AVG(e.target.value)} required />
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