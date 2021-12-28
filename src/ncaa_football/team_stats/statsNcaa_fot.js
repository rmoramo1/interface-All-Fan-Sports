import React, { useContext,useEffect } from "react";
import { Context } from "../../store/appContext";
import { Team_Stas_Ncaa_Fot } from "./team_stas_ncaa_fot";


export const StatsNcaa_fot =()=>{
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
                <Team_Stas_Ncaa_Fot/>
            </div>
        </div>
    )
}