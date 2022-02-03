import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

 const Vista_Future = props => {
    return (
        <div className=" g-0">
            <div className="row g-0">
                <div className="col-1 py-1">
                    <div className="col-12 bg-dark h-100 d-flex justify-content-center align-items-center ">
                        <div className="col-12 text-center">
                            <Link className="text-white" to={`/edith_future/${props.id}`}><i className="far fa-eye"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-11 bg-white my-1 shadow">
                    <div className="row g-0 text-center ">
                        <div className="row g-0">
                        <div className="col-6 lines title-lines">Future</div>
                        <div className="col-6 lines title-lines">Line</div>

                        </div>
                        <div className="row g-0">
                        <div className="col-6 lines">{props.future}</div>
                        <div className="col-6 lines">{props.line}</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Vista_Future.propTypes = {
    id: PropTypes.number,
    future: PropTypes.string,
    line: PropTypes.string,
};
export default Vista_Future;