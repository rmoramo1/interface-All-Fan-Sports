import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
let date = new Date();
let year = date.getFullYear();
export const Odds_to_win = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const [title, settitle] = useState();
    const [sport, setsport] = useState();

    const [monthCrear, setMonthCrear] = useState("01");
    const [dayCrear, setDayCrear] = useState("01");
    const [yearCrear, setYearCrear] = useState(year);
    let yearSend = yearCrear + "-" + monthCrear + "-" + dayCrear;
    let [yearSendCrear] = useState(yearSend);
    yearSendCrear = yearCrear + "-" + monthCrear + "-" + dayCrear;

    const [winner, setwinner] = useState("");
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

    let actualizar = () => {
        document.getElementById("miFormODDS").reset();
    }
    const crear = e => {
        actualizar();
        e.preventDefault();
        const body = {
            title: title,
            sport: sport,
            date: yearSendCrear,
            winner:winner,
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

        };

        fetch("https://sportsdata365.com/odds_to_win", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("ODD se creo");
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
    return (
        <div className="col mx-auto mt-5 rounded overflow-hidden sha dow">
            <div className="col-12 bg-title-edith my-2 p-3 text-center">
                <h3>Odds To Win</h3>
            </div>
            <form onSubmit={crear} id="miFormODDS">
                <div className="row g-0">
                    <div className="col-2 title-lines text-center">
                        Title
                    </div>
                    <div className="col-2 title-lines text-center">
                        Sport
                    </div>
                    <div className="col-1 title-lines text-center">
                        Year
                    </div>
                    <div className="col-1 title-lines text-center">
                        Month
                    </div>
                    <div className="col-1 title-lines text-center">
                        Day
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Title" name="settitle" onChange={e => settitle(e.target.value)} />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Sport" name="setsport" onChange={e => setsport(e.target.value)} />
                    </div>
                    <div className="text-center col-1">
                        <select className="form-select" selectInner name="year" aria-label="Default select example" onChange={e => setYearCrear(e.target.value)} defaultValue={year}>
                            {
                                selectYear.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index} >{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-1">
                        <select className="form-select selectInner" name="month" aria-label="Default select example" onChange={e => setMonthCrear(e.target.value)}>
                            {
                                selectMonth.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-1">
                        <select className="form-select selectInner" name="day" aria-label="Default select example" onChange={e => setDayCrear(e.target.value)}>
                            {
                                selectDay.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className="">
                    <div id="crear-juego" className="row g-0">
                        <div className="col-8">
                            <div className="row g-0 text-center pt-3 ">
                                <div className="col-2 title-lines">Rotation #</div>
                                <div className="col-6 title-lines">Name</div>
                                <div className="col-4 title-lines">Line</div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_1(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_1(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_1(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_2(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_2(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_2(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_3(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_3(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_3(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_4(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_4(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_4(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_5(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_5(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_5(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_6(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_6(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_6(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_7(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_7(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_7(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_8(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_8(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_8(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_9(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_9(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_9(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_10(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_10(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_10(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_11(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_11(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_11(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_12(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_12(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_12(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_13(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_13(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_13(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_14(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_14(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_14(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_15(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_15(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_15(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_16(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_16(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_16(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_17(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_17(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_17(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_18(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_18(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_18(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_19(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_19(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_19(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_20(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_20(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_20(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_21(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_21(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_21(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_22(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_22(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_22(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_23(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_23(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_23(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_24(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_24(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_24(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_25(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_25(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_25(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_26(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_26(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_26(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_27(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_27(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_27(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_28(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_28(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_28(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_29(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_29(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_29(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_30(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_30(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_30(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_31(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_31(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_31(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_32(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_32(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_32(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_33(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_33(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_33(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_34(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_34(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_34(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_35(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_35(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_35(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_36(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_36(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_36(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_37(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_37(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_37(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_38(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_38(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_38(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_39(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_39(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_39(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_40(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_40(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_40(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_41(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_41(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_41(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_42(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_42(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_42(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_43(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_43(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_43(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_44(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_44(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_44(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_45(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_45(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_45(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_46(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_46(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_46(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_47(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_47(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_47(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_48(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_48(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_48(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_49(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_49(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_49(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-2">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" onChange={e => setrotation_number_50(e.target.value)} />
                                    </div>
                                    <div className="col-6
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Name" name="rotation" onChange={e => setcompetitor_50(e.target.value)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" onChange={e => setmoney_line_50(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 ps-2">
                            <div className="row g-0 text-center pt-3 ">
                                <div className="col-12 title-lines">Winner</div>

                            </div>
                            <div className="row g-0">
                                <div className="col-12">
                                    <input className="form-control selectInner" type="text" placeholder="Winner" aria-label="default input example" onChange={e => setwinner(e.target.value)} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-12 text-center py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
            </form>
        </div>
    )
}