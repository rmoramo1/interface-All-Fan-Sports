import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Stats_Fighter_box = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [birth, setBirth] = useState("");
    const [headshot, setheadshot] = useState("");
    const [season, setseason] = useState("2022");

    const [country, setCountry] = useState("");
    const [association, setAssociation] = useState("");
    const [category, setCategory] = useState("");

    const [w, setW] = useState("");
    const [w_ko_tko, setw_ko_tko] = useState("");
    const [w_sub, setw_sub] = useState("");
    const [w_dec, setw_dec] = useState("");
    const [w_others, setw_others] = useState("");
    const [L, setL] = useState("");
    const [L_ko_tko, setL_ko_tko] = useState("");
    const [L_sub, setL_sub] = useState("");
    const [L_dec, setL_dec] = useState("");
    const [L_others, setL_others] = useState("");
    const [draw, setdraw] = useState("");


    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        window.location.reload(true);
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



        fetch("https://sportsdata365.com/stats_box_fighter", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);

                alert("Stadistica de jugador se creo");
                
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
                    <h3>Create Stats BOX Fighter</h3>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="text-center col-2 p-1">
                        Name
                        <input className="form-control selectInner" type="text" placeholder="Name" aria-label="default input example" onChange={e => setName(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Nickname
                        <input className="form-control selectInner" type="text" placeholder="Nickname" aria-label="default input example" onChange={e => setNickname(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Height
                        <input className="form-control selectInner" type="text" placeholder="Height" aria-label="default input example" onChange={e => setHeight(e.target.value)} required ></input>
                    </div>

                    <div className="text-center col-2 p-1">
                        Weight
                        <input className="form-control selectInner" type="text" placeholder="Weight" aria-label="default input example" onChange={e => setWeight(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Birth
                        <input className="form-control selectInner" type="text" placeholder="Birth" aria-label="default input example" onChange={e => setBirth(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-2 p-1">
                        Country
                        <input className="form-control selectInner" type="text" placeholder="Country" aria-label="default input example" onChange={e => setCountry(e.target.value)} required ></input>
                    </div>
                </div>
                <div className="row g-0">
                <div className="text-center col-2 p-1">
                        Season
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setseason(e.target.value)} defaultValue={season} required>
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
                        <input className="form-control selectInner" type="text" placeholder="Association" aria-label="default input example" onChange={e => setAssociation(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Category
                        <input className="form-control selectInner" type="text" placeholder="Category" aria-label="default input example" onChange={e => setCategory(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Headshot
                        <input className="form-control selectInner" type="text" placeholder="Headshot" aria-label="setheadshot" onChange={e => setheadshot(e.target.value)} required ></input>
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
                            <input className="form-control selectInner" type="text" placeholder="W" aria-label="default input example" onChange={e => setW(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="TO / TKO" aria-label="default input example" onChange={e => setw_ko_tko(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="SUB" aria-label="default input example" onChange={e => setw_sub(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="DEC" aria-label="default input example" onChange={e => setw_dec(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="W Others" aria-label="default input example" onChange={e => setw_others(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="Draw" aria-label="default input example" onChange={e => setdraw(e.target.value)} required />
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
                            <input className="form-control selectInner" type="text" placeholder="L" aria-label="default input example" onChange={e => setL(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L By KO / TKO" aria-label="default input example" onChange={e => setL_ko_tko(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L By Sub" aria-label="default input example" onChange={e => setL_sub(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L By Dec" aria-label="default input example" onChange={e => setL_dec(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L Others" aria-label="default input example" onChange={e => setL_others(e.target.value)} required />
                        </div>
                    </div>
                </div>

                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_stats_fighter_mma/" /> : null}
            </form>
        </div>

    )
} 