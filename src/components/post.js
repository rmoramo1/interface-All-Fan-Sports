import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Post = props => {
    const { store, actions } = useContext(Context);

    return (
        <div className="col-12 p-1 p-xl-5">
            <div className="imgpost">
                <img className="img-fluid" src={props.url} alt="image of post"></img>
            </div>
            <div className="col-12 titlePost text-white py-3">
                <span className="text-white">Written by </span> <span id="written" className="goldText">{props.autor}</span>
            </div>
            <div className="col-12 bodyPost py-4">
                <div className="row g-0 goldText">
                    <div className="col-6">
                        <i className="far fa-calendar-alt"></i> <span id="date" className="text-white"> {props.date}</span>
                    </div>
                </div>
                <div id="titlePost" className="col-12 goldText fs-3">
                    {props.title}
                </div>
                <div id="contentPost" className="col-12 text-white">
                    {props.yoast_head_json}
                </div>
            </div>
            <div className="col-12 text-white mt-3">
                <div className="row g-0">
                    <div className="col-6">
                        <span className="goldText me-3"><i className="fas fa-share-alt"></i></span> Share
                    </div>
                    <div className="col-6">
                        <Link className="btn gregBlack goldText" to={{ pathname: props.link }} target="_blank">READ MORE <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
Post.propTypes = {
    title: PropTypes.string,
    yoast_head_json: PropTypes.string,
    link: PropTypes.string,
    url: PropTypes.string,
    categories: PropTypes.string,
    date: PropTypes.string,
};
export default Post;
