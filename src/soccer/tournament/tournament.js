import React, { useState, useContext,useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Tournaments = () => {
    const { store } = useContext(Context);
        useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);
        
        if(!user){
            window.location.href = '/';
        }
    }, [])

    const [country, setcountry] = useState("2021");
    const [tournament, settournament] = useState("");

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        window.location.reload(true);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            country: country,
            tournament: tournament

        };

        fetch("https://sportsdata365.com/soccer_tournament", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("Stadistica se creo");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));
    };

    //select
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    return (
        <div className="container-fluid p-0 m-0 accordion m-50" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create Soccer Tournament</h3>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Country
                        <input className="form-control selectInner" type="text" placeholder="Country" aria-label="Team" onChange={e => setcountry(e.target.value)} required />
                    </div>
                    <div className="text-center col-3 p-1">
                    Tournament
                        <input className="form-control selectInner" type="text" placeholder="Tournament" aria-label="Team" onChange={e => settournament(e.target.value)} required />
                    </div>
                </div>
                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_tournaments/" /> : null}
            </form>
        </div>
    )
}