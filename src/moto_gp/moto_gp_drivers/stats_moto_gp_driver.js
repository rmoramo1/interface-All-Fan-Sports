import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";

export const Stats_Moto_GP_Driver = () => {
    const { store } = useContext(Context);
    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }
    const [name, setName] = useState("");
    const [country, setcountry] = useState("");
    const [birth, setBirth] = useState("");
    const [headshot, setheadshot] = useState("");

    const [sponsor, setsponsor] = useState("");
    const [engine, setengine] = useState("");
    const [number_car, setnumber_car] = useState("");
    const [rank, setrank] = useState("");
    const [starts, setstarts] = useState("");
    const [poles, setpoles] = useState("");
    const [top5, settop5] = useState("");
    const [top10, settop10] = useState("");
    const [laps_lead, setlaps_lead] = useState("");
    const [pts, setpts] = useState("");
    const [AVG_laps, setAVG_laps] = useState("");
    const [AVG_finish, setAVG_finish] = useState("");
    let actualizar = () => {
        document.getElementById("miFormMoto_GP_DRIVER").reset();
    }
    const crear = e => {
        actualizar();
        e.preventDefault();
        const body = {
            name: name,
            country: country,
            birth: birth,
            headshot: headshot,

            sponsor: sponsor,
            engine: engine,
            number_car: number_car,
            rank: rank,
            starts: starts,
            poles: poles,
            top5: top5,
            top10: top10,
            laps_lead: laps_lead,
            pts: pts,
            AVG_laps: AVG_laps,
            AVG_finish: AVG_finish
        };
        
       

        fetch("https://sportsdata365.com/moto_gp_drivers", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                
                alert("Stadistica de Motociclista se creo");
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
                    <h3>Create Stats Moto GP Driver</h3>
                </div>
            </div>
            <form onSubmit={crear} id="miFormMoto_GP_DRIVER">
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
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" onChange={e => setBirth(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Headshot
                        <input className="form-control selectInner" type="text" placeholder="Headshot" aria-label="setheadshot" onChange={e => setheadshot(e.target.value)} required ></input>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Sponsor</div>
                        <div className="col-2 title-lines">Engine</div>
                        <div className="col-2 title-lines">Number Car</div>
                        <div className="col-2 title-lines">Rank</div>
                        <div className="col-2 title-lines">Starts</div>
                        <div className="col-2 title-lines">Poles</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sponsor" aria-label="default input example" onChange={e => setsponsor(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Engine" aria-label="default input example" onChange={e => setengine(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Number Car" aria-label="default input example" onChange={e => setnumber_car(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Rank" aria-label="default input example" onChange={e => setrank(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Starts" aria-label="default input example" onChange={e => setstarts(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Poles" aria-label="default input example" onChange={e => setpoles(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Top 5</div>
                        <div className="col-2 title-lines">Top 10</div>
                        <div className="col-2 title-lines">Laps Lead</div>
                        <div className="col-2 title-lines">Pts</div>
                        <div className="col-2 title-lines">AVG_laps</div>
                        <div className="col-2 title-lines">AVG_finish</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Top 5" aria-label="default input example" onChange={e => settop5(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Top 10" aria-label="default input example" onChange={e => settop10(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Laps Lead" aria-label="default input example" onChange={e => setlaps_lead(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Pts" aria-label="default input example" onChange={e => setpts(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="AVG_laps" aria-label="default input example" onChange={e => setAVG_laps(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="AVG_finish" aria-label="default input example" onChange={e => setAVG_finish(e.target.value)} required />
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