import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
let date = new Date();
let year = date.getFullYear();

export const Future = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }
    const [monthCrear, setMonthCrear] = useState("01");
    const [dayCrear, setDayCrear] = useState("01");
    const [yearCrear, setYearCrear] = useState(year);
    let yearSend = yearCrear + "-" + monthCrear + "-" + dayCrear;
    let [yearSendCrear] = useState(yearSend);
    yearSendCrear = yearCrear + "-" + monthCrear + "-" + dayCrear;

    const [sport, setsport] = useState();
    const [future, setfuture] = useState();
    const [line, setline] = useState();
    let actualizar = () => {
        document.getElementById("miFormFuture").reset();
    }
    const crear = e => {
        actualizar();
        e.preventDefault();
        const body = {
            sport: sport,
            future: future,
            line: line,
            date: yearSendCrear,
        };

        fetch("https://www.sportsdata365.com/futures", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("Future se creo");
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
    let sports = ["FOOTBALL", "BASKETBALL", "BASEBALL", "HOCKEY", "BOX", "MMA", "GOLF", "NASCAR", "SOCCER", "NCAA FOOTBALL", "NCAA BASKETBALL", "NCAA BASEBALL"]
    return (
        <div className="col-12 mt-5 rounded overflow-hidden shadow">
            <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                <h3>Create Future</h3>
            </div>
            <form onSubmit={crear} id="miFormFuture">
                <div className="row g-0">
                    <div className="col-2 title-lines text-center">
                        Sport
                    </div>
                    <div className="col-2 title-lines text-center">
                        Future
                    </div>
                    <div className="col-2 title-lines text-center">
                        Line
                    </div>
                    <div className="col-2 title-lines text-center">
                        Year
                    </div>
                    <div className="col-2 title-lines text-center">
                        Month
                    </div>
                    <div className="col-2 title-lines text-center">
                        Day
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-2">
                        <select className="form-select selectInner" name="Tournament" aria-label="Tournament" defaultValue={"FOOTBALL"} onChange={e => setsport(e.target.value)}>
                            {
                                sports.map((item, index) => {
                                    return (
                                        <option key={index} name="sports" value={item}>{item}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Future" name="setfuture" onChange={e => setfuture(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Line" name="setline" onChange={e => setline(e.target.value)} required />
                    </div>
                    <div className="text-center col-2">
                        <select className="form-select" selectInner name="year" aria-label="Default select example" onChange={e => setYearCrear(e.target.value)} defaultValue={year} required>
                            {
                                selectYear.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index} >{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2">
                        <select className="form-select selectInner" name="month" aria-label="Default select example" onChange={e => setMonthCrear(e.target.value)} required>
                            {
                                selectMonth.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2">
                        <select className="form-select selectInner" name="day" aria-label="Default select example" onChange={e => setDayCrear(e.target.value)} required>
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
                <div className="col-12 text-center py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
            </form>
        </div>
    )
}