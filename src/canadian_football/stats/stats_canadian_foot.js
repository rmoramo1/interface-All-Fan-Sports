import React, { useContext,useEffect } from "react";
import { Context } from "../../store/appContext";
import { Team_Nfl_Stas } from "./team_nfl_stas";


export const StatsNFL =()=>{
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
                <Team_Nfl_Stas/>
            </div>
        </div>
    )
}