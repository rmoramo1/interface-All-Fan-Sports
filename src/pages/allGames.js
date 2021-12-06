import React, { useState } from "react";
import { CreateGames_NFL } from "../nfl/createGames_NFL";
import { CreateGames_NBA } from "../nba/nba_game/createGames_NBA"
import { CreateGames_MLB } from "../mlb/mlb_game/createGames_MLB";
import { CreateGames_NHL } from "../nhl/nhl_game/createGames_NHL";


export const AllGames = () => {
    const [tipe, setTipe] = useState("NFL")
    if (tipe === "NFL") {
        var NFL = "d-block";
        var NBA = "d-none";
        var MLB = "d-none";
        var NHL = "d-none";

    } if (tipe === "NBA") {
        NBA = "d-block";
        NFL = "d-none";
        MLB = "d-none";
        NHL = "d-none";
    } if (tipe === "MLB") {
        MLB = "d-block";
        NBA = "d-none";
        NFL = "d-none";
        NHL = "d-none";
    }if (tipe === "NHL") {
        NHL = "d-block";
        MLB = "d-none";
        NBA = "d-none";
        NFL = "d-none";
    }

    return (
        <div className="col-12">
            <div className="row g-0">
                <div className="col-12 text-center">
                    <div className="btn-group py-2" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn bt_deg" onClick={e => setTipe("NFL")} value={NFL}>NFL</button>
                        <button type="button" className="btn bt_deg" onClick={e => setTipe("NBA")} value={NBA}>NBA</button>
                        <button type="button" className="btn bt_deg" onClick={e => setTipe("MLB")} value={MLB}>MBL</button>
                        <button type="button" className="btn bt_deg" onClick={e => setTipe("NHL")} value={NHL}>NHL</button>
                        <button type="button" className="btn bt_deg">BOX</button>
                        <button type="button" className="btn bt_deg">NBA</button>
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
            </div>
        </div>
    )
}