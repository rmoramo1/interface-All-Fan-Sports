import React, { useContext,useEffect } from "react";
import { Context } from "../../store/appContext";
import { Team_Nfl_Standings } from "./team_nfl_standings";

export const StandingsNFL =()=>{
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
                <Team_Nfl_Standings/>
            </div>
        </div>
    )
}