import React, { useState, useContext, useEffect } from "react";
import {  Redirect } from 'react-router-dom';
import { Context } from "../../store/appContext";
export const Ncaa_Basket_game = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

    const [statusCrear, setStatusCrear] = useState("Pending");
    const [casino, setcasino] = useState("");
    const [rotation_home, setRotation_home] = useState("");
    const [rotation_away, setRotation_away] = useState("");
    const [yearCrear, setYearCrear] = useState("2021");
    const [monthCrear, setMonthCrear] = useState("01");
    const [dayCrear, setDayCrear] = useState("01");
    let yearSend = yearCrear + "-" + monthCrear + "-" + dayCrear;
    let [yearSendCrear] = useState(yearSend);
    yearSendCrear = yearCrear + "-" + monthCrear + "-" + dayCrear;
    const [weekCrear, setWeekCrear] = useState("01");
    const [hourCrear, setHourCrear] = useState("01");
    const [minCrear, setMinCrear] = useState("01");
    let [timeCrear] = useState("01");
    timeCrear = hourCrear + ":" + minCrear;
    //totals
    const [totalCrear, setTotalAwayCrear] = useState("");
    const [juiceTotalOver, setjuiceTotalOver] = useState("-110");
    const [juiceTotalUnder, setjuiceTotalUnder] = useState("-110");
    //away
    const [awayCrear, setAwayCrear] = useState("Atlanta Hawks");
    const [spreadAwayCrear, setSpreadAwayCrear] = useState("");
    const [juiceSpreadAwayCrear, setJuiceSpreadAwayCrear] = useState("-110");
    const [MonelLineAwayCrear, setMonelLineAwayCrear] = useState("");
    const [teamTotalAway, setTeamTotalAway] = useState("");
    const [juiceTeamTotalAwayO, setjuiceTeamTotalAwayO] = useState("-110");
    const [juiceTeamTotalAwayU, setjuiceTeamTotalAwayU] = useState("-110");
    const [finalScoreA, setFinalScoreA] = useState("");
    //home
    const [HomeCrear, setHomeCrear] = useState("Atlanta Hawks");
    const [spreadHomeCrear, setSpreadHomeCrear] = useState("");
    const [juiceSpreadHomeCrear, setJuiceSpreadHomeCrear] = useState("-110");
    const [MonelLineHomeCrear, setMonelLineHomeCrear] = useState("");
    const [teamTotalHome, setTeamTotalHome] = useState("");
    const [juiceTeamTotalHomeO, setjuiceTeamTotalHomeO] = useState("-110");
    const [juiceTeamTotalHomeU, setjuiceTeamTotalHomeU] = useState("-110");
    const [finalScoreH, setFinalScoreH] = useState("");
    //first half
    const [FHspreadAway, setFHspreadAway] = useState("0");
    const [FHjuiceSpreadAway, setFHjuiceSpreadAway] = useState("-110");
    const [FHmoneyLineAway, setFHmoneyLineAway] = useState("");
    const [FHtotal, setFHtotal] = useState("");
    const [FHjuiceTO, setFHjuiceTO] = useState("-110");
    const [FHttAway, setFHttAway] = useState("");
    const [FHjuiceOverAway, setFHjuiceOverAway] = useState("-110");
    const [FHjuiceUnderAway, setFHjuiceUnderAway] = useState("-110");
    const [FHfsAway, setFHfsAway] = useState("");
    const [FHspreadHome, setFHspreadHome] = useState("0");
    const [FHjuiceSpreadHome, setFHjuiceSpreadHome] = useState("-110");
    const [FHmoneyLineHome, setFHmoneyLineHome] = useState("");
    const [FHjuiceTU, setFHjuiceTU] = useState("-110");
    const [FHttHome, setFHttHome] = useState("");
    const [FHjuiceOverHome, setFHjuiceOverHome] = useState("-110");
    const [FHjuiceUnderHome, setFHjuiceUnderHome] = useState("-110");
    const [FHfsHome, setFHfsHome] = useState("");
    //second half
    const [SDspreadAway, setSDspreadAway] = useState("0");
    const [SDjuiceSpreadAway, setSDjuiceSpreadAway] = useState("-110");
    const [SDmoneyLineAway, setSDmoneyLineAway] = useState("");
    const [SDtotal, setSDtotal] = useState("");
    const [SDjuiceTO, setSDjuiceTO] = useState("-110");
    const [SDttAway, setSDttAway] = useState("");
    const [SDjuiceOverAway, setSDjuiceOverAway] = useState("-110");
    const [SDjuiceUnderAway, setSDjuiceUnderAway] = useState("-110");
    const [SDfsAway, setSDfsAway] = useState("");
    const [SDspreadHome, setSDspreadHome] = useState("0");
    const [SDjuiceSpreadHome, setSDjuiceSpreadHome] = useState("-110");
    const [SDmoneyLineHome, setSDmoneyLineHome] = useState("");
    const [SDjuiceTU, setSDjuiceTU] = useState("-110");
    const [SDttHome, setSDttHome] = useState("");
    const [SDjuiceOverHome, setSDjuiceOverHome] = useState("-110");
    const [SDjuiceUnderHome, setSDjuiceUnderHome] = useState("-110");
    const [SDfsHome, setSDfsHome] = useState("");
    //Q1
    const [Q1spreadAway, setQ1spreadAway] = useState("0");
    const [Q1juiceSpreadAway, setQ1juiceSpreadAway] = useState("-110");
    const [Q1moneyLineAway, setQ1moneyLineAway] = useState("");
    const [Q1total, setQ1total] = useState("");
    const [Q1juiceTO, setQ1juiceTO] = useState("-110");
    const [Q1ttAway, setQ1ttAway] = useState("");
    const [Q1juiceOverAway, setQ1juiceOverAway] = useState("-110");
    const [Q1juiceUnderAway, setQ1juiceUnderAway] = useState("-110");
    const [Q1fsAway, setQ1fsAway] = useState("");
    const [Q1spreadHome, setQ1spreadHome] = useState("0");
    const [Q1juiceSpreadHome, setQ1juiceSpreadHome] = useState("-110");
    const [Q1moneyLineHome, setQ1moneyLineHome] = useState("");
    const [Q1juiceTU, setQ1juiceTU] = useState("-110");
    const [Q1ttHome, setQ1ttHome] = useState("");
    const [Q1juiceOverHome, setQ1juiceOverHome] = useState("-110");
    const [Q1juiceUnderHome, setQ1juiceUnderHome] = useState("-110");
    const [Q1fsHome, setQ1fsHome] = useState("");
    //Q2
    const [Q2spreadAway, setQ2spreadAway] = useState("0");
    const [Q2juiceSpreadAway, setQ2juiceSpreadAway] = useState("-110");
    const [Q2moneyLineAway, setQ2moneyLineAway] = useState("");
    const [Q2total, setQ2total] = useState("");
    const [Q2juiceTO, setQ2juiceTO] = useState("-110");
    const [Q2ttAway, setQ2ttAway] = useState("");
    const [Q2juiceOverAway, setQ2juiceOverAway] = useState("-110");
    const [Q2juiceUnderAway, setQ2juiceUnderAway] = useState("-110");
    const [Q2fsAway, setQ2fsAway] = useState("");
    const [Q2spreadHome, setQ2spreadHome] = useState("0");
    const [Q2juiceSpreadHome, setQ2juiceSpreadHome] = useState("-110");
    const [Q2moneyLineHome, setQ2moneyLineHome] = useState("");
    const [Q2juiceTU, setQ2juiceTU] = useState("-110");
    const [Q2ttHome, setQ2ttHome] = useState("");
    const [Q2juiceOverHome, setQ2juiceOverHome] = useState("-110");
    const [Q2juiceUnderHome, setQ2juiceUnderHome] = useState("-110");
    const [Q2fsHome, setQ2fsHome] = useState("");
    //Q3
    const [Q3spreadAway, setQ3spreadAway] = useState("0");
    const [Q3juiceSpreadAway, setQ3juiceSpreadAway] = useState("-110");
    const [Q3moneyLineAway, setQ3moneyLineAway] = useState("");
    const [Q3total, setQ3total] = useState("");
    const [Q3juiceTO, setQ3juiceTO] = useState("-110");
    const [Q3ttAway, setQ3ttAway] = useState("");
    const [Q3juiceOverAway, setQ3juiceOverAway] = useState("-110");
    const [Q3juiceUnderAway, setQ3juiceUnderAway] = useState("-110");
    const [Q3fsAway, setQ3fsAway] = useState("");
    const [Q3spreadHome, setQ3spreadHome] = useState("0");
    const [Q3juiceSpreadHome, setQ3juiceSpreadHome] = useState("-110");
    const [Q3moneyLineHome, setQ3moneyLineHome] = useState("");
    const [Q3juiceTU, setQ3juiceTU] = useState("-110");
    const [Q3ttHome, setQ3ttHome] = useState("");
    const [Q3juiceOverHome, setQ3juiceOverHome] = useState("-110");
    const [Q3juiceUnderHome, setQ3juiceUnderHome] = useState("-110");
    const [Q3fsHome, setQ3fsHome] = useState("");
    //Q4
    const [Q4spreadAway, setQ4spreadAway] = useState("0");
    const [Q4juiceSpreadAway, setQ4juiceSpreadAway] = useState("-110");
    const [Q4moneyLineAway, setQ4moneyLineAway] = useState("");
    const [Q4total, setQ4total] = useState("");
    const [Q4juiceTO, setQ4juiceTO] = useState("-110");
    const [Q4ttAway, setQ4ttAway] = useState("");
    const [Q4juiceOverAway, setQ4juiceOverAway] = useState("-110");
    const [Q4juiceUnderAway, setQ4juiceUnderAway] = useState("-110");
    const [Q4fsAway, setQ4fsAway] = useState("");
    const [Q4spreadHome, setQ4spreadHome] = useState("0");
    const [Q4juiceSpreadHome, setQ4juiceSpreadHome] = useState("-110");
    const [Q4moneyLineHome, setQ4moneyLineHome] = useState("");
    const [Q4juiceTU, setQ4juiceTU] = useState("-110");
    const [Q4ttHome, setQ4ttHome] = useState("");
    const [Q4juiceOverHome, setQ4juiceOverHome] = useState("-110");
    const [Q4juiceUnderHome, setQ4juiceUnderHome] = useState("-110");
    const [Q4fsHome, setQ4fsHome] = useState("");
    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);

    }
    const crear = e => {
        e.preventDefault();
        const body = {
            date: yearSendCrear,
            hour: timeCrear,
            week: weekCrear,
            status: statusCrear,
            casino: casino,
            rotation_home: rotation_home,
            rotation_away: rotation_away,
            away: awayCrear,
            home: HomeCrear,
            spread_away: spreadAwayCrear,
            spread_home: spreadHomeCrear,
            juice_spread_away: juiceSpreadAwayCrear,
            juice_spread_home: juiceSpreadHomeCrear,
            moneyLineAway: MonelLineAwayCrear,
            moneyLineHome: MonelLineHomeCrear,
            total: totalCrear,
            juice_total_over: juiceTotalOver,
            juice_total_under: juiceTotalUnder,
            tt_away: teamTotalAway,
            juice_over_away: juiceTeamTotalAwayO,
            juice_under_away: juiceTeamTotalAwayU,
            tt_home: teamTotalHome,
            juice_over_home: juiceTeamTotalHomeO,
            juice_under_home: juiceTeamTotalHomeU,
            final_score_away: finalScoreA,
            final_score_home: finalScoreH,
            //first half
            //--away
            first_half_spread_away: FHspreadAway,
            first_half_juice_spread_away: FHjuiceSpreadAway,
            first_half_moneyLineAway: FHmoneyLineAway,
            first_half_total: FHtotal,
            fh_juice_total_over: FHjuiceTO,
            first_half_tt_away: FHttAway,
            first_half_juice_over_away: FHjuiceOverAway,
            first_half_juice_under_away: FHjuiceUnderAway,
            first_half_final_score_away: FHfsAway,
            //--home
            first_half_spread_home: FHspreadHome,
            first_half_juice_spread_home: FHjuiceSpreadHome,
            first_half_moneyLineHome: FHmoneyLineHome,
            fh_juice_total_under: FHjuiceTU,
            first_half_tt_home: FHttHome,
            first_half_juice_over_home: FHjuiceOverHome,
            first_half_juice_under_home: FHjuiceUnderHome,
            first_half_final_score_home: FHfsHome,
            //second half
            //--away
            second_half_spread_away: SDspreadAway,
            second_half_juice_spread_away: SDjuiceSpreadAway,
            second_half_moneyLineAway: SDmoneyLineAway,
            second_half_total: SDtotal,
            sh_juice_total_over: SDjuiceTO,
            second_half_tt_away: SDttAway,
            second_half_juice_over_away: SDjuiceOverAway,
            second_half_juice_under_away: SDjuiceUnderAway,
            second_half_final_score_away: SDfsAway,
            //--home
            second_half_spread_home: SDspreadHome,
            second_half_juice_spread_home: SDjuiceSpreadHome,
            second_half_moneyLineHome: SDmoneyLineHome,
            sh_juice_total_under: SDjuiceTU,
            second_half_tt_home: SDttHome,
            second_half_juice_over_home: SDjuiceOverHome,
            second_half_juice_under_home: SDjuiceUnderHome,
            second_half_final_score_home: SDfsHome,
            //--Q1
            //--away
            q1_half_spread_away: Q1spreadAway,
            q1_half_juice_spread_away: Q1juiceSpreadAway,
            q1_half_moneyLineAway: Q1moneyLineAway,
            q1_half_total: Q1total,
            q1_juice_over: Q1juiceTO,
            q1_juice_under: Q1juiceTU,
            q1_half_tt_away: Q1ttAway,
            q1_half_juice_over_away: Q1juiceOverAway,
            q1_half_juice_under_away: Q1juiceUnderAway,
            q1_half_final_score_away: Q1fsAway,
            //--home
            q1_half_spread_home: Q1spreadHome,
            q1_half_juice_spread_home: Q1juiceSpreadHome,
            q1_half_moneyLineHome: Q1moneyLineHome,
            q1_half_tt_home: Q1ttHome,
            q1_half_juice_over_home: Q1juiceOverHome,
            q1_half_juice_under_home: Q1juiceUnderHome,
            q1_half_final_score_home: Q1fsHome,
            //--Q2
            //--away
            q2_half_spread_away: Q2spreadAway,
            q2_half_juice_spread_away: Q2juiceSpreadAway,
            q2_half_moneyLineAway: Q2moneyLineAway,
            q2_half_total: Q2total,
            q2_juice_over: Q2juiceTO,
            q2_juice_under: Q2juiceTU,
            q2_half_tt_away: Q2ttAway,
            q2_half_juice_over_away: Q2juiceOverAway,
            q2_half_juice_under_away: Q2juiceUnderAway,
            q2_half_final_score_away: Q2fsAway,
            //--home
            q2_half_spread_home: Q2spreadHome,
            q2_half_juice_spread_home: Q2juiceSpreadHome,
            q2_half_moneyLineHome: Q2moneyLineHome,
            q2_half_tt_home: Q2ttHome,
            q2_half_juice_over_home: Q2juiceOverHome,
            q2_half_juice_under_home: Q2juiceUnderHome,
            q2_half_final_score_home: Q2fsHome,
            //--Q3
            //--away
            q3_half_spread_away: Q3spreadAway,
            q3_half_juice_spread_away: Q3juiceSpreadAway,
            q3_half_moneyLineAway: Q3moneyLineAway,
            q3_half_total: Q3total,
            q3_juice_over: Q3juiceTO,
            q3_juice_under: Q3juiceTU,
            q3_half_tt_away: Q3ttAway,
            q3_half_juice_over_away: Q3juiceOverAway,
            q3_half_juice_under_away: Q3juiceUnderAway,
            q3_half_final_score_away: Q3fsAway,
            //--home
            q3_half_spread_home: Q3spreadHome,
            q3_half_juice_spread_home: Q3juiceSpreadHome,
            q3_half_moneyLineHome: Q3moneyLineHome,
            q3_half_tt_home: Q3ttHome,
            q3_half_juice_over_home: Q3juiceOverHome,
            q3_half_juice_under_home: Q3juiceUnderHome,
            q3_half_final_score_home: Q3fsHome,
            //--Q4
            //--away
            q4_half_spread_away: Q4spreadAway,
            q4_half_juice_spread_away: Q4juiceSpreadAway,
            q4_half_moneyLineAway: Q4moneyLineAway,
            q4_half_total: Q4total,
            q4_juice_over: Q4juiceTO,
            q4_juice_under: Q4juiceTU,
            q4_half_tt_away: Q4ttAway,
            q4_half_juice_over_away: Q4juiceOverAway,
            q4_half_juice_under_away: Q4juiceUnderAway,
            q4_half_final_score_away: Q4fsAway,
            //--home
            q4_half_spread_home: Q4spreadHome,
            q4_half_juice_spread_home: Q4juiceSpreadHome,
            q4_half_moneyLineHome: Q4moneyLineHome,
            q4_half_tt_home: Q4ttHome,
            q4_half_juice_over_home: Q4juiceOverHome,
            q4_half_juice_under_home: Q4juiceUnderHome,
            q4_half_final_score_home: Q4fsHome,

        };
        
       

        fetch("https://interfaceroy.herokuapp.com/ncaa_basketball", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                
                alert("juego se creo");
                actualizar();
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
        if (i < 10) {
            i = "0" + i;
            selectWeek.push(i);
        } else {
            selectWeek.push(i);
        }
    }
    let selectHour = [];
    for (let i = 1; i < 25; i++) {
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
        <div className="container-fluid p-0 m-0 accordion" id="gameCreate" >
            <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                <h3>Create NCAA BASKETBALL Game</h3>
            </div>
            <form onSubmit={crear}>
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
                    <div className="text-center col-1 p-1">
                        Year
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setYearCrear(e.target.value)} defaultValue={2021} required>
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
                        Week
                        <select className="form-select" name="week" aria-label="Default select example" onChange={e => setWeekCrear(e.target.value)} required>
                            {
                                selectWeek.map((index) => {
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
                            <div className="btn-group">
                                <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#crear-juego" aria-expanded="true" aria-controls="crear-juego">
                                    Game
                                </button>
                                <button className="btn btn-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#firstHalf" aria-expanded="false" aria-controls="firstHalf">
                                    1st Half
                                </button>
                                <button className="btn btn-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#secondHalf" aria-expanded="false" aria-controls="secondHalf">
                                    2dn Half
                                </button>
                            </div>
                        </div>
                        <div className="col-12 rounded overflow-hidden mt-1 ">
                            <a className="quarters collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Q1" aria-expanded="false" aria-controls="Q1">
                                Q1
                            </a>
                            <a className="quarters collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Q2" aria-expanded="false" aria-controls="Q2">
                                Q2
                            </a>
                            <a className="quarters collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Q3" aria-expanded="false" aria-controls="Q3">
                                Q3
                            </a>
                            <a className="quarters collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Q4" aria-expanded="false" aria-controls="Q4">
                                Q4
                            </a>
                        </div>
                    </div>
                </div>
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
                <div className="accordion-item ">
                    <div id="crear-juego" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#gameCreate">
                        <div>
                            <div className="row g-0 text-center pt-3 ">
                                <div className="col-1 title-lines">RT#</div>
                                <div className="col-2 title-lines">Team</div>
                                <div className="col-1 title-lines">Spread</div>
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
                                            store.ncaa_basket_teams.map((index) => {
                                                return (
                                                    <option key={index} name="promotions" value={index}>{index}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Spread" aria-label="default input example" onChange={e => setSpreadAwayCrear(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setJuiceSpreadAwayCrear(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setMonelLineAwayCrear(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" onChange={e => setTotalAwayCrear(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setjuiceTotalOver(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Team Total" aria-label="default input example" onChange={e => setTeamTotalAway(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={-110} onChange={e => setjuiceTeamTotalAwayO(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={-110} onChange={e => setjuiceTeamTotalAwayU(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setFinalScoreA(e.target.value)} />
                                </div>
                            </div>
                            <div className="row g-0">
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation_home" onChange={e => setRotation_home(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setHomeCrear(e.target.value)} required>
                                        {
                                            store.ncaa_basket_teams.map((index) => {
                                                return (
                                                    <option key={index} name="promotions" value={index}>{index}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Spread" aria-label="default input example" onChange={e => setSpreadHomeCrear(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setJuiceSpreadHomeCrear(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setMonelLineHomeCrear(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="" aria-label="default input example" disabled />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setjuiceTotalUnder(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Team Total" aria-label="default input example" onChange={e => setTeamTotalHome(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={-110} onChange={e => setjuiceTeamTotalHomeO(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={-110} onChange={e => setjuiceTeamTotalHomeU(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setFinalScoreH(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="firstHalf" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameCreate">
                        <div className="row g-0 text-center pt-3 w-100">
                            <div className="col-2 title-lines">FH Spread</div>
                            <div className="col-2 title-lines">FH Juice Spread</div>
                            <div className="col-2 title-lines">FH ML</div>
                            <div className="col-1 title-lines">FH Total</div>
                            <div className="col-1 title-lines">FH Juice T</div>
                            <div className="col-1 title-lines">FH TT</div>
                            <div className="col-1 title-lines">FH JO</div>
                            <div className="col-1 title-lines">FH JU</div>
                            <div className="col-1 title-lines">FH FS</div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH Spread" aria-label="default input example" onChange={e => setFHspreadAway(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setFHjuiceSpreadAway(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setFHmoneyLineAway(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" onChange={e => setFHtotal(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH Juice A" aria-label="default input example" defaultValue={-110} onChange={e => setFHjuiceTO(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" onChange={e => setFHttAway(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={-110} onChange={e => setFHjuiceOverAway(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={-110} onChange={e => setFHjuiceUnderAway(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setFHfsAway(e.target.value)} />
                            </div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH Spread" aria-label="default input example" onChange={e => setFHspreadHome(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setFHjuiceSpreadHome(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setFHmoneyLineHome(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" aria-label="default input example" disabled />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH Juice H" aria-label="default input example" defaultValue={-110} onChange={e => setFHjuiceTU(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" onChange={e => setFHttHome(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JOH" aria-label="default input example" defaultValue={-110} onChange={e => setFHjuiceOverHome(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JUH" aria-label="default input example" defaultValue={-110} onChange={e => setFHjuiceUnderHome(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setFHfsHome(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div id="secondHalf" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameCreate">
                        <div className="row g-0 text-center pt-3 w-100">
                            <div className="col-2 title-lines">SH Spread</div>
                            <div className="col-2 title-lines">SH Juice Spread</div>
                            <div className="col-2 title-lines">SH ML</div>
                            <div className="col-1 title-lines">SH Total</div>
                            <div className="col-1 title-lines">SH Juice T</div>
                            <div className="col-1 title-lines">SH TT</div>
                            <div className="col-1 title-lines">SH JO</div>
                            <div className="col-1 title-lines">SH JU</div>
                            <div className="col-1 title-lines">SH FS</div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="SH Spread" aria-label="default input example" onChange={e => setSDspreadAway(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setSDjuiceSpreadAway(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setSDmoneyLineAway(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" onChange={e => setSDtotal(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="SH Juice A" aria-label="default input example" defaultValue={-110} onChange={e => setSDjuiceTO(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" onChange={e => setSDttAway(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={-110} onChange={e => setSDjuiceOverAway(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={-110} onChange={e => setSDjuiceUnderAway(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSDfsAway(e.target.value)} />
                            </div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="SH Spread" aria-label="default input example" onChange={e => setSDspreadHome(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setSDjuiceSpreadHome(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setSDmoneyLineHome(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" aria-label="default input example" disabled />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="SD Juice H" aria-label="default input example" defaultValue={-110} onChange={e => setSDjuiceTU(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" onChange={e => setSDttHome(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JOH" aria-label="default input example" defaultValue={-110} onChange={e => setSDjuiceOverHome(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JUH" aria-label="default input example" defaultValue={-110} onChange={e => setSDjuiceUnderHome(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setSDfsHome(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div id="Q1" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameCreate">
                        <div className="q1 mb-3">
                            <div className="row g-0 text-center pt-3 w-100">
                                <div className="col-2 title-lines">Q1 Spread</div>
                                <div className="col-2 title-lines">Q1 Juice Spread</div>
                                <div className="col-2 title-lines">Q1 ML</div>
                                <div className="col-1 title-lines">Q1 Total</div>
                                <div className="col-1 title-lines">Q1 Juice T</div>
                                <div className="col-1 title-lines">Q1 TT</div>
                                <div className="col-1 title-lines">Q1 JO</div>
                                <div className="col-1 title-lines">Q1 JU</div>
                                <div className="col-1 title-lines">Q1 FS</div>
                            </div>
                            <div className="row g-0 text-center">
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q1 Spread" aria-label="default input example" onChange={e => setQ1spreadAway(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setQ1juiceSpreadAway(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q1 ML" aria-label="default input example" onChange={e => setQ1moneyLineAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" onChange={e => setQ1total(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="SH Juice A" aria-label="default input example" defaultValue={-110} onChange={e => setQ1juiceTO(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" onChange={e => setQ1ttAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={-110} onChange={e => setQ1juiceOverAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={-110} onChange={e => setQ1juiceUnderAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setQ1fsAway(e.target.value)} />
                                </div>
                            </div>
                            <div className="row g-0 text-center">
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q1 Spread" aria-label="default input example" onChange={e => setQ1spreadHome(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setQ1juiceSpreadHome(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setQ1moneyLineHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" aria-label="default input example" disabled />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="SD Juice H" aria-label="default input example" defaultValue={-110} onChange={e => setQ1juiceTU(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" onChange={e => setQ1ttHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JOH" aria-label="default input example" defaultValue={-110} onChange={e => setQ1juiceOverHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JUH" aria-label="default input example" defaultValue={-110} onChange={e => setQ1juiceUnderHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setQ1fsHome(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Q2" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameCreate">
                        <div className="q2 mb-3">
                            <div className="row g-0 text-center pt-3 w-100">
                                <div className="col-2 title-lines">Q2 Spread</div>
                                <div className="col-2 title-lines">Q2 Juice Spread</div>
                                <div className="col-2 title-lines">Q2 ML</div>
                                <div className="col-1 title-lines">Q2 Total</div>
                                <div className="col-1 title-lines">Q2 Juice T</div>
                                <div className="col-1 title-lines">Q2 TT</div>
                                <div className="col-1 title-lines">Q2 JO</div>
                                <div className="col-1 title-lines">Q2 JU</div>
                                <div className="col-1 title-lines">Q2 FS</div>
                            </div>
                            <div className="row g-0 text-center">
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q2 Spread" aria-label="default input example" onChange={e => setQ2spreadAway(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setQ2juiceSpreadAway(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q2 ML" aria-label="default input example" onChange={e => setQ2moneyLineAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" onChange={e => setQ2total(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="SH Juice A" aria-label="default input example" defaultValue={-110} onChange={e => setQ2juiceTO(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" onChange={e => setQ2ttAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={-110} onChange={e => setQ2juiceOverAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={-110} onChange={e => setQ2juiceUnderAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setQ2fsAway(e.target.value)} />
                                </div>
                            </div>
                            <div className="row g-0 text-center">
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q2 Spread" aria-label="default input example" onChange={e => setQ2spreadHome(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setQ2juiceSpreadHome(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setQ2moneyLineHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" aria-label="default input example" disabled />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="SD Juice H" aria-label="default input example" defaultValue={-110} onChange={e => setQ2juiceTU(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" onChange={e => setQ2ttHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JOH" aria-label="default input example" defaultValue={-110} onChange={e => setQ2juiceOverHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JUH" aria-label="default input example" defaultValue={-110} onChange={e => setQ2juiceUnderHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setQ2fsHome(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Q3" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameCreate">
                        <div className="q3 mb-3">
                            <div className="row g-0 text-center pt-3 w-100">
                                <div className="col-2 title-lines">Q3 Spread</div>
                                <div className="col-2 title-lines">Q3 Juice Spread</div>
                                <div className="col-2 title-lines">Q3 ML</div>
                                <div className="col-1 title-lines">Q3 Total</div>
                                <div className="col-1 title-lines">Q3 Juice T</div>
                                <div className="col-1 title-lines">Q3 TT</div>
                                <div className="col-1 title-lines">Q3 JO</div>
                                <div className="col-1 title-lines">Q3 JU</div>
                                <div className="col-1 title-lines">Q3 FS</div>
                            </div>
                            <div className="row g-0 text-center">
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q3 Spread" aria-label="default input example" onChange={e => setQ3spreadAway(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setQ3juiceSpreadAway(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q3 ML" aria-label="default input example" onChange={e => setQ3moneyLineAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" onChange={e => setQ3total(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="SH Juice A" aria-label="default input example" defaultValue={-110} onChange={e => setQ3juiceTO(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" onChange={e => setQ3ttAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={-110} onChange={e => setQ3juiceOverAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={-110} onChange={e => setQ3juiceUnderAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setQ3fsAway(e.target.value)} />
                                </div>
                            </div>
                            <div className="row g-0 text-center">
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q3 Spread" aria-label="default input example" onChange={e => setQ3spreadHome(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setQ3juiceSpreadHome(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setQ3moneyLineHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" aria-label="default input example" disabled />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="SD Juice H" aria-label="default input example" defaultValue={-110} onChange={e => setQ3juiceTU(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" onChange={e => setQ3ttHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JOH" aria-label="default input example" defaultValue={-110} onChange={e => setQ3juiceOverHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JUH" aria-label="default input example" defaultValue={-110} onChange={e => setQ3juiceUnderHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setQ3fsHome(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Q4" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameCreate">
                        <div className="q4 mb-3">
                            <div className="row g-0 text-center pt-3 w-100">
                                <div className="col-2 title-lines">Q4 Spread</div>
                                <div className="col-2 title-lines">Q4 Juice Spread</div>
                                <div className="col-2 title-lines">Q4 ML</div>
                                <div className="col-1 title-lines">Q4 Total</div>
                                <div className="col-1 title-lines">Q4 Juice T</div>
                                <div className="col-1 title-lines">Q4 TT</div>
                                <div className="col-1 title-lines">Q4 JO</div>
                                <div className="col-1 title-lines">Q4 JU</div>
                                <div className="col-1 title-lines">Q4 FS</div>
                            </div>
                            <div className="row g-0 text-center">
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q4 Spread" aria-label="default input example" onChange={e => setQ4spreadAway(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setQ4juiceSpreadAway(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q4 ML" aria-label="default input example" onChange={e => setQ4moneyLineAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" onChange={e => setQ4total(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="SH Juice A" aria-label="default input example" defaultValue={-110} onChange={e => setQ4juiceTO(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" onChange={e => setQ4ttAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={-110} onChange={e => setQ4juiceOverAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={-110} onChange={e => setQ4juiceUnderAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setQ4fsAway(e.target.value)} />
                                </div>
                            </div>
                            <div className="row g-0 text-center">
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q4 Spread" aria-label="default input example" onChange={e => setQ4spreadHome(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setQ4juiceSpreadHome(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setQ4moneyLineHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" aria-label="default input example" disabled />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="SD Juice H" aria-label="default input example" defaultValue={-110} onChange={e => setQ4juiceTU(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" onChange={e => setQ4ttHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JOH" aria-label="default input example" defaultValue={-110} onChange={e => setQ4juiceOverHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JUH" aria-label="default input example" defaultValue={-110} onChange={e => setQ4juiceUnderHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setQ4fsHome(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
            </form>
            {auth ? <Redirect to="/allGames" /> : null}
        </div>
    )
}