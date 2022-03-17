import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

 const Vista_logo_NCAA_BASEBALL= props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-1 py-1">
                    <div className="col-12 bg-dark h-100 d-flex justify-content-center align-items-center ">
                        <div className="col-12 text-center">
                            <Link className="text-white" to={`/edith_logo_ncaa_baseball/${props.id}`}><i className="far fa-eye"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-11 bg-white my-1 shadow">
                    <div className="row g-0 text-center title-lines">
                        <div className="col-6 lines">Team</div>
                        <div className="col-6 lines">Logo</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-6 lines">{props.team}</div>
                        <div className="col-6 lines"><img src={props.url} alt="logo team" className="img_logo"></img></div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Vista_logo_NCAA_BASEBALL.propTypes = {
    id: PropTypes.number,
    team: PropTypes.string,
    url: PropTypes.string,
};
export default Vista_logo_NCAA_BASEBALL;