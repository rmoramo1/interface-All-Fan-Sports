import { useParams, Redirect } from 'react-router-dom';
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { HashLink } from 'react-router-hash-link';
import DateTime from 'luxon/src/datetime.js'
export const EditNascar = (props) => {
    const params = useParams();
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const [date, setdate] = useState(store.nascar[params.theid] && store.nascar[params.theid].date);
    const [hour, sethour] = useState(store.nascar[params.theid] && store.nascar[params.theid].hour);

    let only_year = date[0] + date[1] + date[2] + date[3];
    let only_month = date[5] + date[6];
    let only_day = date[8] + date[9];
    let only_hour = hour[0] + hour[1];
    let only_min = hour[3] + hour[4];
    const dateLux = DateTime.now().weekNumber;
    const [statusCrear, setStatusCrear] = useState(store.nascar[params.theid] && store.nascar[params.theid].status);
    const [casino, setcasino] = useState(store.nascar[params.theid] && store.nascar[params.theid].casino);
    const [event, setevent] = useState(store.nascar[params.theid] && store.nascar[params.theid].event);
    const [rotation_number, setRotation_number] = useState(store.nascar[params.theid] && store.nascar[params.theid].rotation_number);
    const [yearCrear, setYearCrear] = useState(only_year);
    const [monthCrear, setMonthCrear] = useState(only_month);
    const [dayCrear, setDayCrear] = useState(only_day);
    let yearSend = yearCrear + "-" + monthCrear + "-" + dayCrear;
    let [yearSendCrear] = useState(yearSend);
    yearSendCrear = yearCrear + "-" + monthCrear + "-" + dayCrear;
    const [weekCrear, setWeekCrear] = useState(store.nascar[params.theid] && store.nascar[params.theid].week);
    const [hourCrear, setHourCrear] = useState(only_hour);
    const [minCrear, setMinCrear] = useState(only_min);
    let [timeCrear] = useState("01");
    timeCrear = hourCrear + ":" + minCrear;

    //
    const [race, setrace] = useState(store.nascar[params.theid] && store.nascar[params.theid].race);
    const [track, settrack] = useState(store.nascar[params.theid] && store.nascar[params.theid].track);
    const [location, setlocation] = useState(store.nascar[params.theid] && store.nascar[params.theid].location);
    const [place1, setplace1] = useState(store.nascar[params.theid] && store.nascar[params.theid].place1);
    const [place2, setplace2] = useState(store.nascar[params.theid] && store.nascar[params.theid].place2);
    const [place3, setplace3] = useState(store.nascar[params.theid] && store.nascar[params.theid].place3);

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
            event: event,
            rotation_number: rotation_number,
            race: race,
            track: track,
            location: location,
            place1: place1,
            place2: place2,
            place3: place3
        };


        fetch("https://sportsdata365.com/nascar/" + store.nascar[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
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
    const deletRace = e => {
        fetch("https://sportsdata365.com/nascar/" + store.nascar[params.theid].id, {
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
        <div className="container-fluid accordion" id="fightEdith" >
            <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                <div className="row g-0 w-100">
                    <div className="col-6">
                        <h4 className="fw-bold text-center">Edith Nascar Race </h4>
                    </div>
                    <div className="col-6">
                        <h4>
                            {store.nascar[params.theid] && store.nascar[params.theid].event}
                        </h4>
                    </div>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="col-2 text-center p-1">
                        Status
                        <select className="form-select" name="status" aria-label="Default select example" defaultValue={store.nascar[params.theid] && store.nascar[params.theid].status} onChange={e => setStatusCrear(e.target.value)} required>
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
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setYearCrear(e.target.value)} defaultValue={only_year} required>
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
                    <div className="text-center col-1 p-1">
                        Day
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
                    <div className="text-center col-1 p-1">
                        Week
                        <select className="form-select" name="week" aria-label="Default select example" onChange={e => setWeekCrear(e.target.value)} defaultValue={weekCrear} required>
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
                        <select className="form-select" name="week" aria-label="Default select example" defaultValue={only_hour} onChange={e => setHourCrear(e.target.value)} required>
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
                        <select className="form-select" name="week" aria-label="Default select example" defaultValue={only_min} onChange={e => setMinCrear(e.target.value)} required>
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
                    <div className="col-3">
                        <div className="col-12 text-center">
                            Casino <span className="fst-italic small ">*no required</span>
                        </div>
                        <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setcasino(e.target.value)} defaultValue={store.nascar[params.theid] && store.nascar[params.theid].casino}>
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
                        <input type="text" className="form-control selectInner" placeholder="Evento" name="rotation_away" defaultValue={store.nascar[params.theid] && store.nascar[params.theid].event} onChange={e => setevent(e.target.value)} required />
                    </div>
                </div>
                <div className="">
                    <div id="crear-juego" className="">
                        <div>
                            <div className="row g-0 text-center pt-3 ">
                                <div className="col-1 title-lines">Rotation #</div>
                                <div className="col-1 title-lines">Race</div>
                                <div className="col-1 title-lines">Track</div>
                                <div className="col-1 title-lines">Location</div>
                                <div className="col-2 title-lines">Place 1</div>
                                <div className="col-1 title-lines">Place 2</div>
                                <div className="col-2 title-lines">Place 3</div>
                            </div>
                            <div className="row g-0">
                            <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="ROtation #" name="race" defaultValue={store.nascar[params.theid] && store.nascar[params.theid].rotation_number} onChange={e => setRotation_number(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Race" name="race" defaultValue={store.nascar[params.theid] && store.nascar[params.theid].race} onChange={e => setrace(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Track" name="Track" defaultValue={store.nascar[params.theid] && store.nascar[params.theid].track} onChange={e => settrack(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Location" name="location" defaultValue={store.nascar[params.theid] && store.nascar[params.theid].location} onChange={e => setlocation(e.target.value)} />
                                </div>
                                <div className="col-2">
                                    <input className="form-control selectInner" type="text" placeholder="Place 1" aria-label="default input example" defaultValue={store.nascar[params.theid] && store.nascar[params.theid].place1} onChange={e => setplace1(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Place 2" aria-label="default input example" defaultValue={store.nascar[params.theid] && store.nascar[params.theid].place2} onChange={e => setplace2(e.target.value)} />
                                </div>
                                <div className="col-2">
                                    <input className="form-control selectInner" type="text" placeholder="Place 3" aria-label="default input example" defaultValue={store.nascar[params.theid] && store.nascar[params.theid].place3} onChange={e => setplace3(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row g-0">
                    <div className="col-4 p-3 text-end">
                        <HashLink className="btn btn-secondary text-white" to="/admin">Back to Admin</HashLink>
                    </div>
                    <div className="col-4 text-end p-3">
                        <button type="submit" className="btn btn-success">Edit</button>
                    </div>
                    <div className="col-4 text-start p-3">
                        <div data-bs-toggle="modal" data-bs-target="#delete_Fight" className="btn btn-danger">Delet</div>
                    </div>
                </div>
            </form>
            <div className="modal fade" id="delete_Fight" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content overflow-hidden">
                        <div className="col-12 text-center text-white bg-danger text-uppercase fs-5 py-3">
                            <i className="fas fa-exclamation-triangle fs-1"></i><br />are you sure you want to delete the match
                        </div>
                        <div className="row g-0">
                            <div className="col-6 p-2 text-center">
                                <button className="btn btn-danger" onClick={deletRace} data-bs-dismiss="modal">Yes Delete</button>
                                {auth ? <Redirect to="/allGames" /> : null}
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