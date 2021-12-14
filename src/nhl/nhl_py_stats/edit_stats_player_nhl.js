import React, { useState, useContext } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";
export const Edit_stats_player_nhl = () => {
    const { store } = useContext(Context);
    const params = useParams();

    const [name, setName] = useState(store.nhl_stats_player[params.theid].name);
    const [height, setHeight] = useState(store.nhl_stats_player[params.theid].height);
    const [weight, setWeight] = useState(store.nhl_stats_player[params.theid].weight);
    const [birth, setBirth] = useState(store.nhl_stats_player[params.theid].birth);
    const [season, setSeason] = useState(store.nhl_stats_player[params.theid].season);
    const [team, setTeam] = useState(store.nhl_stats_player[params.theid].team);
    const [dorsal, setDorsal] = useState(store.nhl_stats_player[params.theid].dorsal);
    const [position, setPosition] = useState(store.nhl_stats_player[params.theid].position);

    const [gp, setGp] = useState(store.nhl_stats_player[params.theid].gp);
    const [g, setg] = useState(store.nhl_stats_player[params.theid].g);
    const [a, seta] = useState(store.nhl_stats_player[params.theid].a);
    const [pts, setpts] = useState(store.nhl_stats_player[params.theid].pts);
    const [p_m_rating, setp_m_rating] = useState(store.nhl_stats_player[params.theid].p_m_rating);
    const [pim, setpim] = useState(store.nhl_stats_player[params.theid].pim);
    const [sog, setsog] = useState(store.nhl_stats_player[params.theid].sog);

    const [spct, setspct] = useState(store.nhl_stats_player[params.theid].spct);
    const [ppg, setppg] = useState(store.nhl_stats_player[params.theid].ppg);
    const [ppa, setppa] = useState(store.nhl_stats_player[params.theid].ppa);
    const [shg, setshg] = useState(store.nhl_stats_player[params.theid].shg);
    const [sha, setsha] = useState(store.nhl_stats_player[params.theid].sha);
    const [gwg, setgwg] = useState(store.nhl_stats_player[params.theid].gwg);

    const [gtg, setgtg] = useState(store.nhl_stats_player[params.theid].gtg);
    const [toi_g, settoi_g] = useState(store.nhl_stats_player[params.theid].toi_g);
    const [prod, setprod] = useState(store.nhl_stats_player[params.theid].prod);

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

            gp: gp,
            g: g,
            a: a,
            pts: pts,
            p_m_rating: p_m_rating,
            pim: pim,
            sog: sog,
            spct: spct,
            ppg: ppg,
            ppa: ppa,
            shg: shg,
            sha: sha,
            gwg: gwg,
            gtg: gtg,
            toi_g: toi_g,
            prod: prod
        };
        console.log(body);
        console.log(body.date);

        fetch("https://interfaceroy.herokuapp.com/stats_nhl_player/" + store.nhl_stats_player[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                console.log(sessionStorage);
                alert("Stadistica de jugador se Actualizo");
                setAuth(true);
                //actualizar();
            })
            .catch(err => console.log(err));
    };
    const delet_py_ret_stat = e => {
        fetch("https://interfaceroy.herokuapp.com/stats_nhl_player/" + store.nhl_stats_player[params.theid].id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .catch(err => console.log(err));
        setAuth(true);
        //actualizar();
    };
    //select
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }
    let positions=["C","D","G","LW","RW"];
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-5 p-3 text-center">
                    <h3>Edit stats of {store.nhl_stats_player[params.theid].name} </h3>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].name} onChange={e => setName(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Height
                        <input className="form-control selectInner" type="text" placeholder="Height" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].height} onChange={e => setHeight(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Weight
                        <input className="form-control selectInner" type="text" placeholder="Weight" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].weight} onChange={e => setWeight(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].birth} onChange={e => setBirth(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Position
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.nhl_stats_player[params.theid].position}  onChange={e => setPosition(e.target.value)} required>
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
                        <input className="form-control selectInner" type="text" placeholder="Dorsal" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].dorsal} onChange={e => setDorsal(e.target.value)} required ></input>
                    </div>

                </div>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" defaultValue={store.nhl_stats_player[params.theid].team} aria-label="Default select example" onChange={e => setTeam(e.target.value)} required>
                            {
                                store.mlb_teams.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={store.nhl_stats_player[params.theid].season} required>
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
                        <div className="col-2 title-lines">G</div>
                        <div className="col-2 title-lines">A</div>
                        <div className="col-2 title-lines">Pts</div>
                        <div className="col-2 title-lines">P M Rating</div>
                        <div className="col-2 title-lines">Pim</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Gp" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].gp} onChange={e => setGp(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="G" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].g} onChange={e => setg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="A" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].a} onChange={e => seta(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Pts" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].pts} onChange={e => setpts(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="P M Rating" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].p_m_rating} onChange={e => setp_m_rating(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Pim" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].pim} onChange={e => setpim(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Sog</div>
                        <div className="col-2 title-lines">Spct</div>
                        <div className="col-2 title-lines">Ppg</div>
                        <div className="col-2 title-lines">Ppa</div>
                        <div className="col-2 title-lines">Shg</div>
                        <div className="col-2 title-lines">Sha</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sog" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].sog} onChange={e => setsog(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Spct" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].spct} onChange={e => setspct(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ppg" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].ppg} onChange={e => setppg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ppa" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].ppa} onChange={e => setppa(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Shg" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].shg} onChange={e => setshg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sha" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].sha} onChange={e => setsha(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Gwg</div>
                        <div className="col-2 title-lines">Gtg</div>
                        <div className="col-2 title-lines">Toi G</div>
                        <div className="col-2 title-lines">Prod</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Gwg" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].gwg} onChange={e => setgwg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Gtg" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].gtg} onChange={e => setgtg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Toi G" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].toi_g} onChange={e => settoi_g(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Prod" aria-label="default input example" defaultValue={store.nhl_stats_player[params.theid].prod} onChange={e => setprod(e.target.value)} required />
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
                {auth ? <Redirect to="/list_stats_nhl_py/" /> : null}
            </form>
        </div>

    )
} 