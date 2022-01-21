import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Vista_Injuries = props => {
    return (
        <div className=" g-0">
            <div className="row g-0">
                <div className="col-1 py-1">
                    <div className="col-12 bg-dark h-100 d-flex justify-content-center align-items-center ">
                        <div className="col-12 text-center">
                            <Link className="text-white" to={`/edith_injuries/${props.id}`}><i className="far fa-eye"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-11 bg-white my-1 shadow">
                    <div className="row g-0 text-center ">
                        <div className="col-4 lines title-lines">Team</div>
                        <div className="col-4 lines title-lines">Name Player</div>
                        <div className="col-4 lines title-lines">Injurie</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-4 lines">{props.team}</div>
                        <div className="col-4 lines">{props.name_player}</div>
                        <div className="col-4 lines">{props.injurie}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Vista_Injuries.propTypes = {
    id: PropTypes.number,
    team: PropTypes.string,
    name_player: PropTypes.string,
    injurie: PropTypes.string,
};
export default Vista_Injuries;