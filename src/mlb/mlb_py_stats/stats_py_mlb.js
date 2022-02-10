import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Stats_py_mlb = () => {
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
    const [team, setTeam] = useState("Arizona Diamondbacks");
    const [dorsal, setDorsal] = useState("");
    const [position, setPosition] = useState("Pitcher");
    const [headshot, setheadshot] = useState("");

    const [gp, setGp] = useState("");
    const [ab, setAb] = useState("");
    const [r, setR] = useState("");
    const [h, setH] = useState("");
    const [two_b, setTwo_b] = useState("");
    const [three_b, setThree_b] = useState("");
    const [hb, setHb] = useState("");

    const [rbi, setRbi] = useState("");
    const [tb, setTb] = useState("");
    const [bb, setBb] = useState("");
    const [so, setSo] = useState("");
    const [sb, setSb] = useState("");
    const [avg, setAvg] = useState("");

    const [obp, setObp] = useState("");
    const [slg, setSlg] = useState("");
    const [ops, setOps] = useState("");
    const [war, setWar] = useState("");

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        document.getElementById("miFormMLB_PY").reset();
    }
    const crear = e => {
        actualizar();
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
            ab: ab,
            r: r,
            h: h,
            two_b: two_b,
            three_b: three_b,
            hb: hb,
            rbi: rbi,
            tb: tb,
            bb: bb,
            so: so,
            sb: sb,
            avg: avg,
            obp: obp,
            slg: slg,
            ops: ops,
            war: war
        };
        fetch("https://sportsdata365.com/stats_mlb_player", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                
                alert("Stadistica de jugador se creo");
                setAuth(true);
            })
            .catch(err => console.log(err));
    };

    //select
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }
    let positions=["Pitcher","Catcher","First Baseman","Second Baseman","Third Baseman","Short Stop","Left Fielder","Center fielder","Right Fielder"];
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create Stats MLB Player</h3>
                </div>
            </div>
            <form onSubmit={crear} id="miFormMLB_PY">
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
                        Headshot
                        <input className="form-control selectInner" type="text" placeholder="Headshot" aria-label="setheadshot" onChange={e => setheadshot(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setTeam(e.target.value)} required>
                            {
                                store.mlb_teams.map((index) => {
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
                        <div className="col-2 title-lines">Ab</div>
                        <div className="col-2 title-lines">R</div>
                        <div className="col-2 title-lines">H</div>
                        <div className="col-2 title-lines">Two B</div>
                        <div className="col-2 title-lines">Three B</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Gp" aria-label="default input example" onChange={e => setGp(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ab" aria-label="default input example" onChange={e => setAb(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="R" aria-label="default input example" onChange={e => setR(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="H" aria-label="default input example" onChange={e => setH(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Two B" aria-label="default input example" onChange={e => setTwo_b(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Three B" aria-label="default input example" onChange={e => setThree_b(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Hb</div>
                        <div className="col-2 title-lines">Rbi</div>
                        <div className="col-2 title-lines">Tb</div>
                        <div className="col-2 title-lines">Bb</div>
                        <div className="col-2 title-lines">So</div>
                        <div className="col-2 title-lines">Sb</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Hb" aria-label="default input example" onChange={e => setHb(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Rbi" aria-label="default input example" onChange={e => setRbi(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Tb" aria-label="default input example" onChange={e => setTb(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Bb" aria-label="default input example" onChange={e => setBb(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="So" aria-label="default input example" onChange={e => setSo(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sb" aria-label="default input example" onChange={e => setSb(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Avg</div>
                        <div className="col-2 title-lines">Obp</div>
                        <div className="col-2 title-lines">Slg</div>
                        <div className="col-2 title-lines">Ops</div>
                        <div className="col-2 title-lines">War</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Avg" aria-label="default input example" onChange={e => setAvg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Obp" aria-label="default input example" onChange={e => setObp(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Slg" aria-label="default input example" onChange={e => setSlg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ops" aria-label="default input example" onChange={e => setOps(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="War" aria-label="default input example" onChange={e => setWar(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_stats_mlb_py/" /> : null}
            </form>
        </div>

    )
} 