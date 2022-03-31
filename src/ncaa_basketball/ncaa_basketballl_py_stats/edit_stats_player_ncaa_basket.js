import React, { useState, useContext, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";
export const Edit_stats_player_ncaa_basket = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }
    
    const params = useParams();
    const [name, setName] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].name);
    const [height, setHeight] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].height);
    const [weight, setWeight] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].weight);
    const [birth, setBirth] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].birth);
    const [college, setCollege] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].college);
    const [season, setSeason] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].season);
    const [team, setTeam] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].team);
    const [dorsal, setDorsal] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].dorsal);
    const [minutes, setMinutes] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].minutes);
    const [position, setPosition] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].position);
    const [headshot, setheadshot] = useState(store.stats_deff_player_nfl[params.theid].headshot);

    const [gp, setGp] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].gp);
    const [gs, setGs] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].gs);
    const [fg, setFg] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].fg);
    const [fg_AVG, setFg_AVG] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].fg_AVG);
    const [three_pt, setThree_pt] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].three_pt);
    const [three_pt_AVG, setThree_pt_AVG] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].three_pt_AVG);
    const [ft, setFt] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].ft);
    const [ft_AVG, setFt_AVG] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].ft_AVG);
    const [Or, setOr] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].Or);
    const [dr, setDr] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].dr);
    const [reb, setReb] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].reb);
    const [ast, setAst] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].ast);
    const [stl, setStl] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].stl);

    const [blk, setBlk] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].blk);
    const [to, setTo] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].to);
    const [pf, setPf] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].pf);
    const [pts, setPts] = useState(store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].pts);



    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            name: name,
            height: height,
            weight: weight,
            birth: birth,
            college: college,
            season: season,
            team: team,
            dorsal: dorsal,
            minutes: minutes,
            position: position,
            eadshot: headshot,

            gp: gp,
            gs: gs,
            fg: fg,
            fg_AVG: fg_AVG,
            three_pt: three_pt,
            three_pt_AVG: three_pt_AVG,
            ft: ft,
            ft_AVG: ft_AVG,
            Or: Or,
            dr: dr,
            reb: reb,
            ast: ast,
            stl: stl,
            blk: blk,
            to: to,
            pf: pf,
            pts: pts
        };



        fetch("https://sportsdata365.com/stats_ncaa_basket_player/" + store.ncaa_basket_stats_player[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);

                alert("Stadistica de jugador se Actualizo");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));
    };
    const delet_py_ret_stat = e => {
        fetch("https://sportsdata365.com/stats_ncaa_basket_player/" + store.ncaa_basket_stats_player[params.theid].id, {
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
    let positions = ["PG", "SG", "SF", "PF", "C"];
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-5 p-3 text-center">
                    <div className="row g-0">
                        <div className="col-6 d-flex align-items-center justify-content-end">
                            <h3>Edit stats of {store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].name} </h3>
                        </div>
                        <div className="col-6 text-start">
                            <img className="img_picture" src={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].headshot} alt="image of player"></img>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].name} onChange={e => setName(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Height
                        <input className="form-control selectInner" type="text" placeholder="Height" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].height} onChange={e => setHeight(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Weight
                        <input className="form-control selectInner" type="text" placeholder="Weight" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].weight} onChange={e => setWeight(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].birth} onChange={e => setBirth(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Position
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].position} onChange={e => setPosition(e.target.value)} required>
                            {
                                positions.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Dorsal
                        <input className="form-control selectInner" type="text" placeholder="Dorsal" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].dorsal} onChange={e => setDorsal(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Minutes
                        <input className="form-control selectInner" type="text" placeholder="Minutes" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].minutes} onChange={e => setMinutes(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Headshot
                        <input className="form-control selectInner" type="text" placeholder="Headshot" aria-label="setheadshot" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].headshot} onChange={e => setheadshot(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].team} onChange={e => setTeam(e.target.value)} required>
                            {
                                store.ncaa_basket_teams.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].season} required>
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
                        <div className="col-2 title-lines">Gs</div>
                        <div className="col-2 title-lines">Fg</div>
                        <div className="col-2 title-lines">Fg %</div>
                        <div className="col-2 title-lines">3Pt</div>
                        <div className="col-2 title-lines">3Pt %</div>

                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Gp" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].gp} onChange={e => setGp(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Gs" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].gs} onChange={e => setGs(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fg" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].fg} onChange={e => setFg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fg AVG" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].fg_AVG} onChange={e => setFg_AVG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Three Pt" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].three_pt} onChange={e => setThree_pt(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Three Pt AVG" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].three_pt_AVG} onChange={e => setThree_pt_AVG(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">Ft</div>
                        <div className="col-2 title-lines">Ft %</div>
                        <div className="col-2 title-lines">Or</div>
                        <div className="col-2 title-lines">Dr</div>
                        <div className="col-2 title-lines">Reb</div>
                        <div className="col-2 title-lines">Ast</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ft" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].ft} onChange={e => setFt(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ft AVG" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].ft_AVG} onChange={e => setFt_AVG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Or" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].Or} onChange={e => setOr(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Dr" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].dr} onChange={e => setDr(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Reb" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].reb} onChange={e => setReb(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ast" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].ast} onChange={e => setAst(e.target.value)} required />
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">Stl</div>
                            <div className="col-2 title-lines">Blk</div>
                            <div className="col-2 title-lines">To</div>
                            <div className="col-2 title-lines">Pf</div>
                            <div className="col-2 title-lines">Pts</div>
                        </div>
                        <div className="row g-0">
                            <div className="col-2">
                                <input className="form-control selectInner" type="text" placeholder="Stl" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].stl} onChange={e => setStl(e.target.value)} required />
                            </div>
                            <div className="col-2">
                                <input className="form-control selectInner" type="text" placeholder="Blk" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].blk} onChange={e => setBlk(e.target.value)} required />
                            </div>
                            <div className="col-2">
                                <input className="form-control selectInner" type="text" placeholder="To" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].to} onChange={e => setTo(e.target.value)} required />
                            </div>
                            <div className="col-2">
                                <input className="form-control selectInner" type="text" placeholder="Pf" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].pf} onChange={e => setPf(e.target.value)} required />
                            </div>
                            <div className="col-2">
                                <input className="form-control selectInner" type="text" placeholder="Ast" aria-label="default input example" defaultValue={store.ncaa_basket_stats_player[params.theid] && store.ncaa_basket_stats_player[params.theid].ast} onChange={e => setPts(e.target.value)} required />
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
                        <div data-bs-toggle="modal" data-bs-target="#delete_stat_ret_nfl" className="btn btn-danger">Delet</div>
                    </div>
                </div>
                <div className="modal fade" id="delete_stat_ret_nfl" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content overflow-hidden">
                            <div className="col-12 text-center text-white bg-danger text-uppercase fs-5 py-3">
                                <i className="fas fa-exclamation-triangle fs-1"></i><br />are you sure you want to delete the match
                            </div>
                            <div className="row g-0">
                                <div className="col-6 p-2 text-center">
                                    <button className="btn btn-danger" onClick={delet_py_ret_stat}>Yes Delete</button>
                                    {auth ? <Redirect to="/list_stats_nfl_py/" /> : null}
                                </div>
                                <div className="col-6 p-2 text-center">
                                    <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {auth ? <Redirect to="/list_stats_ncaa_basket_py/" /> : null}
            </form>
        </div>

    )
} 