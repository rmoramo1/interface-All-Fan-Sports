import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Stats_Goalkeeper_nhl = () => {
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
    const [season, setSeason] = useState("2022");
    const [team, setTeam] = useState("Boston Bruins");
    const [dorsal, setDorsal] = useState("");
    const [position, setPosition] = useState("Goalkeeper");
    const [headshot, setheadshot] = useState("");

    const [gp, setGp] = useState("");
    const [gs, setGs] = useState("");
    const [toi_g, settoi_g] = useState("");
    const [wins, setwins] = useState("");
    const [L, setL] = useState("");
    const [t, setT] = useState("");

    const [otl, setotl] = useState("");
    const [ga, setga] = useState("");
    const [ga_g, setga_g] = useState("");
    const [sa, setsa] = useState("");
    const [sv, setsv] = useState("");
    const [sv_avg, setsv_avg] = useState("");

    const [so, setso] = useState("");

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        document.getElementById("miForm_GOALKEEPER_py").reset();
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            name: name,
            height: height,
            weight: weight,
            birth: birth,
            season: season,
            team: team,
            dorsal: dorsal,
            position: position,
            headshot: headshot,

            gp: gp,
            gs: gs,
            toi_g: toi_g,
            wins: wins,
            L: L,
            t: t,
            otl: otl,
            ga: ga,
            ga_g: ga_g,
            sa: sa,
            sv: sv,
            sv_avg: sv_avg,
            so: so,
        };

        fetch("https://sportsdata365.com/stats_nhl_goalkeeper", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("Stadistica de jugador se creo");
                
                actualizar();
            })
            .catch(err => console.log(err));
    };

    //select
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }
    let positions=["Goalkeeper"];
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate-nhl" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create Stats NHL Goalkeeper</h3>
                </div>
            </div>
            <form onSubmit={crear} id="miForm_GOALKEEPER_py">
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
                        <select className="form-select selectInner" name="positions" aria-label="Default select example" onChange={e => setPosition(e.target.value)} required>
                            {
                                positions.map((index) => {
                                    return (
                                        <option key={index} name="position" value={index}>{index}</option>
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
                        Headshot
                        <input className="form-control selectInner" type="text" placeholder="Headshot" aria-label="setheadshot" onChange={e => setheadshot(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setTeam(e.target.value)} required>
                            {
                                store.nhl_teams.map((index) => {
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
                        <div className="col-2 title-lines">Gp</div>
                        <div className="col-2 title-lines">Gs</div>
                        <div className="col-2 title-lines">TOI/G</div>
                        <div className="col-2 title-lines">WINS</div>
                        <div className="col-2 title-lines">L</div>
                        <div className="col-2 title-lines">T</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Gp" aria-label="default input example" onChange={e => setGp(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="GS" aria-label="default input example" onChange={e => setGs(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="TOI/G" aria-label="default input example" onChange={e => settoi_g(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="WINS" aria-label="default input example" onChange={e => setwins(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L" aria-label="default input example" onChange={e => setL(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="T" aria-label="default input example" onChange={e => setT(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">OTL</div>
                        <div className="col-2 title-lines">GA</div>
                        <div className="col-2 title-lines">GA/G</div>
                        <div className="col-2 title-lines">SA</div>
                        <div className="col-2 title-lines">SV</div>
                        <div className="col-1 title-lines">SV%</div>
                        <div className="col-1 title-lines">SO</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="OTL" aria-label="default input example" onChange={e => setotl(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="GA" aria-label="default input example" onChange={e => setga(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="GA/G" aria-label="default input example" onChange={e => setga_g(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="SA" aria-label="default input example" onChange={e => setsa(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="SV" aria-label="default input example" onChange={e => setsv(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="SV%" aria-label="default input example" onChange={e => setsv_avg(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="SO" aria-label="default input example" onChange={e => setso(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_stats_nhl_py/" /> : null}
            </form>
        </div>

    )
} 