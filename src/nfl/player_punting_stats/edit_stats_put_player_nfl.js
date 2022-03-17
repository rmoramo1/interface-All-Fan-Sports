import React, { useState, useContext,useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import { useParams, Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";
export const Stats_put_player_nfl = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

    const params = useParams();
    
    const [name, setName] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].name);
    const [height, setHeight] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].height);
    const [weight, setWeight] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].weight);
    const [birth, setBirth] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].birth);
    const [position, setPosition] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].position);
    const [dorsal, setDorsal] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].dorsal);
    const [season, setSeason] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].season);
    const [team, setTeam] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].team);
    const [games, setGames] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].games);
    const [headshot, setheadshot] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].headshot);

    const [punts, setPunts] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].punts);
    const [yards, setYards] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].yards);
    const [lng, setLng] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].lng);
    const [AVG, setAVG] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].AVG);
    const [net, setNet] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].net);
    const [p_blk, setP_blk] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].p_blk);

    const [IN_20, setIN_20] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].IN_20);
    const [tb, setTb] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].tb);
    const [fc, setFc] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].fc);
    const [att, setAtt] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].att);
    const [punt_return_yds, setPunt_return_yds] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].punt_return_yds);
    const [AVG_punt_retun_yards, setAVG_punt_retun_yards] = useState(store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].AVG_punt_retun_yards);


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
            position: position,
            dorsal: dorsal,
            season: season,
            team: team,
            games: games,
            headshot: headshot,

            punts: punts,
            yards: yards,
            lng: lng,
            AVG: AVG,
            net: net,
            p_blk: p_blk,
            IN_20: IN_20,
            tb: tb,
            fc: fc,
            att: att,
            punt_return_yds: punt_return_yds,
            AVG_punt_retun_yards: AVG_punt_retun_yards
        };
        
       

        fetch("https://sportsdata365.com/stats_punting_player_nfl/" + store.stats_put_player_nfl[params.theid].id, {
            method: "PUT",
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
    const delet_py_ret_stat = e => {
        fetch("https://sportsdata365.com/stats_punting_player_nfl/" + store.stats_put_player_nfl[params.theid].id, {
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
    let positions = ["QB", "OT", "OG", "C", "RB", "DE", "DT", "LB", "CB", "SS", "K", "P"];
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
            <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <div className="row g-0">
                        <div className="col-6 d-flex align-items-center justify-content-end">
                            <h3>Edit stats of {store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].name} </h3>
                        </div>
                        <div className="col-6 text-start">
                            <img className="img_picture" src={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].headshot} alt="image of player"></img>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].name} onChange={e => setName(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Height
                        <input className="form-control selectInner" type="text" placeholder="Height" aria-label="default input example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].height} onChange={e => setHeight(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Weight
                        <input className="form-control selectInner" type="text" placeholder="Weight" aria-label="default input example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].weight} onChange={e => setWeight(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].birth} onChange={e => setBirth(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="text-center col-3 p-1">
                        Position
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].position} onChange={e => setPosition(e.target.value)} required>
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
                        <input className="form-control selectInner" type="text" placeholder="Dorsal" aria-label="default input example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].dorsal} onChange={e => setDorsal(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-3 p-1">
                        Games
                        <input className="form-control selectInner" type="text" placeholder="Games" aria-label="default input example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].games} onChange={e => setGames(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Headshot
                        <input className="form-control selectInner" type="text" placeholder="Headshot" aria-label="setheadshot" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].headshot} onChange={e => setheadshot(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-3 text-center p-1">
                        Team
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].team} onChange={e => setTeam(e.target.value)} required>
                            {
                                store.nfl_teams.map((index) => {
                                    return (
                                        <option key={index} name="team" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setSeason(e.target.value)} defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].season} required>
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
                        <div className="col-2 title-lines">Punts</div>
                        <div className="col-2 title-lines">Yards</div>
                        <div className="col-2 title-lines">Lng</div>
                        <div className="col-2 title-lines">AVG</div>
                        <div className="col-2 title-lines">Net</div>
                        <div className="col-2 title-lines">P Blk</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Punts" aria-label="default input example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].punts} onChange={e => setPunts(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Yards" aria-label="default input example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].yards} onChange={e => setYards(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Lng" aria-label="default input example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].lng} onChange={e => setLng(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="AVG" aria-label="default input example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].AVG} onChange={e => setAVG(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Net" aria-label="default input example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].net} onChange={e => setNet(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="P Blk" aria-label="default input example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].p_blk} onChange={e => setP_blk(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">IN 20</div>
                        <div className="col-2 title-lines">Tb</div>
                        <div className="col-2 title-lines">Fc</div>
                        <div className="col-2 title-lines">Att</div>
                        <div className="col-2 title-lines">P R Y</div>
                        <div className="col-2 title-lines">AVG P R Y</div>

                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="IN 20" aria-label="default input example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].IN_20} onChange={e => setIN_20(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Tb" aria-label="default input example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].tb} onChange={e => setTb(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Fc" aria-label="default input example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].fc} onChange={e => setFc(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Att" aria-label="default input example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].att} onChange={e => setAtt(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Punt Retun Yards" aria-label="default input example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].punt_return_yds} onChange={e => setPunt_return_yds(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="AVG P R Y" aria-label="default input example" defaultValue={store.stats_put_player_nfl[params.theid] && store.stats_put_player_nfl[params.theid].punt_return_yds} onChange={e => setAVG_punt_retun_yards(e.target.value)} required />
                        </div>

                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 p-3 text-end">
                        <HashLink className="btn btn-secondary  text-white" to="/admin">Back to Admin</HashLink>
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
                {auth ? <Redirect to="/list_stats_nfl_py/" /> : null}
            </form>
        </div>

    )
} 