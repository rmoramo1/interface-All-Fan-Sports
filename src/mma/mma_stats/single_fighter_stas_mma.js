import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_Fighter_mma = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-1 py-1">
                    <div className="col-12 bg-dark h-100 d-flex justify-content-center align-items-center ">
                        <div className="col-12 text-center">
                            <Link className="text-white" to={`/edit_stats_fighter_mma/${props.id}`}><i className="far fa-eye"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-11 bg-white my-1 shadow">
                    <div className="row g-0 text-center title-lines">
                        <div className="col-4 lines">Name</div>
                        <div className="col-4 lines">Nickname</div>
                        <div className="col-4 lines">Category</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-4 lines">{props.name}</div>
                        <div className="col-4 lines">{props.nickname}</div>
                        <div className="col-4 lines">{props.category}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_Fighter_mma.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    nickname: PropTypes.string,
};