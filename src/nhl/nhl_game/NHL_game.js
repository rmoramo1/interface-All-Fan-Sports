import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
export const NHL_game = () => {
    const { store } = useContext(Context);

    let date = new Date();
	let year = date.getFullYear();

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

    const [statusCrear, setStatusCrear] = useState("Pending");
    const [casino, setcasino] = useState("VIP Sportbook");
    const [rotation_home, setRotation_home] = useState("");
    const [rotation_away, setRotation_away] = useState("");
    const [yearCrear, setYearCrear] = useState(year);
    const [monthCrear, setMonthCrear] = useState("01");
    const [dayCrear, setDayCrear] = useState("01");
    let yearSend = yearCrear + "-" + monthCrear + "-" + dayCrear;
    let [yearSendCrear] = useState(yearSend);
    yearSendCrear = yearCrear + "-" + monthCrear + "-" + dayCrear;
    const [hourCrear, setHourCrear] = useState("01");
    const [minCrear, setMinCrear] = useState("01");
    let [timeCrear] = useState("01");
    timeCrear = hourCrear + ":" + minCrear;
    //
    const [away, setAway] = useState("Boston Bruins");
    const [home, sethome] = useState("Boston Bruins");
    const [puck_line_away, setPuck_line_away] = useState("");
    const [puck_line_home, setPuck_line_home] = useState("");
    const [juice_puck_away, setJuice_puck_away] = useState("");
    const [juice_puck_home, setJuice_puck_home] = useState("");
    const [moneyLineAway, setMoneyLineAway] = useState("");
    const [moneyLineHome, setMoneyLineHome] = useState("");
    const [total, setTotal] = useState("");
    const [juice_total_over, setJuice_total_over] = useState("");
    const [juice_total_under, setJuice_total_under] = useState("");
    const [tt_away, setTt_away] = useState("");
    const [juice_over_away, setJuice_over_away] = useState("");
    const [juice_under_away, setJuice_under_away] = useState("");
    const [tt_home, setTt_home] = useState("");
    const [juice_over_home, setJuice_over_home] = useState("");
    const [juice_under_home, setJuice_under_home] = useState("");
    const [final_score_away, setFinal_score_away] = useState("");
    const [final_score_home, setFinal_score_home] = useState("");
    //f5
    const [puck_away_1Q, setPuck_away_1Q] = useState("0");
    const [puck_home_1Q, setPuck_home_1Q] = useState("");
    const [juice_puck_away_1Q, setJuice_puck_away_1Q] = useState("");
    const [juice_puck_home_1Q, setJuice_puck_home_1Q] = useState("");
    const [moneyLineAway_1Q, setMoneyLineAway_1Q] = useState("");
    const [moneyLineHome_1Q, setMoneyLineHome_1Q] = useState("");
    const [total_1Q, setTotal_1Q] = useState("");
    const [Q1_juice_over, setQ1_juice_over] = useState("");
    const [Q1_juice_under, setQ1_juice_under] = useState("");
    const [tt_away_1Q, setTt_away_1Q] = useState("0");
    const [juice_over_away_1Q, setJuice_over_away_1Q] = useState("");
    const [juice_under_away_1Q, setJuice_under_away_1Q] = useState("");
    const [tt_home_1Q, setTt_home_1Q] = useState("");
    const [juice_over_home_1Q, setJuice_over_home_1Q] = useState("");
    const [juice_under_home_1Q, setjuice_under_home_1Q] = useState("");

    //second half

    const [sa_1Q, setSa_1Q] = useState("");
    const [sh_1Q, setSh_1Q] = useState("");

    const [sa_2Q, setSa_2Q] = useState("");
    const [sh_2Q, setSh_2Q] = useState("");

    const [sa_3Q, setSa_3Q] = useState("");
    const [sh_3Q, setSh_3Q] = useState("");

    let actualizar = () => {
        document.getElementById("miFormNHL").reset();
    }
    const crear = e => {
        actualizar();
        e.preventDefault();
        const body = {
            date: yearSendCrear,
            hour: timeCrear,
            status: statusCrear,
            casino: casino,
            rotation_home: rotation_home,
            rotation_away: rotation_away,
            away: away,
            home: home,

            puck_line_away: puck_line_away,
            puck_line_home: puck_line_home,
            juice_puck_away: juice_puck_away,
            juice_puck_home: juice_puck_home,
            moneyLineAway: moneyLineAway,
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
            sh_3Q: sh_3Q

        };
        
       

        fetch("https://sportsdata365.com/nhl", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("Juego se creo");

            })
            .catch(err => console.log(err));
    };

    //select
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }
    let selectMonth = [];
    for (let i = 0; i < 24; i++) {
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
        selectWeek.push(i);
    }
    let selectHour = [];
    for (let i = 0; i < 24; i++) {
        if (i < 10) {
            i = "0" + i;
            selectHour.push(i);
        } else {
            selectHour.push(i);
        }
    }
    let selectMin = [];
    for (let i = 0; i < 60; i++) {
        if (i < 10) {
            i = "0" + i;
            selectMin.push(i);
        } else {
            selectMin.push(i);
        }
    }

    return (
        <div className="container-fluid p-0 m-0 accordion" id="gameCreate_NHL" >
            <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                <h3>Create NHL Game</h3>
            </div>
            <form onSubmit={crear} id="miFormNHL">
                <div className="row g-0">
                    <div className="col-2 text-center p-1">
                        Status
                        <select className="form-select" name="status" aria-label="Default select example" onChange={e => setStatusCrear(e.target.value)} required>
                            {
                                store.status.map((index) => {
                                    return (
                                        <option key={index} name="status" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Year
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setYearCrear(e.target.value)} defaultValue={year} required>
                            {
                                selectYear.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index} >{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-1 p-1">
                        Month
                        <select className="form-select" name="month" aria-label="Default select example" onChange={e => setMonthCrear(e.target.value)} required>
                            {
                                selectMonth.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-1 p-1">
                        Day
                        <select className="form-select" name="day" aria-label="Default select example" onChange={e => setDayCrear(e.target.value)} required>
                            {
                                selectDay.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-1 p-1">
                        Hour
                        <select className="form-select" name="week" aria-label="Default select example" onChange={e => setHourCrear(e.target.value)} required>
                            {
                                selectHour.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-1 p-1">
                        Min
                        <select className="form-select" name="week" aria-label="Default select example" onChange={e => setMinCrear(e.target.value)} required>
                            {
                                selectMin.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-4">
                        <div className="row g-0">
                            <div className="btn-group my-3">
                                <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#crear-juego-nhl" aria-expanded="true" aria-controls="crear-juego-nhl">
                                  Game
                                </button>
                                <button className="btn btn-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ONEQ" aria-expanded="false" aria-controls="ONEQ">
                                    1Q
                                </button>
                                <button className="btn btn-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Scores" aria-expanded="false" aria-controls="Scores">
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
                        <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setcasino(e.target.value)}>
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
                <div className="accordion-item">
                    <div id="crear-juego-nhl" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#gameCreate_NHL">
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
                                    <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation_away" onChange={e => setRotation_away(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <select className="form-select selectInner" name="team" aria-label="Default select example" onChange={e => setAway(e.target.value)} required>
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
                                    <input className="form-control selectInner" type="text" placeholder="PUCK L" aria-label="default input example" onChange={e => setPuck_line_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_puck_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setMoneyLineAway(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" onChange={e => setTotal(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_total_over(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Team Total" aria-label="default input example" onChange={e => setTt_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_over_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_under_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setFinal_score_away(e.target.value)} />
                                </div>
                            </div>
                            <div className="row g-0">
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation_home" onChange={e => setRotation_home(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <select className="form-select selectInner" name="home" aria-label="Default select example" onChange={e => sethome(e.target.value)} required>
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
                                    <input className="form-control selectInner" type="text" placeholder="PUCK L" aria-label="default input example" onChange={e => setPuck_line_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_puck_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setMoneyLineHome(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="" aria-label="default input example" disabled />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_total_under(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Team Total" aria-label="default input example" onChange={e => setTt_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_over_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_under_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setFinal_score_home(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="ONEQ" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameCreate_NHL">
                        <div className="row g-0 text-center pt-3 w-100">
                            <div className="col-2 title-lines">Q1 Puck Line</div>
                            <div className="col-2 title-lines">Q1 Juice Spread</div>
                            <div className="col-2 title-lines">Q1 ML</div>
                            <div className="col-1 title-lines">Q1 Total</div>
                            <div className="col-1 title-lines">Q1 Juice T</div>
                            <div className="col-1 title-lines">Q1 TT</div>
                            <div className="col-1 title-lines">Q1 JO</div>
                            <div className="col-1 title-lines">Q1 JU</div>
                        </div>

                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Puck Line" aria-label="default input example" onChange={e => setPuck_away_1Q(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_puck_away_1Q(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setMoneyLineAway_1Q(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" onChange={e => setTotal_1Q(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH Juice A" aria-label="default input example" defaultValue={-110} onChange={e => setQ1_juice_over(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" onChange={e => setTt_away_1Q(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_over_away_1Q(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_under_away_1Q(e.target.value)} />
                            </div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Puck Line" aria-label="default input example" onChange={e => setPuck_home_1Q(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_puck_home_1Q(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setMoneyLineHome_1Q(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" aria-label="default input example" disabled />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH Juice A" aria-label="default input example" defaultValue={-110} onChange={e => setQ1_juice_under(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" onChange={e => setTt_home_1Q(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_over_home_1Q(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={-110} onChange={e => setjuice_under_home_1Q(e.target.value)} />
                            </div>
                        </div>

                    </div>
                    <div id="Scores" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameCreate_NHL">
                        <div className="row g-0 py-3">
                            <div className="col-2">
                                <div className="col-12 title-lines text-center">S 1Q</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="S 1Q" aria-label="default input example" onChange={e => setSa_1Q(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="S Q1" aria-label="default input example" onChange={e => setSh_1Q(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="col-12 title-lines text-center">S 2Q</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_2Q(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_2Q(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="col-12 title-lines text-center">S 3Q</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_3Q(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_3Q(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
            </form>
        </div>
    )
}