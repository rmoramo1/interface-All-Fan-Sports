import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Stats_Tennis_PY = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

    const [name, setName] = useState("");
    const [country, setcountry] = useState("");
    const [season, setseason] = useState("2022");
    const [plays, setplays] = useState("");
    const [headshot, setheadshot] = useState("");
    const [birth, setBirth] = useState("");

    const [single_titles, setsingle_titles] = useState("");
    const [double_titles, setdouble_titles] = useState("");
    const [singles_w_l, setsingles_w_l] = useState("");


    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        document.getElementById("miFormTennis").reset();
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
        
        fetch("https://sportsdata365.com/tennis_player", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                
                alert("Stadistica de Tenista se creo");
                
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
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate-nhl" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create Stats Tennis Player</h3>
                </div>
            </div>
            <form onSubmit={crear} id="miFormTennis">
                <div className="row g-0">
                    <div className="text-center col-2 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" onChange={e => setName(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Country
                        <input className="form-control selectInner" type="text" placeholder="Country" aria-label="default input example" onChange={e => setcountry(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                    Plays
                        <input className="form-control selectInner" type="text" placeholder="Plays" aria-label="default input example" onChange={e => setplays(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" onChange={e => setBirth(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Headshot
                        <input className="form-control selectInner" type="text" placeholder="Headshot" aria-label="setheadshot" onChange={e => setheadshot(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setseason(e.target.value)} defaultValue={2022} required>
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
                        <div className="col-4 title-lines">Single Titles</div>
                        <div className="col-4 title-lines">Double Titles</div>
                        <div className="col-4 title-lines">Singles W/L</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-4">
                            <input className="form-control selectInner" type="text" placeholder="Single Titles" aria-label="default input example" onChange={e => setsingle_titles(e.target.value)} required />
                        </div>
                        <div className="col-4">
                            <input className="form-control selectInner" type="text" placeholder="Double Titles" aria-label="default input example" onChange={e => setdouble_titles(e.target.value)} required />
                        </div>
                        <div className="col-4">
                            <input className="form-control selectInner" type="text" placeholder="Singles W/L" aria-label="default input example" onChange={e => setsingles_w_l(e.target.value)} required />
                        </div>
                    </div>
                </div>

                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_stats_golfer/" /> : null}
            </form>
        </div>

    )
} 