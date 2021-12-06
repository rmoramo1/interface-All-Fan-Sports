import { useParams, Redirect } from 'react-router-dom';
import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { HashLink } from 'react-router-hash-link';
export const EdithGames_mlb = (props) => {
    const params = useParams();
    const { store } = useContext(Context);
    const [statusCrear, setStatusCrear] = useState(store.mlbGames[params.theid].status);
    const [casino, setcasino] = useState(store.mlbGames[params.theid].casino);
    const [rotation_home, setRotation_home] = useState(store.mlbGames[params.theid].rotation_home);
    const [rotation_away, setRotation_away] = useState(store.mlbGames[params.theid].rotation_away);
    //
    const [date, setdate] = useState(store.mlbGames[params.theid].date);
    const [hour, sethour] = useState(store.mlbGames[params.theid].hour);

    const [awayCrear, setAwayCrear] = useState(store.mlbGames[params.theid].away);
    const [pitcher_a, setPitcher_a] = useState(store.mlbGames[params.theid].pitcher_a);
    const [HomeCrear, setHomeCrear] = useState(store.mlbGames[params.theid].home);
    const [pitcher_h, setPitcher_h] = useState(store.mlbGames[params.theid].pitcher_h);
    const [rl_away, setRl_away] = useState(store.mlbGames[params.theid].rl_away);
    const [rl_home, setRl_home] = useState(store.mlbGames[params.theid].rl_home);
    const [juice_rl_away, setJuice_rl_away] = useState(store.mlbGames[params.theid].juice_rl_away);
    const [juice_rl_home, setJuice_rl_home] = useState(store.mlbGames[params.theid].juice_rl_home);
    const [moneyLineAway, setMoneyLineAway] = useState(store.mlbGames[params.theid].moneyLineAway);
    const [moneyLineHome, setMoneyLineHome] = useState(store.mlbGames[params.theid].moneyLineHome);
    const [total, setTotal] = useState(store.mlbGames[params.theid].total);
    const [juice_total_over, setJuice_total_over] = useState(store.mlbGames[params.theid].juice_total_over);
    const [juice_total_under, setJuice_total_under] = useState(store.mlbGames[params.theid].juice_total_under);
    const [tt_away, setTt_away] = useState(store.mlbGames[params.theid].tt_away);
    const [juice_over_away, setJuice_over_away] = useState(store.mlbGames[params.theid].juice_over_away);
    const [juice_under_away, setJuice_under_away] = useState(store.mlbGames[params.theid].juice_under_away);
    const [tt_home, setTt_home] = useState(store.mlbGames[params.theid].tt_home);
    const [juice_over_home, setJuice_over_home] = useState(store.mlbGames[params.theid].juice_over_home);
    const [juice_under_home, setJuice_under_home] = useState(store.mlbGames[params.theid].juice_under_home);
    const [final_score_away, setFinal_score_away] = useState(store.mlbGames[params.theid].final_score_away);
    const [final_score_home, setFinal_score_home] = useState(store.mlbGames[params.theid].final_score_home);
    //f5
    const [rl_away_f5, setRl_away_f5] = useState(store.mlbGames[params.theid].rl_away_f5);
    const [rl_home_f5, setRl_home_f5] = useState(store.mlbGames[params.theid].rl_home_f5);
    const [juice_rl_away_f5, setJuice_rl_away_f5] = useState(store.mlbGames[params.theid].juice_rl_away_f5);
    const [juice_rl_home_f5, setJuice_rl_home_f5] = useState(store.mlbGames[params.theid].juice_rl_home_f5);
    const [moneyLineAway_f5, setMoneyLineAway_f5] = useState(store.mlbGames[params.theid].moneyLineAway_f5);
    const [moneyLineHome_f5, setMoneyLineHome_f5] = useState(store.mlbGames[params.theid].moneyLineHome_f5);
    const [total_f5, setTotal_f5] = useState(store.mlbGames[params.theid].total_f5);
    const [juice_total_over_f5, setJuice_total_over_f5] = useState(store.mlbGames[params.theid].juice_total_over_f5);
    const [juice_total_under_f5, setJuice_total_under_f5] = useState(store.mlbGames[params.theid].juice_total_under_f5);
    const [tt_away_f5, setTt_away_f5] = useState(store.mlbGames[params.theid].tt_away_f5);
    const [juice_over_away_f5, setJuice_over_away_f5] = useState(store.mlbGames[params.theid].juice_over_away_f5);
    const [juice_under_away_f5, setJuice_under_away_f5] = useState(store.mlbGames[params.theid].juice_under_away_f5);
    const [tt_home_f5, setTt_home_f5] = useState(store.mlbGames[params.theid].tt_home_f5);
    const [juice_over_home_f5, setJuice_over_home_f5] = useState(store.mlbGames[params.theid].juice_over_home_f5);
    const [juice_under_home_f5, setJuice_under_home_f5] = useState(store.mlbGames[params.theid]);
    const [fs_away_f5, setFs_away_f5] = useState(store.mlbGames[params.theid].fs_away_f5);
    const [fs_home_f5, setFs_home_f5] = useState(store.mlbGames[params.theid].fs_home_f5);
    //second half

    const [sa_1inning, setSa_1inning] = useState(store.mlbGames[params.theid].sa_1inning);
    const [sh_1inning, setSh_1inning] = useState(store.mlbGames[params.theid].sh_1inning);

    const [sa_2inning, setSa_2inning] = useState(store.mlbGames[params.theid].sa_2inning);
    const [sh_2inning, setsh_2inning] = useState(store.mlbGames[params.theid].sh_2inning);

    const [sa_3inning, setSa_3inning] = useState(store.mlbGames[params.theid].sa_3inning);
    const [sh_3inning, setSh_3inning] = useState(store.mlbGames[params.theid].sh_3inning);

    const [sa_4inning, setSa_4inning] = useState(store.mlbGames[params.theid].sa_4inning);
    const [sh_4inning, setSh_4inning] = useState(store.mlbGames[params.theid].sh_4inning);

    const [sa_5inning, setSa_5inning] = useState(store.mlbGames[params.theid].sa_5inning);
    const [sh_5inning, setSh_5inning] = useState(store.mlbGames[params.theid].sh_5inning);

    const [sa_6inning, setSa_6inning] = useState(store.mlbGames[params.theid].sa_6inning);
    const [sh_6inning, setSh_6inning] = useState(store.mlbGames[params.theid].sh_6inning);

    const [sa_7inning, setSa_7inning] = useState(store.mlbGames[params.theid].sa_7inning);
    const [sh_7inning, setsh_7inning] = useState(store.mlbGames[params.theid].sh_7inning);

    const [sa_8inning, setSa_8inning] = useState(store.mlbGames[params.theid].sa_8inning);
    const [sh_8inning, setSh_8inning] = useState(store.mlbGames[params.theid].sh_8inning);

    const [sa_9inning, setSa_9inning] = useState(store.mlbGames[params.theid].sa_9inning);
    const [sh_9inning, setSh_9inning] = useState(store.mlbGames[params.theid].sh_9inning);

    const [sa_10inning, setSa_10inning] = useState(store.mlbGames[params.theid].sa_10inning);
    const [sh_10inning, setSh_10inning] = useState(store.mlbGames[params.theid].sh_10inning);

    const [sa_11inning, setSa_11inning] = useState(store.mlbGames[params.theid].sa_11inning);
    const [sh_11inning, setSh_11inning] = useState(store.mlbGames[params.theid].sh_11inning);

    const [sa_12inning, setSa_12inning] = useState(store.mlbGames[params.theid].sa_12inning);
    const [sh_12inning, setsh_12inning] = useState(store.mlbGames[params.theid].sh_12inning);

    const [sa_13inning, setSa_13inning] = useState(store.mlbGames[params.theid].sa_13inning);
    const [sh_13inning, setSh_13inning] = useState(store.mlbGames[params.theid].sh_13inning);

    const [sa_14inning, setSa_14inning] = useState(store.mlbGames[params.theid].sa_14inning);
    const [sh_14inning, setSh_14inning] = useState(store.mlbGames[params.theid].sh_14inning);

    const [sa_15inning, setSa_15inning] = useState(store.mlbGames[params.theid].sa_15inning);
    const [sh_15inning, setSh_15inning] = useState(store.mlbGames[params.theid].sh_15inning);

    const [sa_16inning, setSa_16inning] = useState(store.mlbGames[params.theid].sa_16inning);
    const [sh_16inning, setSh_16inning] = useState(store.mlbGames[params.theid].sh_16inning);

    const [sa_17inning, setSa_17inning] = useState(store.mlbGames[params.theid].sa_17inning);
    const [sh_17inning, setSh_17inning] = useState(store.mlbGames[params.theid].sh_17inning);

    const [sa_18inning, setSa_18inning] = useState(store.mlbGames[params.theid].sa_18inning);
    const [sh_18inning, setSh_18inning] = useState(store.mlbGames[params.theid].sh_18inning);

    const [sa_19inning, setSa_19inning] = useState(store.mlbGames[params.theid].sa_19inning);
    const [sh_19inning, setSh_19inning] = useState(store.mlbGames[params.theid].sh_19inning);

    const [sa_20inning, setSa_20inning] = useState(store.mlbGames[params.theid].sa_20inning);
    const [sh_20inning, setSh_20inning] = useState(store.mlbGames[params.theid].sh_20inning);

    const [sa_21inning, setSa_21inning] = useState(store.mlbGames[params.theid].sa_21inning);
    const [sh_21inning, setSh_21inning] = useState(store.mlbGames[params.theid].sh_21inning);

    const [sa_22inning, setSa_22inning] = useState(store.mlbGames[params.theid].sa_22inning);
    const [sh_22inning, setSh_22inning] = useState(store.mlbGames[params.theid].sh_22inning);

    const [sa_23inning, setSa_23inning] = useState(store.mlbGames[params.theid].sa_23inning);
    const [sh_23inning, setSh_23inning] = useState(store.mlbGames[params.theid].sh_23inning);

    const [sa_24inning, setSa_24inning] = useState(store.mlbGames[params.theid].sa_24inning);
    const [sh_24inning, setSh_24inning] = useState(store.mlbGames[params.theid].sh_24inning);

    const [sa_25inning, setSa_25inning] = useState(store.mlbGames[params.theid].sa_25inning);
    const [sh_25inning, setSh_25inning] = useState(store.mlbGames[params.theid].sh_25inning);

    const [sa_26inning, setSa_26inning] = useState(store.mlbGames[params.theid].sa_26inning);
    const [sh_26inning, setSh_26inning] = useState(store.mlbGames[params.theid].sh_26inning);

    const [sa_27inning, setSa_27inning] = useState(store.mlbGames[params.theid].sa_27inning);
    const [sh_27inning, setSh_27inning] = useState(store.mlbGames[params.theid].sh_27inning);

    const [sa_28inning, setSa_28inning] = useState(store.mlbGames[params.theid].sa_28inning);
    const [sh_28inning, setSh_28inning] = useState(store.mlbGames[params.theid].sh_28inning);

    const [sa_29inning, setSa_29inning] = useState(store.mlbGames[params.theid].sa_29inning);
    const [sh_29inning, setSh_29inning] = useState(store.mlbGames[params.theid].sh_29inning);

    const [sa_30inning, setSa_30inning] = useState(store.mlbGames[params.theid].sa_30inning);
    const [sh_30inning, setSh_30inning] = useState(store.mlbGames[params.theid].sh_30inning);

    const [sa_31inning, setSa_31inning] = useState(store.mlbGames[params.theid].sa_31inning);
    const [sh_31inning, setSh_31inning] = useState(store.mlbGames[params.theid].sh_31inning);

    const [sa_32inning, setSa_32inning] = useState(store.mlbGames[params.theid].sa_32inning);
    const [sh_32inning, setSh_32inning] = useState(store.mlbGames[params.theid].sh_32inning);

    const [sa_33inning, setSa_33inning] = useState(store.mlbGames[params.theid].sa_33inning);
    const [sh_33inning, setSh_33inning] = useState(store.mlbGames[params.theid].sh_33inning);

    const [sa_34inning, setSa_34inning] = useState(store.mlbGames[params.theid].sa_34inning);
    const [sh_34inning, setSh_34inning] = useState(store.mlbGames[params.theid].sh_34inning);
    //Q4
    const [sa_35inning, setSa_35inning] = useState(store.mlbGames[params.theid].sa_35inning);
    const [sh_35inning, setSh_35inning] = useState(store.mlbGames[params.theid].sh_35inning);

    const [sa_36inning, setSa_36inning] = useState(store.mlbGames[params.theid].sa_36inning);
    const [sh_36inning, setSh_36inning] = useState(store.mlbGames[params.theid].sh_36inning);

    const [sa_37inning, setSa_37inning] = useState(store.mlbGames[params.theid].sa_37inning);
    const [sh_37inning, seSsh_37inning] = useState(store.mlbGames[params.theid].sh_37inning);

    const [sa_38inning, setSa_38inning] = useState(store.mlbGames[params.theid].sa_38inning);
    const [sh_38inning, setSh_38inning] = useState(store.mlbGames[params.theid].sh_38inning);

    const [sa_39inning, setSa_39inning] = useState(store.mlbGames[params.theid].sa_39inning);
    const [sh_39inning, setSh_39inning] = useState(store.mlbGames[params.theid].sh_39inning);

    const [sa_40inning, setSa_40inning] = useState(store.mlbGames[params.theid].sa_40inning);
    const [sh_40inning, setSh_40inning] = useState(store.mlbGames[params.theid].sh_40inning);
    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);

    }
    const crear = e => {
        e.preventDefault();
        const body = {
            status: statusCrear,
            casino: casino,
            rotation_home: rotation_home,
            rotation_away: rotation_away,
            away: awayCrear,
            home: HomeCrear,
            date: date,
            hour: hour,

            pitcher_a: pitcher_a,
            pitcher_h: pitcher_h,
            rl_away: rl_away,
            rl_home: rl_home,
            juice_rl_away: juice_rl_away,
            juice_rl_home: juice_rl_home,
            moneyLineAway: moneyLineAway,
            moneyLineHome: moneyLineHome,
            total: total,
            juice_total_over: juice_total_over,
            juice_total_under: juice_total_under,
            tt_away: tt_away,
            juice_over_away: juice_over_away,
            juice_under_away: juice_under_away,
            tt_home: tt_home,
            juice_over_home: juice_over_home,
            juice_under_home: juice_under_home,
            final_score_away: final_score_away,
            final_score_home: final_score_home,

            rl_away_f5: rl_away_f5,
            rl_home_f5: rl_home_f5,
            juice_rl_away_f5: juice_rl_away_f5,
            juice_rl_home_f5: juice_rl_home_f5,
            moneyLineAway_f5: moneyLineAway_f5,
            moneyLineHome_f5: moneyLineHome_f5,
            total_f5: total_f5,

            juice_total_over_f5: juice_total_over_f5,
            juice_total_under_f5: juice_total_under_f5,
            tt_away_f5: tt_away_f5,
            juice_over_away_f5: juice_over_away_f5,
            juice_under_away_f5: juice_under_away_f5,
            tt_home_f5: tt_home_f5,
            juice_over_home_f5: juice_over_home_f5,
            juice_under_home_f5: juice_under_home_f5,

            fs_away_f5: fs_away_f5,
            fs_home_f5: fs_home_f5,

            sa_1inning: sa_1inning,
            sh_1inning: sh_1inning,
            sa_2inning: sa_2inning,
            sh_2inning: sh_2inning,
            sa_3inning: sa_3inning,
            sh_3inning: sh_3inning,
            sa_4inning: sa_4inning,
            sh_4inning: sh_4inning,
            sa_5inning: sa_5inning,
            sh_5inning: sh_5inning,

            sa_6inning: sa_6inning,
            sh_6inning: sh_6inning,
            sa_7inning: sa_7inning,
            sh_7inning: sh_7inning,
            sa_8inning: sa_8inning,
            sh_8inning: sh_8inning,

            sa_9inning: sa_9inning,
            sh_9inning: sh_9inning,
            sa_10inning: sa_10inning,
            sh_10inning: sh_10inning,
            sa_11inning: sa_11inning,
            sh_11inning: sh_11inning,
            sa_12inning: sa_12inning,
            sh_12inning: sh_12inning,

            sa_13inning: sa_13inning,
            sh_13inning: sh_13inning,
            sa_14inning: sa_14inning,
            sh_14inning: sh_14inning,
            sa_15inning: sa_15inning,
            sh_15inning: sh_15inning,
            sa_16inning: sa_16inning,
            sh_16inning: sh_16inning,

            sa_17inning: sa_17inning,
            sh_17inning: sh_17inning,
            sa_18inning: sa_18inning,
            sh_18inning: sh_18inning,
            sa_19inning: sa_19inning,
            sh_19inning: sh_19inning,
            sa_20inning: sa_20inning,
            sh_20inning: sh_20inning,
            sa_21inning: sa_21inning,
            sh_21inning: sh_21inning,
            sa_22inning: sa_22inning,
            sh_22inning: sh_22inning,

            sa_23inning: sa_23inning,
            sh_23inning: sh_23inning,
            sa_24inning: sa_24inning,
            sh_24inning: sh_24inning,
            sa_25inning: sa_25inning,
            sh_25inning: sh_25inning,

            sa_26inning: sa_26inning,
            sh_26inning: sh_26inning,
            sa_27inning: sa_27inning,
            sh_27inning: sh_27inning,
            sa_28inning: sa_28inning,
            sh_28inning: sh_28inning,
            sa_29inning: sa_29inning,
            sh_29inning: sh_29inning,
            sa_30inning: sa_30inning,
            sh_30inning: sh_30inning,

            sa_31inning: sa_31inning,
            sh_31inning: sh_31inning,
            sa_32inning: sa_32inning,
            sh_32inning: sh_32inning,
            sa_33inning: sa_33inning,
            sh_33inning: sh_33inning,
            sa_34inning: sa_34inning,
            sh_34inning: sh_34inning,

            sa_35inning: sa_35inning,
            sh_35inning: sh_35inning,
            sa_36inning: sa_36inning,
            sh_36inning: sh_36inning,
            sa_37inning: sa_37inning,
            sh_37inning: sh_37inning,
            sa_38inning: sa_38inning,
            sh_38inning: sh_38inning,
            sa_39inning: sa_39inning,
            //--home
            sh_39inning: sh_39inning,
            sa_40inning: sa_40inning,
            sh_40inning: sh_40inning

        };
        console.log(body);
        console.log(body.date);
        fetch("https://interfaceroy.herokuapp.com/mlb/" + store.mlbGames[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000/",
                "Access-Control-Allow-Methods": "PUT"
            }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                console.log(sessionStorage);
                alert("juego se creo");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));

    };
    const delet = e => {
        fetch("https://interfaceroy.herokuapp.com/mlb/" + store.mlbGames[params.theid].id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .catch(err => console.log(err));
        setAuth(true);
        actualizar();
    };

    //select
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }
    let selectMonth = [];
    for (let i = 1; i < 13; i++) {
        if (i < 10) {
            i = "0" + i;
            selectMonth.push(i);
        } else {
            selectMonth.push(i);
        }
    }
    let selectDay = [];
    for (let i = 1; i < 32; i++) {
        if (i < 10) {
            i = "0" + i;
            selectDay.push(i);
        } else {
            selectDay.push(i);
        }
    }
    let selectWeek = [];
    for (let i = 1; i < 53; i++) {
        if (i < 10) {
            i = "0" + i;
            selectWeek.push(i);
        } else {
            selectWeek.push(i);
        }
    }
    let selectHour = [];
    for (let i = 1; i < 13; i++) {
        if (i < 10) {
            i = "0" + i;
            selectHour.push(i);
        } else {
            selectHour.push(i);
        }
    }
    let selectMin = [];
    for (let i = 1; i < 60; i++) {
        if (i < 10) {
            i = "0" + i;
            selectMin.push(i);
        } else {
            selectMin.push(i);
        }
    }
    return (
        <div className="container-fluid accordion" id="gameEditar_MLB" >
            <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                <div className="row g-0 w-100">
                    <div className="col-6">
                        <h4 className="fw-bold text-center">Edith Game </h4>
                    </div>
                    <div className="col-6">
                        <h4>
                            {store.mlbGames[params.theid].away} vrs {store.mlbGames[params.theid].home}
                        </h4>
                    </div>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="col-2 text-center p-1">
                        Status
                        <select className="form-select" name="status" aria-label="Default select example" defaultValue={store.mlbGames[params.theid].status} onChange={e => setStatusCrear(e.target.value)} required>
                            {
                                store.status.map((index) => {
                                    return (
                                        <option key={index} name="status" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-4">
                        <div className="row g-0">
                            <div className="btn-group my-3">
                                <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#editar-juego" aria-expanded="true" aria-controls="editar-juego">
                                    Game
                                </button>
                                <button className="btn btn-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Editarfirst5" aria-expanded="false" aria-controls="Editarfirst5">
                                    F5
                                </button>
                                <button className="btn btn-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#editarsixinning" aria-expanded="false" aria-controls="editarsixinning">
                                    6-9 Inning score
                                </button>
                                <button className="btn btn-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#editarExtrainning" aria-expanded="false" aria-controls="editarExtrainning">
                                    Extra Inning score
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-0">

                    <div className="col-3">
                        <div className="col-12 text-center">
                            Casino <span className="fst-italic small ">*no required</span>
                        </div>
                        <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.mlbGames[params.theid].casino} onChange={e => setcasino(e.target.value)}>
                            {
                                store.casinos.map((item, index) => {
                                    return (
                                        <option key={index} name="promotions" value={item.name}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-3 text-center">
                        <div className="col-12">
                            Pitcher Away
                        </div>
                        <div className="col-12">
                            <input className="form-control selectInner" type="text" placeholder="Pitcher Away" defaultValue={store.mlbGames[params.theid].pitcher_a} aria-label="default input example" onChange={e => setPitcher_a(e.target.value)} required />
                        </div>
                    </div>
                    <div className="col-3 text-center">
                        <div className="col-12">
                            Pitcher Home
                        </div>
                        <div className="col-12">
                            <input className="form-control selectInner" type="text" placeholder="Pitcher Home" aria-label="default input example" defaultValue={store.mlbGames[params.theid].pitcher_h} onChange={e => setPitcher_h(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="accordion-item ">
                    <div id="editar-juego" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#gameEditar_MLB">
                        <div>
                            <div className="row g-0 text-center pt-3 ">
                                <div className="col-1 title-lines">RT#</div>
                                <div className="col-2 title-lines">Team</div>
                                <div className="col-1 title-lines">RL</div>
                                <div className="col-1 title-lines">Juice</div>
                                <div className="col-1 title-lines">ML</div>
                                <div className="col-1 title-lines">Total</div>
                                <div className="col-1 title-lines">Juice</div>
                                <div className="col-1 title-lines">TT</div>
                                <div className="col-1 title-lines">JO</div>
                                <div className="col-1 title-lines">JU</div>
                                <div className="col-1 title-lines">FS</div>
                            </div>
                            <div className="row g-0">
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation_away" defaultValue={store.mlbGames[params.theid].rotation_away} onChange={e => setRotation_away(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <select className="form-select selectInner" name="team away" aria-label="Default select example" defaultValue={store.mlbGames[params.theid].away} onChange={e => setAwayCrear(e.target.value)} required>
                                        {
                                            store.mlb_teams.map((index) => {
                                                return (
                                                    <option key={index} name="promotions" value={index}>{index}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="RL" aria-label="default input example" defaultValue={store.mlbGames[params.theid].rl_away} onChange={e => setRl_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.mlbGames[params.theid].juice_rl_away} onChange={e => setJuice_rl_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" defaultValue={store.mlbGames[params.theid].moneyLineAway} onChange={e => setMoneyLineAway(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" defaultValue={store.mlbGames[params.theid].total} onChange={e => setTotal(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.mlbGames[params.theid].juice_total_over} onChange={e => setJuice_total_over(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Team Total" aria-label="default input example" defaultValue={store.mlbGames[params.theid].tt_away} onChange={e => setTt_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={store.mlbGames[params.theid].juice_over_away} onChange={e => setJuice_over_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={store.mlbGames[params.theid].juice_under_away} onChange={e => setJuice_under_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].final_score_away} onChange={e => setFinal_score_away(e.target.value)} />
                                </div>
                            </div>
                            <div className="row g-0">
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation_home" defaultValue={store.mlbGames[params.theid].rotation_home}  onChange={e => setRotation_home(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.mlbGames[params.theid].home} onChange={e => setHomeCrear(e.target.value)} required>
                                        {
                                            store.mlb_teams.map((index) => {
                                                return (
                                                    <option key={index} name="promotions" value={index}>{index}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="RL" aria-label="default input example" defaultValue={store.mlbGames[params.theid].rl_home} onChange={e => setRl_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.mlbGames[params.theid].juice_rl_home} onChange={e => setJuice_rl_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" defaultValue={store.mlbGames[params.theid].moneyLineHome} onChange={e => setMoneyLineHome(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="" aria-label="default input example" disabled />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.mlbGames[params.theid].juice_total_under} onChange={e => setJuice_total_under(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Team Total" aria-label="default input example" defaultValue={store.mlbGames[params.theid].tt_home} onChange={e => setTt_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Overkkk" aria-label="default input example" defaultValue={store.mlbGames[params.theid].juice_over_home} onChange={e => setJuice_over_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Under" aria-label="default input example" defaultValue={store.mlbGames[params.theid].juice_under_home} onChange={e => setJuice_under_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].final_score_home} onChange={e => setFinal_score_home(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Editarfirst5" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameEditar_MLB">
                        <div className="row g-0 text-center pt-3 w-100">
                            <div className="col-2 title-lines">F5 Rl</div>
                            <div className="col-2 title-lines">F5 Juice Spread</div>
                            <div className="col-2 title-lines">F5 ML</div>
                            <div className="col-1 title-lines">F5 Total</div>
                            <div className="col-1 title-lines">F5 Juice T</div>
                            <div className="col-1 title-lines">F5 TT</div>
                            <div className="col-1 title-lines">F5 JO</div>
                            <div className="col-1 title-lines">F5 JU</div>
                            <div className="col-1 title-lines">F5 FS</div>
                        </div>

                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Rl F5" aria-label="default input example" defaultValue={store.mlbGames[params.theid].rl_away_f5} onChange={e => setRl_away_f5(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.mlbGames[params.theid].juice_rl_away_f5} onChange={e => setJuice_rl_away_f5(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" defaultValue={store.mlbGames[params.theid].moneyLineAway_f5} onChange={e => setMoneyLineAway_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" defaultValue={store.mlbGames[params.theid].total_f5} onChange={e => setTotal_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH Juice A" aria-label="default input example" defaultValue={store.mlbGames[params.theid].juice_total_over_f5} onChange={e => setJuice_total_over_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" defaultValue={store.mlbGames[params.theid].tt_away_f5} onChange={e => setTt_away_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={store.mlbGames[params.theid].juice_over_away_f5} onChange={e => setJuice_over_away_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={store.mlbGames[params.theid].juice_under_away_f5} onChange={e => setJuice_under_away_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].fs_away_f5} onChange={e => setFs_away_f5(e.target.value)} />
                            </div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Rl F5" aria-label="default input example" defaultValue={store.mlbGames[params.theid].rl_home_f5} onChange={e => setRl_home_f5(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.mlbGames[params.theid].juice_rl_home_f5} onChange={e => setJuice_rl_home_f5(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" defaultValue={store.mlbGames[params.theid].moneyLineHome_f5} onChange={e => setMoneyLineHome_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" aria-label="default input example" disabled />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH Juice A" aria-label="default input example" defaultValue={store.mlbGames[params.theid].juice_total_under_f5} onChange={e => setJuice_total_under_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" defaultValue={store.mlbGames[params.theid].tt_home_f5} onChange={e => setTt_home_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JOH" aria-label="default input example" defaultValue={store.mlbGames[params.theid].juice_over_home_f5} onChange={e => setJuice_over_home_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={store.mlbGames[params.theid]} onChange={e => setJuice_under_home_f5(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].fs_home_f5} onChange={e => setFs_home_f5(e.target.value)} />
                            </div>
                        </div>

                    </div>
                    <div id="editarsixinning" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameEditar_MLB">
                        <div className="row g-0 py-3">
                            <div className="col-2">
                                <div className="col-12 title-lines text-center">Inning 6</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_6inning} onChange={e => setSa_6inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_6inning} onChange={e => setSh_6inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="col-12 title-lines text-center">Inning 7</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_7inning} onChange={e => setSa_7inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_7inning} onChange={e => setsh_7inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="col-12 title-lines text-center">Inning 8</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_8inning} onChange={e => setSa_8inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_8inning} onChange={e => setSh_8inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="col-12 title-lines text-center">Inning 9</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_9inning} onChange={e => setSa_9inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_9inning} onChange={e => setSh_9inning(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="editarExtrainning" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameEditar_MLB">
                        <div className="row g-0 py-3">
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 10</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_10inning} onChange={e => setSa_10inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_10inning} onChange={e => setSh_10inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 11</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_11inning} onChange={e => setSa_11inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_11inning} onChange={e => setSh_11inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 12</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_12inning} onChange={e => setSa_12inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_12inning} onChange={e => setsh_12inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 13</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_13inning} onChange={e => setSa_13inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_13inning} onChange={e => setSh_13inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 14</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_14inning} onChange={e => setSa_14inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_14inning} onChange={e => setSh_14inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 15</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_15inning} onChange={e => setSa_15inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_15inning} onChange={e => setSh_15inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 16</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_16inning} onChange={e => setSa_16inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_16inning} onChange={e => setSh_16inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 17</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_17inning} onChange={e => setSa_17inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_17inning} onChange={e => setSh_17inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 18</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_18inning} onChange={e => setSa_18inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_18inning} onChange={e => setSh_18inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 19</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_19inning} onChange={e => setSa_19inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_19inning} onChange={e => setSh_19inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 20</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_20inning} onChange={e => setSa_20inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_20inning} onChange={e => setSh_20inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 21</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_21inning} onChange={e => setSa_21inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_21inning} onChange={e => setSh_21inning(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="row g-0 py-3">
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 22</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_22inning} onChange={e => setSa_22inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_22inning} onChange={e => setSh_22inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 23</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_23inning} onChange={e => setSa_23inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_23inning} onChange={e => setSh_23inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 24</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_24inning} onChange={e => setSa_24inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_24inning} onChange={e => setSh_24inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 25</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_25inning} onChange={e => setSa_25inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_25inning} onChange={e => setSh_25inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 26</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_26inning} onChange={e => setSa_26inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_26inning} onChange={e => setSh_26inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 27</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_27inning} onChange={e => setSa_27inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_27inning} onChange={e => setSh_27inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 28</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_28inning} onChange={e => setSa_28inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_28inning} onChange={e => setSh_28inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 29</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_29inning} onChange={e => setSa_29inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_29inning} onChange={e => setSh_29inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 30</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_30inning} onChange={e => setSa_30inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_30inning} onChange={e => setSh_30inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 31</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_31inning} onChange={e => setSa_31inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_31inning} onChange={e => setSh_31inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 32</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_32inning} onChange={e => setSa_32inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_32inning} onChange={e => setSh_32inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 33</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_33inning} onChange={e => setSa_33inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_33inning} onChange={e => setSh_33inning(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="row g-0 py-3">
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 34</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_34inning} onChange={e => setSa_34inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_34inning} onChange={e => setSh_34inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 35</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_35inning} onChange={e => setSa_35inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_35inning} onChange={e => setSh_35inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 36</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_36inning} onChange={e => setSa_36inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_36inning} onChange={e => setSh_36inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 37</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_37inning} onChange={e => setSa_37inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_37inning} onChange={e => seSsh_37inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 38</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_38inning} onChange={e => setSa_38inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_38inning} onChange={e => setSh_38inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 39</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_39inning} onChange={e => setSa_39inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_39inning} onChange={e => setSh_39inning(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="col-12 title-lines text-center">Inning 40</div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sa_40inning} onChange={e => setSa_40inning(e.target.value)} />
                                </div>
                                <div className="col-12 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.mlbGames[params.theid].sh_40inning} onChange={e => setSh_40inning(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 p-3 text-end">
                        <HashLink className="btn btn-secondary  text-white" to="/admin">Back to Admin</HashLink>
                    </div>
                    <div className="col-4 text-center p-3">
                        <button type="submit" className="btn btn-success">Edit</button>
                    </div>
                    <div className="col-4 text-start p-3">
                        <div data-bs-toggle="modal" data-bs-target="#delete" className="btn btn-danger">Delet</div>
                    </div>
                </div>
            </form>
            <div className="modal fade" id="delete" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content overflow-hidden">
                        <div className="col-12 text-center text-white bg-danger text-uppercase fs-5 py-3">
                            <i className="fas fa-exclamation-triangle fs-1"></i><br />are you sure you want to delete the match
                        </div>
                        <div className="row g-0">
                            <div className="col-6 p-2 text-center">
                                <button className="btn btn-danger" onClick={delet} data-bs-dismiss="modal">Yes Delete</button>
                                {auth ? <Redirect to="/admin" /> : null}
                            </div>
                            <div className="col-6 p-2 text-center">
                                <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}