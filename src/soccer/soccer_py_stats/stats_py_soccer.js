import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Stats_py_soccer = () => {
    const { store } = useContext(Context);

    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [birth, setBirth] = useState("");
    const [position, setPosition] = useState("");
    const [dorsal, setDorsal] = useState("");
    const [team, setTeam] = useState("Team");
    const [season, setseason] = useState("2021");

    const [games, setgames] = useState("");
    const [strt, setstrt] = useState("");
    const [fc, setfc] = useState("");

    const [fa, setfa] = useState("");
    const [yc, setyc] = useState("");
    const [rc, setrc] = useState("");
    const [goals, setgoals] = useState("");
    const [ast, setast] = useState("");
    const [sh, setsh] = useState("");
    const [st, setst] = useState("");
    const [off, setoff] = useState("");

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        window.location.reload(true);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            name: name,
            height: height,
            weight: weight,
            birth: birth,
            position: position,
            dorsal: dorsal,
            season: season,
            team: team,
            games: games,
            strt: strt,
            fc: fc,
            fa: fa,
            yc: yc,
            rc: rc,
            goals: goals,
            ast: ast,
            sh: sh,
            st: st,
            off: off,
        };
        console.log(body);
        console.log(body.date);

        fetch("https://interfaceroy.herokuapp.com/stats_soccer_player", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                console.log(sessionStorage);
                alert("Stadistica de jugador se creo");
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
    let positions = ["GK", "CB", "LB", "RB", "LWB", "RWB", "SW"];
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create Stats Soccer Player</h3>
                </div>
            </div>
            <form onSubmit={crear}>
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
                        <select className="form-select selectInner" name="positions" aria-label="Positions" onChange={e => setPosition(e.target.value)} required>
                            {
                                positions.map((index) => {
                                    return (
                                        <option key={index} name="positions" value={index}>{index}</option>
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
                        <input className="form-control selectInner" type="text" placeholder="Minutos" aria-label="default input example" onChange={e => setgames(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Starts
                        <input className="form-control selectInner" type="text" placeholder="Starts" aria-label="Starts" onChange={e => setstrt(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select" name="season" aria-label="Default select example" onChange={e => setTeam(e.target.value)} defaultValue={2021} required>
                            {
                                store.soccer_stats_teams.map((index) => {
                                    return (
                                        <option key={index} name="season" value={index.name} >{index.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Season
                        <select className="form-select" name="season" aria-label="Default select example" onChange={e => setseason(e.target.value)} defaultValue={2021} required>
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
                        <div className="col-2 title-lines">Foul Commited</div>
                        <div className="col-2 title-lines">Foul Suffered</div>
                        <div className="col-2 title-lines">YC</div>
                        <div className="col-2 title-lines">RC</div>
                        <div className="col-2 title-lines">Goals</div>
                        <div className="col-2 title-lines">Ast</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Foul Commite" aria-label="default input example" onChange={e => setfc(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Foul Suffered" aria-label="default input example" onChange={e => setfa(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="YC" aria-label="default input example" onChange={e => setyc(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="RC" aria-label="default input example" onChange={e => setrc(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Goals" aria-label="default input example" onChange={e => setgoals(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ast" aria-label="default input example" onChange={e => setast(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">SH</div>
                        <div className="col-2 title-lines">ST</div>
                        <div className="col-2 title-lines">Off</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="SH" aria-label="default input example" onChange={e => setsh(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="ST" aria-label="default input example" onChange={e => setst(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Off" aria-label="default input example" onChange={e => setoff(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_stats_soccer_py/" /> : null}
            </form>
        </div>

    )
} 