import React, { useState, useContext, useEffect } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Edith_Add_PROPS = (props) => {
    const params = useParams();
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const [name, setname] = useState(store.add_props[params.theid] && store.add_props[params.theid].name);

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);
    }
    const edit = e => {
        e.preventDefault();
        const body = {
            name: name,
        };

        fetch("https://sportsdata365.com/props_list/" + store.add_props[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("Prpd se Edito");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));
    };
    const deletLogo = e => {
        fetch("https://sportsdata365.com/props_list/" + store.add_props[params.theid].id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .catch(err => console.log(err));
        setAuth(true);
        actualizar();
    };
    return (
        <div className="container m-50">
            <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                <div className="row g-0 w-100">
                    <div className="col-6">
                        <h4 className="fw-bold text-center">Edith Casino </h4>
                    </div>
                    <div className="col-6 tetx-center">
                        <h4>
                            {store.add_props[params.theid] && store.add_props[params.theid].name}
                        </h4>
                    </div>
                </div>
            </div>
            <div className="row g-0 rounded overflow-hidden shadow">
                <form onSubmit={edit}>
                    <div className="col-12 title-lines text-center">
                        Edith Prop
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control selectInner" placeholder="Casino" name="rotation_home" defaultValue={store.add_props[params.theid] && store.add_props[params.theid].name} onChange={e => setname(e.target.value)} required />
                    </div>
                    <div className="row g-0">
                        <div className="col-4 p-3 text-end">
                            <Link className="btn btn-secondary  text-white" to="/admin">Back to Admin</Link>
                        </div>
                        <div className="col-4 text-center py-3">
                            <button type="submit" className="btn btn-danger">Edith</button>
                        </div>
                        <div className="col-4 text-start p-3">
                            <div data-bs-toggle="modal" data-bs-target="#delete_Fight" className="btn btn-danger">Delet</div>
                        </div>
                    </div>
                    {auth ? <Redirect to="/list_props/" /> : null}
                </form>
            </div>
            <div className="modal fade" id="delete_Fight" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content overflow-hidden">
                        <div className="col-12 text-center text-white bg-danger text-uppercase fs-5 py-3">
                            <i className="fas fa-exclamation-triangle fs-1"></i><br />are you sure you want to delete the PROP
                        </div>
                        <div className="row g-0">
                            <div className="col-6 p-2 text-center">
                                <button className="btn btn-danger" onClick={deletLogo} data-bs-dismiss="modal">Yes Delete</button>
                                {auth ? <Redirect to="/list_props" /> : null}
                            </div>
                            <div className="col-6 p-2 text-center">
                                <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}