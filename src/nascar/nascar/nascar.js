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

    const [race, setrace] = useState("0");
    const [track, settrack] = useState("0");
    const [location, setlocation] = useState("0");
    const [place1, setplace1] = useState("0");
    const [place2, setplace2] = useState("0");
    const [place3, setplace3] = useState("0");

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
            casino: casino,
            race: race,
            track: track,
            location: location,
            place1: place1,
            place2: place2,
            place3: place3
        };
        
       

        fetch("https://sportsdata365.com/nascar", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                
                alert("Evento se creo");
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
                <h3>Create Nascar Race</h3>
            </div>
            <form onSubmit={crear} id="miFormNASCAR" >
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
                                <div className="col-1 title-lines">Race</div>
                                <div className="col-2 title-lines">Track</div>
                                <div className="col-2 title-lines">Location</div>
                                <div className="col-2 title-lines">Place 1</div>
                                <div className="col-1 title-lines">Place 2</div>
                                <div className="col-2 title-lines">Place 3</div>

                            </div>
                            <div className="row g-0">
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Race" name="rotation_away" onChange={e => setrace(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <input className="form-control selectInner" type="text" placeholder="Track" aria-label="default input example" onChange={e => settrack(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <input className="form-control selectInner" type="text" placeholder="Location" aria-label="default input example" onChange={e => setlocation(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <input className="form-control selectInner" type="text" placeholder="Place 1" aria-label="default input example" onChange={e => setplace1(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Place 2" aria-label="default input example" onChange={e => setplace2(e.target.value)} />
                                </div>
                                <div className="col-2">
                                    <input className="form-control selectInner" type="text" placeholder="Place 3" aria-label="default input example" onChange={e => setplace3(e.target.value)}  />
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