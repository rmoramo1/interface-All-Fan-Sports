import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Logo_Canadian_Football = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const [team, setteam] = useState();
    const [url, seturl] = useState();

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        document.getElementById("miFormLogo_Canadian_Football").reset();
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            team: team,
            url: url,

        };

        fetch("https://sportsdata365.com/logos_canadian_football", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("Logo se creo");
                
                actualizar();
            })
            .catch(err => console.log(err));
    };
    return (
        <div className="row g-0 rounded overflow-hidden shadow">
            <form onSubmit={crear} id="miFormLogo_Canadian_Football">
                <div className="col-12 title-lines text-center">
                    Create Canadian Football Team Logo
                </div>
                <div className="col-12">
                    <input type="text" className="form-control selectInner" placeholder="TEAM" name="rotation_home" onChange={e => setteam(e.target.value)} required />
                </div>
                <div className="col-12">
                    <input type="text" className="form-control selectInner" placeholder="URL" name="rotation_home" onChange={e => seturl(e.target.value)} required />
                </div>

                <div className="col-12 text-center py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/admin/" /> : null}
            </form>
        </div>
    )
}