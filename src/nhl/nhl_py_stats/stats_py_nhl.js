import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Stats_py_nhl = () => {
    const { store} = useContext(Context);
    
    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [birth, setBirth] = useState("");
    const [season, setSeason] = useState("2021");
    const [team, setTeam] = useState("Boston Bruins");
    const [dorsal, setDorsal] = useState("");
    const [position, setPosition] = useState("C");

    const [gp, setGp] = useState("");
    const [g, setG] = useState("");
    const [a, setA] = useState("");
    const [pts, setpts] = useState("");
    const [p_m_rating, setp_m_rating] = useState("");
    const [pim, setpim] = useState("");
    const [sog, setsog] = useState("");

    const [spct, setspct] = useState("");
    const [ppg, setppg] = useState("");
    const [ppa, setppa] = useState("");
    const [shg, setshg] = useState("");
    const [sha, setsha] = useState("");

    const [gwg, setgwg] = useState("");
    const [gtg, setgtg] = useState("");
    const [toi_g, settoi_g] = useState("");
    const [prod, setprod] = useState("");

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        window.location.reload(true);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            name: name,
            height: height,
            weight: weight,
            birth: birth,
            season: season,
            team: team,
            dorsal: dorsal,
            position: position,

            gp: gp,
            g: g,
            a: a,
            pts: pts,
            p_m_rating: p_m_rating,
            pim: pim,
            sog: sog,
            spct: spct,
            ppg: ppg,
            ppa: ppa,
            shg: shg,
            sha: sha,
            gwg: gwg,
            gtg: gtg,
            toi_g: toi_g,
            prod: prod
        };

        fetch("https://allfansports.herokuapp.com/stats_nhl_player", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("Stadistica de jugador se creo");
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
    let positions=["C","D","G","LW","RW"];
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate-nhl" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create Stats NBA Player</h3>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" onChange={e => setName(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Height
                        <input className="form-control selectInner" type="text" placeholder="Height" aria-label="default input example" onChange={e => setHeight(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Weight
                        <input className="form-control selectInner" type="text" placeholder="Weight" aria-label="default input example" onChange={e => setWeight(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" onChange={e => setBirth(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Position
                        <select className="form-select selectInner" name="positions" aria-label="Default select example" onChange={e => setPosition(e.target.value)} required>
                            {
                                positions.map((index) => {
                                    return (
                                        <option key={index} name="position" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Dorsal
                        <input className="form-control selectInner" type="text" placeholder="Dorsal" aria-label="default input example" onChange={e => setDorsal(e.target.value)} required ></input>
                    </div>

                </div>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setTeam(e.target.value)} required>
                            {
                                store.nhl_teams.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={2021} required>
                            {
                                selectYear.map((index) => {
                                    return (
                                        <option key={index} name="season" value={index} >{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Gp</div>
                        <div className="col-2 title-lines">G</div>
                        <div className="col-2 title-lines">A</div>
                        <div className="col-2 title-lines">Pts</div>
                        <div className="col-2 title-lines">P M Rating</div>
                        <div className="col-2 title-lines">Pim</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Gp" aria-label="default input example" onChange={e => setGp(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="G" aria-label="default input example" onChange={e => setG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="A" aria-label="default input example" onChange={e => setA(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Pts" aria-label="default input example" onChange={e => setpts(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="P M Rating" aria-label="default input example" onChange={e => setp_m_rating(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Pim" aria-label="default input example" onChange={e => setpim(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Sog</div>
                        <div className="col-2 title-lines">Spct</div>
                        <div className="col-2 title-lines">Ppg</div>
                        <div className="col-2 title-lines">Ppa</div>
                        <div className="col-2 title-lines">Shg</div>
                        <div className="col-2 title-lines">Sha</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sog" aria-label="default input example" onChange={e => setsog(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Spct" aria-label="default input example" onChange={e => setspct(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ppg" aria-label="default input example" onChange={e => setppg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ppa" aria-label="default input example" onChange={e => setppa(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Shg" aria-label="default input example" onChange={e => setshg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sha" aria-label="default input example" onChange={e => setsha(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Gwg</div>
                        <div className="col-2 title-lines">Gtg</div>
                        <div className="col-2 title-lines">Toi G</div>
                        <div className="col-2 title-lines">Prod</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Gwg" aria-label="default input example" onChange={e => setgwg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Gtg" aria-label="default input example" onChange={e => setgtg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Toi G" aria-label="default input example" onChange={e => settoi_g(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Prod" aria-label="default input example" onChange={e => setprod(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_stats_nhl_py/" /> : null}
            </form>
        </div>

    )
} 