import React, { useState,  useContext ,useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Stats_off_player_nfl = () => {
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
    const [team, setTeam] = useState("Arizona Cardinals");
    const [games, setGames] = useState("");
    const [headshot, setheadshot] = useState("");

    const [Cmp, setCmp] = useState("");
    const [pass_att, setPass_att] = useState("");
    const [cmp_AVG, setCmp_AVG] = useState("");
    const [yards, setYards] = useState("");
    const [yards_AVG, setyards_AVG] = useState("");
    const [yards_pg, setyards_pg] = useState("");

    const [pass_td, setPass_td] = useState("");
    const [Int, setInt] = useState("");
    const [asck, setAsck] = useState("");
    const [syl, setSyl] = useState("");
    const [rtg, setRtg] = useState("");
    const [russ_att, setRuss_att] = useState("");

    const [russ_yards, setRuss_yards] = useState("");
    const [yards_p_russ, setYards_p_russ] = useState("");
    const [big, setBig] = useState("");
    const [rush_tt, setRush_tt] = useState("");
    const [rush_yard_pg, setRush_yard_pg] = useState("");
    const [fum, setFum] = useState("");

    const [lst, setLst] = useState("");
    const [fd, setFd] = useState("");
    const [rec, setRec] = useState("0");
    const [r_tgts, setR_Tgts] = useState("");
    const [r_yards, setR_Yards] = useState("");
    const [yards_p_r, setYards_p_r] = useState("");

    const [r_td, setR_td] = useState("");
    const [lr, setLr] = useState("");
    const [r_big, setR_big] = useState("");
    const [r_ypg, setR_ypg] = useState("");
    const [r_fl, setR_fl] = useState("");
    const [r_yac, setr_Yac] = useState("0");

    const [r_fd, setR_fd] = useState("");
    const [pts, setPts] = useState("");

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        document.getElementById("miFormNFL_off_PY").reset();
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

            Cmp: Cmp,
            pass_att: pass_att,
            cmp_AVG: cmp_AVG,
            yards: yards,
            yards_AVG: yards_AVG,
            yards_pg: yards_pg,
            pass_td: pass_td,
            Int: Int,
            asck: asck,
            syl: syl,
            rtg: rtg,
            russ_att: russ_att,
            russ_yards: russ_yards,
            yards_p_russ: yards_p_russ,
            big: big,
            rush_tt: rush_tt,
            rush_yard_pg: rush_yard_pg,
            fum: fum,
            lst: lst,
            fd: fd,
            rec: rec,
            r_tgts: r_tgts,
            r_yards: r_yards,
            yards_p_r: yards_p_r,
            r_td: r_td,
            lr: lr,
            r_big: r_big,
            r_ypg: r_ypg,
            r_fl: r_fl,
            r_yac: r_yac,
            r_fd: r_fd,
            pts: pts
        };
        
       

        fetch("https://sportsdata365.com/stats_offensive_player_nfl", {
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
    let positions=["QB","OT","OG","C","RB","DE","DT","LB","CB","SS","K","P"];
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create Stats Offensive Player of NFL</h3>
                </div>
            </div>
            <form onSubmit={crear} id="miFormNFL_off_PY">
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
                                store.nfl_teams.map((index) => {
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
                        <div className="col-2 title-lines">Cmp</div>
                        <div className="col-2 title-lines">Pass Att</div>
                        <div className="col-2 title-lines">Cmp AVG</div>
                        <div className="col-2 title-lines">Yards</div>
                        <div className="col-2 title-lines">Yards AVG</div>
                        <div className="col-2 title-lines">Yards PG</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Cmp" aria-label="default input example" onChange={e => setCmp(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Pass Att" aria-label="default input example" onChange={e => setPass_att(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Cmp AVG" aria-label="default input example" onChange={e => setCmp_AVG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Yards" aria-label="default input example" onChange={e => setYards(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Yards AVG" aria-label="default input example" onChange={e => setyards_AVG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Yards PG" aria-label="default input example" onChange={e => setyards_pg(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Pass TD</div>
                        <div className="col-2 title-lines">Int</div>
                        <div className="col-2 title-lines">Asck</div>
                        <div className="col-2 title-lines">S YL</div>
                        <div className="col-2 title-lines">R TG</div>
                        <div className="col-2 title-lines">Russ Att</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Pass TD" aria-label="default input example" onChange={e => setPass_td(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Int" aria-label="default input example" onChange={e => setInt(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Asck" aria-label="default input example" onChange={e => setAsck(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="S YL" aria-label="default input example" onChange={e => setSyl(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="R TG" aria-label="default input example" onChange={e => setRtg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Russ Att" aria-label="default input example" onChange={e => setRuss_att(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Russ Yards</div>
                        <div className="col-2 title-lines">Yards P russ</div>
                        <div className="col-2 title-lines">Big</div>
                        <div className="col-2 title-lines">Rush TT</div>
                        <div className="col-2 title-lines">Rush Yard PG</div>
                        <div className="col-2 title-lines">Fum</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Russ Yards" aria-label="default input example" onChange={e => setRuss_yards(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Yards P russ" aria-label="default input example" onChange={e => setYards_p_russ(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Big" aria-label="default input example" onChange={e => setBig(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Rush TT" aria-label="default input example" onChange={e => setRush_tt(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Rush Yard PG" aria-label="default input example" onChange={e => setRush_yard_pg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fum" aria-label="default input example" onChange={e => setFum(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Lst</div>
                        <div className="col-2 title-lines">FD</div>
                        <div className="col-2 title-lines">REC</div>
                        <div className="col-2 title-lines">R tgts</div>
                        <div className="col-2 title-lines">R Yards</div>
                        <div className="col-2 title-lines">Yards P R</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Lst" aria-label="default input example" onChange={e => setLst(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="FD" aria-label="default input example" onChange={e => setFd(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="REC" aria-label="default input example" onChange={e => setRec(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="R TGTS" aria-label="default input example" onChange={e => setR_Tgts(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="R Yards" aria-label="default input example" onChange={e => setR_Yards(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Yards P R" aria-label="default input example" onChange={e => setYards_p_r(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">R TD</div>
                        <div className="col-2 title-lines">LR</div>
                        <div className="col-2 title-lines">R Big</div>
                        <div className="col-2 title-lines">R Y PG</div>
                        <div className="col-2 title-lines">R FL</div>
                        <div className="col-2 title-lines">R Y AC</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="R TD" aria-label="default input example" onChange={e => setR_td(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="LR" aria-label="default input example" onChange={e => setLr(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="R Big" aria-label="default input example" onChange={e => setR_big(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="R Y PG" aria-label="default input example" onChange={e => setR_ypg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="R FL" aria-label="default input example" onChange={e => setR_fl(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="R Y AC" aria-label="default input example" onChange={e => setr_Yac(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">R FD</div>
                        <div className="col-2 title-lines">PTS</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="R FD" aria-label="default input example" onChange={e => setR_fd(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="PTS" aria-label="default input example" onChange={e => setPts(e.target.value)} required />
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