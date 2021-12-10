import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListNascarRace = props => {
    return (
        <div className="row g-0">
            <div className="col-3 d-flex justify-content-center align-items-center my-3">
                <div className="col-12 bg-dark h-100">
                    <div className="row g-0">
                        <div className="col-9 btn text-center text-white ">
                            {props.casino}
                        </div>
                        <div className="col-3 text-center">
                            <Link className="btn btn-dark text-white" to={`/edtihNascar/${props.id}`}><i className="far fa-eye"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-9 bg-white my-3 shadow ">
                <div className="row g-0 text-center">
                    <div className="col-6 p-2 lines fw-bold">{props.date}</div>
                    <div className="col-6 p-2 lines">{props.race}</div>
                </div>
            </div>
        </div>
    );
};
ListNascarRace.propTypes = {
    id: PropTypes.number,
    casino: PropTypes.string,
    date: PropTypes.string,
    race: PropTypes.string,
};
export default ListNascarRace;
