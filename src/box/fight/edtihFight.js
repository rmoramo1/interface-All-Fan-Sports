import { useParams, Redirect } from 'react-router-dom';
import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { HashLink } from 'react-router-hash-link';
import DateTime from 'luxon/src/datetime.js'
export const EdithFight = (props) => {
    const params = useParams();
    const { store } = useContext(Context);
    const dateLux = DateTime.now().weekNumber;
    const [statusCrear, setStatusCrear] = useState(store.box_fight[params.theid].status);
    const [casino, setcasino] = useState(store.box_fight[params.theid].casino);
    const [week, setWeek] = useState(store.box_fight[params.theid].week);
    const [date, setdate] = useState(store.box_fight[params.theid].date);
    const [hour, sethour] = useState(store.box_fight[params.theid].hour);
    //
    const [event, setevent] = useState(store.box_fight[params.theid].event);
    const [rounds, setrounds] = useState(store.box_fight[params.theid].rounds);
    const [location_Fight, setlocation_Fight] = useState(store.box_fight[params.theid].location_Fight);
    const [fighter_One, setfighter_One] = useState(store.box_fight[params.theid].fighter_One);
    const [money_Line_One, setmoney_Line_One] = useState(store.box_fight[params.theid].money_Line_One);
    const [fighter_Two, setfighter_Two] = useState(store.box_fight[params.theid].fighter_Two);
    const [money_Line_Two, setmoney_Line_Two] = useState(store.box_fight[params.theid].money_Line_Two);
    const [winner, setwinner] = useState(store.box_fight[params.theid].winner);
    const [finish_by, setfinish_by] = useState(store.box_fight[params.theid].finish_by);
    //
    const [r1_result, setr1_result] = useState(store.box_fight[params.theid].r1_result);
    const [r2_result, setr2_result] = useState(store.box_fight[params.theid].r2_result);
    const [r3_result, setr3_result] = useState(store.box_fight[params.theid].r3_result);
    const [r4_result, setr4_result] = useState(store.box_fight[params.theid].r4_result);
    const [r5_result, setr5_result] = useState(store.box_fight[params.theid].r5_result);
    const [r6_result, setr6_result] = useState(store.box_fight[params.theid].r6_result);
    const [r7_result, setr7_result] = useState(store.box_fight[params.theid].r7_result);
    const [r8_result, setr8_result] = useState(store.box_fight[params.theid].r8_result);
    const [r9_result, setr9_result] = useState(store.box_fight[params.theid].r9_result);
    const [r10_result, setr10_result] = useState(store.box_fight[params.theid].r10_result);
    const [r11_result, setr11_result] = useState(store.box_fight[params.theid].r11_result);
    const [r12_result, setr12_result] = useState(store.box_fight[params.theid].r12_result);
    const [r13_result, setr13_result] = useState(store.box_fight[params.theid].r13_result);
    const [r14_result, setr14_result] = useState(store.box_fight[params.theid].r14_result);
    const [r15_result, setr15_result] = useState(store.box_fight[params.theid].r15_result);

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);

    }
    const crear = e => {
        e.preventDefault();
        const body = {
            status: statusCrear,
            casino: casino,
            week:week,
            date:date,
            hour:hour,

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
        console.log(body);
        console.log(body.date);
        fetch("https://interfaceroy.herokuapp.com/boxeo/" + store.box_fight[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                console.log(sessionStorage);
                alert("juego se creo");
                setAuth(true);
                //actualizar();
            })
            .catch(err => console.log(err));

    };
    const deletFight = e => {
        fetch("https://interfaceroy.herokuapp.com/boxeo/" + store.box_fight[params.theid].id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .catch(err => console.log(err));
        setAuth(true);
        //actualizar();
    };


    return (
        <div className="container-fluid accordion" id="fightEdith" >
            <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                <div className="row g-0 w-100">
                    <div className="col-6">
                        <h4 className="fw-bold text-center">Edith Fight </h4>
                    </div>
                    <div className="col-6">
                        <h4>
                            {store.box_fight[params.theid].fighter_One} vrs {store.box_fight[params.theid].fighter_Two}
                        </h4>
                    </div>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="col-2 text-center">
                        Status
                        <select className="form-select" name="status" aria-label="Default select example" defaultValue={store.box_fight[params.theid].status} onChange={e => setStatusCrear(e.target.value)}>
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
                        <select className="form-select" name="casino" aria-label="Default select example" defaultValue={store.box_fight[params.theid].casino} onChange={e => setcasino(e.target.value)}>
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
                                    <input type="text" className="form-control selectInner" placeholder="Event" name="event" defaultValue={store.box_fight[params.theid].event} onChange={e => setevent(e.target.value)}  />
                                </div>
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Rounds" name="rounds" defaultValue={store.box_fight[params.theid].rounds} onChange={e => setrounds(e.target.value)} />
                                </div>
                                <div className="col-2">
                                    <input className="form-control selectInner" type="text" placeholder="Location" aria-label="default input example" defaultValue={store.box_fight[params.theid].location_Fight} onChange={e => setlocation_Fight(e.target.value)} />
                                </div>
                                <div className="col-2">
                                    <input className="form-control selectInner" type="text" placeholder="Fighter One" aria-label="default input example" defaultValue={store.box_fight[params.theid].fighter_One} onChange={e => setfighter_One(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="ML" aria-label="default input example" defaultValue={store.box_fight[params.theid].money_Line_One} onChange={e => setmoney_Line_One(e.target.value)} />
                                </div>
                                <div className="col-2">
                                    <input className="form-control selectInner" type="text" placeholder="Fighter Two" aria-label="default input example" defaultValue={store.box_fight[params.theid].fighter_Two} onChange={e => setfighter_Two(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="ML" aria-label="default input example" defaultValue={store.box_fight[params.theid].money_Line_Two} onChange={e => setmoney_Line_Two(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="winner" aria-label="default input example" defaultValue={store.box_fight[params.theid].winner} onChange={e => setwinner(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Finish By" aria-label="default input example" defaultValue={store.box_fight[params.theid].finish_by} onChange={e => setfinish_by(e.target.value)} />
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
                                    <input className="form-control selectInner" type="text" placeholder="R1" aria-label="default input example" defaultValue={store.box_fight[params.theid].r1_result} onChange={e => setr1_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R2" aria-label="default input example" defaultValue={store.box_fight[params.theid].r2_result} onChange={e => setr2_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R3" aria-label="default input example" defaultValue={store.box_fight[params.theid].r3_result} onChange={e => setr3_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R4" aria-label="default input example" defaultValue={store.box_fight[params.theid].r4_result} onChange={e => setr4_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R5" aria-label="default input example" defaultValue={store.box_fight[params.theid].r5_result} onChange={e => setr5_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R6" aria-label="default input example" defaultValue={store.box_fight[params.theid].r6_result} onChange={e => setr6_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R7" aria-label="default input example" defaultValue={store.box_fight[params.theid].r7_result} onChange={e => setr7_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R8" aria-label="default input example" defaultValue={store.box_fight[params.theid].r8_result} onChange={e => setr8_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R9" aria-label="default input example" defaultValue={store.box_fight[params.theid].r9_result} onChange={e => setr9_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R10" aria-label="default input example" defaultValue={store.box_fight[params.theid].r10_result} onChange={e => setr10_result(e.target.value)} />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R11" aria-label="default input example" defaultValue={store.box_fight[params.theid].r11_result} onChange={e => setr11_result(e.target.value)} />
                                </div>

                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="R12" aria-label="default input example" defaultValue={store.box_fight[params.theid].r12_result} onChange={e => setr12_result(e.target.value)} />
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
                                <input className="form-control selectInner" type="text" placeholder="R13" aria-label="default input example" defaultValue={store.box_fight[params.theid].r13_result} onChange={e => setr13_result(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="R14" aria-label="default input example" defaultValue={store.box_fight[params.theid].r14_result} onChange={e => setr14_result(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="R15" aria-label="default input example" defaultValue={store.box_fight[params.theid].r15_result} onChange={e => setr15_result(e.target.value)} />
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
                                {auth ? <Redirect to="/admin" /> : null}
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