import { useParams, Redirect } from 'react-router-dom';
import React, { useState, useContext ,useEffect } from "react";
import { Context } from "../../store/appContext";
import { HashLink } from 'react-router-hash-link';
export const EdithGames_Soccer = (props) => {
    const params = useParams();
    const { store } = useContext(Context);

        useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);
        
        if(!user){
            window.location.href = '/';
        }
    }, [])

    const [statusCrear, setStatusCrear] = useState(store.soccer[params.theid].status);
    const [casino, setCasino] = useState(store.soccer[params.theid].casino);
    const [rotation_home, setRotation_home] = useState(store.soccer[params.theid].rotation_home);
    const [rotation_away, setRotation_away] = useState(store.soccer[params.theid].rotation_away);
    const [date, setdate] = useState(store.soccer[params.theid].date);
    const [hour, sethour] = useState(store.soccer[params.theid].hour);

    const [tournament, settournament] = useState(store.soccer[params.theid].tournament);
    const [country, setcountry] = useState(store.soccer[params.theid].country);
    const [away, setaway] = useState(store.soccer[params.theid].away);
    const [home, sethome] = useState(store.soccer[params.theid].home);
    //
    const [goal_line_away, setgoal_line_away] = useState(store.soccer[params.theid].goal_line_away);
    const [goal_line_home, setgoal_line_home] = useState("-");
    const [juice_goal_away, setjuice_goal_away] = useState(store.soccer[params.theid].juice_goal_away);
    const [juice_goal_home, setjuice_goal_home] = useState(store.soccer[params.theid].juice_goal_home);
    const [moneyLineAway, setmoneyLineAway] = useState(store.soccer[params.theid].moneyLineAway);
    const [moneyLineHome, setmoneyLineHome] = useState(store.soccer[params.theid].moneyLineHome);
    const [total, settotal] = useState(store.soccer[params.theid].total);
    const [juice_total_over, setjuice_total_over] = useState(store.soccer[params.theid].juice_total_over);
    const [juice_total_under, setjuice_total_under] = useState(store.soccer[params.theid].juice_total_under);
    const [tt_away, settt_away] = useState(store.soccer[params.theid].tt_away);
    const [juice_over_away, setjuice_over_away] = useState(store.soccer[params.theid].juice_over_away);
    const [juice_under_away, setjuice_under_away] = useState(store.soccer[params.theid].juice_under_away);
    const [tt_home, settt_home] = useState(store.soccer[params.theid].tt_home);
    const [juice_over_home, setjuice_over_home] = useState(store.soccer[params.theid].juice_over_home);
    const [juice_under_home, setjuice_under_home] = useState(store.soccer[params.theid].juice_under_home);
    const [final_score_away, setfinal_score_away] = useState(store.soccer[params.theid].final_score_away);
    const [final_score_home, setfinal_score_home] = useState(store.soccer[params.theid].final_score_home);
    //first half
    const [goal_away_1H, setgoal_away_1H] = useState(store.soccer[params.theid].goal_away_1H);
    const [goal_home_1H, setgoal_home_1H] = useState(store.soccer[params.theid].goal_home_1H);
    const [juice_goal_away_1H, setjuice_goal_away_1H] = useState(store.soccer[params.theid].juice_goal_away_1H);
    const [juice_goal_home_1H, setjuice_goal_home_1H] = useState(store.soccer[params.theid].juice_goal_home_1H);
    const [moneyLineAway_1H, setmoneyLineAway_1H] = useState(store.soccer[params.theid].moneyLineAway_1H);
    const [moneyLineHome_1H, setmoneyLineHome_1H] = useState(store.soccer[params.theid].moneyLineHome_1H);
    const [total_1H, settotal_1H] = useState(store.soccer[params.theid].total_1H);
    const [H1_juice_over, setH1_juice_over] = useState(store.soccer[params.theid].H1_juice_over);
    const [H1_juice_under, setH1_juice_under] = useState(store.soccer[params.theid].H1_juice_under);
    const [tt_away_1H, settt_away_1H] = useState(store.soccer[params.theid].tt_away_1H);
    const [juice_over_away_1H, setjuice_over_away_1H] = useState(store.soccer[params.theid].juice_over_away_1H);
    const [juice_under_away_1H, setjuice_under_away_1H] = useState(store.soccer[params.theid].juice_under_away_1H);
    const [tt_home_1H, settt_home_1H] = useState(store.soccer[params.theid].tt_home_1H);
    const [juice_over_home_1H, setjuice_over_home_1H] = useState(store.soccer[params.theid].juice_over_home_1H);
    const [juice_under_home_1H, setjuice_under_home_1H] = useState(store.soccer[params.theid].juice_under_home_1H);

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);

    }
    const crear = e => {
        e.preventDefault();
        const body = {
            date: date,
            hour: hour,
            status: statusCrear,
            casino: casino,
            tournament: tournament,
            country: country,
            rotation_home: rotation_home,
            rotation_away: rotation_away,
            away: away,
            home: home,
            goal_line_away: goal_line_away,
            goal_line_home: goal_line_home,
            juice_goal_away: juice_goal_away,
            juice_goal_home: juice_goal_home,
            moneyLineAway: moneyLineAway,
            moneyLineHome: moneyLineHome,
            total: total,
            juice_total_over: juice_total_over,
            juice_total_under: juice_total_under,
            tt_away: tt_away,
            juice_over_away: juice_over_away,
            juice_under_away: juice_under_away,
            tt_home: tt_home,
            juice_over_home: juice_over_home,
            juice_under_home: juice_under_home,
            final_score_away: final_score_away,
            final_score_home: final_score_home,
            //first half
            //--away
            goal_away_1H: goal_away_1H,
            goal_home_1H: goal_home_1H,
            juice_goal_away_1H: juice_goal_away_1H,
            juice_goal_home_1H: juice_goal_home_1H,
            moneyLineAway_1H: moneyLineAway_1H,
            moneyLineHome_1H: moneyLineHome_1H,
            total_1H: total_1H,
            H1_juice_over: H1_juice_over,
            H1_juice_under: H1_juice_under,
            tt_away_1H: tt_away_1H,
            juice_over_away_1H: juice_over_away_1H,
            juice_under_away_1H: juice_under_away_1H,
            tt_home_1H: tt_home_1H,
            juice_over_home_1H: juice_over_home_1H,
            juice_under_home_1H: juice_under_home_1H,

        };
        
       
        fetch("https://sportsdata365.com/soccer/" + store.soccer[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("juego se creo");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));

    };
    const delet = e => {
        fetch("https://sportsdata365.com/soccer/" + store.soccer[params.theid].id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .catch(err => console.log(err));
        setAuth(true);
        actualizar();
    };


    return (
        <div className="container-fluid accordion" id="gameEdith" >
            <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                <div className="row g-0 w-100">
                    <div className="col-6">
                        <h4 className="fw-bold text-center">Edith Game </h4>
                    </div>
                    <div className="col-6">
                        <h4>
                            {store.soccer[params.theid].away} vrs {store.soccer[params.theid].home}
                        </h4>
                    </div>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="col-2">
                        <div className="col-12 text-center px-1">
                            Casino
                            <select className="form-select" name="casinos" aria-label="Default select example" defaultValue={store.soccer[params.theid].casino} onChange={e => setCasino(e.target.value)} required>
                                {
                                    store.casinos.map((item, index) => {
                                        return (
                                            <option key={index} name="casinos" value={item.name}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-12 text-center px-1">
                            Status
                            <select className="form-select" name="status" aria-label="Default select example" defaultValue={store.soccer[params.theid].status} onChange={e => setStatusCrear(e.target.value)} required>
                                {
                                    store.status.map((index) => {
                                        return (
                                            <option key={index} name="promotions" value={index}>{index}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                    </div>
                    <div className="col-10 d-flex align-items-center">
                        <div className="row g-0 w-100 ps-5">
                            <div className="col-4">
                                <div className="row g-0 py-3">
                                    <button className="btn rounded-start accordion-button col-4 justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#crear-juego" aria-expanded="true" aria-controls="crear-juego">
                                        Game
                                    </button>
                                    <button className="btn accordion-button collapsed col-4 justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#firstHalf" aria-expanded="false" aria-controls="firstHalf">
                                        1st Half
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item ">
                    <div id="crear-juego" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#gameEdith">
                        <div>
                            <div className="row g-0 text-center pt-3 ">
                                <div className="col-1 title-lines">RT #</div>
                                <div className="col-2 title-lines">Team</div>
                                <div className="col-1 title-lines">Goal Line</div>
                                <div className="col-1 title-lines">Juice</div>
                                <div className="col-1 title-lines">ML</div>
                                <div className="col-1 title-lines">Total</div>
                                <div className="col-1 title-lines">Juice</div>
                                <div className="col-1 title-lines">TT</div>
                                <div className="col-1 title-lines">J O</div>
                                <div className="col-1 title-lines">J U</div>
                                <div className="col-1 title-lines">F S</div>
                            </div>
                            <div className="row g-0">
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation_away" defaultValue={store.soccer[params.theid].rotation_away} onChange={e => setRotation_away(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <input className="form-control selectInner" type="text" placeholder="Away" aria-label="default input example" defaultValue={store.soccer[params.theid].away} onChange={e => setaway(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="GL" aria-label="default input example" defaultValue={store.soccer[params.theid].goal_line_away} onChange={e => setgoal_line_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.soccer[params.theid].juice_goal_away} onChange={e => setjuice_goal_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" defaultValue={store.soccer[params.theid].moneyLineAway} onChange={e => setmoneyLineAway(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" defaultValue={store.soccer[params.theid].total} onChange={e => settotal(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.soccer[params.theid].juice_total_over} onChange={e => setjuice_total_over(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Team Total" aria-label="default input example" defaultValue={store.soccer[params.theid].tt_away} onChange={e => settt_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={store.soccer[params.theid].juice_over_away} onChange={e => setjuice_over_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={store.soccer[params.theid].juice_under_away} onChange={e => setjuice_under_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={store.soccer[params.theid].final_score_away} onChange={e => setfinal_score_away(e.target.value)} />
                                </div>
                            </div>
                            <div className="row g-0">
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation_home" defaultValue={store.soccer[params.theid].rotation_home} onChange={e => setRotation_home(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <input className="form-control selectInner" type="text" placeholder="Home" aria-label="default input example" defaultValue={store.soccer[params.theid].home} onChange={e => sethome(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="GL" aria-label="default input example" defaultValue={store.soccer[params.theid].goal_line_home} onChange={e => setgoal_line_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.soccer[params.theid].juice_goal_home} onChange={e => setjuice_goal_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" defaultValue={store.soccer[params.theid].moneyLineHome} onChange={e => setmoneyLineHome(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="" aria-label="default input example" disabled />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.soccer[params.theid].juice_total_under} onChange={e => setjuice_total_under(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Team Total" aria-label="default input example" defaultValue={store.soccer[params.theid].tt_home} onChange={e => settt_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={store.soccer[params.theid].juice_over_home} onChange={e => setjuice_over_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={store.soccer[params.theid].juice_under_home} onChange={e => setjuice_under_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.soccer[params.theid].final_score_home} onChange={e => setfinal_score_home(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="firstHalf" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameEdith">
                        <div className="row g-0 text-center pt-3 w-100">
                            <div className="col-2 title-lines">FH GL</div>
                            <div className="col-2 title-lines">FH Juice Spread</div>
                            <div className="col-2 title-lines">FH ML</div>
                            <div className="col-1 title-lines">FH Total</div>
                            <div className="col-1 title-lines">FH Juice T</div>
                            <div className="col-1 title-lines">FH TT</div>
                            <div className="col-1 title-lines">FH JO</div>
                            <div className="col-1 title-lines">FH JU</div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH GL" aria-label="default input example" defaultValue={store.soccer[params.theid].goal_away_1H} onChange={e => setgoal_away_1H(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.soccer[params.theid].juice_goal_away_1H} onChange={e => setjuice_goal_away_1H(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" defaultValue={store.soccer[params.theid].moneyLineAway_1H} onChange={e => setmoneyLineAway_1H(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" defaultValue={store.soccer[params.theid].total_1H} onChange={e => settotal_1H(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH Juice A" aria-label="default input example" defaultValue={store.soccer[params.theid].H1_juice_over} onChange={e => setH1_juice_over(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" defaultValue={store.soccer[params.theid].tt_away_1H} onChange={e => settt_away_1H(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={store.soccer[params.theid].juice_over_away_1H} onChange={e => setjuice_over_away_1H(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={store.soccer[params.theid].juice_under_away_1H} onChange={e => setjuice_under_away_1H(e.target.value)} />
                            </div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH GL" aria-label="default input example" defaultValue={store.soccer[params.theid].goal_home_1H} onChange={e => setgoal_home_1H(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.soccer[params.theid].juice_goal_home_1H} onChange={e => setjuice_goal_home_1H(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" defaultValue={store.soccer[params.theid].moneyLineHome_1H} onChange={e => setmoneyLineHome_1H(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" aria-label="default input example" disabled />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH Juice H" aria-label="default input example" defaultValue={store.soccer[params.theid].H1_juice_under} onChange={e => setH1_juice_under(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" defaultValue={store.soccer[params.theid].tt_home_1H} onChange={e => settt_home_1H(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JOH" aria-label="default input example" defaultValue={store.soccer[params.theid].juice_over_home_1H} onChange={e => setjuice_over_home_1H(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JUH" aria-label="default input example" defaultValue={store.soccer[params.theid].juice_under_home_1H} onChange={e => setjuice_under_home_1H(e.target.value)} />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 p-3 text-end">
                        <HashLink className="btn btn-secondary  text-white" to="/admin">Back to Admin</HashLink>
                    </div>
                    <div className="col-4 text-center p-3">
                        <button type="submit" className="btn btn-success">Edit</button>
                    </div>
                    <div className="col-4 text-start p-3">
                        <div data-bs-toggle="modal" data-bs-target="#delete" className="btn btn-danger">Delet</div>
                    </div>
                </div>
            </form>
            <div className="modal fade" id="delete" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content overflow-hidden">
                        <div className="col-12 text-center text-white bg-danger text-uppercase fs-5 py-3">
                            <i className="fas fa-exclamation-triangle fs-1"></i><br />are you sure you want to delete the match
                        </div>
                        <div className="row g-0">
                            <div className="col-6 p-2 text-center">
                                <button className="btn btn-danger" onClick={delet} data-bs-dismiss="modal">Yes Delete</button>
                                {auth ? <Redirect to="/admin" /> : null}
                            </div>
                            <div className="col-6 p-2 text-center">
                                <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}