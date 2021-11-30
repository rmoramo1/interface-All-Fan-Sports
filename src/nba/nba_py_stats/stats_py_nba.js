import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Stats_py_nba = () => {
    const { store} = useContext(Context);

    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [birth, setBirth] = useState("");
    const [college, setCollege] = useState("");
    const [season, setSeason] = useState("2021");
    const [team, setTeam] = useState("Atlanta Hawks");
    const [dorsal, setDorsal] = useState("");
    const [minutes, setMinutes] = useState("");
    const [position, setPosition] = useState("PG");

    const [gp, setGp] = useState("");
    const [gs, setGs] = useState("");
    const [fg, setFg] = useState("");
    const [fg_AVG, setFg_AVG] = useState("");
    const [three_pt, setThree_pt] = useState("");
    const [three_pt_AVG, setThree_pt_AVG] = useState("");
    const [ft, setFt] = useState("");

    const [ft_AVG, setFt_AVG] = useState("");
    const [Or, setOr] = useState("");
    const [dr, setDr] = useState("");
    const [reb, setReb] = useState("");
    const [ast, setAst] = useState("");
    const [stl, setStl] = useState("");

    const [blk, setBlk] = useState("");
    const [to, setTo] = useState("");
    const [pf, setPf] = useState("");
    const [pts, setPts] = useState("");

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
            college: college,
            season: season,
            team: team,
            dorsal: dorsal,
            minutes: minutes,
            position: position,
            
            gp: gp,
            gs: gs,
            fg: fg,
            fg_AVG: fg_AVG,
            three_pt: three_pt,
            three_pt_AVG: three_pt_AVG,
            ft: ft,

            ft_AVG: ft_AVG,
            Or: Or,
            dr: dr,
            reb: reb,
            ast: ast,
            stl: stl,

            blk: blk,
            to: to,
            pf: pf,
            pts: pts
        };
        console.log(body);
        console.log(body.date);

        fetch("https://interfaceroy.herokuapp.com/nba", {
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
    let positions=["PG","SG","SF","PF","C"];
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create Stats Player of NBA</h3>
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
                    <div className="text-center col-3 p-1">
                        College
                        <input className="form-control selectInner" type="text" placeholder="College" aria-label="default input example" onChange={e => setCollege(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setTeam(e.target.value)} required>
                            {
                                store.nba_teams.map((index) => {
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
                        <div className="col-2 title-lines">FF</div>
                        <div className="col-2 title-lines">FTD</div>
                        <div className="col-2 title-lines">KB</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="FF" aria-label="default input example" onChange={e => setFr(e.target.value)} required />
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
                {auth ? <Redirect to="/list_stats_nfl_py/" /> : null}
            </form>
        </div>

    )
} 