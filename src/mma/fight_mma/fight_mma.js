import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";
import DateTime from 'luxon/src/datetime.js'
export const Fight_mma = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

    const dateLux = DateTime.now().weekNumber;
    const [statusCrear, setStatusCrear] = useState("Pending");
    const [casino, setcasino] = useState("");
    const [yearCrear, setYearCrear] = useState("2021");
    const [monthCrear, setMonthCrear] = useState("01");
    const [dayCrear, setDayCrear] = useState("01");
    let yearSend = yearCrear + "-" + monthCrear + "-" + dayCrear;
    let [yearSendCrear] = useState(yearSend);
    yearSendCrear = yearCrear + "-" + monthCrear + "-" + dayCrear;
    const [weekCrear, setWeekCrear] = useState(dateLux);
    const [hourCrear, setHourCrear] = useState("01");
    const [minCrear, setMinCrear] = useState("01");
    let [timeCrear] = useState("01");
    timeCrear = hourCrear + ":" + minCrear;
    //
    const [event, setevent] = useState("0");
    const [rounds, setrounds] = useState("0");
    const [location_Fight, setlocation_Fight] = useState("0");
    const [fighter_One, setfighter_One] = useState("0");
    const [money_Line_One, setmoney_Line_One] = useState("0");
    const [fighter_Two, setfighter_Two] = useState("0");
    const [money_Line_Two, setmoney_Line_Two] = useState("0");
    const [winner, setwinner] = useState("");
    const [finish_by, setfinish_by] = useState("0");
    //
    const [r1_result, setr1_result] = useState("0");
    const [r2_result, setr2_result] = useState("0");
    const [r3_result, setr3_result] = useState("0");
    const [r4_result, setr4_result] = useState("0");
    const [r5_result, setr5_result] = useState("0");
    const [r6_result, setr6_result] = useState("0");
    const [r7_result, setr7_result] = useState("0");
    const [r8_result, setr8_result] = useState("0");
    const [r9_result, setr9_result] = useState("0");
    const [r10_result, setr10_result] = useState("0");
    const [r11_result, setr11_result] = useState("0");
    const [r12_result, setr12_result] = useState("0");
    const [r13_result, setr13_result] = useState("0");
    const [r14_result, setr14_result] = useState("0");
    const [r15_result, setr15_result] = useState("0");
    const [auth, setAuth] = useState(false);


    let actualizar = () => {
        window.location.reload(true);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            date: yearSendCrear,
            hour: timeCrear,
            week: weekCrear,
            status: statusCrear,
            casino: casino,

            event: event,
            rounds: rounds,
            location_Fight: location_Fight,
            fighter_One: fighter_One,
            money_Line_One: money_Line_One,
            fighter_Two: fighter_Two,
            money_Line_Two: money_Line_Two,
            winner: winner,
            finish_by: finish_by,

            r1_result: r1_result,
            r2_result: r2_result,
            r3_result: r3_result,
            r4_result: r4_result,
            r5_result: r5_result,
            r6_result: r6_result,
            r7_result: r7_result,
            r8_result: r8_result,
            r9_result: r9_result,
            r10_result: r10_result,
            r11_result: r11_result,
            r12_result: r12_result,
            r13_result: r13_result,
            r14_result: r14_result,
            r15_result: r15_result,

        };
        
       

        fetch("https://sportsdata365.com/mma", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                
                alert("Pelea se creo");
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
        selectWeek.push(i);
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
                <h3>Create MMA Fight</h3>
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
                        <select className="form-select" name="week" aria-label="Default select example" onChange={e => setWeekCrear(e.target.value)} defaultValue={dateLux} required>
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
                <div className="">
                    <div id="crear-juego" className="">
                        <div>
                            <div className="row g-0 text-center pt-3 ">
                                <div className="col-1 title-lines">Event</div>
                                <div className="col-1 title-lines">Rounds</div>
                                <div className="col-2 title-lines">Location</div>
                                <div className="col-2 title-lines">Fighter One</div>
                                <div className="col-1 title-lines">ML</div>
                                <div className="col-2 title-lines">Fighter Two</div>
                                <div className="col-1 title-lines">ML</div>
                                <div className="col-1 title-lines">Winner</div>
                                <div className="col-1 title-lines">Finish By</div>
                            </div>
                            <div className="row g-0">
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Event" name="rotation_away" onChange={e => setevent(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Rounds" name="rotation_away" onChange={e => setrounds(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <input className="form-control selectInner" type="text" placeholder="Location" aria-label="default input example" onChange={e => setlocation_Fight(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <input className="form-control selectInner" type="text" placeholder="Fighter One" aria-label="default input example" onChange={e => setfighter_One(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="ML" aria-label="default input example" onChange={e => setmoney_Line_One(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <input className="form-control selectInner" type="text" placeholder="Fighter Two" aria-label="default input example" onChange={e => setfighter_Two(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="ML" aria-label="default input example" onChange={e => setmoney_Line_Two(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="winner" aria-label="default input example" onChange={e => setwinner(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Finish By" aria-label="default input example" onChange={e => setfinish_by(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-12 pt-3">
                                <h2>Results</h2>
                            </div>
                            <div className="row g-0">
                                <div className="row g-0 text-center pt-3 ">
                                    <div className="col-1 title-lines">R1</div>
                                    <div className="col-1 title-lines">R2</div>
                                    <div className="col-1 title-lines">R3</div>
                                    <div className="col-1 title-lines">R4</div>
                                    <div className="col-1 title-lines">R5</div>
                                    <div className="col-1 title-lines">R6</div>
                                    <div className="col-1 title-lines">R7</div>
                                    <div className="col-1 title-lines">R8</div>
                                    <div className="col-1 title-lines">R9</div>
                                    <div className="col-1 title-lines">R10</div>
                                    <div className="col-1 title-lines">R11</div>
                                    <div className="col-1 title-lines">R12</div>
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R1" aria-label="default input example" onChange={e => setr1_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R2" aria-label="default input example" onChange={e => setr2_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R3" aria-label="default input example" onChange={e => setr3_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R4" aria-label="default input example" onChange={e => setr4_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R5" aria-label="default input example" onChange={e => setr5_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R6" aria-label="default input example" onChange={e => setr6_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R7" aria-label="default input example" onChange={e => setr7_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R8" aria-label="default input example" onChange={e => setr8_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R9" aria-label="default input example" onChange={e => setr9_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R10" aria-label="default input example" onChange={e => setr10_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R11" aria-label="default input example" onChange={e => setr11_result(e.target.value)} />
                                </div>

                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R12" aria-label="default input example" onChange={e => setr12_result(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="firstHalf" className="">
                        <div className="row g-0 text-center pt-3 w-100">
                            <div className="col-1 title-lines">R13</div>
                            <div className="col-1 title-lines">R14</div>
                            <div className="col-1 title-lines">R15</div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="R13" aria-label="default input example" onChange={e => setr13_result(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="R14" aria-label="default input example" onChange={e => setr14_result(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="R15" aria-label="default input example" onChange={e => setr15_result(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
            </form>
            {auth ? <Redirect to="/allGames/" /> : null}
        </div>
    )
}