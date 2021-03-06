import React, { useState, useContext, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";
export const Edit_stats_Golfer = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }
    
    const params = useParams();
    const [season, setseason] = useState(store.golfer_stats[params.theid] && store.golfer_stats[params.theid].season);
    const [name, setName] = useState(store.golfer_stats[params.theid] && store.golfer_stats[params.theid].name);
    const [country, setCountry] = useState(store.golfer_stats[params.theid] && store.golfer_stats[params.theid].country);
    const [swing, setswing] = useState(store.golfer_stats[params.theid] && store.golfer_stats[params.theid].swing);
    const [birth, setBirth] = useState(store.golfer_stats[params.theid] && store.golfer_stats[params.theid].birth);
    const [cuts, setcuts] = useState(store.golfer_stats[params.theid] && store.golfer_stats[params.theid].cuts);
    const [top10, settop10] = useState(store.golfer_stats[params.theid] && store.golfer_stats[params.theid].top10);
    const [w, setW] = useState(store.golfer_stats[params.theid] && store.golfer_stats[params.theid].w);
    const [rnds, setrnds] = useState(store.golfer_stats[params.theid] && store.golfer_stats[params.theid].rnds);
    const [holes, setholes] = useState(store.golfer_stats[params.theid] && store.golfer_stats[params.theid].holes);
    const [avg, setavg] = useState(store.golfer_stats[params.theid] && store.golfer_stats[params.theid].avg);
    const [headshot, setheadshot] = useState(store.golfer_stats[params.theid] && store.golfer_stats[params.theid].headshot);

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            name: name,
            country: country,
            swing: swing,
            birth: birth,
            headshot: headshot,
            season: season,

            cuts: cuts,
            top10: top10,
            w: w,
            rnds: rnds,
            holes: holes,
            avg: avg
        };
        
        fetch("https://sportsdata365.com/golfer/" + store.golfer_stats[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                
                alert("Stadistica de Golfista se Actualizo");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));
    };
    const delet_py_ret_stat = e => {
        fetch("https://sportsdata365.com/golfer/" + store.golfer_stats[params.theid].id, {
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
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
            <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <div className="row g-0">
                        <div className="col-6 d-flex align-items-center justify-content-end">
                            <h3>Edit stats of {store.golfer_stats[params.theid] && store.golfer_stats[params.theid].name} </h3>
                        </div>
                        <div className="col-6 text-start">
                            <img className="img_picture" src={store.golfer_stats[params.theid] && store.golfer_stats[params.theid].headshot} alt="image of player"></img>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={crear}>
            <div className="row g-0">
                    <div className="text-center col-2 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" defaultValue={store.golfer_stats[params.theid] && store.golfer_stats[params.theid].name} onChange={e => setName(e.target.value)} ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Country
                        <input className="form-control selectInner" type="text" placeholder="Country" aria-label="default input example" defaultValue={store.golfer_stats[params.theid] && store.golfer_stats[params.theid].country} onChange={e => setCountry(e.target.value)} ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Swing 
                        <input className="form-control selectInner" type="text" placeholder="Swing" aria-label="default input example" defaultValue={store.golfer_stats[params.theid] && store.golfer_stats[params.theid].swing} onChange={e => setswing(e.target.value)} ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" defaultValue={store.golfer_stats[params.theid] && store.golfer_stats[params.theid].birth} onChange={e => setBirth(e.target.value)} ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Headshot
                        <input className="form-control selectInner" type="text" placeholder="Headshot" aria-label="setheadshot" defaultValue={store.golfer_stats[params.theid] && store.golfer_stats[params.theid].headshot} onChange={e => setheadshot(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setseason(e.target.value)} defaultValue={season} required>
                            {
                                selectYear.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index} >{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Cuts</div>
                        <div className="col-2 title-lines">Top 10</div>
                        <div className="col-2 title-lines">W</div>
                        <div className="col-2 title-lines">Rnds</div>
                        <div className="col-2 title-lines">Holes</div>
                        <div className="col-2 title-lines">Avg</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Cuts" aria-label="default input example" defaultValue={store.golfer_stats[params.theid] && store.golfer_stats[params.theid].cuts} onChange={e => setcuts(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Top 10" aria-label="default input example" defaultValue={store.golfer_stats[params.theid] && store.golfer_stats[params.theid].top10} onChange={e => settop10(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="W" aria-label="default input example" defaultValue={store.golfer_stats[params.theid] && store.golfer_stats[params.theid].w} onChange={e => setW(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Rnds" aria-label="default input example" defaultValue={store.golfer_stats[params.theid] && store.golfer_stats[params.theid].rnds} onChange={e => setrnds(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Holes" aria-label="default input example" defaultValue={store.golfer_stats[params.theid] && store.golfer_stats[params.theid].holes} onChange={e => setholes(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Avg" aria-label="default input example" defaultValue={store.golfer_stats[params.theid] && store.golfer_stats[params.theid].avg} onChange={e => setavg(e.target.value)} />
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
                {auth ? <Redirect to="/list_stats_golfer/" /> : null}
            </form>
        </div>

    )
} 