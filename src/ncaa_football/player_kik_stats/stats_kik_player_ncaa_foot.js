import React, { useState,useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Stats_kik_player_ncaa_foot = () => {
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
    const [season, setSeason] = useState("2021");
    const [team, setTeam] = useState("Cincinnati");
    const [games, setGames] = useState("");

    const [fgm, setFgm] = useState("");
    const [fga, setFga] = useState("");
    const [fg_AVG, setFg_AVG] = useState("");
    const [lng, setLng] = useState("");
    const [yars_f_goals_1_19, setyars_f_goals_1_19] = useState("");
    const [yars_f_goals_20_29, setYars_f_goals_20_29] = useState("");

    const [yars_f_goals_30_49, setYars_f_goals_30_49] = useState("");
    const [yars_f_goals_40_49, setYars_f_goals_40_49] = useState("");
    const [more_50, setMore_50] = useState("");
    const [xpm, setXpm] = useState("");
    const [xpa, setXpa] = useState("");
    const [xp_AVG, setXp_AVG] = useState("");

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

            fgm: fgm,
            fga: fga,
            fg_AVG: fg_AVG,
            lng: lng,
            yars_f_goals_1_19: yars_f_goals_1_19,
            yars_f_goals_20_29: yars_f_goals_20_29,
            yars_f_goals_30_49: yars_f_goals_30_49,
            yars_f_goals_40_49: yars_f_goals_40_49,
            more_50: more_50,
            xpm: xpm,
            xpa: xpa,
            xp_AVG: xp_AVG
        };
        
       

        fetch("https://interfaceroy.herokuapp.com/stats_kiking_player_ncaa_football", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                
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
    let positions=["QB","OT","OG","C","RB","DE","DT","LB","CB","SS","K","P"];
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create Stats Kicking Player of NCAA</h3>
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
                </div>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setTeam(e.target.value)} required>
                            {
                                store.ncaa_foot_teams.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={2021} required>
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
                        <div className="col-2 title-lines">Fgm</div>
                        <div className="col-2 title-lines">Fga</div>
                        <div className="col-2 title-lines">Fg AVG</div>
                        <div className="col-2 title-lines">Lng</div>
                        <div className="col-2 title-lines">Y F G 1 19</div>
                        <div className="col-2 title-lines">Y F G 20 29</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fgm" aria-label="default input example" onChange={e => setFgm(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="fga" aria-label="default input example" onChange={e => setFga(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fg AVG" aria-label="default input example" onChange={e => setFg_AVG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Lng" aria-label="default input example" onChange={e => setLng(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Y F G 1 19" aria-label="default input example" onChange={e => setyars_f_goals_1_19(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Y F G 20 29" aria-label="default input example" onChange={e => setYars_f_goals_20_29(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Y F G 30 49</div>
                        <div className="col-2 title-lines">Y F G 40 49</div>
                        <div className="col-2 title-lines">M 50</div>
                        <div className="col-2 title-lines">Xpm</div>
                        <div className="col-2 title-lines">Xpa</div>
                        <div className="col-2 title-lines">Xp AVG</div>

                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Y F G 30 49" aria-label="default input example" onChange={e => setYars_f_goals_30_49(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Y F G 40 49" aria-label="default input example" onChange={e => setYars_f_goals_40_49(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="M 50" aria-label="default input example" onChange={e => setMore_50(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Xpm" aria-label="default input example" onChange={e => setXpm(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Xpa" aria-label="default input example" onChange={e => setXpa(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Xp AVG" aria-label="default input example" onChange={e => setXp_AVG(e.target.value)} required />
                        </div>

                    </div>
                </div>
                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_stats_ncaa_foot_py/" /> : null}
            </form>
        </div>

    )
} 