import { useParams, Redirect } from 'react-router-dom';
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { HashLink } from 'react-router-hash-link';
import DateTime from 'luxon/src/datetime.js'
export const EdithGolf = (props) => {
    const params = useParams();
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

    const dateLux = DateTime.now().weekNumber;
    const [statusCrear, setStatusCrear] = useState(store.golf[params.theid].status);
    const [casino, setcasino] = useState(store.golf[params.theid].casino);
    const [week, setWeek] = useState(store.golf[params.theid].week);
    const [date, setdate] = useState(store.golf[params.theid].date);
    const [hour, sethour] = useState(store.golf[params.theid].hour);
    const [event, setevent] = useState(store.golf[params.theid].event);
    //
    const [location, setlocation] = useState(store.golf[params.theid].location);
    const [place1, setplace1] = useState(store.golf[params.theid].place1);
    const [place2, setplace2] = useState(store.golf[params.theid].place2);
    const [place3, setplace3] = useState(store.golf[params.theid].place3);

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            date: date,
            hour: hour,
            week: week,
            status: statusCrear,
            casino: casino,
            event: event,

            location: location,
            place1: place1,
            place2: place2,
            place3: place3

        };
        
       
        fetch("https://allfansports.herokuapp.com/golf/" + store.golf[params.theid].id, {
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
    const deletFight = e => {
        fetch("https://allfansports.herokuapp.com/golf/" + store.golf[params.theid].id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .catch(err => console.log(err));
        setAuth(true);
        actualizar();
    };


    return (
        <div className="container-fluid accordion" id="fightEdith" >
            <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                <div className="row g-0 w-100">
                    <div className="col-6">
                        <h4 className="fw-bold text-center">Edith GOLF EVENT </h4>
                    </div>
                    <div className="col-6">
                        <h4>
                            {store.golf[params.theid].event}
                        </h4>
                    </div>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="col-2 text-center">
                        Status
                        <select className="form-select" name="status" aria-label="Default select example" defaultValue={store.golf[params.theid].status} onChange={e => setStatusCrear(e.target.value)}>
                            {
                                store.status.map((index) => {
                                    return (
                                        <option key={index} name="status" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-3">
                        <div className="col-12 text-center">
                            Casino <span className="fst-italic small ">*no</span>
                        </div>
                        <select className="form-select" name="casino" aria-label="Default select example" defaultValue={store.golf[params.theid].casino} onChange={e => setcasino(e.target.value)}>
                            {
                                store.casinos.map((item, index) => {
                                    return (
                                        <option key={index} name="promotions" value={item.name}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="">
                    <div id="crear-juego" className="">
                        <div>
                            <div className="row g-0 text-center pt-3 ">
                                <div className="col-1 title-lines">Event</div>
                                <div className="col-1 title-lines">Location</div>
                                <div className="col-2 title-lines">Place 1</div>
                                <div className="col-1 title-lines">Place 2</div>
                                <div className="col-2 title-lines">Place 3</div>
                            </div>
                            <div className="row g-0">
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Event" name="event" defaultValue={store.golf[params.theid].event} onChange={e => setevent(e.target.value)}  />
                                </div>
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Location" name="location" defaultValue={store.golf[params.theid].location} onChange={e => setlocation(e.target.value)} />
                                </div>
                                <div className="col-2">
                                    <input className="form-control selectInner" type="text" placeholder="Place 1" aria-label="default input example" defaultValue={store.golf[params.theid].place1} onChange={e => setplace1(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Place 2" aria-label="default input example" defaultValue={store.golf[params.theid].place2} onChange={e => setplace2(e.target.value)} />
                                </div>
                                <div className="col-2">
                                    <input className="form-control selectInner" type="text" placeholder="Place 3" aria-label="default input example" defaultValue={store.golf[params.theid].place3} onChange={e => setplace3(e.target.value)} />
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
                                <button className="btn btn-danger" onClick={deletFight} data-bs-dismiss="modal">Yes Delete</button>
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