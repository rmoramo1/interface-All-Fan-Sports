import React, { useState, useContext, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";
export const Stats_off_player_nfl = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const params = useParams();

    const [name, setName] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].name);
    const [height, setHeight] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].height);
    const [weight, setWeight] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].weight);
    const [birth, setBirth] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].birth);
    const [position, setPosition] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].position);
    const [dorsal, setDorsal] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].dorsal);
    const [season, setSeason] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].season);
    const [team, setTeam] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].team);
    const [games, setGames] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].games);
    const [headshot, setheadshot] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].headshot);

    const [Cmp, setCmp] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].Cmp);
    const [pass_att, setpass_att] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].pass_att);
    const [cmp_AVG, setcmp_AVG] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].cmp_AVG);
    const [yards, setyards] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].yards);
    const [yards_AVG, setyards_AVG] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].yards_AVG);
    const [yards_pg, setyards_pg] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].yards_pg);

    const [long_pass, setlong_pass] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].long_pass);
    const [pass_td, setpass_td] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].pass_td);
    const [sack, setsack] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].sack);
    const [Int, setInt] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].Int);
    const [syl, setSyl] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].syl);
    const [rtg, setRtg] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].rtg);

    const [russ_att, setRuss_att] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].russ_att);
    const [russ_yards, setRuss_yards] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].russ_yards);
    const [yards_p_russ, setyards_p_russ] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].yards_p_russ);
    const [lr, setLr] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].lr);
    const [big, setBig] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].big);
    const [rush_td, setRush_td] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].rush_td);

    const [rush_yard_pg, setRush_yard_pg] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].rush_yard_pg);
    const [lst, setLst] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].lst);
    const [fd, setFd] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].fd);
    const [rec, setRec] = useState("0");
    const [r_tgts, setR_Tgts] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].r_tgts);
    const [fum, setFum] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].fum);

    const [r_yards, setR_yards] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].r_yards);
    const [yards_p_r, setyards_p_r] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].yards_p_r);
    const [r_td, setR_td] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].r_td);
    const [r_big, setR_big] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].r_big);
    const [r_ypg, setR_ypg] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].r_ypg);
    const [r_fum, setr_fum] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].r_fum);

    const [r_fl, setR_fl] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].r_fl);
    const [r_yac, setr_Yac] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].r_yac);
    const [r_fd, setR_fd] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].r_fd);
    const [pts, setPts] = useState(store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].pts);

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);
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
            long_pass: long_pass,
            pass_td: pass_td,
            Int: Int,
            sack: sack,
            syl: syl,
            rtg: rtg,
            russ_att: russ_att,
            russ_yards: russ_yards,
            yards_p_russ: yards_p_russ,
            big: big,
            rush_td: rush_td,
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
            r_fum: r_fum,
            r_fl: r_fl,
            r_yac: r_yac,
            r_fd: r_fd,
            pts: pts
        };



        fetch("https://sportsdata365.com/stats_offensive_player_nfl/" + store.stats_offensive_player_nfl[params.theid].id, {
            method: "PUT",
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
    const delet_py_nfl_stat = e => {
        fetch("https://sportsdata365.com/stats_offensive_player_nfl/" + store.stats_offensive_player_nfl[params.theid].id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .catch(err => console.log(err));
        setAuth(true);
        actualizar();
    };
    //select
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }
    let positions = ["QB", "OT", "OG", "C", "RB", "DE", "DT", "LB", "CB", "SS", "K", "P"];
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <div className="row g-0">
                        <div className="col-6 d-flex align-items-center justify-content-end">
                            <h3>Edit stats of {store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].name} </h3>
                        </div>
                        <div className="col-6 text-start">
                            <img className="img_picture" src={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].headshot} alt="image of player"></img>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={crear} id="miForm_ncaa_off_PY">
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].name} onChange={e => setName(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Height
                        <input className="form-control selectInner" type="text" placeholder="Height" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].height} onChange={e => setHeight(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Weight
                        <input className="form-control selectInner" type="text" placeholder="Weight" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].weight} onChange={e => setWeight(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].birth} onChange={e => setBirth(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Position
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].position} onChange={e => setPosition(e.target.value)} required>
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
                        <input className="form-control selectInner" type="text" placeholder="Dorsal" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].dorsal} onChange={e => setDorsal(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Games
                        <input className="form-control selectInner" type="text" placeholder="Games" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].games} onChange={e => setGames(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Headshot
                        <input className="form-control selectInner" type="text" placeholder="Headshot" aria-label="setheadshot" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].headshot} onChange={e => setheadshot(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" aria-label="Default select example"  defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].team} onChange={e => setTeam(e.target.value)} required>
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
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].season} required>
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
                    <div className="col-12">
                        <h2>Passing</h2>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-1 title-lines">CMP</div>
                        <div className="col-1 title-lines">ATT</div>
                        <div className="col-1 title-lines">CMP %</div>
                        <div className="col-1 title-lines">YDS</div>
                        <div className="col-1 title-lines">AVG</div>
                        <div className="col-1 title-lines">YDS S/G</div>
                        <div className="col-1 title-lines">LNG</div>
                        <div className="col-1 title-lines">TD</div>
                        <div className="col-1 title-lines">INT</div>
                        <div className="col-1 title-lines">SACK</div>
                        <div className="col-1 title-lines">SYL</div>
                        <div className="col-1 title-lines">RTG</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="Cmp" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].Cmp} onChange={e => setCmp(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="ATT" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].pass_att} onChange={e => setpass_att(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="CMP %" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].cmp_AVG} onChange={e => setcmp_AVG(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="YDS" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].yards} onChange={e => setyards(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="AVG" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].yards_AVG} onChange={e => setyards_AVG(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="YDS S/G" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].yards_pg} onChange={e => setyards_pg(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="LNG" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].long_pass} onChange={e => setlong_pass(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="TD" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].pass_td} onChange={e => setpass_td(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="INT" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].Int} onChange={e => setInt(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="SACK" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].sack} onChange={e => setsack(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="SYL" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].syl} onChange={e => setSyl(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="RTG" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].rtg} onChange={e => setRtg(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="col-12">
                        <h2>Rushing</h2>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-1 title-lines">ATT</div>
                        <div className="col-1 title-lines">YDS</div>
                        <div className="col-1 title-lines">AVG</div>
                        <div className="col-1 title-lines">LNG</div>
                        <div className="col-1 title-lines">BIG</div>
                        <div className="col-1 title-lines">TD</div>
                        <div className="col-1 title-lines">YD S/G</div>
                        <div className="col-1 title-lines">FUM</div>
                        <div className="col-1 title-lines">LST</div>
                        <div className="col-1 title-lines">FD</div>

                    </div>
                    <div className="row g-0">
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="ATT" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].russ_att} onChange={e => setRuss_att(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="YDS" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].russ_yards} onChange={e => setRuss_yards(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="AVG" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].yards_p_russ} onChange={e => setyards_p_russ(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="LNG" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].lr} onChange={e => setLr(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="BIG" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].big} onChange={e => setBig(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="TD" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].rush_td} onChange={e => setRush_td(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="YD S/G" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].rush_yard_pg} onChange={e => setRush_yard_pg(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="FUM" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].fum} onChange={e => setFum(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="LST" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].lst} onChange={e => setLst(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="FD" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].fd} onChange={e => setFd(e.target.value)} required />
                        </div>

                    </div>
                </div>
                <div className="mt-3">
                    <div className="col-12">
                        <h2>Receiving</h2>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-1 title-lines">REC</div>
                        <div className="col-1 title-lines">TGTS </div>
                        <div className="col-1 title-lines">YDS</div>
                        <div className="col-1 title-lines">AVG</div>
                        <div className="col-1 title-lines">TD</div>
                        <div className="col-1 title-lines">BIG</div>
                        <div className="col-1 title-lines">YD S/G</div>
                        <div className="col-1 title-lines">FUM</div>
                        <div className="col-1 title-lines">LST</div>
                        <div className="col-1 title-lines">YAC</div>
                        <div className="col-1 title-lines">FD</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="REC" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].rec} onChange={e => setRec(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="TGTS" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].r_tgts} onChange={e => setR_Tgts(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="YDS" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].r_yards} onChange={e => setR_yards(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="AVG" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].yards_p_r} onChange={e => setyards_p_r(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="TD" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].r_td} onChange={e => setR_td(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="BIG" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].r_big} onChange={e => setR_big(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="YPG" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].r_ypg} onChange={e => setR_ypg(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="FUM" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].r_fum} onChange={e => setr_fum(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="LST" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].r_fl} onChange={e => setR_fl(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="YAC" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].r_yac} onChange={e => setr_Yac(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="FD" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].r_fd} onChange={e => setR_fd(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">PTS</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="PTS" aria-label="default input example" defaultValue={store.stats_offensive_player_nfl[params.theid] && store.stats_offensive_player_nfl[params.theid].pts} onChange={e => setPts(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 p-3 text-end">
                        <HashLink className="btn btn-secondary  text-white" to="/admin">Back to Admin</HashLink>
                    </div>
                    <div className="col-4 text-end p-3">
                        <button type="submit" className="btn btn-success">Edit</button>
                    </div>
                    <div className="col-4 text-start p-3">
                        <div data-bs-toggle="modal" data-bs-target="#delete_stat_ret_nfl" className="btn btn-danger">Delet</div>
                    </div>
                </div>
                <div className="modal fade" id="delete_stat_ret_nfl" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content overflow-hidden">
                            <div className="col-12 text-center text-white bg-danger text-uppercase fs-5 py-3">
                                <i className="fas fa-exclamation-triangle fs-1"></i><br />are you sure you want to delete the match
                            </div>
                            <div className="row g-0">
                                <div className="col-6 p-2 text-center">
                                    <button className="btn btn-danger" onClick={delet_py_nfl_stat}>Yes Delete</button>
                                    {auth ? <Redirect to="/list_stats_nfl_py/" /> : null}
                                </div>
                                <div className="col-6 p-2 text-center">
                                    <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {auth ? <Redirect to="/list_stats_nfl_py/" /> : null}
            </form>
        </div>

    )
} 