import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Odds_to_win = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const [title, settitle] = useState();
    const [sport, setsport] = useState();
    const [type_odd, settype_odd] = useState();
    const [line, setline] = useState();
    const [team, setteam] = useState();

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        window.location.reload(true);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            title: title,
            sport: sport,
            type_odd: type_odd,
            line: line,
            team: team
        };

        fetch("https://interfaceroy.herokuapp.com/odds_to_win", {
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
                <h3>Odds To Win</h3>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="col-3 title-lines text-center">
                        Title
                    </div>
                    <div className="col-2 title-lines text-center">
                        Sport
                    </div>
                    <div className="col-3 title-lines text-center">
                        Team
                    </div>
                    <div className="col-2 title-lines text-center">
                        Type
                    </div>
                    <div className="col-2 title-lines text-center">
                        Line
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-3">
                        <input type="text" className="form-control selectInner" placeholder="Title" name="rotation_home" onChange={e => settitle(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Sport" name="rotation_home" onChange={e => setsport(e.target.value)} required />
                    </div>
                    <div className="col-3">
                        <input type="text" className="form-control selectInner" placeholder="Team" name="rotation_home" onChange={e => setteam(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Type" name="rotation_home" onChange={e => settype_odd(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Line" name="rotation_home" onChange={e => setline(e.target.value)} required />
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