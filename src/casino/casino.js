import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Casino = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const [name, setname] = useState();

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        window.location.reload(true);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            name: name,
        };

        fetch("https://allfansports.herokuapp.com/casinos", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("Logo se creo");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));
    };
    return (
        <div className="col-4 mx-auto mt-5 rounded overflow-hidden shadow">
            <form onSubmit={crear}>
                <div className="col-12 title-lines text-center">
                    Create Casino
                </div>
                <div className="col-12">
                    <input type="text" className="form-control selectInner" placeholder="Casino" name="rotation_home" onChange={e => setname(e.target.value)} required />
                </div>

                <div className="col-12 text-center py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/admin/" /> : null}
            </form>
        </div>
    )
}