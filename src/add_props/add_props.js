import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Add_Props = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }
    const [name, setname] = useState();
    let actualizar = () => {
        document.getElementById("miFormBOX").reset();
    }
    const crear = e => {
        e.preventDefault();
        const body = {
            name: name,
        };
        
        fetch("https://sportsdata365.com/props_list", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => res.json())
        .then(data => {
            sessionStorage.setItem("my_token", data.token);
            alert("Prop se creo");
            actualizar();
            })
            .catch(err => console.log(err));
    };
    return (
        <div className="col-4 mx-auto mt-5 rounded overflow-hidden shadow">
            <form id="miFormBOX" onSubmit={crear}>
                <div className="col-12 title-lines text-center">
                    Create Prop
                </div>
                <div className="col-12">
                    <input type="text" className="form-control selectInner" placeholder="Prop" name="rotation_home" onChange={e => setname(e.target.value)} required />
                </div>

                <div className="col-12 text-center py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
            </form>
        </div>
    )
}