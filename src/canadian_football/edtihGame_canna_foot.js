import { useParams, Redirect } from 'react-router-dom';
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../node_modules/aos/dist/aos.css";
import { HashLink } from 'react-router-hash-link';
export const Edtih_Game_Canna_Foot = (props) => {
    const params = useParams();
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const [date, setdate] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].date);
    const [hour, sethour] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].hour);

   // const only_year = date[0] + date[1] + date[2] + date[3];
    const only_year = date.slice(0,4);
    const only_month = date[5] + date[6];
    const only_day = date[8] + date[9];
    const only_hour = hour[0] + hour[1];
    const only_min = hour[3] + hour[4];

    const [yearCrear, setYearCrear] = useState(only_year);
    const [monthCrear, setMonthCrear] = useState(only_month);
    const [dayCrear, setDayCrear] = useState(only_day);
    const [hourCrear, setHourCrear] = useState(only_hour);
    const [minCrear, setMinCrear] = useState(only_min);

    const [statusCrear, setStatusCrear] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].status);
    const [casino, setCasino] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].casino);
    const [rotation_home, setRotation_home] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].rotation_home);
    const [rotation_away, setRotation_away] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].rotation_away);
    let yearSE = yearCrear + "-" + monthCrear + "-" + dayCrear;
    let [yearSendCrear] = useState(yearSE);
    yearSendCrear = yearCrear + "-" + monthCrear + "-" + dayCrear;
    const [weekCrear, setWeekCrear] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].week);
    const [type_of_line, setType_of_line] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].type_of_line);

    let [timeCrear] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].hour);
    timeCrear = hourCrear + ":" + minCrear;
    //totals
    const [totalCrear, setTotalAwayCrear] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].total);
    const [juiceTotalOver, setjuiceTotalOver] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].juice_total_over);
    const [juiceTotalUnder, setjuiceTotalUnder] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].juice_total_under);
    //away
    const [awayCrear, setAwayCrear] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].away);
    const [spreadAwayCrear, setSpreadAwayCrear] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].spread_away);
    const [juiceSpreadAwayCrear, setJuiceSpreadAwayCrear] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].juice_spread_away);
    const [MonelLineAwayCrear, setMonelLineAwayCrear] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].moneyLineAway);
    const [teamTotalAway, setTeamTotalAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].tt_away);
    const [juiceTeamTotalAwayO, setjuiceTeamTotalAwayO] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].juice_over_away);
    const [juiceTeamTotalAwayU, setjuiceTeamTotalAwayU] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].juice_under_away);
    const [finalScoreA, setFinalScoreA] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].final_score_away);
    //home
    const [HomeCrear, setHomeCrear] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].home);
    const [spreadHomeCrear, setSpreadHomeCrear] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].spread_home);
    const [juiceSpreadHomeCrear, setJuiceSpreadHomeCrear] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].juice_spread_home);
    const [MonelLineHomeCrear, setMonelLineHomeCrear] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].moneyLineHome);
    const [teamTotalHome, setTeamTotalHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].tt_home);
    const [juiceTeamTotalHomeO, setjuiceTeamTotalHomeO] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].juice_over_home);
    const [juiceTeamTotalHomeU, setjuiceTeamTotalHomeU] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].juice_under_home);
    const [finalScoreH, setFinalScoreH] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].final_score_home);
    //first half
    const [FHspreadAway, setFHspreadAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_spread_away);
    const [FHjuiceSpreadAway, setFHjuiceSpreadAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_juice_spread_away);
    const [FHmoneyLineAway, setFHmoneyLineAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_moneyLineAway);
    const [FHtotal, setFHtotal] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_total);
    const [FHjuiceTO, setFHjuiceTO] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].fh_juice_total_over);
    const [FHttAway, setFHttAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_tt_away);
    const [FHjuiceOverAway, setFHjuiceOverAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_juice_over_away);
    const [FHjuiceUnderAway, setFHjuiceUnderAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_juice_under_away);
    const [FHfsAway, setFHfsAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_final_score_away);
    const [FHspreadHome, setFHspreadHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_spread_home);
    const [FHjuiceSpreadHome, setFHjuiceSpreadHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_juice_spread_home);
    const [FHmoneyLineHome, setFHmoneyLineHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_moneyLineHome);
    const [FHjuiceTU, setFHjuiceTU] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_moneyLineHome);
    const [FHttHome, setFHttHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].fh_juice_total_under);
    const [FHjuiceOverHome, setFHjuiceOverHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_juice_over_home);
    const [FHjuiceUnderHome, setFHjuiceUnderHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_juice_under_home);
    const [FHfsHome, setFHfsHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_final_score_home);
    //second half
    const [SHspreadAway, setSHspreadAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_spread_away);
    const [SHjuiceSpreadAway, setSHjuiceSpreadAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_juice_spread_away);
    const [SHmoneyLineAway, setSHmoneyLineAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_moneyLineAway);
    const [SHtotal, setSHtotal] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_total);
    const [SHjuiceTO, setSHjuiceTO] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].sh_juice_total_over);
    const [SHttAway, setSHttAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_tt_away);
    const [SHjuiceOverAway, setSHjuiceOverAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_juice_over_away);
    const [SHjuiceUnderAway, setSHjuiceUnderAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_juice_under_away);
    const [SHfsAway, setSHfsAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_final_score_away);
    const [SHspreadHome, setSHspreadHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_spread_home);
    const [SHjuiceSpreadHome, setSHjuiceSpreadHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_juice_spread_home);
    const [SHmoneyLineHome, setSHmoneyLineHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_moneyLineHome);
    const [SHjuiceTU, setSHjuiceTU] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].sh_juice_total_under);
    const [SHttHome, setSHttHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_tt_home);
    const [SHjuiceOverHome, setSHjuiceOverHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_juice_over_home);
    const [SHjuiceUnderHome, setSHjuiceUnderHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_juice_under_home);
    const [SHfsHome, setSHfsHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_final_score_home);
    //Q1
    const [Q1spreadAway, setQ1spreadAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_spread_away);
    const [Q1juiceSpreadAway, setQ1juiceSpreadAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_juice_spread_away);
    const [Q1moneyLineAway, setQ1moneyLineAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_moneyLineAway);
    const [Q1total, setQ1total] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_total);
    const [Q1juiceTO, setQ1juiceTO] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_juice_over);
    const [Q1ttAway, setQ1ttAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_tt_away);
    const [Q1juiceOverAway, setQ1juiceOverAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_juice_over_away);
    const [Q1juiceUnderAway, setQ1juiceUnderAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_juice_under_away);
    const [Q1fsAway, setQ1fsAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_final_score_away);
    const [Q1spreadHome, setQ1spreadHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_spread_home);
    const [Q1juiceSpreadHome, setQ1juiceSpreadHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_juice_spread_home);
    const [Q1moneyLineHome, setQ1moneyLineHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_moneyLineHome);
    const [Q1juiceTU, setQ1juiceTU] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_juice_under);
    const [Q1ttHome, setQ1ttHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_tt_home);
    const [Q1juiceOverHome, setQ1juiceOverHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_juice_over_home);
    const [Q1juiceUnderHome, setQ1juiceUnderHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_juice_under_home);
    const [Q1fsHome, setQ1fsHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_final_score_home);
    //Q2
    const [Q2spreadAway, setQ2spreadAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_spread_away);
    const [Q2juiceSpreadAway, setQ2juiceSpreadAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_juice_spread_away);
    const [Q2moneyLineAway, setQ2moneyLineAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_moneyLineAway);
    const [Q2total, setQ2total] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_total);
    const [Q2juiceTO, setQ2juiceTO] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_juice_over);
    const [Q2ttAway, setQ2ttAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_tt_away);
    const [Q2juiceOverAway, setQ2juiceOverAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_juice_over_away);
    const [Q2juiceUnderAway, setQ2juiceUnderAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_juice_under_away);
    const [Q2fsAway, setQ2fsAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_final_score_away);
    const [Q2spreadHome, setQ2spreadHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_spread_home);
    const [Q2juiceSpreadHome, setQ2juiceSpreadHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_juice_spread_home);
    const [Q2moneyLineHome, setQ2moneyLineHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_moneyLineHome);
    const [Q2juiceTU, setQ2juiceTU] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_juice_under);
    const [Q2ttHome, setQ2ttHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_tt_home);
    const [Q2juiceOverHome, setQ2juiceOverHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_juice_over_home);
    const [Q2juiceUnderHome, setQ2juiceUnderHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_juice_under_home);
    const [Q2fsHome, setQ2fsHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_final_score_home);
    //Q3
    const [Q3spreadAway, setQ3spreadAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_spread_away);
    const [Q3juiceSpreadAway, setQ3juiceSpreadAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_juice_spread_away);
    const [Q3moneyLineAway, setQ3moneyLineAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_moneyLineAway);
    const [Q3total, setQ3total] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_total);
    const [Q3juiceTO, setQ3juiceTO] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_juice_over);
    const [Q3ttAway, setQ3ttAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_tt_away);
    const [Q3juiceOverAway, setQ3juiceOverAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_juice_over_away);
    const [Q3juiceUnderAway, setQ3juiceUnderAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_juice_under_away);
    const [Q3fsAway, setQ3fsAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_final_score_away);
    const [Q3spreadHome, setQ3spreadHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_spread_home);
    const [Q3juiceSpreadHome, setQ3juiceSpreadHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_juice_spread_home);
    const [Q3moneyLineHome, setQ3moneyLineHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_moneyLineHome);
    const [Q3juiceTU, setQ3juiceTU] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_juice_under);
    const [Q3ttHome, setQ3ttHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_tt_home);
    const [Q3juiceOverHome, setQ3juiceOverHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_juice_over_home);
    const [Q3juiceUnderHome, setQ3juiceUnderHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_juice_under_home);
    const [Q3fsHome, setQ3fsHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_final_score_home);
    //Q4
    const [Q4spreadAway, setQ4spreadAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_spread_away);
    const [Q4juiceSpreadAway, setQ4juiceSpreadAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_juice_spread_away);
    const [Q4moneyLineAway, setQ4moneyLineAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_moneyLineAway);
    const [Q4total, setQ4total] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_total);
    const [Q4juiceTO, setQ4juiceTO] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_juice_over);
    const [Q4ttAway, setQ4ttAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_tt_away);
    const [Q4juiceOverAway, setQ4juiceOverAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_juice_over_away);
    const [Q4juiceUnderAway, setQ4juiceUnderAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_juice_under_away);
    const [Q4fsAway, setQ4fsAway] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_final_score_away);
    const [Q4spreadHome, setQ4spreadHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_spread_home);
    const [Q4juiceSpreadHome, setQ4juiceSpreadHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_juice_spread_home);
    const [Q4moneyLineHome, setQ4moneyLineHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_moneyLineHome);
    const [Q4juiceTU, setQ4juiceTU] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_juice_under);
    const [Q4ttHome, setQ4ttHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_tt_home);
    const [Q4juiceOverHome, setQ4juiceOverHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_juice_over_home);
    const [Q4juiceUnderHome, setQ4juiceUnderHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_juice_under_home);
    const [Q4fsHome, setQ4fsHome] = useState(store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_final_score_home);

    const [auth, setAuth] = useState(false);
    let actualizar = () => {
        setTimeout(function () { window.location.reload(true); }, 800);

    }
    const crear = e => {
        e.preventDefault();
        const body = {
            date: yearSendCrear,
            hour: timeCrear,
            week: weekCrear,
            status: statusCrear,
            casino: casino,
            rotation_home: rotation_home,
            rotation_away: rotation_away,
            type_of_line: type_of_line,
            away: awayCrear,
            home: HomeCrear,
            spread_away: spreadAwayCrear,
            spread_home: spreadHomeCrear,
            juice_spread_away: juiceSpreadAwayCrear,
            juice_spread_home: juiceSpreadHomeCrear,
            moneyLineAway: MonelLineAwayCrear,
            moneyLineHome: MonelLineHomeCrear,
            total: totalCrear,
            juice_total_over: juiceTotalOver,
            juice_total_under: juiceTotalUnder,
            tt_away: teamTotalAway,
            juice_over_away: juiceTeamTotalAwayO,
            juice_under_away: juiceTeamTotalAwayU,
            tt_home: teamTotalHome,
            juice_over_home: juiceTeamTotalHomeO,
            juice_under_home: juiceTeamTotalHomeU,
            final_score_away: finalScoreA,
            final_score_home: finalScoreH,
            //first half
            //--away
            first_half_spread_away: FHspreadAway,
            first_half_juice_spread_away: FHjuiceSpreadAway,
            first_half_moneyLineAway: FHmoneyLineAway,
            first_half_total: FHtotal,
            fh_juice_total_over: FHjuiceTO,
            first_half_tt_away: FHttAway,
            first_half_juice_over_away: FHjuiceOverAway,
            first_half_juice_under_away: FHjuiceUnderAway,
            first_half_final_score_away: FHfsAway,
            //--home
            first_half_spread_home: FHspreadHome,
            first_half_juice_spread_home: FHjuiceSpreadHome,
            first_half_moneyLineHome: FHmoneyLineHome,
            fh_juice_total_under: FHjuiceTU,
            first_half_tt_home: FHttHome,
            first_half_juice_over_home: FHjuiceOverHome,
            first_half_juice_under_home: FHjuiceUnderHome,
            first_half_final_score_home: FHfsHome,
            //second half
            //--away
            second_half_spread_away: SHspreadAway,
            second_half_juice_spread_away: SHjuiceSpreadAway,
            second_half_moneyLineAway: SHmoneyLineAway,
            second_half_total: SHtotal,
            sh_juice_total_over: SHjuiceTO,
            second_half_tt_away: SHttAway,
            second_half_juice_over_away: SHjuiceOverAway,
            second_half_juice_under_away: SHjuiceUnderAway,
            second_half_final_score_away: SHfsAway,
            //--home
            second_half_spread_home: SHspreadHome,
            second_half_juice_spread_home: SHjuiceSpreadHome,
            second_half_moneyLineHome: SHmoneyLineHome,
            sh_juice_total_under: SHjuiceTU,
            second_half_tt_home: SHttHome,
            second_half_juice_over_home: SHjuiceOverHome,
            second_half_juice_under_home: SHjuiceUnderHome,
            second_half_final_score_home: SHfsHome,
            //--Q1
            //--away
            q1_half_spread_away: Q1spreadAway,
            q1_half_juice_spread_away: Q1juiceSpreadAway,
            q1_half_moneyLineAway: Q1moneyLineAway,
            q1_half_total: Q1total,
            q1_juice_over: Q1juiceTO,
            q1_juice_under: Q1juiceTU,
            q1_half_tt_away: Q1ttAway,
            q1_half_juice_over_away: Q1juiceOverAway,
            q1_half_juice_under_away: Q1juiceUnderAway,
            q1_half_final_score_away: Q1fsAway,
            //--home
            q1_half_spread_home: Q1spreadHome,
            q1_half_juice_spread_home: Q1juiceSpreadHome,
            q1_half_moneyLineHome: Q1moneyLineHome,
            q1_half_tt_home: Q1ttHome,
            q1_half_juice_over_home: Q1juiceOverHome,
            q1_half_juice_under_home: Q1juiceUnderHome,
            q1_half_final_score_home: Q1fsHome,
            //--Q2
            //--away
            q2_half_spread_away: Q2spreadAway,
            q2_half_juice_spread_away: Q2juiceSpreadAway,
            q2_half_moneyLineAway: Q2moneyLineAway,
            q2_half_total: Q2total,
            q2_juice_over: Q2juiceTO,
            q2_juice_under: Q2juiceTU,
            q2_half_tt_away: Q2ttAway,
            q2_half_juice_over_away: Q2juiceOverAway,
            q2_half_juice_under_away: Q2juiceUnderAway,
            q2_half_final_score_away: Q2fsAway,
            //--home
            q2_half_spread_home: Q2spreadHome,
            q2_half_juice_spread_home: Q2juiceSpreadHome,
            q2_half_moneyLineHome: Q2moneyLineHome,
            q2_half_tt_home: Q2ttHome,
            q2_half_juice_over_home: Q2juiceOverHome,
            q2_half_juice_under_home: Q2juiceUnderHome,
            q2_half_final_score_home: Q2fsHome,
            //--Q3
            //--away
            q3_half_spread_away: Q3spreadAway,
            q3_half_juice_spread_away: Q3juiceSpreadAway,
            q3_half_moneyLineAway: Q3moneyLineAway,
            q3_half_total: Q3total,
            q3_juice_over: Q3juiceTO,
            q3_juice_under: Q3juiceTU,
            q3_half_tt_away: Q3ttAway,
            q3_half_juice_over_away: Q3juiceOverAway,
            q3_half_juice_under_away: Q3juiceUnderAway,
            q3_half_final_score_away: Q3fsAway,
            //--home
            q3_half_spread_home: Q3spreadHome,
            q3_half_juice_spread_home: Q3juiceSpreadHome,
            q3_half_moneyLineHome: Q3moneyLineHome,
            q3_half_tt_home: Q3ttHome,
            q3_half_juice_over_home: Q3juiceOverHome,
            q3_half_juice_under_home: Q3juiceUnderHome,
            q3_half_final_score_home: Q3fsHome,
            //--Q4
            //--away
            q4_half_spread_away: Q4spreadAway,
            q4_half_juice_spread_away: Q4juiceSpreadAway,
            q4_half_moneyLineAway: Q4moneyLineAway,
            q4_half_total: Q4total,
            q4_juice_over: Q4juiceTO,
            q4_juice_under: Q4juiceTU,
            q4_half_tt_away: Q4ttAway,
            q4_half_juice_over_away: Q4juiceOverAway,
            q4_half_juice_under_away: Q4juiceUnderAway,
            q4_half_final_score_away: Q4fsAway,
            //--home
            q4_half_spread_home: Q4spreadHome,
            q4_half_juice_spread_home: Q4juiceSpreadHome,
            q4_half_moneyLineHome: Q4moneyLineHome,
            q4_half_tt_home: Q4ttHome,
            q4_half_juice_over_home: Q4juiceOverHome,
            q4_half_juice_under_home: Q4juiceUnderHome,
            q4_half_final_score_home: Q4fsHome,

        };


        fetch("https://sportsdata365.com/canadian_football/" + store.canadian_football[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://localhost:3000/",
                "Access-Control-Allow-Methods": "PUT"
            }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);

                alert("juego se creo");
                setAuth(true);
                actualizar();
            })
            .catch(err => console.log(err));

    };
    const delet = e => {
        fetch("https://sportsdata365.com/canadian_football/" + store.canadian_football[params.theid].id, {
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
    for (let i = 0; i < 24; i++) {
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
        selectWeek.push(i);
    }
    let selectHour = [];
    for (let i = 0; i < 25; i++) {
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
        <div className="container-fluid accordion" id="gameEdith" >
            <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                <div className="row g-0 w-100">
                    <div className="col-6">
                        <h4 className="fw-bold text-center">Edith Game </h4>
                    </div>
                    <div className="col-6">
                        <h4>
                            {store.canadian_football[params.theid] && store.canadian_football[params.theid].away} vrs {store.canadian_football[params.theid] && store.canadian_football[params.theid].home}
                        </h4>
                    </div>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="col-2 text-center p-1">
                        Status
                        <select className="form-select" name="status" aria-label="Default select example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].status} onChange={e => setStatusCrear(e.target.value)} required>
                            {
                                store.status.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-2 p-1">
                        Year
                        <select className="form-select" name="year" aria-label="Default select example" defaultValue={only_year} onChange={e => setYearCrear(e.target.value)} required>
                            {
                                selectYear.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index} >{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-1 p-1">
                        Month
                        <select className="form-select" name="month" aria-label="Default select example" defaultValue={only_month} onChange={e => setMonthCrear(e.target.value)} required>
                            {
                                selectMonth.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-1 p-1">
                        Day
                        <select className="form-select" name="day" aria-label="Default select example" defaultValue={only_day} onChange={e => setDayCrear(e.target.value)} required>
                            {
                                selectDay.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-1 p-1">
                        Week
                        <select className="form-select" name="week" aria-label="Default select example" defaultValue={weekCrear} onChange={e => setWeekCrear(e.target.value)} required>
                            {
                                selectWeek.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-1 p-1">
                        Hour
                        <select className="form-select" name="week" aria-label="Default select example" defaultValue={only_hour} onChange={e => setHourCrear(e.target.value)} required>
                            {
                                selectHour.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-1 p-1">
                        Min
                        <select className="form-select" name="week" aria-label="Default select example" defaultValue={only_min} onChange={e => setMinCrear(e.target.value)} required>
                            {
                                selectMin.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-3">
                        <div className="row g-0">
                            <div className="btn-group">
                                <button className="btn btn-dark col-4 justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#crear-juego" aria-expanded="true" aria-controls="crear-juego">
                                    Game
                                </button>
                                <button className="btn btn-dark collapsed col-4 justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#firstHalf" aria-expanded="false" aria-controls="firstHalf">
                                    1st Half
                                </button>
                                <button className="btn btn-dark collapsed col-4 justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#secondHalf" aria-expanded="false" aria-controls="secondHalf">
                                    2dn Half
                                </button>
                            </div>
                            <div className="col-12 rounded-end overflow-hidden py-3">
                                <a className="quarters collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Q1" aria-expanded="false" aria-controls="Q1">
                                    Q1
                                </a>
                                <a className="quarters collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Q2" aria-expanded="false" aria-controls="Q2">
                                    Q2
                                </a>
                                <a className="quarters collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Q3" aria-expanded="false" aria-controls="Q3">
                                    Q3
                                </a>
                                <a className="quarters collapsed rounded-end" type="button" data-bs-toggle="collapse" data-bs-target="#Q4" aria-expanded="false" aria-controls="Q4">
                                    Q4
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-3 text-center px-1">
                        Casino
                        <select className="form-select" name="casinos" aria-label="Default select example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].casino} onChange={e => setCasino(e.target.value)} required>
                            {
                                store.casinos.map((item, index) => {
                                    return (
                                        <option key={index} name="casinos" value={item.name}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-3 ms-1">
                        <div className="col-12 text-center">
                            Type of Line
                        </div>
                        <select className="form-select selectInner" name="Type_of_line" aria-label="setType_of_line" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].type_of_line} onChange={e => setType_of_line(e.target.value)}>
                            {
                                store.typeOfLine.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="accordion-item ">
                    <div id="crear-juego" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#gameEdith">
                        <div>
                            <div className="row g-0 text-center pt-3 ">
                                <div className="col-1 title-lines">RT #</div>
                                <div className="col-2 title-lines">Team</div>
                                <div className="col-1 title-lines">Spread</div>
                                <div className="col-1 title-lines">Juice</div>
                                <div className="col-1 title-lines">ML</div>
                                <div className="col-1 title-lines">Total</div>
                                <div className="col-1 title-lines">Juice</div>
                                <div className="col-1 title-lines">TT</div>
                                <div className="col-1 title-lines">J O</div>
                                <div className="col-1 title-lines">J U</div>
                                <div className="col-1 title-lines">F S</div>
                            </div>
                            <div className="row g-0">
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation_away" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].rotation_away} onChange={e => setRotation_away(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].away} onChange={e => setAwayCrear(e.target.value)} required>
                                        {
                                            store.ncaa_foot_teams.map((index) => {
                                                return (
                                                    <option key={index} name="promotions" value={index}>{index}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Spread" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].spread_away} onChange={e => setSpreadAwayCrear(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].juice_spread_away} onChange={e => setJuiceSpreadAwayCrear(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].moneyLineAway} onChange={e => setMonelLineAwayCrear(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].total} onChange={e => setTotalAwayCrear(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].juice_total_over} onChange={e => setjuiceTotalOver(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Team Total" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].tt_away} onChange={e => setTeamTotalAway(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].juice_over_away} onChange={e => setjuiceTeamTotalAwayO(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].juice_under_away} onChange={e => setjuiceTeamTotalAwayU(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].final_score_away} onChange={e => setFinalScoreA(e.target.value)} />
                                </div>
                            </div>
                            <div className="row g-0">
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation_home" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].rotation_home} onChange={e => setRotation_home(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].home} onChange={e => setHomeCrear(e.target.value)} required>
                                        {
                                            store.ncaa_foot_teams.map((index) => {
                                                return (
                                                    <option key={index} name="promotions" value={index}>{index}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Spread" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].spread_home} onChange={e => setSpreadHomeCrear(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].juice_spread_home} onChange={e => setJuiceSpreadHomeCrear(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].moneyLineHome} onChange={e => setMonelLineHomeCrear(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="" aria-label="default input example" disabled />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].juice_total_under} onChange={e => setjuiceTotalUnder(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Team Total" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].tt_home} onChange={e => setTeamTotalHome(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].juice_over_home} onChange={e => setjuiceTeamTotalHomeO(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].juice_under_home} onChange={e => setjuiceTeamTotalHomeU(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].final_score_home} onChange={e => setFinalScoreH(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="firstHalf" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameEdith">
                        <div className="row g-0 text-center pt-3 w-100">
                            <div className="col-2 title-lines">FH Spread</div>
                            <div className="col-2 title-lines">FH Juice Spread</div>
                            <div className="col-2 title-lines">FH ML</div>
                            <div className="col-1 title-lines">FH Total</div>
                            <div className="col-1 title-lines">FH Juice T</div>
                            <div className="col-1 title-lines">FH TT</div>
                            <div className="col-1 title-lines">FH JO</div>
                            <div className="col-1 title-lines">FH JU</div>
                            <div className="col-1 title-lines">FH FS</div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH Spread" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_spread_away} onChange={e => setFHspreadAway(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_juice_spread_away} onChange={e => setFHjuiceSpreadAway(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_moneyLineAway} onChange={e => setFHmoneyLineAway(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_total} onChange={e => setFHtotal(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH Juice A" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].fh_juice_total_over} onChange={e => setFHjuiceTO(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_tt_away} onChange={e => setFHttAway(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_juice_over_away} onChange={e => setFHjuiceOverAway(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_juice_over_away} onChange={e => setFHjuiceUnderAway(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_final_score_away} onChange={e => setFHfsAway(e.target.value)} />
                            </div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH Spread" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_spread_home} onChange={e => setFHspreadHome(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_juice_spread_home} onChange={e => setFHjuiceSpreadHome(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_moneyLineHome} onChange={e => setFHmoneyLineHome(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" aria-label="default input example" disabled />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH Juice H" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].fh_juice_total_under} onChange={e => setFHjuiceTU(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_tt_home} onChange={e => setFHttHome(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JOH" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_juice_over_home} onChange={e => setFHjuiceOverHome(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JUH" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_juice_under_home} onChange={e => setFHjuiceUnderHome(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].first_half_final_score_home} onChange={e => setFHfsHome(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div id="secondHalf" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameEdith">
                        <div className="row g-0 text-center pt-3 w-100">
                            <div className="col-2 title-lines">SH Spread</div>
                            <div className="col-2 title-lines">SH Juice Spread</div>
                            <div className="col-2 title-lines">SH ML</div>
                            <div className="col-1 title-lines">SH Total</div>
                            <div className="col-1 title-lines">SH Juice T</div>
                            <div className="col-1 title-lines">SH TT</div>
                            <div className="col-1 title-lines">SH JO</div>
                            <div className="col-1 title-lines">SH JU</div>
                            <div className="col-1 title-lines">SH FS</div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="SH Spread" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_spread_away} onChange={e => setSHspreadAway(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_juice_spread_away} onChange={e => setSHjuiceSpreadAway(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_moneyLineAway} onChange={e => setSHmoneyLineAway(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_total} onChange={e => setSHtotal(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="SH Juice A" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].sh_juice_total_over} onChange={e => setSHjuiceTO(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_tt_away} onChange={e => setSHttAway(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_juice_over_away} onChange={e => setSHjuiceOverAway(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_juice_under_away} onChange={e => setSHjuiceUnderAway(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_final_score_away} onChange={e => setSHfsAway(e.target.value)} />
                            </div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="SH Spread" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_spread_home} onChange={e => setSHspreadHome(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_juice_spread_home} onChange={e => setSHjuiceSpreadHome(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_moneyLineHome} onChange={e => setSHmoneyLineHome(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" aria-label="default input example" disabled />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="SH Juice H" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].sh_juice_total_under} onChange={e => setSHjuiceTU(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_tt_home} onChange={e => setSHttHome(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JOH" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_juice_over_home} onChange={e => setSHjuiceOverHome(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JUH" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_juice_under_home} onChange={e => setSHjuiceUnderHome(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].second_half_final_score_home} onChange={e => setSHfsHome(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div id="Q1" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameEdith">
                        <div className="q1">
                            <div className="row g-0 text-center pt-3 w-100">
                                <div className="col-2 title-lines">Q1 Spread</div>
                                <div className="col-2 title-lines">Q1 Juice Spread</div>
                                <div className="col-2 title-lines">Q1 ML</div>
                                <div className="col-1 title-lines">Q1 Total</div>
                                <div className="col-1 title-lines">Q1 Juice T</div>
                                <div className="col-1 title-lines">Q1 TT</div>
                                <div className="col-1 title-lines">Q1 JO</div>
                                <div className="col-1 title-lines">Q1 JU</div>
                                <div className="col-1 title-lines">Q1 FS</div>
                            </div>
                            <div className="row g-0 text-center">
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q1 Spread" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_spread_away} onChange={e => setQ1spreadAway(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_juice_spread_away} onChange={e => setQ1juiceSpreadAway(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q1 ML" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_moneyLineAway} onChange={e => setQ1moneyLineAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_total} onChange={e => setQ1total(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="SH Juice A" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_juice_over} onChange={e => setQ1juiceTO(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_tt_away} onChange={e => setQ1ttAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_juice_over_away} onChange={e => setQ1juiceOverAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_juice_under_away} onChange={e => setQ1juiceUnderAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_final_score_away} onChange={e => setQ1fsAway(e.target.value)} />
                                </div>
                            </div>
                            <div className="row g-0 text-center">
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q1 Spread" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_spread_home} onChange={e => setQ1spreadHome(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_juice_spread_home} onChange={e => setQ1juiceSpreadHome(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q1 ML" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_moneyLineHome} onChange={e => setQ1moneyLineHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" aria-label="default input example" disabled />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="SH Juice H" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_juice_under} onChange={e => setQ1juiceTU(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_tt_home} onChange={e => setQ1ttHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JOH" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_juice_over_home} onChange={e => setQ1juiceOverHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JUH" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_juice_under_home} onChange={e => setQ1juiceUnderHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q1_half_final_score_home} onChange={e => setQ1fsHome(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Q2" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameEdith">
                        <div className="q2">
                            <div className="row g-0 text-center pt-3 w-100">
                                <div className="col-2 title-lines">Q2 Spread</div>
                                <div className="col-2 title-lines">Q2 Juice Spread</div>
                                <div className="col-2 title-lines">Q2 ML</div>
                                <div className="col-1 title-lines">Q2 Total</div>
                                <div className="col-1 title-lines">Q2 Juice T</div>
                                <div className="col-1 title-lines">Q2 TT</div>
                                <div className="col-1 title-lines">Q2 JO</div>
                                <div className="col-1 title-lines">Q2 JU</div>
                                <div className="col-1 title-lines">Q2 FS</div>
                            </div>
                            <div className="row g-0 text-center">
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q2 Spread" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_spread_away} onChange={e => setQ2spreadAway(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_juice_spread_away} onChange={e => setQ2juiceSpreadAway(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q2 ML" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_moneyLineAway} onChange={e => setQ2moneyLineAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_total} onChange={e => setQ2total(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="SH Juice A" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_juice_over} onChange={e => setQ2juiceTO(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_tt_away} onChange={e => setQ2ttAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_juice_over_away} onChange={e => setQ2juiceOverAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_juice_under_away} onChange={e => setQ2juiceUnderAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_final_score_away} onChange={e => setQ2fsAway(e.target.value)} />
                                </div>
                            </div>
                            <div className="row g-0 text-center">
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q2 Spread" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_spread_home} onChange={e => setQ2spreadHome(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_juice_spread_home} onChange={e => setQ2juiceSpreadHome(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q2 ML" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_moneyLineHome} onChange={e => setQ2moneyLineHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" aria-label="default input example" disabled />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="SH Juice H" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_juice_under} onChange={e => setQ2juiceTU(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_tt_home} onChange={e => setQ2ttHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JOH" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_juice_over_home} onChange={e => setQ2juiceOverHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JUH" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_juice_under_home} onChange={e => setQ2juiceUnderHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q2_half_final_score_home} onChange={e => setQ2fsHome(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Q3" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameEdith">
                        <div className="q3">
                            <div className="row g-0 text-center pt-3 w-100">
                                <div className="col-2 title-lines">Q3 Spread</div>
                                <div className="col-2 title-lines">Q3 Juice Spread</div>
                                <div className="col-2 title-lines">Q3 ML</div>
                                <div className="col-1 title-lines">Q3 Total</div>
                                <div className="col-1 title-lines">Q3 Juice T</div>
                                <div className="col-1 title-lines">Q3 TT</div>
                                <div className="col-1 title-lines">Q3 JO</div>
                                <div className="col-1 title-lines">Q3 JU</div>
                                <div className="col-1 title-lines">Q3 FS</div>
                            </div>
                            <div className="row g-0 text-center">
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q3 Spread" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_spread_away} onChange={e => setQ3spreadAway(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_juice_spread_away} onChange={e => setQ3juiceSpreadAway(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q3 ML" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_moneyLineAway} onChange={e => setQ3moneyLineAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_total} onChange={e => setQ3total(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="SH Juice A" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_juice_over} onChange={e => setQ3juiceTO(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_tt_away} onChange={e => setQ3ttAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_juice_over_away} onChange={e => setQ3juiceOverAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_juice_under_away} onChange={e => setQ3juiceUnderAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_final_score_away} onChange={e => setQ3fsAway(e.target.value)} />
                                </div>
                            </div>
                            <div className="row g-0 text-center">
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q3 Spread" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_spread_home} onChange={e => setQ3spreadHome(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_juice_spread_home} onChange={e => setQ3juiceSpreadHome(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q4 ML" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_moneyLineHome} onChange={e => setQ3moneyLineHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" aria-label="default input example" disabled />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="SH Juice H" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_juice_under} onChange={e => setQ3juiceTU(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_tt_home} onChange={e => setQ3ttHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JOH" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_juice_over_home} onChange={e => setQ3juiceOverHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JUH" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_juice_under_home} onChange={e => setQ3juiceUnderHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q3_half_final_score_home} onChange={e => setQ3fsHome(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Q4" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameEdith">
                        <div className="q4">
                            <div className="row g-0 text-center pt-3 w-100">
                                <div className="col-2 title-lines">Q4 Spread</div>
                                <div className="col-2 title-lines">Q4 Juice Spread</div>
                                <div className="col-2 title-lines">Q4 ML</div>
                                <div className="col-1 title-lines">Q4 Total</div>
                                <div className="col-1 title-lines">Q4 Juice T</div>
                                <div className="col-1 title-lines">Q4 TT</div>
                                <div className="col-1 title-lines">Q4 JO</div>
                                <div className="col-1 title-lines">Q4 JU</div>
                                <div className="col-1 title-lines">Q4 FS</div>
                            </div>
                            <div className="row g-0 text-center">
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q4 Spread" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_spread_away} onChange={e => setQ4spreadAway(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_juice_spread_away} onChange={e => setQ4juiceSpreadAway(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q4 ML" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_moneyLineAway} onChange={e => setQ4moneyLineAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_total} onChange={e => setQ4total(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="SH Juice A" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_juice_over} onChange={e => setQ4juiceTO(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_tt_away} onChange={e => setQ4ttAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_juice_over_away} onChange={e => setQ4juiceOverAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_juice_under_away} onChange={e => setQ4juiceUnderAway(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_final_score_away} onChange={e => setQ4fsAway(e.target.value)} />
                                </div>
                            </div>
                            <div className="row g-0 text-center">
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q4 Spread" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_spread_home} onChange={e => setQ4spreadHome(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_juice_spread_home} onChange={e => setQ4juiceSpreadHome(e.target.value)} />
                                </div>
                                <div className="col-2 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="Q4 ML" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_moneyLineHome} onChange={e => setQ4moneyLineHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" aria-label="default input example" disabled />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="SH Juice H" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_juice_under} onChange={e => setQ4juiceTU(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_tt_home} onChange={e => setQ4ttHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JOH" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_juice_over_home} onChange={e => setQ4juiceOverHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="JUH" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_juice_under_home} onChange={e => setQ4juiceUnderHome(e.target.value)} />
                                </div>
                                <div className="col-1 title-lines">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" defaultValue={store.canadian_football[params.theid] && store.canadian_football[params.theid].q4_half_final_score_home} onChange={e => setQ4fsHome(e.target.value)} />
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
                                {auth ? <Redirect to="/allGames" /> : null}
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