import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import DateTime from 'luxon/src/datetime.js'
export const Nascar = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const dateLux = DateTime.now().weekNumber;
    const [statusCrear, setStatusCrear] = useState("Pending");
    const [casino, setcasino] = useState("");
    const [event, setEvent] = useState("");
    const [winner_1, setwinner_1] = useState("");
    const [winner_2, setwinner_2] = useState("");
    const [winner_3, setwinner_3] = useState("");
    const [winner_4, setwinner_4] = useState("");
    const [winner_5, setwinner_5] = useState("");
    const [winner_6, setwinner_6] = useState("");
    const [winner_7, setwinner_7] = useState("");
    const [winner_8, setwinner_8] = useState("");
    const [winner_9, setwinner_9] = useState("");
    const [winner_10, setwinner_10] = useState("");
    const [winner_11, setwinner_11] = useState("");
    const [winner_12, setwinner_12] = useState("");
    const [winner_13, setwinner_13] = useState("");
    const [winner_14, setwinner_14] = useState("");
    const [winner_15, setwinner_15] = useState("");
    const [winner_16, setwinner_16] = useState("");
    const [winner_17, setwinner_17] = useState("");
    const [winner_18, setwinner_18] = useState("");
    const [winner_19, setwinner_19] = useState("");
    const [winner_20, setwinner_20] = useState("");
    const [winner_21, setwinner_21] = useState("");
    const [winner_22, setwinner_22] = useState("");
    const [winner_23, setwinner_23] = useState("");
    const [winner_24, setwinner_24] = useState("");
    const [winner_25, setwinner_25] = useState("");
    const [rotation_number_1, setrotation_number_1] = useState("");
    const [rotation_number_2, setrotation_number_2] = useState("");
    const [rotation_number_3, setrotation_number_3] = useState("");
    const [rotation_number_4, setrotation_number_4] = useState("");
    const [rotation_number_5, setrotation_number_5] = useState("");
    const [rotation_number_6, setrotation_number_6] = useState("");
    const [rotation_number_7, setrotation_number_7] = useState("");
    const [rotation_number_8, setrotation_number_8] = useState("");
    const [rotation_number_9, setrotation_number_9] = useState("");
    const [rotation_number_10, setrotation_number_10] = useState("");
    const [rotation_number_11, setrotation_number_11] = useState("");
    const [rotation_number_12, setrotation_number_12] = useState("");
    const [rotation_number_13, setrotation_number_13] = useState("");
    const [rotation_number_14, setrotation_number_14] = useState("");
    const [rotation_number_15, setrotation_number_15] = useState("");
    const [rotation_number_16, setrotation_number_16] = useState("");
    const [rotation_number_17, setrotation_number_17] = useState("");
    const [rotation_number_18, setrotation_number_18] = useState("");
    const [rotation_number_19, setrotation_number_19] = useState("");
    const [rotation_number_20, setrotation_number_20] = useState("");
    const [rotation_number_21, setrotation_number_21] = useState("");
    const [rotation_number_22, setrotation_number_22] = useState("");
    const [rotation_number_23, setrotation_number_23] = useState("");
    const [rotation_number_24, setrotation_number_24] = useState("");
    const [rotation_number_25, setrotation_number_25] = useState("");
    const [rotation_number_26, setrotation_number_26] = useState("");
    const [rotation_number_27, setrotation_number_27] = useState("");
    const [rotation_number_28, setrotation_number_28] = useState("");
    const [rotation_number_29, setrotation_number_29] = useState("");
    const [rotation_number_30, setrotation_number_30] = useState("");
    const [rotation_number_31, setrotation_number_31] = useState("");
    const [rotation_number_32, setrotation_number_32] = useState("");
    const [rotation_number_33, setrotation_number_33] = useState("");
    const [rotation_number_34, setrotation_number_34] = useState("");
    const [rotation_number_35, setrotation_number_35] = useState("");
    const [rotation_number_36, setrotation_number_36] = useState("");
    const [rotation_number_37, setrotation_number_37] = useState("");
    const [rotation_number_38, setrotation_number_38] = useState("");
    const [rotation_number_39, setrotation_number_39] = useState("");
    const [rotation_number_40, setrotation_number_40] = useState("");
    const [rotation_number_41, setrotation_number_41] = useState("");
    const [rotation_number_42, setrotation_number_42] = useState("");
    const [rotation_number_43, setrotation_number_43] = useState("");
    const [rotation_number_44, setrotation_number_44] = useState("");
    const [rotation_number_45, setrotation_number_45] = useState("");
    const [rotation_number_46, setrotation_number_46] = useState("");
    const [rotation_number_47, setrotation_number_47] = useState("");
    const [rotation_number_48, setrotation_number_48] = useState("");
    const [rotation_number_49, setrotation_number_49] = useState("");
    const [rotation_number_50, setrotation_number_50] = useState("");

    const [competitor_1, setcompetitor_1] = useState("");
    const [competitor_2, setcompetitor_2] = useState("");
    const [competitor_3, setcompetitor_3] = useState("");
    const [competitor_4, setcompetitor_4] = useState("");
    const [competitor_5, setcompetitor_5] = useState("");
    const [competitor_6, setcompetitor_6] = useState("");
    const [competitor_7, setcompetitor_7] = useState("");
    const [competitor_8, setcompetitor_8] = useState("");
    const [competitor_9, setcompetitor_9] = useState("");
    const [competitor_10, setcompetitor_10] = useState("");
    const [competitor_11, setcompetitor_11] = useState("");
    const [competitor_12, setcompetitor_12] = useState("");
    const [competitor_13, setcompetitor_13] = useState("");
    const [competitor_14, setcompetitor_14] = useState("");
    const [competitor_15, setcompetitor_15] = useState("");
    const [competitor_16, setcompetitor_16] = useState("");
    const [competitor_17, setcompetitor_17] = useState("");
    const [competitor_18, setcompetitor_18] = useState("");
    const [competitor_19, setcompetitor_19] = useState("");
    const [competitor_20, setcompetitor_20] = useState("");
    const [competitor_21, setcompetitor_21] = useState("");
    const [competitor_22, setcompetitor_22] = useState("");
    const [competitor_23, setcompetitor_23] = useState("");
    const [competitor_24, setcompetitor_24] = useState("");
    const [competitor_25, setcompetitor_25] = useState("");
    const [competitor_26, setcompetitor_26] = useState("");
    const [competitor_27, setcompetitor_27] = useState("");
    const [competitor_28, setcompetitor_28] = useState("");
    const [competitor_29, setcompetitor_29] = useState("");
    const [competitor_30, setcompetitor_30] = useState("");
    const [competitor_31, setcompetitor_31] = useState("");
    const [competitor_32, setcompetitor_32] = useState("");
    const [competitor_33, setcompetitor_33] = useState("");
    const [competitor_34, setcompetitor_34] = useState("");
    const [competitor_35, setcompetitor_35] = useState("");
    const [competitor_36, setcompetitor_36] = useState("");
    const [competitor_37, setcompetitor_37] = useState("");
    const [competitor_38, setcompetitor_38] = useState("");
    const [competitor_39, setcompetitor_39] = useState("");
    const [competitor_40, setcompetitor_40] = useState("");
    const [competitor_41, setcompetitor_41] = useState("");
    const [competitor_42, setcompetitor_42] = useState("");
    const [competitor_43, setcompetitor_43] = useState("");
    const [competitor_44, setcompetitor_44] = useState("");
    const [competitor_45, setcompetitor_45] = useState("");
    const [competitor_46, setcompetitor_46] = useState("");
    const [competitor_47, setcompetitor_47] = useState("");
    const [competitor_48, setcompetitor_48] = useState("");
    const [competitor_49, setcompetitor_49] = useState("");
    const [competitor_50, setcompetitor_50] = useState("");

    const [money_line_1, setmoney_line_1] = useState("");
    const [money_line_2, setmoney_line_2] = useState("");
    const [money_line_3, setmoney_line_3] = useState("");
    const [money_line_4, setmoney_line_4] = useState("");
    const [money_line_5, setmoney_line_5] = useState("");
    const [money_line_6, setmoney_line_6] = useState("");
    const [money_line_7, setmoney_line_7] = useState("");
    const [money_line_8, setmoney_line_8] = useState("");
    const [money_line_9, setmoney_line_9] = useState("");
    const [money_line_10, setmoney_line_10] = useState("");
    const [money_line_11, setmoney_line_11] = useState("");
    const [money_line_12, setmoney_line_12] = useState("");
    const [money_line_13, setmoney_line_13] = useState("");
    const [money_line_14, setmoney_line_14] = useState("");
    const [money_line_15, setmoney_line_15] = useState("");
    const [money_line_16, setmoney_line_16] = useState("");
    const [money_line_17, setmoney_line_17] = useState("");
    const [money_line_18, setmoney_line_18] = useState("");
    const [money_line_19, setmoney_line_19] = useState("");
    const [money_line_20, setmoney_line_20] = useState("");
    const [money_line_21, setmoney_line_21] = useState("");
    const [money_line_22, setmoney_line_22] = useState("");
    const [money_line_23, setmoney_line_23] = useState("");
    const [money_line_24, setmoney_line_24] = useState("");
    const [money_line_25, setmoney_line_25] = useState("");
    const [money_line_26, setmoney_line_26] = useState("");
    const [money_line_27, setmoney_line_27] = useState("");
    const [money_line_28, setmoney_line_28] = useState("");
    const [money_line_29, setmoney_line_29] = useState("");
    const [money_line_30, setmoney_line_30] = useState("");
    const [money_line_31, setmoney_line_31] = useState("");
    const [money_line_32, setmoney_line_32] = useState("");
    const [money_line_33, setmoney_line_33] = useState("");
    const [money_line_34, setmoney_line_34] = useState("");
    const [money_line_35, setmoney_line_35] = useState("");
    const [money_line_36, setmoney_line_36] = useState("");
    const [money_line_37, setmoney_line_37] = useState("");
    const [money_line_38, setmoney_line_38] = useState("");
    const [money_line_39, setmoney_line_39] = useState("");
    const [money_line_40, setmoney_line_40] = useState("");
    const [money_line_41, setmoney_line_41] = useState("");
    const [money_line_42, setmoney_line_42] = useState("");
    const [money_line_43, setmoney_line_43] = useState("");
    const [money_line_44, setmoney_line_44] = useState("");
    const [money_line_45, setmoney_line_45] = useState("");
    const [money_line_46, setmoney_line_46] = useState("");
    const [money_line_47, setmoney_line_47] = useState("");
    const [money_line_48, setmoney_line_48] = useState("");
    const [money_line_49, setmoney_line_49] = useState("");
    const [money_line_50, setmoney_line_50] = useState("");

    const [yearCrear, setYearCrear] = useState("2022");
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

    const [race, setrace] = useState("0");
    const [track, settrack] = useState("0");
    const [location, setlocation] = useState("0");
    let actualizar = () => {
        document.getElementById("miFormNASCAR").reset();
    }
    const crear = e => {
        actualizar()
        e.preventDefault();
        const body = {
            date: yearSendCrear,
            hour: timeCrear,
            week: weekCrear,
            status: statusCrear,
            rotation_number_1: rotation_number_1,
            rotation_number_2: rotation_number_2,
            rotation_number_3: rotation_number_3,
            rotation_number_4: rotation_number_4,
            rotation_number_5: rotation_number_5,
            rotation_number_6: rotation_number_6,
            rotation_number_7: rotation_number_7,
            rotation_number_8: rotation_number_8,
            rotation_number_9: rotation_number_9,
            rotation_number_10: rotation_number_10,
            rotation_number_11: rotation_number_11,
            rotation_number_12: rotation_number_12,
            rotation_number_13: rotation_number_13,
            rotation_number_14: rotation_number_14,
            rotation_number_15: rotation_number_15,
            rotation_number_16: rotation_number_16,
            rotation_number_17: rotation_number_17,
            rotation_number_18: rotation_number_18,
            rotation_number_19: rotation_number_19,
            rotation_number_20: rotation_number_20,
            rotation_number_21: rotation_number_21,
            rotation_number_22: rotation_number_22,
            rotation_number_23: rotation_number_23,
            rotation_number_24: rotation_number_24,
            rotation_number_25: rotation_number_25,
            rotation_number_26: rotation_number_26,
            rotation_number_27: rotation_number_27,
            rotation_number_28: rotation_number_28,
            rotation_number_29: rotation_number_29,
            rotation_number_30: rotation_number_30,
            rotation_number_31: rotation_number_31,
            rotation_number_32: rotation_number_32,
            rotation_number_33: rotation_number_33,
            rotation_number_34: rotation_number_34,
            rotation_number_35: rotation_number_35,
            rotation_number_36: rotation_number_36,
            rotation_number_37: rotation_number_37,
            rotation_number_38: rotation_number_38,
            rotation_number_39: rotation_number_39,
            rotation_number_40: rotation_number_40,
            rotation_number_41: rotation_number_41,
            rotation_number_42: rotation_number_42,
            rotation_number_43: rotation_number_43,
            rotation_number_44: rotation_number_44,
            rotation_number_45: rotation_number_45,
            rotation_number_46: rotation_number_46,
            rotation_number_47: rotation_number_47,
            rotation_number_48: rotation_number_48,
            rotation_number_49: rotation_number_49,
            rotation_number_50: rotation_number_50,

            winner_1: winner_1,
            winner_2: winner_2,
            winner_3: winner_3,
            winner_4: winner_4,
            winner_5: winner_5,
            winner_6: winner_6,
            winner_7: winner_7,
            winner_8: winner_8,
            winner_9: winner_9,
            winner_10: winner_10,
            winner_11: winner_11,
            winner_12: winner_12,
            winner_13: winner_13,
            winner_14: winner_14,
            winner_15: winner_15,
            winner_16: winner_16,
            winner_17: winner_17,
            winner_18: winner_18,
            winner_19: winner_19,
            winner_20: winner_20,
            winner_21: winner_21,
            winner_22: winner_22,
            winner_23: winner_23,
            winner_24: winner_24,
            winner_25: winner_25,

            competitor_1: competitor_1,
            competitor_2: competitor_2,
            competitor_3: competitor_3,
            competitor_4: competitor_4,
            competitor_5: competitor_5,
            competitor_6: competitor_6,
            competitor_7: competitor_7,
            competitor_8: competitor_8,
            competitor_9: competitor_9,
            competitor_10: competitor_10,
            competitor_11: competitor_11,
            competitor_12: competitor_12,
            competitor_13: competitor_13,
            competitor_14: competitor_14,
            competitor_15: competitor_15,
            competitor_16: competitor_16,
            competitor_17: competitor_17,
            competitor_18: competitor_18,
            competitor_19: competitor_19,
            competitor_20: competitor_20,
            competitor_21: competitor_21,
            competitor_22: competitor_22,
            competitor_23: competitor_23,
            competitor_24: competitor_24,
            competitor_25: competitor_25,
            competitor_26: competitor_26,
            competitor_27: competitor_27,
            competitor_28: competitor_28,
            competitor_29: competitor_29,
            competitor_30: competitor_30,
            competitor_31: competitor_31,
            competitor_32: competitor_32,
            competitor_33: competitor_33,
            competitor_34: competitor_34,
            competitor_35: competitor_35,
            competitor_36: competitor_36,
            competitor_37: competitor_37,
            competitor_38: competitor_38,
            competitor_39: competitor_39,
            competitor_40: competitor_40,
            competitor_41: competitor_41,
            competitor_42: competitor_42,
            competitor_43: competitor_43,
            competitor_44: competitor_44,
            competitor_45: competitor_45,
            competitor_46: competitor_46,
            competitor_47: competitor_47,
            competitor_48: competitor_48,
            competitor_49: competitor_49,
            competitor_50: competitor_50,

            money_line_1: money_line_1,
            money_line_2: money_line_2,
            money_line_3: money_line_3,
            money_line_4: money_line_4,
            money_line_5: money_line_5,
            money_line_6: money_line_6,
            money_line_7: money_line_7,
            money_line_8: money_line_8,
            money_line_9: money_line_9,
            money_line_10: money_line_10,
            money_line_11: money_line_11,
            money_line_12: money_line_12,
            money_line_13: money_line_13,
            money_line_14: money_line_14,
            money_line_15: money_line_15,
            money_line_16: money_line_16,
            money_line_17: money_line_17,
            money_line_18: money_line_18,
            money_line_19: money_line_19,
            money_line_20: money_line_20,
            money_line_21: money_line_21,
            money_line_22: money_line_22,
            money_line_23: money_line_23,
            money_line_24: money_line_24,
            money_line_25: money_line_25,
            money_line_26: money_line_26,
            money_line_27: money_line_27,
            money_line_28: money_line_28,
            money_line_29: money_line_29,
            money_line_30: money_line_30,
            money_line_31: money_line_31,
            money_line_32: money_line_32,
            money_line_33: money_line_33,
            money_line_34: money_line_34,
            money_line_35: money_line_35,
            money_line_36: money_line_36,
            money_line_37: money_line_37,
            money_line_38: money_line_38,
            money_line_39: money_line_39,
            money_line_40: money_line_40,
            money_line_41: money_line_41,
            money_line_42: money_line_42,
            money_line_43: money_line_43,
            money_line_44: money_line_44,
            money_line_45: money_line_45,
            money_line_46: money_line_46,
            money_line_47: money_line_47,
            money_line_48: money_line_48,
            money_line_49: money_line_49,
            money_line_50: money_line_50,

            casino: casino,
            event: event,
            race: race,
            track: track,
            location: location,
        };



        fetch("https://sportsdata365.com/nascar", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("evento se creo");
                actualizar();
                ;
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
    for (let i = 0; i < 25; i++) {
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
                <h3>Create Nascar Race</h3>
            </div>
            <form onSubmit={crear} id="miFormNASCAR" >
                <div className="row g-0">
                    <div className="col-2 text-center p-1">
                        Status
                        <select className="form-select" name="status" aria-label="Default select example" onChange={e => setStatusCrear(e.target.value)} >
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
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setYearCrear(e.target.value)} defaultValue={2021} >
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
                        <select className="form-select" name="month" aria-label="Default select example" onChange={e => setMonthCrear(e.target.value)} >
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
                        <select className="form-select" name="day" aria-label="Default select example" onChange={e => setDayCrear(e.target.value)} >
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
                        <select className="form-select" name="week" aria-label="Default select example" onChange={e => setWeekCrear(e.target.value)} defaultValue={dateLux} >
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
                        <select className="form-select" name="week" aria-label="Default select example" onChange={e => setHourCrear(e.target.value)} >
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
                        <select className="form-select" name="week" aria-label="Default select example" onChange={e => setMinCrear(e.target.value)} >
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
                <div className="row g-0">
                    <div className="col-3 me-2">
                        <div className="col-12 text-center">
                            Casino <span className="fst-italic small ">*no </span>
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
                    <div className="col-3">
                        <div className="col-12 text-center">
                            Evento
                        </div>
                        <input type="text" className="form-control selectInner" placeholder="Evento" name="event" onChange={e => setEvent(e.target.value)}  />
                    </div>
                    <div className="col-1">
                        <div className="col-12 text-center">
                            Track
                        </div>
                        <input className="form-control selectInner" type="text" placeholder="Track" aria-label="default input example" onChange={e => settrack(e.target.value)}  />
                    </div>
                    <div className="col-2">
                        <div className="col-12 text-center">
                            Location
                        </div>
                        <input className="form-control selectInner" type="text" placeholder="Location" aria-label="default input example" onChange={e => setlocation(e.target.value)}  />
                    </div>
                    <div className="col-2">
                        <div className="col-12 text-center">
                            Race
                        </div>
                        <input type="text" className="form-control selectInner" placeholder="Race" name="race" onChange={e => setrace(e.target.value)}  />
                    </div>
                </div>
                <div className="">
                    <div id="crear-juego" className="row g-0">
                        <div className="col-12">
                            <div className="row g-0 text-center pt-3 ">
                                <div className="col-1 title-lines">Rotation #</div>
                                <div className="col-5 title-lines">Driver</div>
                                <div className="col-3 title-lines">Line</div>
                                <div className="col-3 title-lines">Winner</div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_1(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_1(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_1(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_1(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_2(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_2(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_2(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_3(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_3(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_3(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_2(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_4(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_4(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_4(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_5(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_5(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_5(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_3(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_6(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_6(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_6(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_7(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_7(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_7(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_4(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_8(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_8(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_8(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_9(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_9(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_9(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_5(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_10(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_10(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_10(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_11(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_11(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_11(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_6(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_12(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_12(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_12(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_13(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_13(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_13(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_7(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_14(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_14(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_14(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_15(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_15(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_15(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_8(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_16(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_16(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_16(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_17(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_17(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_17(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_9(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_18(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_18(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_18(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_19(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_19(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_19(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_10(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_20(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_20(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_20(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_21(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_21(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_21(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_11(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_22(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_22(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_22(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_23(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_23(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_23(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_12(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_24(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_24(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_24(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_25(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_25(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_25(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_13(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_26(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_26(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_26(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_27(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_27(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_27(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_14(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_28(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_28(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_28(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_29(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_29(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_29(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_15(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_30(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_30(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_30(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_31(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_31(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_31(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_16(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_32(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_32(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_32(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_33(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_33(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_33(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_17(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_34(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_34(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_34(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_35(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_35(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_35(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_18(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_36(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_36(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_36(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_37(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_37(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_37(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_19(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_38(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_38(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_38(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_39(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_39(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_39(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_20(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_40(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_40(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_40(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_41(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_41(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_41(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_21(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_42(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_42(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_42(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_43(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_43(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_43(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_22(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_44(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_44(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_44(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_45(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_45(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_45(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_23(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_46(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_46(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_46(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_47(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_47(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_47(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_24(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_48(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_48(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_48(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_49(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_49(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_49(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" onChange={e => setwinner_25(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_50(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Driver" name="rotation" onChange={e => setcompetitor_50(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_50(e.target.value)} />
                                    </div>
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