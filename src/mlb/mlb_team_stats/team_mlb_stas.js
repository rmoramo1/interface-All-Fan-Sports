import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Team_MLB_Stas = () => {
    const { store } = useContext(Context);

    const [season, setSeason] = useState("2021");
    const [team, setTeam] = useState("Arizona Cardinals");
    const [conference, setConference] = useState("Eastern Conference");
    const [division, setDivision] = useState("Northwest");

    const [pts, setPts] = useState("");
    const [fmg, setFmg] = useState("");
    const [fga, setFga] = useState("");
    const [fg, setfg] = useState("");
    const [fg_AVG, setFg_AVG] = useState("");
    const [three_pm, setThree_pm] = useState("");

    const [three_pa, setThree_pa] = useState("");
    const [three_p_AVG, setThree_p_AVG] = useState("");
    const [ftm, setFtm] = useState("");
    const [fta, setFta] = useState("");
    const [ft_AVG, setFt_AVG] = useState("");
    const [Or, setOr] = useState("");

    const [dr, setDr] = useState("");
    const [reb, setReb] = useState("");
    const [ast, setAst] = useState("");
    const [stl, setStl] = useState("");
    const [blk, setBlk] = useState("");
    const [to, setTo] = useState("");
    const [pf, setPf] = useState("");

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

            pts: pts,
            fmg: fmg,
            fga: fga,

            fg: fg,
            fg_AVG: fg_AVG,
            three_pm: three_pm,
            three_pa: three_pa,
            three_p_AVG: three_p_AVG,
            ftm: ftm,
            fta: fta,
            ft_AVG: ft_AVG,

            Or: Or,
            dr: dr,
            reb: reb,
            ast: ast,
            stl: stl,
            blk: blk,
            to: to,
            pf: pf

        };
        console.log(body);
        console.log(body.date);

        fetch("https://interfaceroy.herokuapp.com/stats_nba_team", {
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
                actualizar();
            })
            .catch(err => console.log(err));
    };

    //select
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    let selectConference = ["Eastern Conference", "Western Conference"];
    let selectDivision = ["Northwest", "Southwest", "Pacific", "Atlantic", "Central", "Southeastern"];

    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create stats by NBA team</h3>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setTeam(e.target.value)} required>
                            {
                                store.nba_teams.map((index) => {
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
                        Conference
                        <select className="form-select" name="month" aria-label="Default select example" onChange={e => setConference(e.target.value)} required>
                            {
                                selectConference.map((index) => {
                                    return (
                                        <option key={index} name="conference" value={index}>{index}</option>
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
                                        <option key={index} name="setDivision" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div id="crear-stats" className="py-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Pts</div>
                        <div className="col-2 title-lines">Fmg</div>
                        <div className="col-2 title-lines">Fga</div>
                        <div className="col-2 title-lines">Fg</div>
                        <div className="col-2 title-lines">Fg AVG</div>
                        <div className="col-2 title-lines">Three PM</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Pts" aria-label="default input example" onChange={e => setPts(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fmg" aria-label="default input example" onChange={e => setFmg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fga" aria-label="default input example" onChange={e => setFga(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fg" aria-label="default input example" onChange={e => setfg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fg AVG" aria-label="default input example" onChange={e => setFg_AVG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Three PM" aria-label="default input example" onChange={e => setThree_pm(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row g-0 text-center mt-3">
                        <div className="col-2 title-lines">Three Pa</div>
                        <div className="col-2 title-lines">Three P AVG</div>
                        <div className="col-2 title-lines">Ftm</div>
                        <div className="col-2 title-lines">Fta</div>
                        <div className="col-2 title-lines">Ft AVG</div>
                        <div className="col-2 title-lines">Or</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Three Pa" name="rotation_home" onChange={e => setThree_pa(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Three P AVG" aria-label="default input example" onChange={e => setThree_p_AVG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ftm" aria-label="default input example" onChange={e => setFtm(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fta" aria-label="default input example" onChange={e => setFta(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ft AVG" aria-label="default input example" onChange={e => setFt_AVG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="[Or" aria-label="default input example" onChange={e => setOr(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row g-0 text-center mt-3">
                        <div className="eight_spans title-lines">Dr</div>
                        <div className="eight_spans title-lines">Reb</div>
                        <div className="eight_spans title-lines">Ast</div>
                        <div className="eight_spans title-lines">Stl</div>
                        <div className="eight_spans title-lines">Blk</div>
                        <div className="eight_spans title-lines">To</div>
                        <div className="eight_spans title-lines">Pf</div>
                    </div>
                    <div className="row g-0">
                        <div className="eight_spans">
                            <input type="text" className="form-control selectInner" placeholder="Dr" name="Dr" onChange={e => setDr(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Reb" aria-label="default input example" onChange={e => setReb(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Ast" aria-label="default input example" onChange={e => setAst(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Stl" aria-label="default input example" onChange={e => setStl(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Blk" aria-label="default input example" onChange={e => setBlk(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="To" aria-label="default input example" onChange={e => setTo(e.target.value)} required />
                        </div>
                        <div className="eight_spans">
                            <input className="form-control selectInner" type="text" placeholder="Pf" aria-label="default input example" onChange={e => setPf(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_nba_stats/" /> : null}
            </form>
        </div>
    )
}