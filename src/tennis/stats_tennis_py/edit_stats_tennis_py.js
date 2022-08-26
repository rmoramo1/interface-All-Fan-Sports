import React, { useState, useContext, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";
export const Edit_stats_Tennis_Player = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }
    
    const params = useParams();
    const [season, setseason] = useState(store.tennis_player[params.theid] && store.tennis_player[params.theid].season);
    const [name, setName] = useState(store.tennis_player[params.theid] && store.tennis_player[params.theid].name);
    const [country, setCountry] = useState(store.tennis_player[params.theid] && store.tennis_player[params.theid].country);
    const [plays, setplays] = useState(store.tennis_player[params.theid] && store.tennis_player[params.theid].plays);
    const [birth, setBirth] = useState(store.tennis_player[params.theid] && store.tennis_player[params.theid].birth);
    const [headshot, setheadshot] = useState(store.tennis_player[params.theid] && store.tennis_player[params.theid].headshot);
    
    const [single_titles, setsingle_titles] = useState(store.tennis_player[params.theid] && store.tennis_player[params.theid].single_titles);
    const [double_titles, setdouble_titles] = useState(store.tennis_player[params.theid] && store.tennis_player[params.theid].double_titles);
    const [singles_w_l, setsingles_w_l] = useState(store.tennis_player[params.theid] && store.tennis_player[params.theid].singles_w_l);

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            name: name,
            country: country,
            season: season,
            plays: plays,
            birth: birth,
            headshot: headshot,

            single_titles: single_titles,
            double_titles: double_titles,
            singles_w_l: singles_w_l,
        };
        
        fetch("https://sportsdata365.com/tennis_player/" + store.tennis_player[params.theid].id, {
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
        fetch("https://sportsdata365.com/tennis_player/" + store.tennis_player[params.theid].id, {
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
                            <h3>Edit stats of {store.tennis_player[params.theid] && store.tennis_player[params.theid].name} </h3>
                        </div>
                        <div className="col-6 text-start">
                            <img className="img_picture" src={store.tennis_player[params.theid] && store.tennis_player[params.theid].headshot} alt="image of player"></img>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={crear}>
            <div className="row g-0">
                    <div className="text-center col-2 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" defaultValue={store.tennis_player[params.theid] && store.tennis_player[params.theid].name} onChange={e => setName(e.target.value)} ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Country
                        <input className="form-control selectInner" type="text" placeholder="Country" aria-label="default input example" defaultValue={store.tennis_player[params.theid] && store.tennis_player[params.theid].country} onChange={e => setCountry(e.target.value)} ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Plays 
                        <input className="form-control selectInner" type="text" placeholder="Plays" aria-label="default input example" defaultValue={store.tennis_player[params.theid] && store.tennis_player[params.theid].plays} onChange={e => setplays(e.target.value)} ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" defaultValue={store.tennis_player[params.theid] && store.tennis_player[params.theid].birth} onChange={e => setBirth(e.target.value)} ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Headshot
                        <input className="form-control selectInner" type="text" placeholder="Headshot" aria-label="setheadshot" defaultValue={store.tennis_player[params.theid] && store.tennis_player[params.theid].headshot} onChange={e => setheadshot(e.target.value)} required ></input>
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
                        <div className="col-2 title-lines">single_titles</div>
                        <div className="col-2 title-lines">double_titles</div>
                        <div className="col-2 title-lines">singles_w_l</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Cuts" aria-label="default input example" defaultValue={store.tennis_player[params.theid] && store.tennis_player[params.theid].single_titles} onChange={e => setsingle_titles(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Top 10" aria-label="default input example" defaultValue={store.tennis_player[params.theid] && store.tennis_player[params.theid].double_titles} onChange={e => setdouble_titles(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="singles_w_l" aria-label="default input example" defaultValue={store.tennis_player[params.theid] && store.tennis_player[params.theid].singles_w_l} onChange={e => setsingles_w_l(e.target.value)} />
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
                                    {auth ? <Redirect to="/list_stats_tennis_py/" /> : null}
                                </div>
                                <div className="col-6 p-2 text-center">
                                    <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {auth ? <Redirect to="/list_stats_tennis_py/" /> : null}
            </form>
        </div>

    )
} 