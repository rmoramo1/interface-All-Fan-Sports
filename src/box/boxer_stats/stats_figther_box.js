import React, { useState, useContext , useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Stats_Fighter_box = () => {
    const { store } = useContext(Context);

        useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);
        if(!user){
            window.location.href = '/';
        }
    }, [])

    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [birth, setBirth] = useState("");

    const [country, setCountry] = useState("2021");
    const [association, setAssociation] = useState("Boston Bruins");
    const [category, setCategory] = useState("");

    const [w, setW] = useState("");
    const [w_by, setW_by] = useState("");
    const [L, setL] = useState("");
    const [L_by, setL_by] = useState("");


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

            country: country,
            association: association,
            category: category,
            w: w,
            w_by: w_by,
            L: L,
            L_by: L_by,
        };
        
       

        fetch("https://interfaceroy.herokuapp.com/stats_box_fighter", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                
                alert("Stadistica de jugador se creo");
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
                    <div className="text-center col-3 p-1">
                        Association
                        <input className="form-control selectInner" type="text" placeholder="Association" aria-label="default input example" onChange={e => setAssociation(e.target.value)} required ></input>
                    </div>
                    <div className="text-center col-3 p-1">
                        Category
                        <input className="form-control selectInner" type="text" placeholder="Category" aria-label="default input example" onChange={e => setCategory(e.target.value)} required ></input>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="row g-0 text-center">
                        <div className="col-2 title-lines">W</div>
                        <div className="col-2 title-lines">W By</div>
                        <div className="col-2 title-lines">L</div>
                        <div className="col-2 title-lines">L By</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="W" aria-label="default input example" onChange={e => setW(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="W By" aria-label="default input example" onChange={e => setW_by(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L" aria-label="default input example" onChange={e => setL(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input className="form-control selectInner" type="text" placeholder="L By" aria-label="default input example" onChange={e => setL_by(e.target.value)} required />
                        </div>
                    </div>
                </div>

                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
                {auth ? <Redirect to="/list_stats_fighter_box/" /> : null}
            </form>
        </div>

    )
} 