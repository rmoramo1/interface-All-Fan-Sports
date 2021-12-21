import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

import { Logo_nfl } from "../logos/nfl/logo_nfl";
import { Logo_nba } from "../logos/nba/logo_nba";
import { Logo_nhl } from "../logos/nhl/logo_nhl";
import { Logo_mlb } from "../logos/mlb/logo_mlb";
import { Logo_soccer } from "../logos/soccer/logo_soccer";

export const Logos = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }
    return (
        <div className="container-fluid">
            <div className="row g-0">
                <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                    <h3>Create Logos for Teams</h3>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-4 p-3">
                    <Logo_nfl/>
                </div>
                <div className="col-4 p-3">
                    <Logo_nba/>
                </div>
                <div className="col-4 p-3">
                    <Logo_nhl/>
                </div>
                <div className="col-4 p-3">
                    <Logo_mlb/>
                </div>
                <div className="col-4 p-3">
                    <Logo_soccer/>
                </div>
            </div>
        </div>
    )
}