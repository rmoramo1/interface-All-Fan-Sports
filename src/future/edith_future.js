import React, { useState, useContext, useEffect } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Edith_Future = (props) => {
    const params = useParams();
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const [sport, setsport] = useState(store.futures[params.theid] && store.futures[params.theid].sport);
    const [future, setfuture] = useState(store.futures[params.theid] && store.futures[params.theid].future);
    const [line, setline] = useState(store.futures[params.theid] && store.futures[params.theid].line);

    const [date, setdate] = useState(store.futures[params.theid] && store.futures[params.theid].date);

    let only_year = date[0] + date[1] + date[2] + date[3];
    let only_month = date[5] + date[6];
    let only_day = date[8] + date[9];


    const [yearCrear, setYearCrear] = useState(only_year);
    const [monthCrear, setMonthCrear] = useState(only_month);
    const [dayCrear, setDayCrear] = useState(only_day);

    let yearSE = yearCrear + "-" + monthCrear + "-" + dayCrear;
    let [yearSendCrear] = useState(yearSE);
    yearSendCrear = yearCrear + "-" + monthCrear + "-" + dayCrear;


    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);
    }
    const edit = e => {
        e.preventDefault();
        const body = {
            sport: sport,
            future: future,
            line: line,
            date: yearSendCrear,
        };

        fetch("https://www.sportsdata365.com/futures/" + store.futures[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("Future se Edito");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));
    };
    const deletLogo = e => {
        fetch("https://www.sportsdata365.com/futures/" + store.futures[params.theid].id, {
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
        <div className="container m-50">
            <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                <div className="row g-0 w-100">
                    <div className="col-6">
                        <h4 className="fw-bold text-center">Edith Future </h4>
                    </div>
                    <div className="col-6 tetx-center">
                        <h4>
                            {store.futures[params.theid] && store.futures[params.theid].name}
                        </h4>
                    </div>
                </div>
            </div>
            <div className="row g-0 rounded overflow-hidden shadow">
                <form onSubmit={edit}>
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
                            <input type="text" className="form-control selectInner" placeholder="Sport" name="Sport" defaultValue={store.futures[params.theid] && store.futures[params.theid].sport} onChange={e => setsport(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Future" name="setfuture" defaultValue={store.futures[params.theid] && store.futures[params.theid].future} onChange={e => setfuture(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Line" name="setline" defaultValue={store.futures[params.theid] && store.futures[params.theid].line} onChange={e => setline(e.target.value)} required />
                        </div>
                        <div className="text-center col-2">
                            <select className="form-select" name="year" aria-label="Default select example" defaultValue={only_year} onChange={e => setYearCrear(e.target.value)} required>
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
                            <select className="form-select" name="month" aria-label="Default select example" defaultValue={only_month} onChange={e => setMonthCrear(e.target.value)} required>
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
                            <select className="form-select" name="day" aria-label="Default select example" defaultValue={only_day} onChange={e => setDayCrear(e.target.value)} required>
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
                    <div className="row g-0">
                        <div className="col-4 p-3 text-end">
                            <Link className="btn btn-secondary  text-white" to="/admin">Back to Admin</Link>
                        </div>
                        <div className="col-4 text-center py-3">
                            <button type="submit" className="btn btn-danger">Edith</button>
                        </div>
                        <div className="col-4 text-start p-3">
                            <div data-bs-toggle="modal" data-bs-target="#delete_Fight" className="btn btn-danger">Delet</div>
                        </div>
                    </div>
                    {auth ? <Redirect to="/admin/" /> : null}
                </form>
            </div>
            <div className="modal fade" id="delete_Fight" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content overflow-hidden">
                        <div className="col-12 text-center text-white bg-danger text-uppercase fs-5 py-3">
                            <i className="fas fa-exclamation-triangle fs-1"></i><br />are you sure you want to delete the logo
                        </div>
                        <div className="row g-0">
                            <div className="col-6 p-2 text-center">
                                <button className="btn btn-danger" onClick={deletLogo} data-bs-dismiss="modal">Yes Delete</button>
                                {auth ? <Redirect to="/futures_page" /> : null}
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