import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_Tournament = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-1 py-3">
                    <div className="col-12 bg-dark h-100 d-flex justify-content-center align-items-center ">
                        <div className="col-12 text-center">
                            <Link className="text-white" to={`/edith_tournaments/${props.id}`}><i className="far fa-eye"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-11 bg-white my-3 shadow">
                    <div className="row g-0 text-center title-lines">
                        <div className="col-6 lines">Country</div>
                        <div className="col-6 lines">Tournament</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-6 lines">{props.country}</div>
                        <div className="col-6 lines">{props.tournament}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_Tournament.propTypes = {
    id: PropTypes.number,
    country: PropTypes.string,
    tournament: PropTypes.string,
};