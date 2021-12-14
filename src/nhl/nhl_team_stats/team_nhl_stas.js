import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Team_NHL_Stas = () => {
    const { store } = useContext(Context);

    const [season, setSeason] = useState("2021");
    const [team, setTeam] = useState("Boston Bruins");
    const [conference, setconference] = useState("East");
    const [division, setDivision] = useState("Atlantic");
    const [w, setW] = useState("");
    const [L, setL] = useState("");

    const [Ga_a, setGa_a] = useState("");
    const [otl, setotl] = useState("");
    const [sa, setsa] = useState("");
    const [ga, setga] = useState("");
    const [s, setS] = useState("");
    const [sv_AVG, setSv_AVG] = useState("");
    const [so, setso] = useState("");
    const [so_sa, setso_sa] = useState("");
    const [sos, setsos] = useState("");
    const [sos_AVG, setsos_AVG] = useState("");

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        window.location.reload(true);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            season: season,
            team: team,
            conference: conference,
            division: division,
            w: w,
            L: L,

            Ga_a: Ga_a,
            otl: otl,
            sa: sa,
            ga: ga,
            s: s,
            sv_AVG: sv_AVG,
            so: so,
            so_sa: so_sa,
            sos: sos,
            sos_AVG: sos_AVG

        };
        console.log(body);
        console.log(body.date);

        fetch("https://interfaceroy.herokuapp.com/stats_nhl_team", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                console.log(sessionStorage);
                alert("Stadistica se creo");
                setAuth(true);
                //actualizar();
            })
            .catch(err => console.log(err));
    };

    //select
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    let selectDivision = ["Atlantic", "Metropolitan","Central","Peaceful"];
    let selectConference = ["East", "West"];

    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create stats by MLB team</h3>
                </div>
            </div>
            <form onSubmit={crear}>
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
                    <div className="text-center col-3 p-1">
                    Division
                        <select className="form-select" name="month" aria-label="Default select example" onChange={e => setDivision(e.target.value)} required>
                            {
                                selectDivision.map((index) => {
                                    return (
                                        <option key={index} name="conference" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Conference
                        <select className="form-select" name="month" aria-label="Default select example" onChange={e => setconference(e.target.value)} required>
                            {
                                selectConference.map((index) => {
                                    return (
                                        <option key={index} name="setConference" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div id="crear-stats" className="py-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">W</div>
                        <div className="col-2 title-lines">L</div>
                        <div className="col-2 title-lines">Ga A</div>
                        <div className="col-2 title-lines">Otl</div>
                        <div className="col-2 title-lines">Sa</div>
                        <div className="col-2 title-lines">Ga</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="W" aria-label="default input example" onChange={e => setW(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L" aria-label="default input example" onChange={e => setL(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ga A" aria-label="default input example" onChange={e => setGa_a(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Otl" aria-label="default input example" onChange={e => setotl(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sa" aria-label="default input example" onChange={e => setsa(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ga" aria-label="default input example" onChange={e => setga(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row g-0 text-center mt-3">
                        <div className="col-2 title-lines">S</div>
                        <div className="col-2 title-lines">Sv AVG</div>
                        <div className="col-2 title-lines">So</div>
                        <div className="col-2 title-lines">So SA</div>
                        <div className="col-2 title-lines">Sos</div>
                        <div className="col-2 title-lines">Sos AVG</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="S" name="rotation_home" onChange={e => setS(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sv AVG" aria-label="default input example" onChange={e => setSv_AVG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="So" aria-label="default input example" onChange={e => setso(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="SO SA" aria-label="default input example" onChange={e => setso_sa(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sos" aria-label="default input example" onChange={e => setsos(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sos AVG" aria-label="default input example" onChange={e => setsos_AVG(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_nhl_stats/" /> : null}
            </form>
        </div>
    )
}