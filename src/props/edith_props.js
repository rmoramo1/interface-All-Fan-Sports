import React, { useState, useContext, useEffect } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Edith_PROPS = (props) => {
    const params = useParams();
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const [title, settitle] = useState(store.props[params.theid].title);
    const [sport, setsport] = useState(store.props[params.theid].sport);
    const [away, setaway] = useState(store.props[params.theid].away);
    const [home, sethome] = useState(store.props[params.theid].home);
    const [line, setline] = useState(store.props[params.theid].line);
    const [feature, setfeature] = useState(store.props[params.theid].feature);
    const [type_prop, settype_prop] = useState(store.props[params.theid].type_prop);

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);
    }
    const edit = e => {
        e.preventDefault();
        const body = {
            away: away,
            feature: feature,
            home: home,
            line: line,
            sport: sport,
            title: title,
            type_prop: type_prop
        };

        fetch("https://sportsdata365.com/props/" + store.props[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("ODD se Edito");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));
    };
    const deletOdd = e => {
        fetch("https://sportsdata365.com/props/" + store.props[params.theid].id, {
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
                        <h4 className="fw-bold text-center">Edith ODD </h4>
                    </div>
                    <div className="col-6 tetx-center">
                        <h4>
                            {store.props[params.theid].title}
                        </h4>
                    </div>
                </div>
            </div>
            <div className="row g-0 rounded overflow-hidden shadow">
                <form onSubmit={edit}>
                    <div className="row g-0">
                        <div className="col-3 title-lines text-center">
                            Title
                        </div>
                        <div className="col-3 title-lines text-center">
                            Sport
                        </div>
                        <div className="col-2 title-lines text-center">
                            Away
                        </div>
                        <div className="col-2 title-lines text-center">
                            Home
                        </div>
                        <div className="col-2 title-lines text-center">
                            Line
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-3">
                            <input type="text" className="form-control selectInner" placeholder="Title" name="rotation_home" defaultValue={store.props[params.theid].title} onChange={e => settitle(e.target.value)} required />
                        </div>
                        <div className="col-3">
                            <input type="text" className="form-control selectInner" placeholder="Sport" name="rotation_home" defaultValue={store.props[params.theid].sport} onChange={e => setsport(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Team" name="rotation_home" defaultValue={store.props[params.theid].away} onChange={e => setaway(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Home" name="rotation_home" defaultValue={store.props[params.theid].type_prop} onChange={e => sethome(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Line" name="rotation_home" required defaultValue={store.props[params.theid].line} onChange={e => setline(e.target.value)} />
                        </div>
                    </div>
                    <div className="row g-0 pt-2">
                        <div className="col-2 title-lines text-center">
                            Feature
                        </div>
                        <div className="col-2 title-lines text-center">
                            Type Prop
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Feature" name="rotation_home" defaultValue={store.props[params.theid].feature} onChange={e => setfeature(e.target.value)} required />
                        </div>
                        <div className="col-2">
                            <input type="text" className="form-control selectInner" placeholder="Type Prop" name="rotation_home" defaultValue={store.props[params.theid].type_prop} onChange={e => settype_prop(e.target.value)} required />
                        </div>
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
                    {auth ? <Redirect to="/admin/" /> : null}
                </form>
            </div>
            <div className="modal fade" id="delete_Fight" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content overflow-hidden">
                        <div className="col-12 text-center text-white bg-danger text-uppercase fs-5 py-3">
                            <i className="fas fa-exclamation-triangle fs-1"></i><br />are you sure you want to delete the logo
                        </div>
                        <div className="row g-0">
                            <div className="col-6 p-2 text-center">
                                <button className="btn btn-danger" onClick={deletOdd} data-bs-dismiss="modal">Yes Delete</button>
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