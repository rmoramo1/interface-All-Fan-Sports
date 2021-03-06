import React, { useState, useContext ,useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Team_Soccer_Stas = () => {
    const { store } = useContext(Context);
        useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);
        
        if(!user){
            window.location.href = '/';
        }
    }, [])

    const [season, setSeason] = useState("2022");
    const [name, setname] = useState("");
    const [league, setleague] = useState("");
    const [position, setposition] = useState("");

    const [matches, setmatches] = useState("");
    const [win, setwin] = useState("");
    const [loss, setloss] = useState("");
    const [pts, setPts] = useState("");
    const [goals_for, setgoals_for] = useState("");
    const [goals_against, setgoals_against] = useState("");

    const [more_2_5_goals, setmore_2_5_goals] = useState("");
    const [less_2_5_goals, setless_2_5_goals] = useState("");
    const [zero_goal_against, setzero_goal_against] = useState("");
    const [zero_goals_for, setzero_goals_for] = useState("");
    const [ties, setties] = useState("");

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        window.location.reload(true);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            season: season,
            name: name,
            league: league,
            position: position,
            matches: matches,
            win: win,
            loss: loss,
            pts: pts,
            goals_for: goals_for,
            goals_against: goals_against,
            more_2_5_goals: more_2_5_goals,
            less_2_5_goals: less_2_5_goals,
            zero_goal_against: zero_goal_against,
            zero_goals_for: zero_goals_for,
            ties: ties

        };

        fetch("https://sportsdata365.com/stats_soccer_team", {
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

    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create stats by NBA team</h3>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <input className="form-control selectInner" type="text" placeholder="Team" aria-label="Team" onChange={e => setname(e.target.value)} required />
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
                        League
                        <select className="form-select" name="league" aria-label="set league" onChange={e => setleague(e.target.value)} required>
                            {
                                store.soccer_tournament.map((index) => {
                                    
                                    return (
                                        <option key={index} name="conference" value={index.tournament}>{index.tournament}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Position
                        <input className="form-control selectInner" type="text" placeholder="Position" aria-label="Position" onChange={e => setposition(e.target.value)} required />
                    </div>
                </div>
                <div id="crear-stats" className="py-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Matches</div>
                        <div className="col-2 title-lines">Win</div>
                        <div className="col-2 title-lines">Loss</div>
                        <div className="col-2 title-lines">Pts</div>
                        <div className="col-2 title-lines">Goals For</div>
                        <div className="col-2 title-lines">Goals Against</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Matches" aria-label="default input example" onChange={e => setmatches(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Win" aria-label="default input example" onChange={e => setwin(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Loss" aria-label="default input example" onChange={e => setloss(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Pts" aria-label="default input example" onChange={e => setPts(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Goals For" aria-label="default input example" onChange={e => setgoals_for(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Goals Against" aria-label="default input example" onChange={e => setgoals_against(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row g-0 text-center mt-3">
                        <div className="col-2 title-lines">More 2.5 Goals</div>
                        <div className="col-2 title-lines">Less 2.5 Goals</div>
                        <div className="col-2 title-lines">Zero Goal Gainst</div>
                        <div className="col-2 title-lines">Zero Goals For</div>
                        <div className="col-2 title-lines">Ties</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="More 2.5 Goals" name="rotation_home" onChange={e => setmore_2_5_goals(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Less 2.5 Goals" aria-label="default input example" onChange={e => setless_2_5_goals(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Zero Goal Gainst" aria-label="default input example" onChange={e => setzero_goal_against(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Zero Goals For" aria-label="default input example" onChange={e => setzero_goals_for(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ties" aria-label="default input example" onChange={e => setties(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_soccer_stats/" /> : null}
            </form>
        </div>
    )
}