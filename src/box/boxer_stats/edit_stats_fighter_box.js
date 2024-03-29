import React, { useState, useContext, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Context } from "../../store/appContext";
export const Edit_stats_Fighter_box = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

    const params = useParams();
    const [name, setName] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].name);
    const [nickname, setNickname] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].nickname);
    const [height, setHeight] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].height);
    const [weight, setWeight] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].weight);
    const [birth, setBirth] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].birth);
    const [headshot, setheadshot] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].headshot);
    const [season, setseason] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].season);

    const [country, setCountry] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].country);
    const [association, setAssociation] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].association);
    const [category, setCategory] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].category);

    const [w, setW] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].w);
    const [w_ko_tko, setw_ko_tko] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].w_ko_tko);
    const [w_sub, setw_sub] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].w_sub);
    const [w_dec, setw_dec] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].w_dec);
    const [w_others, setw_others] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].w_others);

    const [L, setL] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].L);
    const [L_ko_tko, setL_ko_tko] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].L_ko_tko);
    const [L_sub, setL_sub] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].L_sub);
    const [L_dec, setL_dec] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].L_dec);
    const [L_others, setL_others] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].L_others);
    const [draw, setdraw] = useState(store.boxer_stats[params.theid] && store.boxer_stats[params.theid].draw);

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            name: name,
            nickname: nickname,
            height: height,
            weight: weight,
            birth: birth,
            headshot: headshot,
            season: season,

            country: country,
            association: association,
            category: category,
            w: w,
            w_ko_tko: w_ko_tko,
            w_sub: w_sub,
            w_dec: w_dec,
            w_others: w_others,
            L: L,
            L_ko_tko: L_ko_tko,
            L_sub: L_sub,
            L_dec: L_dec,
            L_others: L_others,
            draw: draw,
        };
        
       

        fetch("https://sportsdata365.com/stats_box_fighter/" + store.boxer_stats[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                
                alert("Stadistica de Boxeador se Actualizo");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));
    };
    const delet_py_ret_stat = e => {
        fetch("https://sportsdata365.com/stats_box_fighter/" + store.boxer_stats[params.theid].id, {
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
    return (
        <div className="container-fluid p-0 m-0 accordion" id="statsCreate" >
            <div className="row g-0">
            <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <div className="row g-0">
                        <div className="col-6 d-flex align-items-center justify-content-end">
                            <h3>Edit stats of {store.boxer_stats[params.theid] && store.boxer_stats[params.theid].name} </h3>
                        </div>
                        <div className="col-6 text-start">
                            <img className="img_picture" src={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].headshot} alt="image of player"></img>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="text-center col-2 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].name} onChange={e => setName(e.target.value)} ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Nickname
                        <input className="form-control selectInner" type="text" placeholder="Nickname" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].nickname} onChange={e => setNickname(e.target.value)} ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Height
                        <input className="form-control selectInner" type="text" placeholder="Height" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].height} onChange={e => setHeight(e.target.value)} ></input>
                    </div>

                    <div className="text-center col-2 p-1">
                        Weight
                        <input className="form-control selectInner" type="text" placeholder="Weight" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].weight} onChange={e => setWeight(e.target.value)} ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].birth} onChange={e => setBirth(e.target.value)} ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Country
                        <input className="form-control selectInner" type="text" placeholder="Country" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].country} onChange={e => setCountry(e.target.value)} ></input>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="text-center col-2 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setseason(e.target.value)} defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].season} required>
                            {
                                selectYear.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index} >{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-3 p-1">
                        Association
                        <input className="form-control selectInner" type="text" placeholder="Association" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].association} onChange={e => setAssociation(e.target.value)} ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Category
                        <input className="form-control selectInner" type="text" placeholder="Category" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].category} onChange={e => setCategory(e.target.value)} ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Headshot
                        <input className="form-control selectInner" type="text" placeholder="Headshot" aria-label="setheadshot" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].headshot} onChange={e => setheadshot(e.target.value)}  ></input>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">W</div>
                        <div className="col-2 title-lines">W By KO / TKO</div>
                        <div className="col-2 title-lines">W By Sub</div>
                        <div className="col-2 title-lines">W By Dec</div>
                        <div className="col-2 title-lines">W Others</div>
                        <div className="col-2 title-lines">Draw</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="W" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].w} onChange={e => setW(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="W By" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].w_ko_tko} onChange={e => setw_ko_tko(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L By" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].w_sub} onChange={e => setw_sub(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].w_dec} onChange={e => setw_dec(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="W Others" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].w_others} onChange={e => setw_others(e.target.value)}  />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Draw" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].draw} onChange={e => setdraw(e.target.value)}  />
                        </div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">L</div>
                        <div className="col-2 title-lines">L By KO / TKO</div>
                        <div className="col-2 title-lines">L By Sub</div>
                        <div className="col-2 title-lines">L By Dec</div>
                        <div className="col-2 title-lines">L Others</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].L} onChange={e => setL(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="setL_ko_tko" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].L_ko_tko} onChange={e => setL_ko_tko(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="setL_sub" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].L_sub} onChange={e => setL_sub(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].L_dec} onChange={e => setL_dec(e.target.value)} />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L Others" aria-label="default input example" defaultValue={store.boxer_stats[params.theid] && store.boxer_stats[params.theid].L_others} onChange={e => setL_others(e.target.value)}  />
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
                                    {auth ? <Redirect to="/list_stats_fighter_box/" /> : null}
                                </div>
                                <div className="col-6 p-2 text-center">
                                    <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {auth ? <Redirect to="/list_stats_fighter_box/" /> : null}
            </form>
        </div>

    )
} 