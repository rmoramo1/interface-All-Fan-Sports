import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Stats_py_nba = () => {
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
        
       

        fetch("https://allfansports.herokuapp.com/stats_nba_player", {
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
    let positions=["PG","SG","SF","PF","C"];
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create Stats NBA Player</h3>
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
                        Minutes
                        <input className="form-control selectInner" type="text" placeholder="Minutos" aria-label="default input example" onChange={e => setMinutes(e.target.value)} required ></input>
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
                        <div className="col-2 title-lines">Gp</div>
                        <div className="col-2 title-lines">Gs</div>
                        <div className="col-2 title-lines">Fg</div>
                        <div className="col-2 title-lines">Fg AVG</div>
                        <div className="col-2 title-lines">Three Pt</div>
                        <div className="col-2 title-lines">Three Pt AVG</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Gp" aria-label="default input example" onChange={e => setGp(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Gs" aria-label="default input example" onChange={e => setGs(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fg" aria-label="default input example" onChange={e => setFg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fg AVG" aria-label="default input example" onChange={e => setFg_AVG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Three Pt" aria-label="default input example" onChange={e => setThree_pt(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Three Pt AVG" aria-label="default input example" onChange={e => setThree_pt_AVG(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Ft</div>
                        <div className="col-2 title-lines">Ft AVG</div>
                        <div className="col-2 title-lines">Or</div>
                        <div className="col-2 title-lines">Dr</div>
                        <div className="col-2 title-lines">Reb</div>
                        <div className="col-2 title-lines">Ast</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ft" aria-label="default input example" onChange={e => setFt(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ft AVG" aria-label="default input example" onChange={e => setFt_AVG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Or" aria-label="default input example" onChange={e => setOr(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Dr" aria-label="default input example" onChange={e => setDr(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Reb" aria-label="default input example" onChange={e => setReb(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ast" aria-label="default input example" onChange={e => setAst(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Stl</div>
                        <div className="col-2 title-lines">Blk</div>
                        <div className="col-2 title-lines">To</div>
                        <div className="col-2 title-lines">Pf</div>
                        <div className="col-2 title-lines">Pts</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Stl" aria-label="default input example" onChange={e => setStl(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Blk" aria-label="default input example" onChange={e => setBlk(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="To" aria-label="default input example" onChange={e => setTo(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Pf" aria-label="default input example" onChange={e => setPf(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="To" aria-label="default input example" onChange={e => setPts(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_stats_nba_py/" /> : null}
            </form>
        </div>

    )
} 