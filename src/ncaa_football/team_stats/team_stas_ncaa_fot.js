import React, { useState, useContext,useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Team_Stas_Ncaa_Fot = () => {
    const { store } = useContext(Context);

        useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);
        
        if(!user){
            window.location.href = '/';
        }
    }, [])

    const [season, setSeason] = useState("2022");
    const [team, setTeam] = useState("Cincinnati");
    const [conference, setConference] = useState("Atlantic Coast Conference");
    const [division, setDivision] = useState("Atlantic");

    const [TP, setTP] = useState("");
    const [ttpg, setTtpg] = useState("");
    const [t_td, setT_td] = useState("");

    const [t_1_down, setT_1_down] = useState("");
    const [Russ_1_d, setRuss_1_d] = useState("");
    const [pass_1_d, setPass_1_d] = useState("");
    const [down_1_penal, setDown_1_penal] = useState("");
    const [down_3_eff, setDown_3_eff] = useState("");
    const [down_3_AVG, setDown_3_AVG] = useState("");
    const [down_4_eff, setDown_4_eff] = useState("");
    const [down_4_AVG, setDown_4_AVG] = useState("");
    
    const [comp_att, setComp_att] = useState("");
    const [net_pass_y, setNet_pass_y] = useState("");
    const [y_p_pas_attps, setY_p_pas_attps] = useState("");
    const [net_pass_y_pg, setNet_pass_y_pg] = useState("");
    const [pass_td, setPass_td] = useState("");
    const [interceptions, setInterceptions] = useState("");
    const [sacks_y_lost, setSacks_y_lost] = useState("");
    
    const [russ_attps, setRuss_attps] = useState("");
    const [russ_y, setRuss_y] = useState("");
    const [y_p_russ_attp, setY_p_russ_attp] = useState("");
    const [russ_y_pg, setRuss_y_pg] = useState("");
    const [russ_td, setRuss_td] = useState("");
    
    const [total_of_plays, setTotal_of_plays] = useState("");
    const [total_y, setTotal_y] = useState("");
    const [y_pg, setY_pg] = useState("");
    
    const [kickoffs_t, setKickoffs_t] = useState("0");
    const [AVG_kickoff_return_y, setAVG_kickoff_return_y] = useState("");
    const [punt_t, setPunt_t] = useState("");
    const [AVG_punt_ruturn_y, setAVG_punt_ruturn_y] = useState("");
    const [int_t, setint_t] = useState("");
    const [AVG_intercept_y, setAVG_intercept_y] = useState("");
    
    const [net_AVG_punt_y, setNet_AVG_punt_y] = useState("");
    const [punt_ty, setPunt_ty] = useState("");
    const [fg_goog_attps, setFg_goog_attps] = useState("");
    const [touchback_percent, setTouchback_percent] = useState("0");

    const [penal_ty, setPenal_ty] = useState("");
    const [penal_y_AVG_pg, setPenal_y_AVG_pg] = useState("");

    const [possesion_time, setPossesion_time] = useState("");

    const [fumbles_lost, setFumbles_lost] = useState("");
    const [turnover_ratio, setTurnover_ratio] = useState("");


    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        document.getElementById("miForm_ncaa_team_fut_stats").reset();
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            season: season,
            team: team,
            conference: conference,
            division: division,

            TP: TP,
            ttpg: ttpg,
            t_td: t_td,

            t_1_down: t_1_down,
            Russ_1_d: Russ_1_d,
            pass_1_d: pass_1_d,
            down_1_penal: down_1_penal,
            down_3_eff: down_3_eff,
            down_3_AVG: down_3_AVG,
            down_4_eff: down_4_eff,
            down_4_AVG: down_4_AVG,

            comp_att: comp_att,
            net_pass_y: net_pass_y,
            y_p_pas_attps: y_p_pas_attps,
            net_pass_y_pg: net_pass_y_pg,
            pass_td: pass_td,
            interceptions: interceptions,
            sacks_y_lost: sacks_y_lost,

            russ_attps: russ_attps,
            russ_y: russ_y,
            y_p_russ_attp: y_p_russ_attp,
            russ_y_pg: russ_y_pg,
            russ_td: russ_td,
            
            total_of_plays: total_of_plays,
            total_y: total_y,
            y_pg: y_pg,

            kickoffs_t: kickoffs_t,
            AVG_kickoff_return_y: AVG_kickoff_return_y,
            punt_t: punt_t,
            AVG_punt_ruturn_y: AVG_punt_ruturn_y,
            int_t: int_t,
            AVG_intercept_y: AVG_intercept_y,
            
            net_AVG_punt_y: net_AVG_punt_y,
            punt_ty: punt_ty,
            fg_goog_attps: fg_goog_attps,
            touchback_percent: touchback_percent,

            penal_ty: penal_ty,
            penal_y_AVG_pg: penal_y_AVG_pg,

            possesion_time: possesion_time,
            
            fumbles_lost: fumbles_lost,
            turnover_ratio: turnover_ratio,

        };
        
       

        fetch("https://sportsdata365.com/stats_ncaa_football_team", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                
                alert("Stadistica se creo");
                
                actualizar();
            })
            .catch(err => console.log(err));
    };

    //select
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    let selectConference = ["Atlantic Coast Conference", "Southeastern Conference","Big 10","Big 12","Pacific-12","American Athletic Conference","Conference USA","Mid American Conference","Mountain West","Sun Belt","Independent teams"];
    let selectDivision = ["Atlantic", "Coastal", "East ", "West","North","South","Mountain"];

    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create stats by NCAA Football team</h3>
                </div>
            </div>
            <form onSubmit={crear} id="miForm_ncaa_team_fut_stats">
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="teams" aria-label="Default select example" onChange={e => setTeam(e.target.value)} required>
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
                    <div className="text-center col-3 p-1">
                        Conference
                        <select className="form-select" name="month" aria-label="Default select example" onChange={e => setConference(e.target.value)} required>
                            {
                                selectConference.map((index) => {
                                    return (
                                        <option key={index} name="conference" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Division
                        <select className="form-select" name="month" aria-label="Default select example" onChange={e => setDivision(e.target.value)} required>
                            {
                                selectDivision.map((index) => {
                                    return (
                                        <option key={index} name="setDivision" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div id="crear-stats" className="">
                    <div className="col-12 mt-3">
                        <h5>SCORING</h5>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-4 title-lines">Total Points Per Game</div>
                        <div className="col-4 title-lines">Total Points</div>
                        <div className="col-4 title-lines">Total Touchdowns</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-4">
                            <input className="form-control selectInner" type="text" placeholder="TP" aria-label="default input example" onChange={e => setTP(e.target.value)} required />
                        </div>
                        <div className="col-4">
                            <input className="form-control selectInner" type="text" placeholder="TP PG" aria-label="default input example" onChange={e => setTtpg(e.target.value)} required />
                        </div>
                        <div className="col-4">
                            <input className="form-control selectInner" type="text" placeholder="T TD" aria-label="default input example" onChange={e => setT_td(e.target.value)} required />
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <h5>1ST DOWNS</h5>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="eight_spans title-lines">T 1st D</div>
                        <div className="eight_spans title-lines">R 1st D</div>
                        <div className="eight_spans title-lines">P 1st D</div>
                        <div className="eight_spans title-lines">1st D P</div>
                        <div className="eight_spans title-lines">3rd D E</div>
                        <div className="eight_spans title-lines">3rd D %s</div>
                        <div className="eight_spans title-lines">4th D E</div>
                        <div className="eight_spans title-lines">4th D %</div>
                    </div>
                    <div className="row g-0">
                        <div className="eight_spans">
                            <input type="text" className="form-control selectInner" placeholder="T 1 Down" name="rotation_home" onChange={e => setT_1_down(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Russ 1 D" aria-label="default input example" onChange={e => setRuss_1_d(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Pass 1 D" aria-label="default input example" onChange={e => setPass_1_d(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Down 1 Penal" aria-label="default input example" onChange={e => setDown_1_penal(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Down 3 Eff" aria-label="default input example" onChange={e => setDown_3_eff(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Down 3 %" aria-label="default input example" onChange={e => setDown_3_AVG(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Down 4 Eff" aria-label="default input example" onChange={e => setDown_4_eff(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Down 4 %" aria-label="default input example" onChange={e => setDown_4_AVG(e.target.value)} required />
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <h5>PASSING</h5>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="eight_spans title-lines">Comp-Att</div>
                        <div className="eight_spans title-lines">NP Y</div>
                        <div className="eight_spans title-lines">YPPA</div>
                        <div className="eight_spans title-lines">NP Y PG</div>
                        <div className="eight_spans title-lines">PT</div>
                        <div className="eight_spans title-lines">Int</div>
                        <div className="eight_spans title-lines">S L</div>
                    </div>
                    <div className="row g-0">
                        <div className="eight_spans">
                            <input type="text" className="form-control selectInner" placeholder="Comp att" name="rotation_home" onChange={e => setComp_att(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Net Pass Y" aria-label="default input example" onChange={e => setNet_pass_y(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="YPPA" aria-label="default input example" onChange={e => setY_p_pas_attps(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="NP Y PG" aria-label="default input example" onChange={e => setNet_pass_y_pg(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="PT" aria-label="default input example" onChange={e => setPass_td(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Interceptions" aria-label="default input example" onChange={e => setInterceptions(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Sacks Lost" aria-label="default input example" onChange={e => setSacks_y_lost(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <h5>RUSHING</h5>
                </div>
                <div className="row g-0 text-center">
                    <div className="col-2 title-lines">RA</div>
                    <div className="col-2 title-lines">RY</div>
                    <div className="col-2 title-lines">YP RA</div>
                    <div className="col-2 title-lines">RY PG</div>
                    <div className="col-2 title-lines">RT</div>
                </div>
                <div className="row g-0">
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="RA" name="rotation_home" onChange={e => setRuss_attps(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="RY" aria-label="default input example" onChange={e => setRuss_y(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="YP RA" aria-label="default input example" onChange={e => setY_p_russ_attp(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="RY PG" aria-label="default input example" onChange={e => setRuss_y_pg(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="RT" aria-label="default input example" onChange={e => setRuss_td(e.target.value)} required />
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <h5>OFFENSE</h5>
                </div>
                <div className="row g-0 text-center">
                    <div className="col-2 title-lines">TO P</div>
                    <div className="col-2 title-lines">TY</div>
                    <div className="col-2 title-lines">Y PG</div>
                </div>
                <div className="row g-0">
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="TO P" name="rotation_home" onChange={e => setTotal_of_plays(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="TY" aria-label="default input example" onChange={e => setTotal_y(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="Y PG" aria-label="default input example" onChange={e => setY_pg(e.target.value)} required />
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <h5>RETURNS</h5>
                </div>
                <div className="row g-0 text-center">
                    <div className="col-2 title-lines">KT</div>
                    <div className="col-2 title-lines">AVGK R Y</div>
                    <div className="col-2 title-lines">Punt T</div>
                    <div className="col-2 title-lines">AVG PR Y</div>
                    <div className="col-2 title-lines">INT T</div>
                    <div className="col-2 title-lines">AVG I Y</div>
                </div>
                <div className="row g-0">
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="KT" name="rotation_home" onChange={e => setKickoffs_t(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="AVGK R Y" aria-label="default input example" onChange={e => setAVG_kickoff_return_y(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="Punt T" aria-label="default input example" onChange={e => setPunt_t(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="AVG PR Y" aria-label="default input example" onChange={e => setAVG_punt_ruturn_y(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="INT T" aria-label="default input example" onChange={e => setint_t(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="AVG I Y" aria-label="default input example" onChange={e => setAVG_intercept_y(e.target.value)} required />
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <h5>KICKING</h5>
                </div>
                <div className="row g-0 text-center">
                    <div className="col-2 title-lines">N AVG PY</div>
                    <div className="col-2 title-lines">Punt TY</div>
                    <div className="col-2 title-lines">FG: GA</div>
                    <div className="col-2 title-lines">T%</div>
                </div>
                <div className="row g-0">
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="N AVG PY" name="rotation_home" onChange={e => setNet_AVG_punt_y(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="Punt TY" aria-label="default input example" onChange={e => setPunt_ty(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="FG: GA" aria-label="default input example" onChange={e => setFg_goog_attps(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="T%" aria-label="default input example" onChange={e => setTouchback_percent(e.target.value)} required />
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 px-1">
                        <div className="col-12 mt-3">
                            <h5>PENALTIES</h5>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-6 title-lines">Total-Yards</div>
                            <div className="col-6 title-lines">Avg. Per Game (YDS)</div>
                        </div>
                        <div className="row g-0">
                            <div className="col-6">
                                <input type="text" className="form-control selectInner" placeholder="TY" name="rotation_home" onChange={e => setPenal_ty(e.target.value)} required />
                            </div>
                            <div className="col-6">
                                <input className="form-control selectInner" type="text" placeholder="AVG PG Y" aria-label="default input example" onChange={e => setPenal_y_AVG_pg(e.target.value)} required />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="col-12 mt-3">
                            <h5>TIME OF POSSESSION</h5>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-12 title-lines">Possession Time Seconds</div>
                        </div>
                        <div className="row g-0">
                            <div className="col-12">
                                <input type="text" className="form-control selectInner" placeholder="Time" name="rotation_home" onChange={e => setPossesion_time(e.target.value)} required />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 px-1">
                        <div className="col-12 mt-3">
                            <h5>MISCELLANEOUS</h5>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-6 title-lines">Fumbles-Lost</div>
                            <div className="col-6 title-lines">Turnover Ratio</div>
                        </div>
                        <div className="row g-0">
                            <div className="col-6">
                                <input type="text" className="form-control selectInner" placeholder="FL" name="rotation_home" onChange={e => setFumbles_lost(e.target.value)} required />
                            </div>
                            <div className="col-6">
                                <input className="form-control selectInner" type="text" placeholder="TR" aria-label="default input example" onChange={e => setTurnover_ratio(e.target.value)} required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_ncaa_fot_stats/" /> : null}
            </form>
        </div>
    )
}