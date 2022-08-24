import React, { useState, useContext, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";
export const Edit_stats_Goalkeeper_nhl = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

    const params = useParams();
    const [name, setName] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].name);
    const [height, setHeight] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].height);
    const [weight, setWeight] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].weight);
    const [birth, setBirth] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].birth);
    const [season, setSeason] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].season);
    const [team, setTeam] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].team);
    const [dorsal, setDorsal] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].dorsal);
    const [position, setPosition] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].position);
    const [headshot, setheadshot] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].headshot);

    const [gp, setGp] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].gp);
    const [gs, setGs] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].gs);
    const [toi_g, settoi_g] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].toi_g);
    const [wins, setwins] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].wins);
    const [L, setL] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].L);
    const [t, setT] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].t);

    const [otl, setotl] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].otl);
    const [ga, setga] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].ga);
    const [ga_g, setga_g] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].ga_g);
    const [sa, setsa] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].sa);
    const [sv, setsv] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].sv);
    const [sv_avg, setsv_avg] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].sv_avg);

    const [so, setso] = useState(store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].so);

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
            season: season,
            team: team,
            dorsal: dorsal,
            position: position,
            headshot: headshot,

            gp: gp,
            gs: gs,
            toi_g: toi_g,
            wins: wins,
            L: L,
            t: t,
            otl: otl,
            ga: ga,
            ga_g: ga_g,
            sa: sa,
            sv: sv,
            sv_avg: sv_avg,
            so: so,
        };

        fetch("https://sportsdata365.com/stats_nhl_goalkeeper/" + store.nhl_stats_goalkeeper[params.theid].id, {
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
        fetch("https://sportsdata365.com/stats_nhl_goalkeeper/" + store.nhl_stats_goalkeeper[params.theid].id, {
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
    let positions=["Goalkeeper"];
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
            <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <div className="row g-0">
                        <div className="col-6 d-flex align-items-center justify-content-end">
                            <h3>Edit stats of {store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].name} </h3>
                        </div>
                        <div className="col-6 text-start">
                            <img className="img_picture" src={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].headshot} alt="image of player"></img>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].name} onChange={e => setName(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Height
                        <input className="form-control selectInner" type="text" placeholder="Height" aria-label="default input example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].height} onChange={e => setHeight(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Weight
                        <input className="form-control selectInner" type="text" placeholder="Weight" aria-label="default input example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].weight} onChange={e => setWeight(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].birth} onChange={e => setBirth(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Position
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].position}  onChange={e => setPosition(e.target.value)} required>
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
                        <input className="form-control selectInner" type="text" placeholder="Dorsal" aria-label="default input example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].dorsal} onChange={e => setDorsal(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Headshot
                        <input className="form-control selectInner" type="text" placeholder="Headshot" aria-label="setheadshot" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].headshot} onChange={e => setheadshot(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].team} aria-label="Default select example" onChange={e => setTeam(e.target.value)} required>
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
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].season} required>
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
                    <div className="col-2 title-lines">Gp</div>
                        <div className="col-2 title-lines">Gs</div>
                        <div className="col-2 title-lines">TOI/G</div>
                        <div className="col-2 title-lines">WINS</div>
                        <div className="col-2 title-lines">L</div>
                        <div className="col-2 title-lines">T</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Gp" aria-label="default input example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].gp} onChange={e => setGp(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Gs" aria-label="default input example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].gs} onChange={e => setGs(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="TOI/G" aria-label="default input example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].toi_g} onChange={e => settoi_g(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="WINS" aria-label="default input example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].wins} onChange={e => setwins(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L" aria-label="default input example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].L} onChange={e => setL(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="T" aria-label="default input example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].t} onChange={e => setT(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                    <div className="col-2 title-lines">OTL</div>
                        <div className="col-2 title-lines">GA</div>
                        <div className="col-2 title-lines">GA/G</div>
                        <div className="col-2 title-lines">SA</div>
                        <div className="col-2 title-lines">SV</div>
                        <div className="col-1 title-lines">SV%</div>
                        <div className="col-1 title-lines">SO</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="OTL" aria-label="default input example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].otl} onChange={e => setotl(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="GA" aria-label="default input example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].ga} onChange={e => setga(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="GA/G" aria-label="default input example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].ga_g} onChange={e => setga_g(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="SA" aria-label="default input example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].sa} onChange={e => setsa(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="SV" aria-label="default input example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].sv} onChange={e => setsv(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="SV%" aria-label="default input example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].sv_avg} onChange={e => setsv_avg(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="SO" aria-label="default input example" defaultValue={store.nhl_stats_goalkeeper[params.theid]&& store.nhl_stats_goalkeeper[params.theid].so} onChange={e => setso(e.target.value)} required />
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
                                    {auth ? <Redirect to="/list_stats_nhl_goalkeeper/" /> : null}
                                </div>
                                <div className="col-6 p-2 text-center">
                                    <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {auth ? <Redirect to="/list_stats_nhl_goalkeeper/" /> : null}
            </form>
        </div>

    )
} 