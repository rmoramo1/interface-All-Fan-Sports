import React, { useState, useContext ,useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";

export const Edit_Stats_Soccer_Team = () => {
    const { store } = useContext(Context);
        useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);
        
        if(!user){
            window.location.href = '/';
        }
    }, [])
    const params = useParams();

    const [season, setSeason] = useState(store.soccer_stats_teams[params.theid].season);
    const [name, setname] = useState(store.soccer_stats_teams[params.theid].name);
    const [league, setleague] = useState(store.soccer_stats_teams[params.theid].league);
    const [position, setposition] = useState(store.soccer_stats_teams[params.theid].position);

    const [matches, setmatches] = useState(store.soccer_stats_teams[params.theid].matches);
    const [win, setwin] = useState(store.soccer_stats_teams[params.theid].win);
    const [loss, setloss] = useState(store.soccer_stats_teams[params.theid].loss);
    const [pts, setPts] = useState(store.soccer_stats_teams[params.theid].pts);
    const [goals_for, setgoals_for] = useState(store.soccer_stats_teams[params.theid].goals_for);
    const [goals_against, setgoals_against] = useState(store.soccer_stats_teams[params.theid].goals_against);

    const [more_2_5_goals, setmore_2_5_goals] = useState(store.soccer_stats_teams[params.theid].more_2_5_goals);
    const [less_2_5_goals, setless_2_5_goals] = useState(store.soccer_stats_teams[params.theid].less_2_5_goals);
    const [zero_goal_against, setzero_goal_against] = useState(store.soccer_stats_teams[params.theid].zero_goal_against);
    const [zero_goals_for, setzero_goals_for] = useState(store.soccer_stats_teams[params.theid].zero_goals_for);
    const [ties, setties] = useState(store.soccer_stats_teams[params.theid].ties);

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);
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

        fetch("https://sportsdata365.com/stats_soccer_team/"+ store.soccer_stats_teams[params.theid].id, {
            method: "PUT",
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
    const delet_team_nfl_stat = e => {
        fetch("https://sportsdata365.com/stats_soccer_team/" + store.soccer_stats_teams[params.theid].id, {
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
                        <input className="form-control selectInner" type="text" placeholder="Team" aria-label="Team" defaultValue={store.soccer_stats_teams[params.theid].name} onChange={e => setname(e.target.value)} required />
                    </div>
                    <div className="text-center col-3 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" defaultValue={store.soccer_stats_teams[params.theid].season} onChange={e => setSeason(e.target.value)} defaultValue={2021} required>
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
                        <select className="form-select" name="league" aria-label="set league" defaultValue={store.soccer_stats_teams[params.theid].league} onChange={e => setleague(e.target.value)} required>
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
                        <input className="form-control selectInner" type="text" placeholder="Position" aria-label="Position" defaultValue={store.soccer_stats_teams[params.theid].position} onChange={e => setposition(e.target.value)} required />
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
                            <input className="form-control selectInner" type="text" placeholder="Matches" aria-label="default input example" defaultValue={store.soccer_stats_teams[params.theid].matches} onChange={e => setmatches(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Win" aria-label="default input example" defaultValue={store.soccer_stats_teams[params.theid].win} onChange={e => setwin(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Loss" aria-label="default input example" defaultValue={store.soccer_stats_teams[params.theid].loss} onChange={e => setloss(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Pts" aria-label="default input example" defaultValue={store.soccer_stats_teams[params.theid].pts} onChange={e => setPts(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Goals For" aria-label="default input example" defaultValue={store.soccer_stats_teams[params.theid].goals_for} onChange={e => setgoals_for(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Goals Against" aria-label="default input example" defaultValue={store.soccer_stats_teams[params.theid].goals_against} onChange={e => setgoals_against(e.target.value)} required />
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
                            <input type="text" className="form-control selectInner" placeholder="More 2.5 Goals" name="rotation_home" defaultValue={store.soccer_stats_teams[params.theid].more_2_5_goals} onChange={e => setmore_2_5_goals(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Less 2.5 Goals" aria-label="default input example" defaultValue={store.soccer_stats_teams[params.theid].less_2_5_goals} onChange={e => setless_2_5_goals(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Zero Goal Gainst" aria-label="default input example" defaultValue={store.soccer_stats_teams[params.theid].zero_goal_against} onChange={e => setzero_goal_against(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Zero Goals For" aria-label="default input example" defaultValue={store.soccer_stats_teams[params.theid].zero_goals_for} onChange={e => setzero_goals_for(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ties" aria-label="default input example" defaultValue={store.soccer_stats_teams[params.theid].ties} onChange={e => setties(e.target.value)} required />
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
                {auth ? <Redirect to="/list_soccer_stats/" /> : null}
            </form>
        </div>
    )
}