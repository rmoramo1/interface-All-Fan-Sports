import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Vista_ODDS = props => {
    return (
        <div className=" g-0">
            <div className="row g-0">
                <div className="col-1 py-1">
                    <div className="col-12 bg-dark h-100 d-flex justify-content-center align-items-center ">
                        <div className="col-12 text-center">
                            <Link className="text-white" to={`/edith_odds/${props.id}`}><i className="far fa-eye"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-11 bg-white my-1 shadow">
                    <div className="row g-0 text-center ">
                        <div className="col-4 lines title-lines">Title</div>
                        <div className="col-4 lines title-lines">Sport</div>
                        <div className="col-4 lines title-lines">Date</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-4 lines">{props.title}</div>
                        <div className="col-4 lines">{props.sport}</div>
                        <div className="col-4 lines">{props.date}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Vista_ODDS.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    sport: PropTypes.string,
    date: PropTypes.string,
};
export default Vista_ODDS;