import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Team_MLB_Stas = () => {
    const { store } = useContext(Context);

    let date = new Date();
	let year = date.getFullYear();

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const [season, setSeason] = useState(year);
    const [team, setTeam] = useState("Arizona Diamondbacks");
    const [league, setLeague] = useState("American League");
    const [division, setDivision] = useState("East");
    const [group_type_comparation, setGroup_type_comparation] = useState("Division");
    const [season_type, setSeason_type] = useState("Regular Season");

    const [w, setW] = useState("");
    const [L, setL] = useState("");
    const [pct, setPct] = useState("");
    const [gb, setGb] = useState("");
    const [home, setHome] = useState("");
    const [away, setAway] = useState("");
    const [rs, setRs] = useState("");
    const [ra, setRa] = useState("");
    const [diff, setDiff] = useState("");
    const [strk, setStrk] = useState("");
    const [L10, setL10] = useState("");

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        window.location.reload(true);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            season: season,
            team: team,
            league: league,
            division: division,
            season_type: season_type,
            group_type_comparation: group_type_comparation,
            w: w,
            L: L,
            pct: pct,
            gb: gb,
            home: home,
            away: away,
            rs: rs,
            ra: ra,
            diff: diff,
            strk: strk,
            L10: L10,

        };

        fetch("https://sportsdata365.com/stats_mlb_team", {
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

    let selectLiga = ["American League", "National League"];
    let selectDivision = ["East", "Central", "West"];
    let season_Type = ["Regular Season", "Spring Training"];
    let comparation = ["Division", "League", "Overall"];

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
                                store.mlb_teams.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Season
                        <select className="form-select" name="season_Type" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={year} required>
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
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason_type(e.target.value)} required>
                            {
                                season_Type.map((index) => {
                                    return (
                                        <option key={index} name="season" value={index} >{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        League
                        <select className="form-select" name="month" aria-label="Default select example" onChange={e => setLeague(e.target.value)} required>
                            {
                                selectLiga.map((index) => {
                                    return (
                                        <option key={index} name="conference" value={index}>{index}</option>
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
                                        <option key={index} name="setDivision" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="text-center col-2 p-1">
                     Comparation
                        <select className="form-select" name="setGroup_type_comparation" aria-label="setGroup_type_comparation" onChange={e => setGroup_type_comparation(e.target.value)} required>
                            {
                                comparation.map((index) => {
                                    return (
                                        <option key={index} name="setGroup_type_comparation" value={index}>{index}</option>
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
                        <div className="col-2 title-lines">Pct</div>
                        <div className="col-2 title-lines">Gb</div>
                        <div className="col-2 title-lines">Home</div>
                        <div className="col-2 title-lines">Away</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="W" aria-label="default input example" onChange={e => setW(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L" aria-label="default input example" onChange={e => setL(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Pct" aria-label="default input example" onChange={e => setPct(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Gb" aria-label="default input example" onChange={e => setGb(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Home" aria-label="default input example" onChange={e => setHome(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Away" aria-label="default input example" onChange={e => setAway(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row g-0 text-center mt-3">
                        <div className="col-2 title-lines">Rs</div>
                        <div className="col-2 title-lines">Ra</div>
                        <div className="col-2 title-lines">Diff</div>
                        <div className="col-2 title-lines">Strk</div>
                        <div className="col-2 title-lines">L10</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Rs" name="rotation_home" onChange={e => setRs(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ra" aria-label="default input example" onChange={e => setRa(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Diff" aria-label="default input example" onChange={e => setDiff(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Strk" aria-label="default input example" onChange={e => setStrk(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L10" aria-label="default input example" onChange={e => setL10(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_mlb_stats/" /> : null}
            </form>
        </div>
    )
}