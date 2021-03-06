import React, { useContext,useState } from "react";
import DateTime from 'luxon/src/datetime.js'
import { Context } from "../store/appContext";
import { Single_PY_NCAA_STATS } from "./player_off_stats/single_py_ncaa_foot_stats";
import { Single_PY_NCAA_FOOT_DEFF_STATS } from "./player_deff_stats/single_py_ncaa_foot_deff_stats";
import { Single_PY_NCAA_FOOT_RET_STATS } from "./returning_py_stats/single_py_ncaa_foot_ret_stats";
import { Single_PY_NCAA_FOOT_KIK_STATS } from "./player_kik_stats/single_py_ncaa_foot_kik_stats";
import { Single_PY_NCAA_FOOT_PUT_STATS } from "./player_punting_stats/single_py_ncaa_foot_put_stats";

export const List_Stats_Ncaa_py = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

    const yearLux = DateTime.now().year;
    const [yearF, setyearF] = useState(yearLux);
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    let ops = ["Ofensive", "Defensive", "Returning", "Punting" ,"Kicking"];
    const [tipe, setTipe] = useState("Ofensive")
    var sortStats_py_off = store.stats_offensive_player_ncaa_foot;
    var sortStats_py_Deff = store.stats_deffensive_player_ncaa_foot;
    var sortStats_py_Ret = store.stats_return_player_ncaa_foot;
    var sortStats_py_Put = store.stats_punting_player_ncaa_foot;
    var sortStats_py_Kick = store.stats_kiking_player_ncaa_foot;
    if (tipe === "Ofensive") {
        var ofensive = "d-block";
        var deffensive = "d-none";
        var returning = "d-none";
        var punting = "d-none";
        var kick = "d-none";

    } if (tipe === "Defensive") {
        deffensive = "d-block";
        ofensive = "d-none";
        returning = "d-none";
        punting = "d-none";
        kick = "d-none";
    }
    if (tipe === "Returning") {
        returning = "d-block";
        deffensive = "d-none";
        ofensive = "d-none";
        punting = "d-none";
        kick = "d-none";
    }
    if (tipe === "Punting") {
        punting = "d-block";
        deffensive = "d-none";
        returning = "d-none";
        ofensive = "d-none";
        kick = "d-none";
    }
    if (tipe === "Kicking") {
        punting = "d-none";
        deffensive = "d-none";
        returning = "d-none";
        ofensive = "d-none";
        kick = "d-block";
    }
    sortStats_py_off.sort(function (a, b) {
        return b.season - a.season;
    });
    sortStats_py_Deff.sort(function (a, b) {
        return b.season - a.season;
    });
    sortStats_py_Ret.sort(function (a, b) {
        return b.season - a.season;
    });
    sortStats_py_Put.sort(function (a, b) {
        return b.season - a.season;
    });
    sortStats_py_Kick.sort(function (a, b) {
        return b.season - a.season;
    });
    return (
        <div className="container-fluid">
            <div className="row g-0">
                <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                    <div className="row g-0 w-100">
                    <div className="row g-0 w-100">
                        <div className="col-8">
                            <h4 className="fw-bold text-center">NCAA FOOTBALL PLAYER STATS </h4>
                        </div>
                        <div className="col-4">
                            <select className="form-select selectInner" name="selectYear" aria-label="select Year" onChange={e => setyearF(e.target.value)} defaultValue={yearLux} required>
                                {
                                    selectYear.map((index) => {
                                        return (
                                            <option key={index} name="team" value={index}>{index}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    </div>
                </div>
                {
                    store.ncaa_foot_teams.map((index) => {
                        return (
                            <div className="col-4 p-1 span_stats_list">
                                <div className="text-center bg_grey_dark text-white" key={index}>
                                    <div className="row g-0">
                                        <div className="col-6">
                                            {index}
                                        </div>
                                        <div className="col-6">
                                            <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setTipe(e.target.value)} required>
                                                {
                                                    ops.map((index) => {
                                                        return (
                                                            <option key={index} name="team" value={index}>{index}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className={ofensive}>
                                    {sortStats_py_off.map((item, index2) => {
                                        if (item.team === index && item.season == yearF) {
                                            return (
                                                <div className="col-12 px-1 bg_grey_medium" key={index2}>
                                                    <Single_PY_NCAA_STATS
                                                        key={index2}
                                                        id={index2}
                                                        del={item.id}
                                                        team={item.team}
                                                        name={item.name}
                                                        position={item.position}
                                                        dorsal={item.dorsal}
                                                        games={item.games}
                                                    />
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                                <div className={deffensive}>
                                    {sortStats_py_Deff.map((item, index3) => {
                                        if (item.team === index && item.season == yearF) {
                                            return (
                                                <div className="col-12 px-1 bg_grey_medium" key={index3}>
                                                    <Single_PY_NCAA_FOOT_DEFF_STATS
                                                        key={index3}
                                                        id={index3}
                                                        del={item.id}
                                                        team={item.team}
                                                        name={item.name}
                                                        position={item.position}
                                                        dorsal={item.dorsal}
                                                        games={item.games}
                                                    />
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                                <div className={returning}>
                                    {sortStats_py_Ret.map((item, index4) => {
                                        if (item.team === index && item.season == yearF) {
                                            return (
                                                <div className="col-12 px-1 bg_grey_medium" key={index4}>
                                                    <Single_PY_NCAA_FOOT_RET_STATS
                                                        key={index4}
                                                        id={index4}
                                                        del={item.id}
                                                        team={item.team}
                                                        name={item.name}
                                                        position={item.position}
                                                        dorsal={item.dorsal}
                                                        games={item.games}
                                                    />
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                                <div className={punting}>
                                    {sortStats_py_Put.map((item, index5) => {
                                        if (item.team === index && item.season == yearF) {
                                            return (
                                                <div className="col-12 px-1 bg_grey_medium" key={index5}>
                                                    <Single_PY_NCAA_FOOT_PUT_STATS
                                                        key={index5}
                                                        id={index5}
                                                        del={item.id}
                                                        team={item.team}
                                                        name={item.name}
                                                        position={item.position}
                                                        dorsal={item.dorsal}
                                                        games={item.games}
                                                    />
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                                <div className={kick}>
                                    {sortStats_py_Kick.map((item, index5) => {
                                        if (item.team === index && item.season == yearF) {
                                            return (
                                                <div className="col-12 px-1 bg_grey_medium" key={index5}>
                                                    <Single_PY_NCAA_FOOT_KIK_STATS
                                                        key={index5}
                                                        id={index5}
                                                        del={item.id}
                                                        team={item.team}
                                                        name={item.name}
                                                        position={item.position}
                                                        dorsal={item.dorsal}
                                                        games={item.games}
                                                    />
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}