import React, { useState, useContext, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";
export const Edit_stats_player_mlb = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const params = useParams();

    const [name, setName] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].name);
    const [height, setHeight] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].height);
    const [weight, setWeight] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].weight);
    const [birth, setBirth] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].birth);
    const [season, setSeason] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].season);
    const [team, setTeam] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].team);
    const [dorsal, setDorsal] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].dorsal);
    const [position, setPosition] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].position);
    const [headshot, setheadshot] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].headshot);

    const [gp, setGp] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].gp);
    const [ab, setAb] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].ab);
    const [r, setR] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].r);
    const [h, setH] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].h);
    const [two_b, setTwo_b] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].two_b);
    const [three_b, setThree_b] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].three_b);
    const [hr, setHr] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].hr);

    const [rbi, setRbi] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].rbi);
    const [hbp, sethbp] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].hbp);
    const [tb, setTb] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].tb);
    const [bb, setBb] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].bb);
    const [so, setSo] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].so);
    const [sb, setSb] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].sb);
    const [cs, setcs] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].cs);
    const [avg, setAvg] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].avg);

    const [obp, setObp] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].obp);
    const [slg, setSlg] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].slg);
    const [ops, setOps] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].ops);
    const [war, setWar] = useState(store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].war);



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
            season: season,
            team: team,
            dorsal: dorsal,
            position: position,
            headshot: headshot,

            gp: gp,
            ab: ab,
            r: r,
            h: h,
            two_b: two_b,
            three_b: three_b,
            hr: hr,
            rbi: rbi,
            hbp: hbp,
            bb: bb,
            so: so,
            sb: sb,
            cs: cs,
            avg: avg,
            obp: obp,
            slg: slg,
            ops: ops,
            war: war
        };



        fetch("https://sportsdata365.com/stats_mlb_player/" + store.mlb_stats_player[params.theid].id, {
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
        fetch("https://sportsdata365.com/stats_mlb_player/" + store.mlb_stats_player[params.theid].id, {
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
    let positions = ["Pitcher", "Catcher", "First Baseman", "Second Baseman", "Third Baseman", "Short Stop", "Left Fielder", "Center fielder", "Right Fielder","Designated Hitter"];
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <div className="row g-0">
                        <div className="col-6 d-flex align-items-center justify-content-end">
                            <h3>Edit stats of {store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].name} </h3>
                        </div>
                        <div className="col-6 text-start">
                            <img className="img_picture" src={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].headshot} alt="image of player"></img>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].name} onChange={e => setName(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Height
                        <input className="form-control selectInner" type="text" placeholder="Height" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].height} onChange={e => setHeight(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Weight
                        <input className="form-control selectInner" type="text" placeholder="Weight" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].weight} onChange={e => setWeight(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].birth} onChange={e => setBirth(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Position
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].position} onChange={e => setPosition(e.target.value)} required>
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
                        <input className="form-control selectInner" type="text" placeholder="Dorsal" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].dorsal} onChange={e => setDorsal(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Headshot
                        <input className="form-control selectInner" type="text" placeholder="Headshot" aria-label="setheadshot" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].headshot} onChange={e => setheadshot(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].team} aria-label="Default select example" onChange={e => setTeam(e.target.value)} required>
                            {
                                store.mlb_teams.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].season} required>
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
                        <div className="col-2 title-lines">GP</div>
                        <div className="col-2 title-lines">AB</div>
                        <div className="col-2 title-lines">R</div>
                        <div className="col-2 title-lines">H</div>
                        <div className="col-2 title-lines">2B</div>
                        <div className="col-2 title-lines">3B</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Gp" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].gp} onChange={e => setGp(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ab" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].ab} onChange={e => setAb(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="R" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].r} onChange={e => setR(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="H" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].h} onChange={e => setH(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Two B" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].two_b} onChange={e => setTwo_b(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Three B" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].three_b} onChange={e => setThree_b(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">HR</div>
                        <div className="col-2 title-lines">RBI</div>
                        <div className="col-2 title-lines">BB</div>
                        <div className="col-2 title-lines">HBP</div>
                        <div className="col-2 title-lines">SO</div>
                        <div className="col-2 title-lines">SB</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Hb" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].hr} onChange={e => setHr(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Rbi" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].rbi} onChange={e => setRbi(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Bb" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].bb} onChange={e => setBb(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Tb" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].hbp} onChange={e => sethbp(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="So" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].so} onChange={e => setSo(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Sb" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].sb} onChange={e => setSb(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">CS</div>
                        <div className="col-2 title-lines">AVG</div>
                        <div className="col-2 title-lines">OBP</div>
                        <div className="col-2 title-lines">SLG</div>
                        <div className="col-2 title-lines">OPS</div>
                        <div className="col-2 title-lines">WAR</div>
                    </div>
                    <div className="row g-0">
                    <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="CS" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].cs} onChange={e => setcs(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Avg" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].avg} onChange={e => setAvg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Obp" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].obp} onChange={e => setObp(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Slg" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].slg} onChange={e => setSlg(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Ops" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].ops} onChange={e => setOps(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="War" aria-label="default input example" defaultValue={store.mlb_stats_player[params.theid] && store.mlb_stats_player[params.theid].war} onChange={e => setWar(e.target.value)} required />
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
                {auth ? <Redirect to="/list_stats_mlb_py/" /> : null}
            </form>
        </div>

    )
} 