import React, { useState, useContext, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";

export const Edit_Team_Nfl_Stas = () => {
    const { store } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);

        if (!user) {
            window.location.href = '/';
        }
    }, [])

    const [season, setSeason] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].season);
    const [team, setTeam] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].team);
    const [conference, setConference] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].conference);
    const [division, setDivision] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].division);
    const [group_type_comparation, setGroup_type_comparation] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].group_type_comparation);
    const [season_type, setSeason_type] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].season_type);

    const [TP, setTP] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].TP);
    const [ttpg, setTtpg] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].ttpg);
    const [t_td, setT_td] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].t_td);

    const [t_1_down, setT_1_down] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].t_1_down);
    const [Russ_1_d, setRuss_1_d] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].Russ_1_d);
    const [pass_1_d, setPass_1_d] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].pass_1_d);
    const [down_1_penal, setDown_1_penal] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].down_1_penal);
    const [down_3_eff, setDown_3_eff] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].down_3_eff);
    const [down_3_AVG, setDown_3_AVG] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].down_3_AVG);
    const [down_4_eff, setDown_4_eff] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].down_4_eff);
    const [down_4_AVG, setDown_4_AVG] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].down_4_AVG);

    const [comp_att, setComp_att] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].comp_att);
    const [net_pass_y, setNet_pass_y] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].net_pass_y);
    const [y_p_pas_attps, setY_p_pas_attps] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].y_p_pas_attps);
    const [net_pass_y_pg, setNet_pass_y_pg] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].net_pass_y_pg);
    const [pass_td, setPass_td] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].pass_td);
    const [interceptions, setInterceptions] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].interceptions);
    const [sacks_y_lost, setSacks_y_lost] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].sacks_y_lost);

    const [russ_attps, setRuss_attps] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].russ_attps);
    const [russ_y, setRuss_y] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].russ_y);
    const [y_p_russ_attp, setY_p_russ_attp] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].y_p_russ_attp);
    const [russ_y_pg, setRuss_y_pg] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].russ_y_pg);
    const [russ_td, setRuss_td] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].russ_td);

    const [total_of_plays, setTotal_of_plays] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].total_of_plays);
    const [total_y, setTotal_y] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].total_y);
    const [y_pg, setY_pg] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].y_pg);

    const [kickoffs_t, setKickoffs_t] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].kickoffs_t);
    const [AVG_kickoff_return_y, setAVG_kickoff_return_y] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].AVG_kickoff_return_y);
    const [punt_t, setPunt_t] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].punt_t);
    const [AVG_punt_ruturn_y, setAVG_punt_ruturn_y] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].AVG_punt_ruturn_y);
    const [int_t, setint_t] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].int_t);
    const [AVG_intercept_y, setAVG_intercept_y] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].AVG_intercept_y);

    const [net_AVG_punt_y, setNet_AVG_punt_y] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].net_AVG_punt_y);
    const [punt_ty, setPunt_ty] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].punt_ty);
    const [fg_goog_attps, setFg_goog_attps] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].fg_goog_attps);
    const [touchback_percent, setTouchback_percent] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].touchback_percent);

    const [penal_ty, setPenal_ty] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].penal_ty);
    const [penal_y_AVG_pg, setPenal_y_AVG_pg] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].penal_y_AVG_pg);

    const [possesion_time, setPossesion_time] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].possesion_time);

    const [fumbles_lost, setFumbles_lost] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].fumbles_lost);
    const [turnover_ratio, setTurnover_ratio] = useState(store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].turnover_ratio);


    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            season: season,
            team: team,
            conference: conference,
            division: division,
            season_type: season_type,
            group_type_comparation: group_type_comparation,

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

        fetch("https://sportsdata365.com/stats_nfl_team/" + store.nfl_stats_teams[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);

                alert("Stadistica se actualizo");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));
    };
    const delet_team_nfl_stat = e => {
        fetch("https://sportsdata365.com/stats_nfl_team/" + store.nfl_stats_teams[params.theid].id, {
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

    let selectConference = ["American Football Conference", "National Football Conference"];
    let selectDivision = ["East Division", "West Division", "North Division", "South Division"];
    let season_Type = ["Regular Season", "Preseason", "Wild Card", "Divisional Round", "Conference Chapionship", "Pro Bowl", "Super Bowl"];

    return (
        <div className="container-fluid" id="statsEdith" >
            <div className="row g-0">
                <div className="col-12 text-center bg-title-edith my-2 p-3">
                    <h3>Edit stats by nfl team</h3>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].team} onChange={e => setTeam(e.target.value)} required>
                            {
                                store.nfl_teams.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Season
                        <select className="form-select" name="season" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].season} onChange={e => setSeason(e.target.value)} required>
                            {
                                selectYear.map((index) => {
                                    return (
                                        <option key={index} name="season" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Season Type
                        <select className="form-select" name="season" onChange={e => setSeason_type(e.target.value)} defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].season_type} required>
                            {
                                season_Type.map((index) => {
                                    return (
                                        <option key={index} name="season" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Conference
                        <select className="form-select" name="month" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].conference} onChange={e => setConference(e.target.value)} required>
                            {
                                selectConference.map((index) => {
                                    return (
                                        <option key={index} name="conference" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Division
                        <select className="form-select" name="month" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].division} onChange={e => setDivision(e.target.value)} required>
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
                            <input className="form-control selectInner" type="text" placeholder="TP PG" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].ttpg} onChange={e => setTtpg(e.target.value)} required />
                        </div>
                        <div className="col-4">
                            <input className="form-control selectInner" type="text" placeholder="TP" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].TP} onChange={e => setTP(e.target.value)} required />
                        </div>
                        <div className="col-4">
                            <input className="form-control selectInner" type="text" placeholder="T TD" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].t_td} onChange={e => setT_td(e.target.value)} required />
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
                            <input type="text" className="form-control selectInner" placeholder="T 1 Down" name="T 1 Down" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].t_1_down} onChange={e => setT_1_down(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Russ 1 D" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].Russ_1_d} onChange={e => setRuss_1_d(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Pass 1 D" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].pass_1_d} onChange={e => setPass_1_d(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Down 1 Penal" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].down_1_penal} onChange={e => setDown_1_penal(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Down 3 Eff" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].down_3_eff} onChange={e => setDown_3_eff(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Down 3 %" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].down_3_AVG} onChange={e => setDown_3_AVG(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Down 4 Eff" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].down_4_eff} onChange={e => setDown_4_eff(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Down 4 %" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].down_4_AVG} onChange={e => setDown_4_AVG(e.target.value)} required />
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
                            <input type="text" className="form-control selectInner" placeholder="Comp att" name="rotation_home" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].comp_att} onChange={e => setComp_att(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Net Pass Y" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].net_pass_y} onChange={e => setNet_pass_y(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="YPPA" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].y_p_pas_attps} onChange={e => setY_p_pas_attps(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="NP Y PG" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].net_pass_y_pg} onChange={e => setNet_pass_y_pg(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="PT" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].pass_td} onChange={e => setPass_td(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Interceptions" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].interceptions} onChange={e => setInterceptions(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Sacks Lost" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].sacks_y_lost} onChange={e => setSacks_y_lost(e.target.value)} required />
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
                        <input type="text" className="form-control selectInner" placeholder="RA" name="rotation_home" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].russ_attps} onChange={e => setRuss_attps(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="RY" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].russ_y} onChange={e => setRuss_y(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="YP RA" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].y_p_russ_attp} onChange={e => setY_p_russ_attp(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="RY PG" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].russ_y_pg} onChange={e => setRuss_y_pg(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="RT" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].russ_td} onChange={e => setRuss_td(e.target.value)} required />
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
                        <input type="text" className="form-control selectInner" placeholder="TO P" name="rotation_home" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].total_of_plays} onChange={e => setTotal_of_plays(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="TY" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].total_y} onChange={e => setTotal_y(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="Y PG" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].y_pg} onChange={e => setY_pg(e.target.value)} required />
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
                        <input type="text" className="form-control selectInner" placeholder="KT" name="rotation_home" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].kickoffs_t} onChange={e => setKickoffs_t(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="AVGK R Y" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].AVG_kickoff_return_y} onChange={e => setAVG_kickoff_return_y(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="Punt T" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].punt_t} onChange={e => setPunt_t(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="AVG PR Y" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].AVG_punt_ruturn_y} onChange={e => setAVG_punt_ruturn_y(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="INT T" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].int_t} onChange={e => setint_t(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="AVG I Y" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].AVG_intercept_y} onChange={e => setAVG_intercept_y(e.target.value)} required />
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
                        <input type="text" className="form-control selectInner" placeholder="N AVG PY" name="rotation_home" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].net_AVG_punt_y} onChange={e => setNet_AVG_punt_y(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="Punt TY" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].punt_ty} onChange={e => setPunt_ty(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="FG: GA" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].fg_goog_attps} onChange={e => setFg_goog_attps(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control selectInner" type="text" placeholder="T%" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].touchback_percent} onChange={e => setTouchback_percent(e.target.value)} required />
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
                                <input type="text" className="form-control selectInner" placeholder="TY" name="rotation_home" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].penal_ty} onChange={e => setPenal_ty(e.target.value)} required />
                            </div>
                            <div className="col-6">
                                <input className="form-control selectInner" type="text" placeholder="AVG PG Y" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].penal_y_AVG_pg} onChange={e => setPenal_y_AVG_pg(e.target.value)} required />
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
                                <input type="text" className="form-control selectInner" placeholder="Time" name="rotation_home" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].possesion_time} onChange={e => setPossesion_time(e.target.value)} required />
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
                                <input type="text" className="form-control selectInner" placeholder="FL" name="rotation_home" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].fumbles_lost} onChange={e => setFumbles_lost(e.target.value)} required />
                            </div>
                            <div className="col-6">
                                <input className="form-control selectInner" type="text" placeholder="TR" aria-label="default input example" defaultValue={store.nfl_stats_teams[params.theid] && store.nfl_stats_teams[params.theid].turnover_ratio} onChange={e => setTurnover_ratio(e.target.value)} required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 p-3 text-end">
                        <HashLink className="btn btn-secondary text-white" to="/admin">Back to Admin</HashLink>
                    </div>
                    <div className="col-4 text-end p-3">
                        <button type="submit" className="btn btn-success">Edit</button>
                    </div>
                    <div className="col-4 text-start p-3">
                        <div data-bs-toggle="modal" data-bs-target="#delete_stat_team_nfl" className="btn btn-danger">Delet</div>
                    </div>
                </div>
                <div className="modal fade" id="delete_stat_team_nfl" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content overflow-hidden">
                            <div className="col-12 text-center text-white bg-danger text-uppercase fs-5 py-3">
                                <i className="fas fa-exclamation-triangle fs-1"></i><br />are you sure you want to delete the match
                            </div>
                            <div className="row g-0">
                                <div className="col-6 p-2 text-center">
                                    <button className="btn btn-danger" onClick={delet_team_nfl_stat}>Yes Delete</button>
                                    {auth ? <Redirect to="/list_nfl_stats/" /> : null}
                                </div>
                                <div className="col-6 p-2 text-center">
                                    <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {auth ? <Redirect to="/list_nfl_stats/" /> : null}
            </form>
        </div>
    )
}