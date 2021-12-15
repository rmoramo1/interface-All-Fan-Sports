import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { CreateGames_NFL } from "../nfl/createGames_NFL";
import { CreateGames_NBA } from "../nba/nba_game/createGames_NBA"
import { CreateGames_MLB } from "../mlb/mlb_game/createGames_MLB";
import { CreateGames_NHL } from "../nhl/nhl_game/createGames_NHL";
import { CreateFight } from "../box/fight/createFight";
import { CreateFight_mma } from "../mma/fight_mma/createFight_mma";
import { CreateGolf } from "../golf/golf/createGolf";
import { CreateNascar } from "../nascar/nascar/createNascar";
import { CreateGames_Soccer } from "../soccer/soccer_game/createGames_Soccer";


export const AllGames = () => {
    const { store } = useContext(Context);
        useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);
        
        if(!user){
            window.location.href = '/';
        }
    }, [])
    const [tipe, setTipe] = useState("NFL")
    if (tipe === "NFL") {
        var NFL = "d-block";
        var NBA = "d-none";
        var MLB = "d-none";
        var NHL = "d-none";
        var BOX = "d-none";
        var MMA = "d-none";
        var GOLF = "d-none";
        var NASCAR = "d-none";
        var SOCCER = "d-none";

    } if (tipe === "NBA") {
        NBA = "d-block";
        NFL = "d-none";
        MLB = "d-none";
        NHL = "d-none";
        BOX = "d-none";
        MMA = "d-none";
        GOLF = "d-none";
        NASCAR = "d-none";
        SOCCER = "d-none";
        
    } if (tipe === "MLB") {
        MLB = "d-block";
        NBA = "d-none";
        NFL = "d-none";
        NHL = "d-none";
        BOX = "d-none";
        MMA = "d-none";
        GOLF = "d-none";
        NASCAR = "d-none";
        SOCCER = "d-none";

    }if (tipe === "NHL") {
        NHL = "d-block";
        MLB = "d-none";
        NBA = "d-none";
        NFL = "d-none";
        BOX = "d-none";
        MMA = "d-none";
        GOLF = "d-none";
        NASCAR = "d-none";
        SOCCER = "d-none";
    }
    if (tipe === "BOX") {
        BOX = "d-block";
        NHL = "d-none";
        MLB = "d-none";
        NBA = "d-none";
        NFL = "d-none";
        MMA = "d-none";
        GOLF = "d-none";
        NASCAR = "d-none";
        SOCCER = "d-none";
    }
    if (tipe === "MMA") {
        MMA = "d-block";
        BOX = "d-none";
        NHL = "d-none";
        MLB = "d-none";
        NBA = "d-none";
        NFL = "d-none";
        GOLF = "d-none";
        NASCAR = "d-none";
        SOCCER = "d-none";
    }
    if (tipe === "GOLF") {
        GOLF = "d-block";
        MMA = "d-none";
        BOX = "d-none";
        NHL = "d-none";
        MLB = "d-none";
        NBA = "d-none";
        NFL = "d-none";
        NASCAR = "d-none";
        SOCCER = "d-none";
    }
    if (tipe === "NASCAR") {
        NASCAR = "d-block";
        GOLF = "d-none";
        MMA = "d-none";
        BOX = "d-none";
        NHL = "d-none";
        MLB = "d-none";
        NBA = "d-none";
        NFL = "d-none";
        SOCCER = "d-none";
    }
    if (tipe === "SOCCER") {
        SOCCER = "d-block";
        NASCAR = "d-none";
        GOLF = "d-none";
        MMA = "d-none";
        BOX = "d-none";
        NHL = "d-none";
        MLB = "d-none";
        NBA = "d-none";
        NFL = "d-none";
    }

    return (
        <div className="container-fluid m-50">
            <div className="row g-0">
                <div className="col-12 text-center">
                    <div className="btn-group my-2 shadow" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn bt_deg" onClick={e => setTipe("NFL")} value={NFL}>NFL</button>
                        <button type="button" className="btn bt_deg" onClick={e => setTipe("NBA")} value={NBA}>NBA</button>
                        <button type="button" className="btn bt_deg" onClick={e => setTipe("MLB")} value={MLB}>MLB</button>
                        <button type="button" className="btn bt_deg" onClick={e => setTipe("NHL")} value={NHL}>NHL</button>
                        <button type="button" className="btn bt_deg" onClick={e => setTipe("BOX")} value={BOX}>BOX</button>
                        <button type="button" className="btn bt_deg"  onClick={e => setTipe("MMA")} value={MMA}>MMA</button>
                        <button type="button" className="btn bt_deg"  onClick={e => setTipe("GOLF")} value={GOLF}>GOLF</button>
                        <button type="button" className="btn bt_deg"  onClick={e => setTipe("NASCAR")} value={NASCAR}>NASCAR</button>
                        <button type="button" className="btn bt_deg"  onClick={e => setTipe("SOCCER")} value={SOCCER}>SOCCER</button>
                    </div>
                </div>
                <div className="">

                </div>
                <div className={NFL}>
                    <CreateGames_NFL />
                </div>
                <div className={NBA}>
                    <CreateGames_NBA />
                </div>
                <div className={MLB}>
                    <CreateGames_MLB/>
                </div>
                <div className={NHL}>
                    <CreateGames_NHL/>
                </div>
                <div className={BOX}>
                    <CreateFight/>
                </div>
                <div className={MMA}>
                    <CreateFight_mma/>
                </div>
                <div className={GOLF}>
                    <CreateGolf/>
                </div>
                <div className={NASCAR}>
                    <CreateNascar/>
                </div>
                <div className={SOCCER}>
                    <CreateGames_Soccer/>
                </div>
            </div>
        </div>
    )
}