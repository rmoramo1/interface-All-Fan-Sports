import React, { useState, useContext, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";

export const Edit_Stats_NCAA_BASKETBALL_Team = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

    const params = useParams();
    
    const [season, setSeason] = useState(store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].season);
    const [team, setTeam] = useState(store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].team);
    const [conference, setConference] = useState(store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].conference);
    const [division, setDivision] = useState(store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].division);

    const [w, setw] = useState(store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].w);
    const [L, setL] = useState(store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].L);
    const [ptc, setptc] = useState(store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].ptc);
    const [home, sethome] = useState(store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].home);
    const [away, setaway] = useState(store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].away);
    const [div, setdiv] = useState(store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].div);

    const [conf, setconf] = useState(store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].conf);
    const [ppg, setppg] = useState(store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].ppg);
    const [opp_ppg, setopp_ppg] = useState(store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].opp_ppg);
    const [diff, setdiff] = useState(store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].diff);
    const [strk, setstrk] = useState(store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].strk);
    const [l10, setl10] = useState(store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].l10);

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
            ptc: ptc,
            home: home,
            away: away,
            div: div,
            conf: conf,
            ppg: ppg,
            opp_ppg: opp_ppg,
            diff: diff,
            strk: strk,
            l10: l10

        };
        
       

        fetch("https://sportsdata365.com/stats_ncaa_basket_team/"+ store.ncaa_basket_team_player[params.theid].id, {
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
        fetch("https://sportsdata365.com/stats_ncaa_basket_team/" + store.ncaa_basket_team_player[params.theid].id, {
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

    let selectConference = ["Eastern Conference", "Western Conference"];
    let selectDivision = ["Northwest", "Southwest", "Pacific", "Atlantic", "Central", "Southeastern"];

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
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].team} onChange={e => setTeam(e.target.value)} required>
                            {
                                store.ncaa_basket_teams.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example"  onChange={e => setSeason(e.target.value)} defaultValue={store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].season} required>
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
                        <select className="form-select" name="month" aria-label="Default select example" defaultValue={store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].conference} onChange={e => setConference(e.target.value)} required>
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
                        <select className="form-select" name="month" aria-label="Default select example" defaultValue={store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].division} onChange={e => setDivision(e.target.value)} required>
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
                <div id="crear-stats" className="py-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">W</div>
                        <div className="col-2 title-lines">L</div>
                        <div className="col-2 title-lines">Ptc</div>
                        <div className="col-2 title-lines">Home</div>
                        <div className="col-2 title-lines">Away</div>
                        <div className="col-2 title-lines">Div</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="W" aria-label="default input example" defaultValue={store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].w} onChange={e => setw(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L" aria-label="default input example" defaultValue={store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].L} onChange={e => setL(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ptc" aria-label="default input example" defaultValue={store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].ptc} onChange={e => setptc(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Home" aria-label="default input example" defaultValue={store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].home} onChange={e => sethome(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Away" aria-label="default input example" defaultValue={store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].away} onChange={e => setaway(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Div" aria-label="default input example" defaultValue={store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].div} onChange={e => setdiv(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row g-0 text-center mt-3">
                        <div className="col-2 title-lines">Conf</div>
                        <div className="col-2 title-lines">Ppg</div>
                        <div className="col-2 title-lines">Opp Ppg</div>
                        <div className="col-2 title-lines">Diff</div>
                        <div className="col-2 title-lines">Strk</div>
                        <div className="col-2 title-lines">L 10</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Conf" name="rotation_home" defaultValue={store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].conf} onChange={e => setconf(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ppg" aria-label="default input example" defaultValue={store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].ppg} onChange={e => setppg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Opp Ppg" aria-label="default input example" defaultValue={store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].opp_ppg} onChange={e => setopp_ppg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Diff" aria-label="default input example" defaultValue={store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].diff} onChange={e => setdiff(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Strk" aria-label="default input example" defaultValue={store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].strk} onChange={e => setstrk(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L 10" aria-label="default input example" defaultValue={store.ncaa_basket_team_player[params.theid] && store.ncaa_basket_team_player[params.theid].l10} onChange={e => setl10(e.target.value)} required />
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
                                    {auth ? <Redirect to="/list_ncaa_basket_stats/" /> : null}
                                </div>
                                <div className="col-6 p-2 text-center">
                                    <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {auth ? <Redirect to="/list_ncaa_basket_stats/" /> : null}
            </form>
        </div>
    )
}