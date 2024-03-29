import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Team_WNba_Stas = () => {
    const { store } = useContext(Context);
    let date = new Date();
    let year = date.getFullYear();

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const [season, setSeason] = useState(year);
    const [team, setTeam] = useState("Atlanta Dream");
    const [conference, setConference] = useState("-");
    const [division, setDivision] = useState("-");
    const [group_type_comparation, setGroup_type_comparation] = useState("League");
    const [season_type, setSeason_type] = useState("Regular Season");
    const [w, setw] = useState("");
    const [L, setL] = useState("");
    const [ptc, setptc] = useState("");
    const [gb, setGb] = useState("");
    const [home, sethome] = useState("");
    const [away, setaway] = useState("");
    const [div, setdiv] = useState("");

    const [conf, setconf] = useState("");
    const [ppg, setppg] = useState("");
    const [opp_ppg, setopp_ppg] = useState("");
    const [diff, setdiff] = useState("");
    const [strk, setstrk] = useState("");
    const [l10, setl10] = useState("");

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        window.location.reload(true);
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

            w: w,
            L: L,
            ptc: ptc,
            gb: gb,
            home: home,
            away: away,
            div: div,
            conf: conf,
            ppg: ppg,
            opp_ppg: opp_ppg,
            diff: diff,
            strk: strk,
            l10: l10

        };

        fetch("https://sportsdata365.com/stats_wnba_team", {
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

    let selectConference = ["Eastern Conference", "Western Conference","-"];
    let selectDivision = [""];
    let season_Type = ["Regular Season", "Preseason"];
    let comparation = ["Conference","-"];

    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create stats by WNBA team</h3>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="col-2 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setTeam(e.target.value)} required>
                            {
                                store.wnba_teams.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={year} required>
                            {
                                selectYear.map((index) => {
                                    return (
                                        <option key={index} name="season" value={index} >{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Season Type
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason_type(e.target.value)} defaultValue={"Regular Season"} required>
                            {
                                season_Type.map((index) => {
                                    return (
                                        <option key={index} name="season" value={index} >{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Conference
                        <select className="form-select" name="conference" aria-label="Default select example" defaultValue="-" onChange={e => setConference(e.target.value)} required>
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
                        Comparation
                        <select className="form-select" name="League" aria-label="Comparision" defaultValue="-" onChange={e => setGroup_type_comparation(e.target.value)} required>
                            {
                                comparation.map((index) => {
                                    return (
                                        <option key={index} name="League" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div id="crear-stats" className="py-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">W</div>
                        <div className="col-2 title-lines">L</div>
                        <div className="col-2 title-lines">PTC</div>
                        <div className="col-2 title-lines">GB</div>
                        <div className="col-2 title-lines">Home</div>
                        <div className="col-2 title-lines">Away</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="W" aria-label="default input example" onChange={e => setw(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L" aria-label="default input example" onChange={e => setL(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="PTC" aria-label="default input example" onChange={e => setptc(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="GB" aria-label="GB" onChange={e => setGb(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Home" aria-label="default input example" onChange={e => sethome(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Away" aria-label="default input example" onChange={e => setaway(e.target.value)} required />
                        </div>

                    </div>
                    <div className="row g-0 text-center mt-3">
                        <div className="col-2 title-lines">Div</div>
                        <div className="col-2 title-lines">Conf</div>
                        <div className="col-2 title-lines">PPG</div>
                        <div className="col-2 title-lines">Opp Ppg</div>
                        <div className="col-2 title-lines">Diff</div>
                        <div className="col-2 title-lines">Strk</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Div" aria-label="default input example" onChange={e => setdiv(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Conf" name="rotation_home" onChange={e => setconf(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="PPG" name="rotation_home" onChange={e => setppg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Opp Ppg" aria-label="default input example" onChange={e => setopp_ppg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Diff" aria-label="default input example" onChange={e => setdiff(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Strk" aria-label="default input example" onChange={e => setstrk(e.target.value)} required />
                        </div>

                    </div>
                    <div className="row g-0 text-center mt-3">
                        <div className="col-2 title-lines">L 10</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L 10" aria-label="default input example" onChange={e => setl10(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_wnba_stats/" /> : null}
            </form>
        </div>
    )
}