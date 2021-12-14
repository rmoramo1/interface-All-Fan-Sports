import React, { useState, useContext } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";
export const Edit_stats_Nascar_Driver = () => {
    const { store } = useContext(Context);
    const params = useParams();

    const [name, setName] = useState(store.nascar_driver_stats[params.theid].name);
    const [country, setCountry] = useState(store.nascar_driver_stats[params.theid].country);
    const [birth, setBirth] = useState(store.nascar_driver_stats[params.theid].birth);

    const [sponsor, setsponsor] = useState(store.nascar_driver_stats[params.theid].sponsor);
    const [engine, setengine] = useState(store.nascar_driver_stats[params.theid].engine);
    const [number_car, setnumber_car] = useState(store.nascar_driver_stats[params.theid].number_car);
    const [rank, setrank] = useState(store.nascar_driver_stats[params.theid].rank);
    const [starts, setstarts] = useState(store.nascar_driver_stats[params.theid].starts);
    const [poles, setpoles] = useState(store.nascar_driver_stats[params.theid].poles);
    const [top5, settop5] = useState(store.nascar_driver_stats[params.theid].top5);
    const [top10, settop10] = useState(store.nascar_driver_stats[params.theid].top10);
    const [laps_lead, setlaps_lead] = useState(store.nascar_driver_stats[params.theid].laps_lead);
    const [pts, setpts] = useState(store.nascar_driver_stats[params.theid].pts);
    const [AVG_laps, setAVG_laps] = useState(store.nascar_driver_stats[params.theid].AVG_laps);
    const [AVG_finish, setAVG_finish] = useState(store.nascar_driver_stats[params.theid].AVG_finish);

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            name: name,
            country: country,
            birth: birth,

            sponsor: sponsor,
            engine: engine,
            number_car: number_car,
            rank: rank,
            starts: starts,
            poles: poles,
            top5: top5,
            top10: top10,
            laps_lead: laps_lead,
            pts: pts,
            AVG_laps: AVG_laps,
            AVG_finish: AVG_finish
        };
        console.log(body);
        console.log(body.date);

        fetch("https://interfaceroy.herokuapp.com/nascar_drivers/" + store.nascar_driver_stats[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                console.log(sessionStorage);
                alert("Stadistica de Golfista se Actualizo");
                setAuth(true);
                //actualizar();
            })
            .catch(err => console.log(err));
    };
    const delet_py_ret_stat = e => {
        fetch("https://interfaceroy.herokuapp.com/nascar_drivers/" + store.nascar_driver_stats[params.theid].id, {
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
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-5 p-3 text-center">
                    <h3>Edit stats of {store.nascar_driver_stats[params.theid].name} </h3>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="text-center col-2 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" defaultValue={store.nascar_driver_stats[params.theid].name} onChange={e => setName(e.target.value)} ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Country
                        <input className="form-control selectInner" type="text" placeholder="Country" aria-label="default input example" defaultValue={store.nascar_driver_stats[params.theid].country} onChange={e => setCountry(e.target.value)} ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" defaultValue={store.nascar_driver_stats[params.theid].birth} onChange={e => setBirth(e.target.value)} ></input>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Sponsor</div>
                        <div className="col-2 title-lines">Engine</div>
                        <div className="col-2 title-lines">Number Car</div>
                        <div className="col-2 title-lines">Rank</div>
                        <div className="col-2 title-lines">Starts</div>
                        <div className="col-2 title-lines">Poles</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sponsor" aria-label="default input example" defaultValue={store.nascar_driver_stats[params.theid].sponsor} onChange={e => setsponsor(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Engine" aria-label="default input example" defaultValue={store.nascar_driver_stats[params.theid].engine} onChange={e => setengine(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Number Car" aria-label="default input example" defaultValue={store.nascar_driver_stats[params.theid].number_car} onChange={e => setnumber_car(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Rank" aria-label="default input example" defaultValue={store.nascar_driver_stats[params.theid].rank} onChange={e => setrank(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Starts" aria-label="default input example" defaultValue={store.nascar_driver_stats[params.theid].starts} onChange={e => setstarts(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Poles" aria-label="default input example" defaultValue={store.nascar_driver_stats[params.theid].poles} onChange={e => setpoles(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Top 5</div>
                        <div className="col-2 title-lines">Top 10</div>
                        <div className="col-2 title-lines">Laps Lead</div>
                        <div className="col-2 title-lines">Pts</div>
                        <div className="col-2 title-lines">AVG_laps</div>
                        <div className="col-2 title-lines">AVG_finish</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Top 5" aria-label="default input example" defaultValue={store.nascar_driver_stats[params.theid].top5} onChange={e => settop5(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Top 10" aria-label="default input example" defaultValue={store.nascar_driver_stats[params.theid].top10} onChange={e => settop10(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Laps Lead" aria-label="default input example" defaultValue={store.nascar_driver_stats[params.theid].laps_lead} onChange={e => setlaps_lead(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Pts" aria-label="default input example" defaultValue={store.nascar_driver_stats[params.theid].pts} onChange={e => setpts(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="AVG_laps" aria-label="default input example" defaultValue={store.nascar_driver_stats[params.theid].AVG_laps} onChange={e => setAVG_laps(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="AVG_finish" aria-label="default input example" defaultValue={store.nascar_driver_stats[params.theid].AVG_finish} onChange={e => setAVG_finish(e.target.value)} />
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
                                    {auth ? <Redirect to="/list_stats_nascar_driver/" /> : null}
                                </div>
                                <div className="col-6 p-2 text-center">
                                    <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {auth ? <Redirect to="/list_stats_nascar_driver/" /> : null}
            </form>
        </div>

    )
} 