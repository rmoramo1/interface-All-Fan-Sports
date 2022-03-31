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
    const [type_odd, settype_odd] = useState();
    const [line, setline] = useState();
    const [team, setteam] = useState();

    const [monthCrear, setMonthCrear] = useState("01");
    const [dayCrear, setDayCrear] = useState("01");
    const [yearCrear, setYearCrear] = useState(year);
    let yearSend = yearCrear + "-" + monthCrear + "-" + dayCrear;
    let [yearSendCrear] = useState(yearSend);
    yearSendCrear = yearCrear + "-" + monthCrear + "-" + dayCrear;

    let actualizar = () => {
        document.getElementById("miFormODDS").reset();
    }
    const crear = e => {
        actualizar();
        e.preventDefault();
        const body = {
            title: title,
            sport: sport,
            type_odd: type_odd,
            line: line,
            team: team,
            date: yearSendCrear,
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
                    <div className="col-2 title-lines text-center">
                        Team
                    </div>
                    <div className="col-2 title-lines text-center">
                        Type
                    </div>
                    <div className="col-1 title-lines text-center">
                        Line
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
                        <input type="text" className="form-control selectInner" placeholder="Title" name="settitle" onChange={e => settitle(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Sport" name="setsport" onChange={e => setsport(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Team" name="setteam" onChange={e => setteam(e.target.value)} required />
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control selectInner" placeholder="Type" name="settype_odd" onChange={e => settype_odd(e.target.value)} required />
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control selectInner" placeholder="Line" name="setline" onChange={e => setline(e.target.value)} required />
                    </div>
                    <div className="text-center col-1">
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
                    <div className="text-center col-1">
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
                    <div className="text-center col-1">
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