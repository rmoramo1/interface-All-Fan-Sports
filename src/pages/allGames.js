import React, { useState } from "react";
import { CreateGames_NFL } from "../nfl/createGames_NFL";
import { CreateGames_NBA } from "../nba/nba_game/createGames_NBA"

export const AllGames = () => {
    const dep = ["NFL", "NBA"];
    const [tipe, setTipe] = useState("NFL")
    console.log(tipe + ' tipe')

    if (tipe === "NFL") {
        var NFL = "d-block";
        var NBA = "d-none";
        var returning = "d-none";
        var punting = "d-none";
        var kick = "d-none";
        console.log("ret")
    } if (tipe === "NBA") {
        NBA = "d-block";
        NFL = "d-none";
        returning = "d-none";
        punting = "d-none";
        kick = "d-none";
    }
    if (tipe === "Returning") {
        returning = "d-block";
        NBA = "d-none";
        NFL = "d-none";
        punting = "d-none";
        kick = "d-none";
    }
    if (tipe === "Punting") {
        punting = "d-block";
        NBA = "d-none";
        returning = "d-none";
        NFL = "d-none";
        kick = "d-none";
    }
    if (tipe === "Kicking") {
        punting = "d-none";
        NBA = "d-none";
        returning = "d-none";
        NFL = "d-none";
        kick = "d-block";
    }


    return (
        <div className="col-12">
            <div className="row g-0">
                <div className="col-12 text-center">
                    <div class="btn-group py-2" role="group" aria-label="Basic mixed styles example">
                        <button type="button" class="btn bt_deg" onClick={e => setTipe("NFL")} value={NFL}>NFL</button>
                        <button type="button" class="btn bt_deg" onClick={e => setTipe("NBA")} value={NBA}>NBA</button>
                        <button type="button" class="btn bt_deg">MBL</button>
                        <button type="button" class="btn bt_deg">NHL</button>
                        <button type="button" class="btn bt_deg">BOX</button>
                        <button type="button" class="btn bt_deg">NBA</button>
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
            </div>
        </div>
    )
}