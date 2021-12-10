import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListFights_Mma = props => {
    return (
        <div className="row g-0">
            <div className="col-3 d-flex justify-content-center align-items-center py-3">
                <div className="col-12 bg-dark h-100">
                    <div className="col-12 btn text-center text-white ">
                        {props.casino}
                    </div>
                    <div className="col-12 text-center">
                        <Link className="btn btn-dark text-white" to={`/edtihFight_mma/${props.id}`}><i className="far fa-eye"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-9 bg-white my-3 shadow ">
                <div className="row g-0 text-center">
                    <div className="col-4 lines fw-bold">{props.date}</div>
                    <div className="col-4 lines">{props.event}</div>
                    <div className="col-4 lines fw-bold bg-success text-white">Winner | {props.winner}</div>
                </div>
                <div className="row g-0 text-center pt-3">
                    <div className="col-5 ">{props.fighter_One}</div>
                    <div className="col-2 ">VRS</div>
                    <div className="col-5 ">{props.fighter_Two}</div>
                </div>
            </div>
        </div>
    );
};
ListFights_Mma.propTypes = {
    id: PropTypes.number,
    casino: PropTypes.string,
    date: PropTypes.string,
    event: PropTypes.string,
    week: PropTypes.string,
    winner: PropTypes.string,
    fighter_One: PropTypes.string,
    fighter_Two: PropTypes.string
};
export default ListFights_Mma;
