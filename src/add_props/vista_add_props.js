import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

 const Vista_Add_Props = props => {
    return (
        <div className=" g-0">
            <div className="row g-0">
                <div className="col-1 py-1">
                    <div className="col-12 bg-dark h-100 d-flex justify-content-center align-items-center ">
                        <div className="col-12 text-center">
                            <Link className="text-white" to={`/edith_add_props/${props.id}`}><i className="far fa-eye"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-11 bg-white my-1 shadow">
                    <div className="row g-0 text-center ">
                        <div className="col-12 lines title-lines">Prop</div>
                        <div className="col-12 lines">{props.name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Vista_Add_Props.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
};
export default Vista_Add_Props;