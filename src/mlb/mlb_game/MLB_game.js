import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";
export const MLB_game = () => {
    const { store } = useContext(Context);

    let date = new Date();
	let year = date.getFullYear();

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

    const [statusCrear, setStatusCrear] = useState("Pending");
    const [casino, setcasino] = useState("");
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
    const [awayCrear, setAwayCrear] = useState("Arizona Diamondbacks");
    const [pitcher_a, setPitcher_a] = useState("");
    const [HomeCrear, setHomeCrear] = useState("Arizona Diamondbacks");
    const [pitcher_h, setPitcher_h] = useState("");
    const [rl_away, setRl_away] = useState("");
    const [rl_home, setRl_home] = useState("");
    const [juice_rl_away, setJuice_rl_away] = useState("");
    const [juice_rl_home, setJuice_rl_home] = useState("");
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
    const [rl_away_f5, setRl_away_f5] = useState("0");
    const [rl_home_f5, setRl_home_f5] = useState("");
    const [juice_rl_away_f5, setJuice_rl_away_f5] = useState("");
    const [juice_rl_home_f5, setJuice_rl_home_f5] = useState("");
    const [moneyLineAway_f5, setMoneyLineAway_f5] = useState("");
    const [moneyLineHome_f5, setMoneyLineHome_f5] = useState("");
    const [total_f5, setTotal_f5] = useState("");
    const [juice_total_over_f5, setJuice_total_over_f5] = useState("");
    const [juice_total_under_f5, setJuice_total_under_f5] = useState("");
    const [tt_away_f5, setTt_away_f5] = useState("0");
    const [juice_over_away_f5, setJuice_over_away_f5] = useState("");
    const [juice_under_away_f5, setJuice_under_away_f5] = useState("");
    const [tt_home_f5, setTt_home_f5] = useState("");
    const [juice_over_home_f5, setJuice_over_home_f5] = useState("");
    const [juice_under_home_f5, setJuice_under_home_f5] = useState("");
    const [fs_away_f5, setFs_away_f5] = useState("");
    const [fs_home_f5, setFs_home_f5] = useState("");
    //second half

    const [sa_6inning, setSa_6inning] = useState("");
    const [sh_6inning, setSh_6inning] = useState("");

    const [sa_7inning, setSa_7inning] = useState("");
    const [sh_7inning, setsh_7inning] = useState("");

    const [sa_8inning, setSa_8inning] = useState("");
    const [sh_8inning, setSh_8inning] = useState("");

    const [sa_9inning, setSa_9inning] = useState("");
    const [sh_9inning, setSh_9inning] = useState("");

    const [sa_10inning, setSa_10inning] = useState("");
    const [sh_10inning, setSh_10inning] = useState("");

    const [sa_11inning, setSa_11inning] = useState("");
    const [sh_11inning, setSh_11inning] = useState("");

    const [sa_12inning, setSa_12inning] = useState("");
    const [sh_12inning, setsh_12inning] = useState("");

    const [sa_13inning, setSa_13inning] = useState("");
    const [sh_13inning, setSh_13inning] = useState("");

    const [sa_14inning, setSa_14inning] = useState("");
    const [sh_14inning, setSh_14inning] = useState("");

    const [sa_15inning, setSa_15inning] = useState("");
    const [sh_15inning, setSh_15inning] = useState("");

    const [sa_16inning, setSa_16inning] = useState("");
    const [sh_16inning, setSh_16inning] = useState("");

    const [sa_17inning, setSa_17inning] = useState("");
    const [sh_17inning, setSh_17inning] = useState("");

    const [sa_18inning, setSa_18inning] = useState("");
    const [sh_18inning, setSh_18inning] = useState("");

    const [sa_19inning, setSa_19inning] = useState("");
    const [sh_19inning, setSh_19inning] = useState("");

    const [sa_20inning, setSa_20inning] = useState("");
    const [sh_20inning, setSh_20inning] = useState("");

    const [sa_21inning, setSa_21inning] = useState("");
    const [sh_21inning, setSh_21inning] = useState("");

    const [sa_22inning, setSa_22inning] = useState("");
    const [sh_22inning, setSh_22inning] = useState("");

    const [sa_23inning, setSa_23inning] = useState("");
    const [sh_23inning, setSh_23inning] = useState("");

    const [sa_24inning, setSa_24inning] = useState("");
    const [sh_24inning, setSh_24inning] = useState("");

    const [sa_25inning, setSa_25inning] = useState("");
    const [sh_25inning, setSh_25inning] = useState("");

    const [sa_26inning, setSa_26inning] = useState("");
    const [sh_26inning, setSh_26inning] = useState("");

    const [sa_27inning, setSa_27inning] = useState("");
    const [sh_27inning, setSh_27inning] = useState("");

    const [sa_28inning, setSa_28inning] = useState("");
    const [sh_28inning, setSh_28inning] = useState("");

    const [sa_29inning, setSa_29inning] = useState("");
    const [sh_29inning, setSh_29inning] = useState("");

    const [sa_30inning, setSa_30inning] = useState("");
    const [sh_30inning, setSh_30inning] = useState("");

    const [sa_31inning, setSa_31inning] = useState("");
    const [sh_31inning, setSh_31inning] = useState("");

    const [sa_32inning, setSa_32inning] = useState("");
    const [sh_32inning, setSh_32inning] = useState("");

    const [sa_33inning, setSa_33inning] = useState("");
    const [sh_33inning, setSh_33inning] = useState("");

    const [sa_34inning, setSa_34inning] = useState("");
    const [sh_34inning, setSh_34inning] = useState("");
    //Q4
    const [sa_35inning, setSa_35inning] = useState("");
    const [sh_35inning, setSh_35inning] = useState("");

    const [sa_36inning, setSa_36inning] = useState("");
    const [sh_36inning, setSh_36inning] = useState("");

    const [sa_37inning, setSa_37inning] = useState("");
    const [sh_37inning, seSsh_37inning] = useState("");

    const [sa_38inning, setSa_38inning] = useState("");
    const [sh_38inning, setSh_38inning] = useState("");

    const [sa_39inning, setSa_39inning] = useState("");
    const [sh_39inning, setSh_39inning] = useState("");

    const [sa_40inning, setSa_40inning] = useState("");
    const [sh_40inning, setSh_40inning] = useState("");
    const [auth, setAuth] = useState(false);


    let actualizar = () => {
        document.getElementById("miFormMLB").reset();
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
            away: awayCrear,
            home: HomeCrear,

            pitcher_a: pitcher_a,
            pitcher_h: pitcher_h,
            rl_away: rl_away,
            rl_home: rl_home,
            juice_rl_away: juice_rl_away,
            juice_rl_home: juice_rl_home,
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

            rl_away_f5: rl_away_f5,
            rl_home_f5: rl_home_f5,
            juice_rl_away_f5: juice_rl_away_f5,
            juice_rl_home_f5: juice_rl_home_f5,
            moneyLineAway_f5: moneyLineAway_f5,
            moneyLineHome_f5: moneyLineHome_f5,
            total_f5: total_f5,

            juice_total_over_f5: juice_total_over_f5,
            juice_total_under_f5: juice_total_under_f5,
            tt_away_f5: tt_away_f5,
            juice_over_away_f5: juice_over_away_f5,
            juice_under_away_f5: juice_under_away_f5,
            tt_home_f5: tt_home_f5,
            juice_over_home_f5: juice_over_home_f5,
            juice_under_home_f5: juice_under_home_f5,

            fs_away_f5: fs_away_f5,
            fs_home_f5: fs_home_f5,

            sa_6inning: sa_6inning,
            sh_6inning: sh_6inning,
            sa_7inning: sa_7inning,
            sh_7inning: sh_7inning,
            sa_8inning: sa_8inning,
            sh_8inning: sh_8inning,

            sa_9inning: sa_9inning,
            sh_9inning: sh_9inning,
            sa_10inning: sa_10inning,
            sh_10inning: sh_10inning,
            sa_11inning: sa_11inning,
            sh_11inning: sh_11inning,
            sa_12inning: sa_12inning,
            sh_12inning: sh_12inning,

            sa_13inning: sa_13inning,
            sh_13inning: sh_13inning,
            sa_14inning: sa_14inning,
            sh_14inning: sh_14inning,
            sa_15inning: sa_15inning,
            sh_15inning: sh_15inning,
            sa_16inning: sa_16inning,
            sh_16inning: sh_16inning,

            sa_17inning: sa_17inning,
            sh_17inning: sh_17inning,
            sa_18inning: sa_18inning,
            sh_18inning: sh_18inning,
            sa_19inning: sa_19inning,
            sh_19inning: sh_19inning,
            sa_20inning: sa_20inning,
            sh_20inning: sh_20inning,
            sa_21inning: sa_21inning,
            sh_21inning: sh_21inning,
            sa_22inning: sa_22inning,
            sh_22inning: sh_22inning,

            sa_23inning: sa_23inning,
            sh_23inning: sh_23inning,
            sa_24inning: sa_24inning,
            sh_24inning: sh_24inning,
            sa_25inning: sa_25inning,
            sh_25inning: sh_25inning,

            sa_26inning: sa_26inning,
            sh_26inning: sh_26inning,
            sa_27inning: sa_27inning,
            sh_27inning: sh_27inning,
            sa_28inning: sa_28inning,
            sh_28inning: sh_28inning,
            sa_29inning: sa_29inning,
            sh_29inning: sh_29inning,
            sa_30inning: sa_30inning,
            sh_30inning: sh_30inning,

            sa_31inning: sa_31inning,
            sh_31inning: sh_31inning,
            sa_32inning: sa_32inning,
            sh_32inning: sh_32inning,
            sa_33inning: sa_33inning,
            sh_33inning: sh_33inning,
            sa_34inning: sa_34inning,
            sh_34inning: sh_34inning,

            sa_35inning: sa_35inning,
            sh_35inning: sh_35inning,
            sa_36inning: sa_36inning,
            sh_36inning: sh_36inning,
            sa_37inning: sa_37inning,
            sh_37inning: sh_37inning,
            sa_38inning: sa_38inning,
            sh_38inning: sh_38inning,
            sa_39inning: sa_39inning,
            //--home
            sh_39inning: sh_39inning,
            sa_40inning: sa_40inning,
            sh_40inning: sh_40inning

        };
        
       

        fetch("https://sportsdata365.com/mlb", {
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
        <div className="container-fluid p-0 m-0 accordion" id="gameCreate_MLB" >
            <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                <h3>Create MLB Game</h3>
            </div>
            <form onSubmit={crear} id="miFormMLB">
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
                                <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#crear-juego" aria-expanded="true" aria-controls="crear-juego">
                                    Game
                                </button>
                                <button className="btn btn-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#first5" aria-expanded="false" aria-controls="first5">
                                    F5
                                </button>
                                <button className="btn btn-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sixinning" aria-expanded="false" aria-controls="sixinning">
                                    6-9 Inning score
                                </button>
                                <button className="btn btn-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#extrainning" aria-expanded="false" aria-controls="extrainning">
                                    Extra Inning score
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
                    <div className="col-3 text-center">
                        <div className="col-12">
                            Pitcher Away
                        </div>
                        <div className="col-12">
                        <input className="form-control selectInner" type="text" placeholder="Pitcher Away" aria-label="default input example" onChange={e => setPitcher_a(e.target.value)} required />
                        </div>
                    </div>
                    <div className="col-3 text-center">
                        <div className="col-12">
                            Pitcher Home
                        </div>
                        <div className="col-12">
                        <input className="form-control selectInner" type="text" placeholder="Pitcher Home" aria-label="default input example" onChange={e => setPitcher_h(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="accordion-item ">
                    <div id="crear-juego" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#gameCreate_MLB">
                        <div>
                            <div className="row g-0 text-center pt-3 ">
                                <div className="col-1 title-lines">RT#</div>
                                <div className="col-2 title-lines">Team</div>
                                <div className="col-1 title-lines">RL</div>
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
                                    <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setAwayCrear(e.target.value)} required>
                                        {
                                            store.mlb_teams.map((index) => {
                                                return (
                                                    <option key={index} name="promotions" value={index}>{index}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="RL" aria-label="default input example" onChange={e => setRl_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_rl_away(e.target.value)} required />
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
                                    <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setHomeCrear(e.target.value)} required>
                                        {
                                            store.mlb_teams.map((index) => {
                                                return (
                                                    <option key={index} name="promotions" value={index}>{index}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="RL" aria-label="default input example" onChange={e => setRl_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_rl_home(e.target.value)} required />
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
                    <div id="first5" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameCreate_MLB">
                        <div className="row g-0 text-center pt-3 w-100">
                            <div className="col-2 title-lines">F5 Rl</div>
                            <div className="col-2 title-lines">F5 Juice Spread</div>
                            <div className="col-2 title-lines">F5 ML</div>
                            <div className="col-1 title-lines">F5 Total</div>
                            <div className="col-1 title-lines">F5 Juice T</div>
                            <div className="col-1 title-lines">F5 TT</div>
                            <div className="col-1 title-lines">F5 JO</div>
                            <div className="col-1 title-lines">F5 JU</div>
                            <div className="col-1 title-lines">F5 FS</div>
                        </div>

                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Rl F5" aria-label="default input example" onChange={e => setRl_away_f5(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_rl_away_f5(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setMoneyLineAway_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" onChange={e => setTotal_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH Juice A" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_total_over_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" onChange={e => setTt_away_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_over_away_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_under_away_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setFs_away_f5(e.target.value)} />
                            </div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Rl F5" aria-label="default input example" onChange={e => setRl_home_f5(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_rl_home_f5(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setMoneyLineHome_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" aria-label="default input example" disabled />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH Juice A" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_total_under_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" onChange={e => setTt_home_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_over_home_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={-110} onChange={e => setJuice_under_home_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setFs_home_f5(e.target.value)} />
                            </div>
                        </div>

                    </div>
                    <div id="sixinning" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameCreate_MLB">
                        <div className="row g-0 py-3">
                            <div className="col-2">
                                <div className="col-12 title-lines text-center">Inning 6</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_6inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_6inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="col-12 title-lines text-center">Inning 7</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_7inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setsh_7inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="col-12 title-lines text-center">Inning 8</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_8inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_8inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="col-12 title-lines text-center">Inning 9</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_9inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_9inning(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="extrainning" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameCreate_MLB">
                        <div className="row g-0 py-3">
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 10</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_10inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_10inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 11</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_11inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_11inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 12</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_12inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setsh_12inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 13</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_13inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_13inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 14</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_14inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_14inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 15</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_15inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_15inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 16</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_16inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_16inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 17</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_17inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_17inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 18</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_18inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_18inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 19</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_19inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_19inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 20</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_20inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_20inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 21</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_21inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_21inning(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="row g-0 py-3">
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 22</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_22inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_22inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 23</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_23inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_23inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 24</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_24inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_24inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 25</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_25inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_25inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 26</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_26inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_26inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 27</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_27inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_27inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 28</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_28inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_28inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 29</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_29inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_29inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 30</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_30inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_30inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 31</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_31inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_31inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 32</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_32inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_32inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 33</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_33inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_33inning(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="row g-0 py-3">
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 34</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_34inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_34inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 35</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_35inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_35inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 36</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_36inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_36inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 37</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_37inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => seSsh_37inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 38</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_38inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_38inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 39</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_39inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_39inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 40</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSa_40inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSh_40inning(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
            </form>
            {auth ? <Redirect to="/listGameMLB/" /> : null}
        </div>
    )
}