import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Stats_deff_player_canadian_foot = () => {
    const { store} = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [birth, setBirth] = useState("");
    const [position, setPosition] = useState("QB");
    const [dorsal, setDorsal] = useState("");
    const [season, setSeason] = useState("2022");
    const [team, setTeam] = useState("Winnipeg");
    const [games, setGames] = useState("");
    const [headshot, setheadshot] = useState("");


    const [tack_solo, setTack_solo] = useState("");
    const [tack_ast, setTack_ast] = useState("");
    const [tack_total, setTack_total] = useState("");
    const [sacks, setSacks] = useState("");
    const [sacks_yards, setSacks_yards] = useState("");
    const [tfl, setTfl] = useState("");

    const [pd, setPd] = useState("");
    const [Int, setInt] = useState("");
    const [yds, setYds] = useState("");
    const [ing, setIng] = useState("");
    const [td, setTd] = useState("");
    const [ff, setFf] = useState("");

    const [fr, setFr] = useState("");
    const [ftd, setFtd] = useState("");
    const [kb, setKb] = useState("");

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        document.getElementById("miFormNFL_DEFF_PY").reset();
    }
    const crear = e => {

        e.preventDefault();
        const body = {
            name: name,
            height: height,
            weight: weight,
            birth: birth,
            position: position,
            headshot: headshot,
            dorsal: dorsal,
            season: season,
            team: team,
            games: games,

            tack_solo: tack_solo,
            tack_ast: tack_ast,
            tack_total: tack_total,
            sacks: sacks,
            sacks_yards: sacks_yards,
            tfl: tfl,
            pd: pd,
            Int: Int,
            yds: yds,
            ing: ing,
            td: td,
            ff: ff,
            fr: fr,
            ftd: ftd,
            kb: kb
        };
        
       

        fetch("https://sportsdata365.com/stats_defensive_player_canadian_football", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                actualizar();
                alert("Stadistica de jugador se creo");
            })
            .catch(err => console.log(err));
    };

    //select
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }
    let positions=["QB","OT","OG","C","RB","DE","DT","LB","CB","SS","K","P"];
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create Stats Deffensive Player of Canadian Football</h3>
                </div>
            </div>
            <form onSubmit={crear} id="miFormNFL_DEFF_PY">
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" onChange={e => setName(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Height
                        <input className="form-control selectInner" type="text" placeholder="Height" aria-label="default input example" onChange={e => setHeight(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Weight
                        <input className="form-control selectInner" type="text" placeholder="Weight" aria-label="default input example" onChange={e => setWeight(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" onChange={e => setBirth(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Position
                        <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setPosition(e.target.value)} required>
                            {
                                positions.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Dorsal
                        <input className="form-control selectInner" type="text" placeholder="Dorsal" aria-label="default input example" onChange={e => setDorsal(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Games
                        <input className="form-control selectInner" type="text" placeholder="Games" aria-label="default input example" onChange={e => setGames(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Headshot
                        <input className="form-control selectInner" type="text" placeholder="Headshot" aria-label="setheadshot" onChange={e => setheadshot(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setTeam(e.target.value)} required>
                            {
                                store.canna_foot_teams.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={2022} required>
                            {
                                selectYear.map((index) => {
                                    return (
                                        <option key={index} name="season" value={index} >{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Tack Solo</div>
                        <div className="col-2 title-lines">Tack Ast</div>
                        <div className="col-2 title-lines">Tack Total</div>
                        <div className="col-2 title-lines">Sacks</div>
                        <div className="col-2 title-lines">Sacks Yards</div>
                        <div className="col-2 title-lines">Tfl</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Tack Solo" aria-label="default input example" onChange={e => setTack_solo(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Tack Ast" aria-label="default input example" onChange={e => setTack_ast(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Tack Total" aria-label="default input example" onChange={e => setTack_total(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sacks" aria-label="default input example" onChange={e => setSacks(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sacks Yards" aria-label="default input example" onChange={e => setSacks_yards(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Tfl" aria-label="default input example" onChange={e => setTfl(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">PD</div>
                        <div className="col-2 title-lines">Int</div>
                        <div className="col-2 title-lines">Yds</div>
                        <div className="col-2 title-lines">Ing</div>
                        <div className="col-2 title-lines">TD</div>
                        <div className="col-2 title-lines">FF</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="PT" aria-label="default input example" onChange={e => setPd(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Int" aria-label="default input example" onChange={e => setInt(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Yds" aria-label="default input example" onChange={e => setYds(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ing" aria-label="default input example" onChange={e => setIng(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="TD" aria-label="default input example" onChange={e => setTd(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="FF" aria-label="default input example" onChange={e => setFf(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">FR</div>
                        <div className="col-2 title-lines">FTD</div>
                        <div className="col-2 title-lines">KB</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="FR" aria-label="default input example" onChange={e => setFr(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="FTD" aria-label="default input example" onChange={e => setFtd(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="KB" aria-label="default input example" onChange={e => setKb(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_stats_canadian_foot_py/" /> : null}
            </form>
        </div>

    )
} 