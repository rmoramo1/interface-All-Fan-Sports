import { useParams, Redirect } from 'react-router-dom';
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { HashLink } from 'react-router-hash-link';
export const EdithGames_nhl = (props) => {
    const params = useParams();
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

    const [status, setStatus] = useState(store.nhlGames[params.theid].status);
    const [casino, setcasino] = useState(store.nhlGames[params.theid].casino);
    const [rotation_home, setRotation_home] = useState(store.nhlGames[params.theid].rotation_home);
    const [rotation_away, setRotation_away] = useState(store.nhlGames[params.theid].rotation_away);
    //
    const [date, setdate] = useState(store.nhlGames[params.theid].date);
    const [hour, sethour] = useState(store.nhlGames[params.theid].hour);

    const [away, setAway] = useState(store.nhlGames[params.theid].away);
    const [home, setHome] = useState(store.nhlGames[params.theid].home);
    const [puck_line_away, setpuck_line_away] = useState(store.nhlGames[params.theid].puck_line_away);
    const [puck_line_home, setpuck_line_home] = useState(store.nhlGames[params.theid].puck_line_home);
    const [juice_puck_away, setjuice_puck_away] = useState(store.nhlGames[params.theid].juice_puck_away);
    const [juice_puck_home, setjuice_puck_home] = useState(store.nhlGames[params.theid].juice_puck_home);
    const [moneyLineAway, setMoneyLineAway] = useState(store.nhlGames[params.theid].moneyLineAway);
    const [moneyLineHome, setMoneyLineHome] = useState(store.nhlGames[params.theid].moneyLineHome);
    const [total, setTotal] = useState(store.nhlGames[params.theid].total);
    const [juice_total_over, setJuice_total_over] = useState(store.nhlGames[params.theid].juice_total_over);
    const [juice_total_under, setJuice_total_under] = useState(store.nhlGames[params.theid].juice_total_under);
    const [tt_away, setTt_away] = useState(store.nhlGames[params.theid].tt_away);
    const [juice_over_away, setJuice_over_away] = useState(store.nhlGames[params.theid].juice_over_away);
    const [juice_under_away, setJuice_under_away] = useState(store.nhlGames[params.theid].juice_under_away);
    const [tt_home, setTt_home] = useState(store.nhlGames[params.theid].tt_home);
    const [juice_over_home, setJuice_over_home] = useState(store.nhlGames[params.theid].juice_over_home);
    const [juice_under_home, setJuice_under_home] = useState(store.nhlGames[params.theid].juice_under_home);
    const [final_score_away, setFinal_score_away] = useState(store.nhlGames[params.theid].final_score_away);
    const [final_score_home, setFinal_score_home] = useState(store.nhlGames[params.theid].final_score_home);
    //f5
    const [puck_away_1Q, setpuck_away_1Q] = useState(store.nhlGames[params.theid].puck_away_1Q);
    const [puck_home_1Q, setpuck_home_1Q] = useState(store.nhlGames[params.theid].puck_home_1Q);
    const [juice_puck_away_1Q, setjuice_puck_away_1Q] = useState(store.nhlGames[params.theid].juice_puck_away_1Q);
    const [juice_puck_home_1Q, setjuice_puck_home_1Q] = useState(store.nhlGames[params.theid].juice_puck_home_1Q);
    const [moneyLineAway_1Q, setmoneyLineAway_1Q] = useState(store.nhlGames[params.theid].moneyLineAway_1Q);
    const [moneyLineHome_1Q, setmoneyLineHome_1Q] = useState(store.nhlGames[params.theid].moneyLineHome_1Q);
    const [total_1Q, settotal_1Q] = useState(store.nhlGames[params.theid].total_1Q);
    const [Q1_juice_over, setQ1_juice_over] = useState(store.nhlGames[params.theid].Q1_juice_over);
    const [Q1_juice_under, setQ1_juice_under] = useState(store.nhlGames[params.theid].Q1_juice_under);
    const [tt_away_1Q, settt_away_1Q] = useState(store.nhlGames[params.theid].tt_away_1Q);
    const [juice_over_away_1Q, setjuice_over_away_1Q] = useState(store.nhlGames[params.theid].juice_over_away_1Q);
    const [juice_under_away_1Q, setjuice_under_away_1Q] = useState(store.nhlGames[params.theid].juice_under_away_1Q);
    const [tt_home_1Q, settt_home_1Q] = useState(store.nhlGames[params.theid].tt_home_1Q);
    const [juice_over_home_1Q, setjuice_over_home_1Q] = useState(store.nhlGames[params.theid].juice_over_home_1Q);
    const [juice_under_home_1Q, setjuice_under_home_1Q] = useState(store.nhlGames[params.theid].juice_under_home_1Q);

    //second half

    const [sa_1Q, setsa_1Q] = useState(store.nhlGames[params.theid].sa_1Q);
    const [sh_1Q, setsh_1Q] = useState(store.nhlGames[params.theid].sh_1Q);

    const [sa_2Q, setsa_2Q] = useState(store.nhlGames[params.theid].sa_2Q);
    const [sh_2Q, setsh_2Q] = useState(store.nhlGames[params.theid].sh_2Q);

    const [sa_3Q, setsa_3Q] = useState(store.nhlGames[params.theid].sa_3Q);
    const [sh_3Q, setsh_3Q] = useState(store.nhlGames[params.theid].sh_3Q);

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);

    }
    const crear = e => {
        e.preventDefault();
        const body = {
            status: status,
            casino: casino,
            rotation_home: rotation_home,
            rotation_away: rotation_away,
            away: away,
            home: home,
            date: date,
            hour: hour,

            puck_line_away: puck_line_away,
            puck_line_home: puck_line_home,
            juice_puck_away: juice_puck_away,
            juice_puck_home: juice_puck_home,
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

            puck_away_1Q: puck_away_1Q,
            puck_home_1Q: puck_home_1Q,
            juice_puck_away_1Q: juice_puck_away_1Q,
            juice_puck_home_1Q: juice_puck_home_1Q,
            moneyLineAway_1Q: moneyLineAway_1Q,
            moneyLineHome_1Q: moneyLineHome_1Q,
            total_1Q: total_1Q,

            Q1_juice_over: Q1_juice_over,
            Q1_juice_under: Q1_juice_under,
            tt_away_1Q: tt_away_1Q,
            juice_over_away_1Q: juice_over_away_1Q,
            juice_under_away_1Q: juice_under_away_1Q,
            tt_home_1Q: tt_home_1Q,
            juice_over_home_1Q: juice_over_home_1Q,
            juice_under_home_1Q: juice_under_home_1Q,

            sa_1Q: sa_1Q,
            sh_1Q: sh_1Q,
            sa_2Q: sa_2Q,
            sh_2Q: sh_2Q,
            sa_3Q: sa_3Q,
            sh_3Q: sh_3Q,
        };
        fetch("https://interfaceroy.herokuapp.com/nhl/" + store.nhlGames[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000/",
                "Access-Control-Allow-Methods": "PUT"
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
        fetch("https://interfaceroy.herokuapp.com/nhl/" + store.nhlGames[params.theid].id, {
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
    let selectMonth = [];
    for (let i = 1; i < 13; i++) {
        if (i < 10) {
            i = "0" + i;
            selectMonth.push(i);
        } else {
            selectMonth.push(i);
        }
    }
    let selectDay = [];
    for (let i = 1; i < 32; i++) {
        if (i < 10) {
            i = "0" + i;
            selectDay.push(i);
        } else {
            selectDay.push(i);
        }
    }
    let selectWeek = [];
    for (let i = 1; i < 53; i++) {
        if (i < 10) {
            i = "0" + i;
            selectWeek.push(i);
        } else {
            selectWeek.push(i);
        }
    }
    let selectHour = [];
    for (let i = 1; i < 13; i++) {
        if (i < 10) {
            i = "0" + i;
            selectHour.push(i);
        } else {
            selectHour.push(i);
        }
    }
    let selectMin = [];
    for (let i = 1; i < 60; i++) {
        if (i < 10) {
            i = "0" + i;
            selectMin.push(i);
        } else {
            selectMin.push(i);
        }
    }
    return (
        <div className="container-fluid accordion" id="gameEditar_nhl" >
            <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                <div className="row g-0 w-100">
                    <div className="col-6">
                        <h4 className="fw-bold text-center">Edith Game </h4>
                    </div>
                    <div className="col-6">
                        <h4>
                            {store.nhlGames[params.theid].away} vrs {store.nhlGames[params.theid].home}
                        </h4>
                    </div>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="col-2 text-center p-1">
                        Status
                        <select className="form-select" name="status" aria-label="Default select example" defaultValue={store.nhlGames[params.theid].status} onChange={e => setStatus(e.target.value)} required>
                            {
                                store.status.map((index) => {
                                    return (
                                        <option key={index} name="status" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-4">
                        <div className="row g-0">
                            <div className="btn-group my-3">
                                <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#editar-juego-nhl" aria-expanded="true" aria-controls="editar-juego-nhl">
                                    Game
                                </button>
                                <button className="btn btn-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#OneQ" aria-expanded="false" aria-controls="OneQ">
                                    1Q
                                </button>
                                <button className="btn btn-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#editarsixinning" aria-expanded="false" aria-controls="editarsixinning">
                                    Quarters Score
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-0">

                    <div className="col-3">
                        <div className="col-12 text-center">
                            Casino <span className="fst-italic small ">*no required</span>
                        </div>
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.nhlGames[params.theid].casino} onChange={e => setcasino(e.target.value)}>
                            {
                                store.casinos.map((item, index) => {
                                    return (
                                        <option key={index} name="promotions" value={item.name}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="accordion-item ">
                    <div id="editar-juego-nhl" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#gameEditar_nhl">
                        <div>
                            <div className="row g-0 text-center pt-3 ">
                                <div className="col-1 title-lines">RT#</div>
                                <div className="col-2 title-lines">Team</div>
                                <div className="col-1 title-lines">PUCK L</div>
                                <div className="col-1 title-lines">Juice</div>
                                <div className="col-1 title-lines">ML</div>
                                <div className="col-1 title-lines">Total</div>
                                <div className="col-1 title-lines">Juice</div>
                                <div className="col-1 title-lines">TT</div>
                                <div className="col-1 title-lines">JO</div>
                                <div className="col-1 title-lines">JU</div>
                                <div className="col-1 title-lines">FS</div>
                            </div>
                            <div className="row g-0">
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation_away" defaultValue={store.nhlGames[params.theid].rotation_away} onChange={e => setRotation_away(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <select className="form-select selectInner" name="team away" aria-label="Default select example" defaultValue={store.nhlGames[params.theid].away} onChange={e => setAway(e.target.value)} required>
                                        {
                                            store.nhl_teams.map((index) => {
                                                return (
                                                    <option key={index} name="promotions" value={index}>{index}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="PUCK L" aria-label="default input example" defaultValue={store.nhlGames[params.theid].puck_line_away} onChange={e => setpuck_line_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.nhlGames[params.theid].juice_puck_away} onChange={e => setjuice_puck_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" defaultValue={store.nhlGames[params.theid].moneyLineAway} onChange={e => setMoneyLineAway(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" defaultValue={store.nhlGames[params.theid].total} onChange={e => setTotal(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.nhlGames[params.theid].juice_total_over} onChange={e => setJuice_total_over(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Team Total" aria-label="default input example" defaultValue={store.nhlGames[params.theid].tt_away} onChange={e => setTt_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={store.nhlGames[params.theid].juice_over_away} onChange={e => setJuice_over_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={store.nhlGames[params.theid].juice_under_away} onChange={e => setJuice_under_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.nhlGames[params.theid].final_score_away} onChange={e => setFinal_score_away(e.target.value)} />
                                </div>
                            </div>
                            <div className="row g-0">
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation_home" defaultValue={store.nhlGames[params.theid].rotation_home}  onChange={e => setRotation_home(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.nhlGames[params.theid].home} onChange={e => setHome(e.target.value)} required>
                                        {
                                            store.nhl_teams.map((index) => {
                                                return (
                                                    <option key={index} name="promotions" value={index}>{index}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="PUCK L" aria-label="default input example" defaultValue={store.nhlGames[params.theid].puck_line_home} onChange={e => setpuck_line_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.nhlGames[params.theid].juice_puck_home} onChange={e => setjuice_puck_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" defaultValue={store.nhlGames[params.theid].moneyLineHome} onChange={e => setMoneyLineHome(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="" aria-label="default input example" disabled />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.nhlGames[params.theid].juice_total_under} onChange={e => setJuice_total_under(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Team Total" aria-label="default input example" defaultValue={store.nhlGames[params.theid].tt_home} onChange={e => setTt_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={store.nhlGames[params.theid].juice_over_home} onChange={e => setJuice_over_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Under" aria-label="default input example" defaultValue={store.nhlGames[params.theid].juice_under_home} onChange={e => setJuice_under_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.nhlGames[params.theid].final_score_home} onChange={e => setFinal_score_home(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="OneQ" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameEditar_nhl">
                        <div className="row g-0 text-center pt-3 w-100">
                            <div className="col-2 title-lines">1Q PUCK L</div>
                            <div className="col-2 title-lines">1Q Juice Spread</div>
                            <div className="col-2 title-lines">1Q ML</div>
                            <div className="col-1 title-lines">1Q Total</div>
                            <div className="col-1 title-lines">1Q Juice T</div>
                            <div className="col-1 title-lines">1Q TT</div>
                            <div className="col-1 title-lines">1Q JO</div>
                            <div className="col-1 title-lines">1Q JU</div>
                        </div>

                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="PUCK L" aria-label="default input example" defaultValue={store.nhlGames[params.theid].puck_away_1Q} onChange={e => setpuck_away_1Q(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.nhlGames[params.theid].puck_away_1Q} onChange={e => setjuice_puck_away_1Q(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" defaultValue={store.nhlGames[params.theid].moneyLineAway_1Q} onChange={e => setmoneyLineAway_1Q(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" defaultValue={store.nhlGames[params.theid].total_1Q} onChange={e => settotal_1Q(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.nhlGames[params.theid].Q1_juice_over} onChange={e => setQ1_juice_over(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" defaultValue={store.nhlGames[params.theid].tt_away_1Q} onChange={e => settt_away_1Q(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JO A" aria-label="default input example" defaultValue={store.nhlGames[params.theid].juice_over_away_1Q} onChange={e => setjuice_over_away_1Q(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JU A" aria-label="default input example" defaultValue={store.nhlGames[params.theid].juice_under_away_1Q} onChange={e => setjuice_under_away_1Q(e.target.value)} />
                            </div>

                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="PUCK L" aria-label="default input example" defaultValue={store.nhlGames[params.theid].puck_home_1Q} onChange={e => setpuck_home_1Q(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.nhlGames[params.theid].juice_puck_home_1Q} onChange={e => setjuice_puck_home_1Q(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" defaultValue={store.nhlGames[params.theid].moneyLineHome_1Q} onChange={e => setmoneyLineHome_1Q(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" aria-label="default input example" disabled />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice A" aria-label="default input example" defaultValue={store.nhlGames[params.theid].Q1_juice_under} onChange={e => setQ1_juice_under(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" defaultValue={store.nhlGames[params.theid].tt_home_1Q} onChange={e => settt_home_1Q(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JO H" aria-label="default input example" defaultValue={store.nhlGames[params.theid].juice_over_home_1Q} onChange={e => setjuice_over_home_1Q(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JU A" aria-label="default input example" defaultValue={store.nhlGames[params.theid].juice_under_home_1Q} onChange={e => setjuice_under_home_1Q(e.target.value)} />
                            </div>
                        </div>

                    </div>
                    <div id="editarsixinning" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameEditar_nhl">
                        <div className="row g-0 py-3">
                            <div className="col-2">
                                <div className="col-12 title-lines text-center">S 1Q</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.nhlGames[params.theid].sa_1Q} onChange={e => setsa_1Q(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.nhlGames[params.theid].sh_1Q} onChange={e => setsh_1Q(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="col-12 title-lines text-center">S 2Q</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.nhlGames[params.theid].sa_2Q} onChange={e => setsa_2Q(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.nhlGames[params.theid].sh_2Q} onChange={e => setsh_2Q(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="col-12 title-lines text-center">S 3Q</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.nhlGames[params.theid].sa_3Q} onChange={e => setsa_3Q(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.nhlGames[params.theid].sh_3Q} onChange={e => setsh_3Q(e.target.value)} />
                                </div>
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