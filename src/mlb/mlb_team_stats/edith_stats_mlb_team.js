import React, { useState, useContext } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";

export const Edit_Stats_MLB_Team = () => {
    const { store } = useContext(Context);
    const params = useParams();

    const [season, setSeason] = useState(store.nba_stats_teams[params.theid].season);
    const [team, setTeam] = useState(store.nba_stats_teams[params.theid].team);
    const [conference, setConference] = useState(store.nba_stats_teams[params.theid].conference);
    const [division, setDivision] = useState(store.nba_stats_teams[params.theid].division);

    const [pts, setPts] = useState(store.nba_stats_teams[params.theid].pts);
    const [fmg, setFmg] = useState(store.nba_stats_teams[params.theid].fmg);
    const [fga, setFga] = useState(store.nba_stats_teams[params.theid].fga);
    const [fg, setfg] = useState(store.nba_stats_teams[params.theid].fg);
    const [fg_AVG, setFg_AVG] = useState(store.nba_stats_teams[params.theid].fg_AVG);
    const [three_pm, setThree_pm] = useState(store.nba_stats_teams[params.theid].three_pm);

    const [three_pa, setThree_pa] = useState(store.nba_stats_teams[params.theid].three_pa);
    const [three_p_AVG, setThree_p_AVG] = useState(store.nba_stats_teams[params.theid].three_p_AVG);
    const [ftm, setFtm] = useState(store.nba_stats_teams[params.theid].ftm);
    const [fta, setFta] = useState(store.nba_stats_teams[params.theid].fta);
    const [ft_AVG, setFt_AVG] = useState(store.nba_stats_teams[params.theid].ft_AVG);
    const [Or, setOr] = useState(store.nba_stats_teams[params.theid].Or);

    const [dr, setDr] = useState(store.nba_stats_teams[params.theid].dr);
    const [reb, setReb] = useState(store.nba_stats_teams[params.theid].reb);
    const [ast, setAst] = useState(store.nba_stats_teams[params.theid].ast);
    const [stl, setStl] = useState(store.nba_stats_teams[params.theid].stl);
    const [blk, setBlk] = useState(store.nba_stats_teams[params.theid].blk);
    const [to, setTo] = useState(store.nba_stats_teams[params.theid].to);
    const [pf, setPf] = useState(store.nba_stats_teams[params.theid].pf);

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

            pts: pts,
            fmg: fmg,
            fga: fga,

            fg: fg,
            fg_AVG: fg_AVG,
            three_pm: three_pm,
            three_pa: three_pa,
            three_p_AVG: three_p_AVG,
            ftm: ftm,
            fta: fta,
            ft_AVG: ft_AVG,

            Or: Or,
            dr: dr,
            reb: reb,
            ast: ast,
            stl: stl,
            blk: blk,
            to: to,
            pf: pf

        };
        console.log(body);
        console.log(body.date);

        fetch("https://interfaceroy.herokuapp.com/stats_nba_team/"+ store.nba_stats_teams[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                console.log(sessionStorage);
                alert("Stadistica se creo");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));
    };
    const delet_team_nfl_stat = e => {
        fetch("https://interfaceroy.herokuapp.com/stats_nba_team/" + store.nba_stats_teams[params.theid].id, {
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
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.nba_stats_teams[params.theid].team} onChange={e => setTeam(e.target.value)} required>
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
                        <select className="form-select" name="year" aria-label="Default select example"  onChange={e => setSeason(e.target.value)} defaultValue={store.nba_stats_teams[params.theid].season} required>
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
                        <select className="form-select" name="month" aria-label="Default select example" defaultValue={store.nba_stats_teams[params.theid].conference} onChange={e => setConference(e.target.value)} required>
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
                        <select className="form-select" name="month" aria-label="Default select example" defaultValue={store.nba_stats_teams[params.theid].division} onChange={e => setDivision(e.target.value)} required>
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
                        <div className="col-2 title-lines">Pts</div>
                        <div className="col-2 title-lines">Fmg</div>
                        <div className="col-2 title-lines">Fga</div>
                        <div className="col-2 title-lines">Fg</div>
                        <div className="col-2 title-lines">Fg AVG</div>
                        <div className="col-2 title-lines">Three PM</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Pts" aria-label="default input example" defaultValue={store.nba_stats_teams[params.theid].pts} onChange={e => setPts(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fmg" aria-label="default input example" defaultValue={store.nba_stats_teams[params.theid].fmg} onChange={e => setFmg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fga" aria-label="default input example" defaultValue={store.nba_stats_teams[params.theid].fga} onChange={e => setFga(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fg" aria-label="default input example" defaultValue={store.nba_stats_teams[params.theid].fg} onChange={e => setfg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fg AVG" aria-label="default input example" defaultValue={store.nba_stats_teams[params.theid].fg_AVG} onChange={e => setFg_AVG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Three PM" aria-label="default input example" defaultValue={store.nba_stats_teams[params.theid].three_pm} onChange={e => setThree_pm(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row g-0 text-center mt-3">
                        <div className="col-2 title-lines">Three Pa</div>
                        <div className="col-2 title-lines">Three P AVG</div>
                        <div className="col-2 title-lines">Ftm</div>
                        <div className="col-2 title-lines">Fta</div>
                        <div className="col-2 title-lines">Ft AVG</div>
                        <div className="col-2 title-lines">Or</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Three Pa" name="rotation_home" defaultValue={store.nba_stats_teams[params.theid].three_pa} onChange={e => setThree_pa(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Three P AVG" aria-label="default input example" defaultValue={store.nba_stats_teams[params.theid].three_p_AVG} onChange={e => setThree_p_AVG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ftm" aria-label="default input example" defaultValue={store.nba_stats_teams[params.theid].ftm} onChange={e => setFtm(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fta" aria-label="default input example" defaultValue={store.nba_stats_teams[params.theid].fta} onChange={e => setFta(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ft AVG" aria-label="default input example" defaultValue={store.nba_stats_teams[params.theid].ft_AVG} onChange={e => setFt_AVG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="[Or" aria-label="default input example" defaultValue={store.nba_stats_teams[params.theid].Or} onChange={e => setOr(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row g-0 text-center mt-3">
                        <div className="eight_spans title-lines">Dr</div>
                        <div className="eight_spans title-lines">Reb</div>
                        <div className="eight_spans title-lines">Ast</div>
                        <div className="eight_spans title-lines">Stl</div>
                        <div className="eight_spans title-lines">Blk</div>
                        <div className="eight_spans title-lines">To</div>
                        <div className="eight_spans title-lines">Pf</div>
                    </div>
                    <div className="row g-0">
                        <div className="eight_spans">
                            <input type="text" className="form-control selectInner" placeholder="Dr" name="Dr" defaultValue={store.nba_stats_teams[params.theid].dr} onChange={e => setDr(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Reb" aria-label="default input example" defaultValue={store.nba_stats_teams[params.theid].reb} onChange={e => setReb(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Ast" aria-label="default input example" defaultValue={store.nba_stats_teams[params.theid].ast} onChange={e => setAst(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Stl" aria-label="default input example" defaultValue={store.nba_stats_teams[params.theid].stl} onChange={e => setStl(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Blk" aria-label="default input example" defaultValue={store.nba_stats_teams[params.theid].blk} onChange={e => setBlk(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="To" aria-label="default input example" defaultValue={store.nba_stats_teams[params.theid].to} onChange={e => setTo(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Pf" aria-label="default input example" defaultValue={store.nba_stats_teams[params.theid].pf} onChange={e => setPf(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 p-3 text-end">
                        <HashLink className="btn btn-info text-white" to="/admin">Back to Admin</HashLink>
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
                                    {auth ? <Redirect to="/list_nfl_stats/" /> : null}
                                </div>
                                <div className="col-6 p-2 text-center">
                                    <button type="button" className="btn btn-info text-white" data-bs-dismiss="modal">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {auth ? <Redirect to="/list_nba_stats/" /> : null}
            </form>
        </div>
    )
}