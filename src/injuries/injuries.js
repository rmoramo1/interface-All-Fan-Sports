import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Injuries = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const [date, setdate] = useState();
    const [injurie, setinjurie] = useState();
    const [name_player, setname_player] = useState();
    const [time_injurie, settime_injurie] = useState();
    const [team, setteam] = useState();
    const [sport, setsport] = useState();

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        window.location.reload(true);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            date: date,
            injurie: injurie,
            name_player: name_player,
            time_injurie: time_injurie,
            sport: sport,
            team: team
        };

        fetch("https://www.sportsdata365.com/injuries", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("ODD se creo");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));
    };
    return (
        <div className="col mx-auto mt-5 rounded overflow-hidden sha dow">
            <div className="col-12 bg-title-edith my-2 p-3 text-center">
                <h3>Injurie</h3>
            </div>
            <form onSubmit={crear}>
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
                        <input type="text" className="form-control selectInner" placeholder="Team" name="team" onChange={e => setteam(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Sport" name="sport" onChange={e => setsport(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Name Player" name="player" onChange={e => setname_player(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Injurie" name="injurie" onChange={e => setinjurie(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Date" name="setdate" onChange={e => setdate(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Time Injurie" name="settime_injurie" onChange={e => settime_injurie(e.target.value)} required />
                    </div>
                </div>

                <div className="col-12 text-center py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/admin/" /> : null}
            </form>
        </div>
    )
}