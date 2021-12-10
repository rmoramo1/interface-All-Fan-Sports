import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Stats_Golfer = () => {
    const { store } = useContext(Context);

    const [name, setName] = useState("");
    const [country, setcountry] = useState("");
    const [swing, setswing] = useState("");
    const [birth, setBirth] = useState("");

    const [cuts, setcuts] = useState("2021");
    const [top10, settop10] = useState("Boston Bruins");
    const [w, setW] = useState("");
    const [rnds, setrnds] = useState("");
    const [holes, setholes] = useState("");
    const [avg, setavg] = useState("");


    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        window.location.reload(true);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            name: name,
            country: country,
            swing: swing,
            birth: birth,

            cuts: cuts,
            top10: top10,
            w: w,
            rnds: rnds,
            holes: holes,
            avg: avg
        };
        console.log(body);
        console.log(body.date);

        fetch("https://interfaceroy.herokuapp.com/golfer", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                console.log(sessionStorage);
                alert("Stadistica de Golfista se creo");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));
    };

    //select
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate-nhl" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create Stats Golfer</h3>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="text-center col-2 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" onChange={e => setName(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Country
                        <input className="form-control selectInner" type="text" placeholder="Country" aria-label="default input example" onChange={e => setcountry(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Swing
                        <input className="form-control selectInner" type="text" placeholder="Swing" aria-label="default input example" onChange={e => setswing(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" onChange={e => setBirth(e.target.value)} required ></input>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-1 title-lines">Cuts</div>
                        <div className="col-1 title-lines">Top 10</div>
                        <div className="col-1 title-lines">W</div>
                        <div className="col-1 title-lines">Rnds</div>
                        <div className="col-1 title-lines">Holes</div>
                        <div className="col-1 title-lines">Avg</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="Cuts" aria-label="default input example" onChange={e => setcuts(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="Top 10" aria-label="default input example" onChange={e => settop10(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="W" aria-label="default input example" onChange={e => setW(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="Rnds" aria-label="default input example" onChange={e => setrnds(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="Holes" aria-label="default input example" onChange={e => setholes(e.target.value)} required />
                        </div>
                        <div className="col-1">
                            <input className="form-control selectInner" type="text" placeholder="avg" aria-label="default input example" onChange={e => setavg(e.target.value)} required />
                        </div>
                    </div>
                </div>

                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_stats_golfer/" /> : null}
            </form>
        </div>

    )
} 