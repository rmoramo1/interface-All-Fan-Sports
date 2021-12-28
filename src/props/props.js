import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Props = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const [title, settitle] = useState();
    const [sport, setsport] = useState();
    const [away, setaway] = useState();
    const [home, sethome] = useState();
    const [line, setline] = useState();
    const [feature, setfeature] = useState();
    const [type_prop, settype_prop] = useState();

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        window.location.reload(true);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            away: away,
            feature: feature,
            home: home,
            line: line,
            sport: sport,
            title: title,
            type_prop: type_prop
        };

        fetch("https://interfaceroy.herokuapp.com/props", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("Prop se creo");
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
                    <div className="col-2 title-lines text-center">
                        Title
                    </div>
                    <div className="col-2 title-lines text-center">
                        Sport
                    </div>
                    <div className="col-2 title-lines text-center">
                        Away
                    </div>
                    <div className="col-2 title-lines text-center">
                        Home
                    </div>
                    <div className="col-2 title-lines text-center">
                        Line
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Title" name="rotation_home" onChange={e => settitle(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Sport" name="rotation_home" onChange={e => setsport(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Away" name="rotation_home" onChange={e => setaway(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Home" name="rotation_home" onChange={e => sethome(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Line" name="rotation_home" onChange={e => setline(e.target.value)} required />
                    </div>
                </div>
                <div className="row g-0 pt-2">
                    <div className="col-2 title-lines text-center">
                        Feature
                    </div>
                    <div className="col-2 title-lines text-center">
                        Type Prop
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Feature" name="rotation_home" onChange={e => setfeature(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Type Prop" name="rotation_home" onChange={e => settype_prop(e.target.value)} required />
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