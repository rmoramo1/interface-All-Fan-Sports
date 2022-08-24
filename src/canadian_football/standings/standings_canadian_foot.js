import React, { useContext,useEffect } from "react";
import { Context } from "../../store/appContext";
import { Team_Canadian_Foot_Standings } from "./team_canadian_foot_standings";

export const Standings_Canadian_F =()=>{
    const { store } = useContext(Context);
        useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);
        
        if(!user){
            window.location.href = '/';
        }
    }, [])
    return(
        <div className="container-fluid">
            <div className="col-12">
                <Team_Canadian_Foot_Standings/>
            </div>
        </div>
    )
}