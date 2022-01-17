import React, { useState,useContext,useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Stats_put_player_ncaa_foot = () => {
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

    const [punts, setPunts] = useState("");
    const [yards, setYards] = useState("");
    const [lng, setLng] = useState("");
    const [AVG, setAVG] = useState("");
    const [net, setNet] = useState("");
    const [p_blk, setP_blk] = useState("");

    const [IN_20, setIN_20] = useState("");
    const [tb, setTb] = useState("");
    const [fc, setFc] = useState("");
    const [att, setAtt] = useState("");
    const [punt_return_yds, setPunt_return_yds] = useState("");
    const [AVG_punt_retun_yards, setAVG_punt_retun_yards] = useState("");

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

            punts: punts,
            yards: yards,
            lng: lng,
            AVG: AVG,
            net: net,
            p_blk: p_blk,
            IN_20: IN_20,
            tb: tb,
            fc: fc,
            att: att,
            punt_return_yds: punt_return_yds,
            AVG_punt_retun_yards: AVG_punt_retun_yards
        };
        
       

        fetch("https://allfansports.herokuapp.com/stats_punting_player_ncaa_football", {
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
                    <h3>Create Stats Punting Player of NCAA</h3>
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
                        <div className="col-2 title-lines">Punts</div>
                        <div className="col-2 title-lines">Yards</div>
                        <div className="col-2 title-lines">Lng</div>
                        <div className="col-2 title-lines">AVG</div>
                        <div className="col-2 title-lines">Net</div>
                        <div className="col-2 title-lines">P Blk</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Punts" aria-label="default input example" onChange={e => setPunts(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Yards" aria-label="default input example" onChange={e => setYards(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Lng" aria-label="default input example" onChange={e => setLng(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="AVG" aria-label="default input example" onChange={e => setAVG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Net" aria-label="default input example" onChange={e => setNet(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="P Blk" aria-label="default input example" onChange={e => setP_blk(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">IN 20</div>
                        <div className="col-2 title-lines">Tb</div>
                        <div className="col-2 title-lines">Fc</div>
                        <div className="col-2 title-lines">Att</div>
                        <div className="col-2 title-lines">Punt R Y</div>
                        <div className="col-2 title-lines">AVG P R Y</div>

                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="IN 20" aria-label="default input example" onChange={e => setIN_20(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Tb" aria-label="default input example" onChange={e => setTb(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fc" aria-label="default input example" onChange={e => setFc(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Att" aria-label="default input example" onChange={e => setAtt(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Punt R Y" aria-label="default input example" onChange={e => setPunt_return_yds(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="AVG P R Y" aria-label="default input example" onChange={e => setAVG_punt_retun_yards(e.target.value)} required />
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