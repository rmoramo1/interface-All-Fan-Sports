import React, { useState, useContext, useEffect } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Edith_Injuries = (props) => {
    const params = useParams();
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }
    const [date, setdate] = useState(store.injuries[params.theid].date);
    const [injurie, setinjurie] = useState(store.injuries[params.theid].injurie);
    const [name_player, setname_player] = useState(store.injuries[params.theid].name_player);
    const [time_injurie, settime_injurie] = useState(store.injuries[params.theid].time_injurie);
    const [team, setteam] = useState(store.injuries[params.theid].team);
    const [sport, setsport] = useState(store.injuries[params.theid].sport);

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);
    }
    const edit = e => {
        e.preventDefault();
        const body = {
            date: date,
            injurie: injurie,
            name_player: name_player,
            time_injurie: time_injurie,
            sport: sport,
            team: team
        };

        fetch("https://www.sportsdata365.com/injuries/" + store.injuries[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("Injurie se Edito");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));
    };
    const deletOdd = e => {
        fetch("https://www.sportsdata365.com/injuries/" + store.injuries[params.theid].id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .catch(err => console.log(err));
        setAuth(true);
        actualizar();
    };
    return (
        <div className="container m-50">
            <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                <div className="row g-0 w-100">
                    <div className="col-6">
                        <h4 className="fw-bold text-center">Edith Injurie </h4>
                    </div>
                    <div className="col-6 tetx-center">
                        <h4>
                            {store.injuries[params.theid].title}
                        </h4>
                    </div>
                </div>
            </div>
            <div className="row g-0 rounded overflow-hidden shadow">
                <form onSubmit={edit}>
                    <div className="row g-0">
                        <div className="col-2 title-lines text-center">
                            Team
                        </div>
                        <div className="col-2 title-lines text-center">
                            Sport
                        </div>
                        <div className="col-2 title-lines text-center">
                            Name Player
                        </div>
                        <div className="col-2 title-lines text-center">
                            Injurie
                        </div>
                        <div className="col-2 title-lines text-center">
                            Date
                        </div>
                        <div className="col-2 title-lines text-center">
                            Time Injurie
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Title" name="team" defaultValue={store.injuries[params.theid].team} onChange={e => setteam(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Sport" name="sport" defaultValue={store.injuries[params.theid].sport} onChange={e => setsport(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Player" name="rotation_home" onChange={e => setname_player(e.target.value)} defaultValue={store.injuries[params.theid].name_player} required />
                        </div>
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Injurie" name="rotation_home" onChange={e => setinjurie(e.target.value)} defaultValue={store.injuries[params.theid].injurie} required />
                        </div>
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Date" name="Date" onChange={e => setdate(e.target.value)} required defaultValue={store.injuries[params.theid].date} />
                        </div>
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Time" name="time injurie" onChange={e => settime_injurie(e.target.value)} required defaultValue={store.injuries[params.theid].time_injurie} />
                        </div>
                        <div className="row g-0">
                            <div className="col-4 p-3 text-end">
                                <Link className="btn btn-secondary  text-white" to="/admin">Back to Admin</Link>
                            </div>
                            <div className="col-4 text-center py-3">
                                <button type="submit" className="btn btn-danger">Edith</button>
                            </div>
                            <div className="col-4 text-start p-3">
                                <div data-bs-toggle="modal" data-bs-target="#delete_Fight" className="btn btn-danger">Delet</div>
                            </div>
                        </div>
                    </div>
                    {auth ? <Redirect to="/admin/" /> : null}
                </form>
            </div>
            <div className="modal fade" id="delete_Fight" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content overflow-hidden">
                        <div className="col-12 text-center text-white bg-danger text-uppercase fs-5 py-3">
                            <i className="fas fa-exclamation-triangle fs-1"></i><br />are you sure you want to delete the logo
                        </div>
                        <div className="row g-0">
                            <div className="col-6 p-2 text-center">
                                <button className="btn btn-danger" onClick={deletOdd} data-bs-dismiss="modal">Yes Delete</button>
                            </div>
                            <div className="col-6 p-2 text-center">
                                <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}