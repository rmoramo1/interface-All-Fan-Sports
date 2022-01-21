import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Team_NHL_Stas = () => {
    const { store } = useContext(Context);

    let date = new Date();
    let year = date.getFullYear();

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const [season, setSeason] = useState(year);
    const [season_type, setSeason_type] = useState("Regular Season");
    const [group_type_comparation, setGroup_type_comparation] = useState("League");
    const [team, setTeam] = useState("Boston Bruins");
    const [conference, setconference] = useState("East");
    const [division, setDivision] = useState("Atlantic");

    const [gp, setGp] = useState("");
    const [w, setW] = useState("");
    const [L_L, setL] = useState("");

    const [pts, setpts] = useState("");
    const [otl, setotl] = useState("");
    const [rw, setrw] = useState("");
    const [row, setrow] = useState("");
    const [sow, setsow] = useState("");
    const [sol, setsol] = useState("");
    const [home, sethome] = useState("");
    const [away, setaway] = useState("");
    const [gf, setgf] = useState("");
    const [ga, setga] = useState("");
    const [diff, setdiff] = useState("");
    const [l10, setl10] = useState("");
    const [strk, setstrk] = useState("");

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        window.location.reload(true);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            season: season,
            group_type_comparation: group_type_comparation,
            season_type: season_type,
            team: team, season_type,
            conference: conference,
            division: division,
            gp: gp,
            w: w,
            L: L_L,

            otl: otl,
            pts: pts,
            rw: rw,
            row: row,
            sow: sow,
            sol: sol,
            home: home,
            away: away,
            gf: gf,
            ga: ga,
            diff: diff,
            l10: l10,
            strk: strk

        };

        fetch("https://sportsdata365.com/stats_nhl_team", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("Stadistica se creo");
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

    let selectDivision = ["Atlantic", "Metropolitan", "Central", "Peaceful"];
    let selectConference = ["East", "West"];
    let season_Type = ["Regular Season", "Preseason"];
    let comparation = ["League", "Conference", "Division"];

    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create stats by MLB team</h3>
                </div>
            </div>
            <form onSubmit={crear}>
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
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason_type(e.target.value)}  required>
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
                        Division
                        <select className="form-select" name="month" aria-label="Default select example" onChange={e => setDivision(e.target.value)} required>
                            {
                                selectDivision.map((index) => {
                                    return (
                                        <option key={index} name="conference" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Conference
                        <select className="form-select" name="month" aria-label="Default select example" onChange={e => setconference(e.target.value)} required>
                            {
                                selectConference.map((index) => {
                                    return (
                                        <option key={index} name="setConference" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="div g-0">
                <div className="text-center col-2 p-1">
                    Comparation
                        <select className="form-select" name="month" aria-label="setGroup_type_comparation" onChange={e => setGroup_type_comparation(e.target.value)} required>
                            {
                                comparation.map((index) => {
                                    return (
                                        <option key={index} name="setConference" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div id="crear-stats" className="py-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">GP</div>
                        <div className="col-2 title-lines">W</div>
                        <div className="col-2 title-lines">L</div>
                        <div className="col-2 title-lines">Otl</div>
                        <div className="col-2 title-lines">Pts</div>
                        <div className="col-2 title-lines">RW</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="GP" aria-label="Gp" onChange={e => setGp(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="W" aria-label="default input example" onChange={e => setW(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L" aria-label="default input example" onChange={e => setL(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Otl" aria-label="default input example" onChange={e => setotl(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Pts" aria-label="default input example" onChange={e => setpts(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="RW" aria-label="default input example" onChange={e => setrw(e.target.value)} required />
                        </div>

                    </div>
                    <div className="row g-0 text-center mt-3">
                        <div className="col-2 title-lines">ROW</div>
                        <div className="col-2 title-lines">SOW</div>
                        <div className="col-2 title-lines">SOL</div>
                        <div className="col-2 title-lines">Home</div>
                        <div className="col-2 title-lines">Away</div>
                        <div className="col-2 title-lines">GF</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="ROW" aria-label="default input example" onChange={e => setrow(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="SOW" name="rotation_home" onChange={e => setsow(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="SOL" aria-label="default input example" onChange={e => setsol(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Home" aria-label="default input example" onChange={e => sethome(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Away" aria-label="default input example" onChange={e => setaway(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="GF" aria-label="default input example" onChange={e => setgf(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row g-0 text-center mt-3">
                        <div className="col-2 title-lines">GA</div>
                        <div className="col-2 title-lines">DIFF</div>
                        <div className="col-2 title-lines">L10</div>
                        <div className="col-2 title-lines">Strk</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="GA" aria-label="default input example" onChange={e => setga(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="DIFF" name="rotation_home" onChange={e => setdiff(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L10" aria-label="default input example" onChange={e => setl10(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Strk" aria-label="default input example" onChange={e => setstrk(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_nhl_stats/" /> : null}
            </form>
        </div>
    )
}