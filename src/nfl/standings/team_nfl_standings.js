import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Team_Nfl_Standings = () => {
    const { store } = useContext(Context);

    let date = new Date();
    let year = date.getFullYear();


    useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);

        if (!user) {
            window.location.href = '/';
        }
    }, [])
    const [season, setSeason] = useState(year);
    const [season_type, setSeason_type] = useState("Regular Season");
    const [group_type_comparation, setGroup_type_comparation] = useState("League");
    const [team, setTeam] = useState("Arizona Cardinals");
    const [league, setleague] = useState("-");
    const [division, setDivision] = useState("-");

    const [w, setw] = useState("");
    const [L, setL] = useState("");
    const [t, sett] = useState("");
    const [pct, setpct] = useState("");
    const [home, sethome] = useState("");
    const [away, setaway] = useState("");
    const [div, setdiv] = useState("");
    const [conf, setconf] = useState("");
    const [pf, setpf] = useState("");

    const [pa, setpa] = useState("");
    const [diff, setdiff] = useState("");
    const [strk, setstrk] = useState("");


    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        document.getElementById("miFormsTANDING_nfl").reset();
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            season: season,
            season_type: season_type,
            group_type_comparation: group_type_comparation,
            team: team,
            league: league,
            division: division,

            w: w,
            L: L,
            t: t, 
            pct: pct,
            home: home,
            away: away,
            div: div,
            conf: conf,
            pf: pf,
            pa: pa,
            diff: diff,
            strk: strk,

        };



        fetch("https://sportsdata365.com/standing_nfl_team", {
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

    let selectLeague = ["American Football Conference", "National Football Conference"];
    let selectDivision = ["East Division", "West Division", "North Division", "South Division"];
    let season_Type = ["Regular Season", "Preseason","Wild Card", "Divisional Round", "Conference Chapionship", "Pro Bowl", "Super Bowl"];

    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create Stadings by NFL team</h3>
                </div>
            </div>
            <form onSubmit={crear} id="miFormsTANDING_nfl">
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
                    <div className="text-center col-2 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={ year } required>
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
                        <select className="form-select" name="year" aria-label="Season type" onChange={e => setSeason_type(e.target.value)}  required>
                            {
                                season_Type.map((index) => {
                                    return (
                                        <option key={index} name="season type" value={index} >{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        League
                        <select className="form-select" name="month" aria-label="Default select example" onChange={e => setleague(e.target.value)} required>
                            {
                                selectLeague.map((index) => {
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
                <div id="crear-stats" className="">
                    <div className="row g-0 text-center">
                        <div className="col-1 title-lines">W</div>
                        <div className="col-1 title-lines">L</div>
                        <div className="col-1 title-lines">T</div>
                        <div className="col-1 title-lines">PCT</div>
                        <div className="col-1 title-lines">HOME</div>
                        <div className="col-1 title-lines">AWAY</div>
                        <div className="col-1 title-lines">DIV</div>
                        <div className="col-1 title-lines">CONF</div>
                        <div className="col-1 title-lines">PF</div>
                        <div className="col-1 title-lines">PA</div>
                        <div className="col-1 title-lines">DIFF</div>
                        <div className="col-1 title-lines">STRK</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="W" aria-label="default input example" onChange={e => setw(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="L" aria-label="default input example" onChange={e => setL(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="T" aria-label="default input example" onChange={e => sett(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="PTC" aria-label="default input example" onChange={e => setpct(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="HOME" aria-label="default input example" onChange={e => sethome(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="AWAY" aria-label="default input example" onChange={e => setaway(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="DIV" aria-label="default input example" onChange={e => setdiv(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="CONF" aria-label="default input example" onChange={e => setconf(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="PF" aria-label="default input example" onChange={e => setpf(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="PA" aria-label="default input example" onChange={e => setpa(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="DIFF" aria-label="default input example" onChange={e => setdiff(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="STRK" aria-label="default input example" onChange={e => setstrk(e.target.value)} required />
                        </div>
                    </div>





                </div>
                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_nfl_stats/" /> : null}
            </form>
        </div>
    )
}