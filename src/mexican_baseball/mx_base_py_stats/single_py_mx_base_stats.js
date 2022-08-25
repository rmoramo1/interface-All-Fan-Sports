import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_PY_MX_BASE_Stats = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-1 py-1">
                    <div className="col-12 bg-dark h-100 d-flex justify-content-center align-items-center ">
                        <div className="col-12 text-center">
                            <Link className="text-white" to={`/edit_stats_player_mx_base/${props.id}`}><i className="far fa-eye"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-11 bg-white my-1 shadow">
                    <div className="row g-0 text-center title-lines">
                        <div className="col-4 lines">Name</div>
                        <div className="col-4 lines">Pos</div>
                        <div className="col-4 lines">Dorsal</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-4 lines">{props.name}</div>
                        <div className="col-4 lines">{props.position}</div>
                        <div className="col-4 lines">{props.dorsal}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_PY_MX_BASE_Stats.propTypes = {
    id: PropTypes.number,
    team: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    dorsal: PropTypes.string,
};