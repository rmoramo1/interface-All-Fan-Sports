import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Future = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const [sport, setsport] = useState();
    const [future, setfuture] = useState();
    const [line, setline] = useState();

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        window.location.reload(true);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            sport: sport,
            future: future,
            line: line,
        };

        fetch("https://www.sportsdata365.com/futures", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("Future se creo");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));
    };
    let sports = ["FOOTBALL", "BASKETBALL", "BASEBALL", "HOCKEY", "BOX", "MMA", "GOLF", "NACASCAR", "SOCCER", "NCAA FOOTBALL", "NCAA BASKETBALL", "NCAA BASEBALL"]
    return (
        <div className="col-8 mx-auto mt-5 rounded overflow-hidden shadow">
            <form onSubmit={crear}>
                <div className="row g-0">
                <div className="col-4 title-lines text-center">
                        Sport
                    </div>
                    <div className="col-4 title-lines text-center">
                        Future
                    </div>
                    <div className="col-4 title-lines text-center">
                        Line
                    </div>
                </div>
                <div className="row g-0">
                <div className="col-4">
                        <select className="form-select selectInner" name="Tournament" aria-label="Tournament" defaultValue={"FOOTBALL"} onChange={e => setsport(e.target.value)}>
                            {
                                sports.map((item, index) => {
                                    return (
                                        <option key={index} name="sports" value={item}>{item}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control selectInner" placeholder="Future" name="setfuture" onChange={e => setfuture(e.target.value)} required />
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control selectInner" placeholder="Line" name="setline" onChange={e => setline(e.target.value)} required />
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