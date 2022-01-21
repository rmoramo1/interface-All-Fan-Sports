import React, { useContext,useState } from "react";
import DateTime from 'luxon/src/datetime.js'
import { Context } from "../../store/appContext";
import { Single_py_nhl_stats } from "./single_py_nhl_stats";
export const List_Stats_NHL_PY = () => {
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

    var sortStats_py = store.nhl_stats_player;
    sortStats_py.sort(function (a, b) {
        return b.season - a.season;
    });
    return (
        <div className="container-fluid">
            <div className="row g-0">
                <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                <div className="row g-0 w-100">
                        <div className="col-8">
                            <h4 className="fw-bold text-center">NHL PLAYER STATS </h4>
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
                {
                    store.nhl_teams.map((index) => {
                        return (
                            <div className="col-4 p-1 span_stats_list">
                                <div className="text-center bg_grey_dark text-white" key={index}>
                                    <div className="row g-0">
                                        <div className="col-12">
                                            {index}
                                        </div>
                                    </div>
                                </div>
                                {sortStats_py.map((item, index2) => {
                                    if (item.team === index && item.season == yearF) {
                                        return (
                                            <div className="col-12 px-1 bg_grey_medium" key={index2}>
                                                <Single_py_nhl_stats
                                                    key={index2}
                                                    id={index2}
                                                    del={item.id}
                                                    team={item.team}
                                                    name={item.name}
                                                    position={item.position}
                                                    dorsal={item.dorsal}
                                                />
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}