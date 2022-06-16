import { useParams, Redirect } from 'react-router-dom';
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { HashLink } from 'react-router-hash-link';
import DateTime from 'luxon/src/datetime.js'
export const Edtih_Moto_GP = (props) => {
    const params = useParams();
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }
    const [date, setdate] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].date);
    const [hour, sethour] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].hour);

    let only_year = date[0] + date[1] + date[2] + date[3];
    let only_month = date[5] + date[6];
    let only_day = date[8] + date[9];
    let only_hour = hour[0] + hour[1];
    let only_min = hour[3] + hour[4];
    const dateLux = DateTime.now().weekNumber;
    const [statusCrear, setStatusCrear] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].status);
    const [casino, setcasino] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].casino);
    const [yearCrear, setYearCrear] = useState(only_year);
    const [monthCrear, setMonthCrear] = useState(only_month);
    const [dayCrear, setDayCrear] = useState(only_day);
    let yearSend = yearCrear + "-" + monthCrear + "-" + dayCrear;
    let [yearSendCrear] = useState(yearSend);
    yearSendCrear = yearCrear + "-" + monthCrear + "-" + dayCrear;
    const [weekCrear, setWeekCrear] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].week);
    const [hourCrear, setHourCrear] = useState(only_hour);
    const [minCrear, setMinCrear] = useState(only_min);
    let [timeCrear] = useState("01");
    timeCrear = hourCrear + ":" + minCrear;
    //
    const [race, setrace] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].race);
    const [rotation_number, setrotation_number] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number);
    const [track, settrack] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].track);
    const [location, setlocation] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].location);
    const [winner_1, setwinner_1] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_1);
    const [winner_2, setwinner_2] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_2);
    const [winner_3, setwinner_3] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_3);
    const [winner_4, setwinner_4] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_4);
    const [winner_5, setwinner_5] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_5);
    const [winner_6, setwinner_6] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_6);
    const [winner_7, setwinner_7] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_7);
    const [winner_8, setwinner_8] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_8);
    const [winner_9, setwinner_9] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_9);
    const [winner_10, setwinner_10] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_10);
    const [winner_11, setwinner_11] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_11);
    const [winner_12, setwinner_12] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_12);
    const [winner_13, setwinner_13] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_13);
    const [winner_14, setwinner_14] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_14);
    const [winner_15, setwinner_15] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_15);
    const [winner_16, setwinner_16] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_16);
    const [winner_17, setwinner_17] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_17);
    const [winner_18, setwinner_18] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_18);
    const [winner_19, setwinner_19] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_19);
    const [winner_20, setwinner_20] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_20);
    const [winner_21, setwinner_21] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_21);
    const [winner_22, setwinner_22] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_22);
    const [winner_23, setwinner_23] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_23);
    const [winner_24, setwinner_24] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_24);
    const [winner_25, setwinner_25] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_25);
    const [rotation_number_1, setrotation_number_1] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_1);
    const [rotation_number_2, setrotation_number_2] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_2);
    const [rotation_number_3, setrotation_number_3] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_3);
    const [rotation_number_4, setrotation_number_4] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_4);
    const [rotation_number_5, setrotation_number_5] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_5);
    const [rotation_number_6, setrotation_number_6] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_6);
    const [rotation_number_7, setrotation_number_7] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_7);
    const [rotation_number_8, setrotation_number_8] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_8);
    const [rotation_number_9, setrotation_number_9] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_9);
    const [rotation_number_10, setrotation_number_10] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_10);
    const [rotation_number_11, setrotation_number_11] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_11);
    const [rotation_number_12, setrotation_number_12] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_12);
    const [rotation_number_13, setrotation_number_13] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_13);
    const [rotation_number_14, setrotation_number_14] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_14);
    const [rotation_number_15, setrotation_number_15] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_15);
    const [rotation_number_16, setrotation_number_16] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_16);
    const [rotation_number_17, setrotation_number_17] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_17);
    const [rotation_number_18, setrotation_number_18] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_18);
    const [rotation_number_19, setrotation_number_19] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_19);
    const [rotation_number_20, setrotation_number_20] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_20);
    const [rotation_number_21, setrotation_number_21] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_21);
    const [rotation_number_22, setrotation_number_22] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_22);
    const [rotation_number_23, setrotation_number_23] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_23);
    const [rotation_number_24, setrotation_number_24] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_24);
    const [rotation_number_25, setrotation_number_25] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_25);
    const [rotation_number_26, setrotation_number_26] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_26);
    const [rotation_number_27, setrotation_number_27] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_27);
    const [rotation_number_28, setrotation_number_28] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_28);
    const [rotation_number_29, setrotation_number_29] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_29);
    const [rotation_number_30, setrotation_number_30] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_30);
    const [rotation_number_31, setrotation_number_31] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_31);
    const [rotation_number_32, setrotation_number_32] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_32);
    const [rotation_number_33, setrotation_number_33] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_33);
    const [rotation_number_34, setrotation_number_34] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_34);
    const [rotation_number_35, setrotation_number_35] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_35);
    const [rotation_number_36, setrotation_number_36] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_36);
    const [rotation_number_37, setrotation_number_37] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_37);
    const [rotation_number_38, setrotation_number_38] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_38);
    const [rotation_number_39, setrotation_number_39] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_39);
    const [rotation_number_40, setrotation_number_40] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_40);
    const [rotation_number_41, setrotation_number_41] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_41);
    const [rotation_number_42, setrotation_number_42] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_42);
    const [rotation_number_43, setrotation_number_43] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_43);
    const [rotation_number_44, setrotation_number_44] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_44);
    const [rotation_number_45, setrotation_number_45] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_45);
    const [rotation_number_46, setrotation_number_46] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_46);
    const [rotation_number_47, setrotation_number_47] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_47);
    const [rotation_number_48, setrotation_number_48] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_48);
    const [rotation_number_49, setrotation_number_49] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_49);
    const [rotation_number_50, setrotation_number_50] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_50);

    const [competitor_1, setcompetitor_1] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_1);
    const [competitor_2, setcompetitor_2] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_2);
    const [competitor_3, setcompetitor_3] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_3);
    const [competitor_4, setcompetitor_4] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_4);
    const [competitor_5, setcompetitor_5] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_5);
    const [competitor_6, setcompetitor_6] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_6);
    const [competitor_7, setcompetitor_7] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_7);
    const [competitor_8, setcompetitor_8] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_8);
    const [competitor_9, setcompetitor_9] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_9);
    const [competitor_10, setcompetitor_10] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_10);
    const [competitor_11, setcompetitor_11] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_11);
    const [competitor_12, setcompetitor_12] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_12);
    const [competitor_13, setcompetitor_13] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_13);
    const [competitor_14, setcompetitor_14] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_14);
    const [competitor_15, setcompetitor_15] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_15);
    const [competitor_16, setcompetitor_16] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_16);
    const [competitor_17, setcompetitor_17] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_17);
    const [competitor_18, setcompetitor_18] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_18);
    const [competitor_19, setcompetitor_19] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_19);
    const [competitor_20, setcompetitor_20] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_20);
    const [competitor_21, setcompetitor_21] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_21);
    const [competitor_22, setcompetitor_22] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_22);
    const [competitor_23, setcompetitor_23] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_23);
    const [competitor_24, setcompetitor_24] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_24);
    const [competitor_25, setcompetitor_25] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_25);
    const [competitor_26, setcompetitor_26] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_26);
    const [competitor_27, setcompetitor_27] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_27);
    const [competitor_28, setcompetitor_28] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_28);
    const [competitor_29, setcompetitor_29] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_29);
    const [competitor_30, setcompetitor_30] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_30);
    const [competitor_31, setcompetitor_31] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_31);
    const [competitor_32, setcompetitor_32] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_32);
    const [competitor_33, setcompetitor_33] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_33);
    const [competitor_34, setcompetitor_34] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_34);
    const [competitor_35, setcompetitor_35] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_35);
    const [competitor_36, setcompetitor_36] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_36);
    const [competitor_37, setcompetitor_37] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_37);
    const [competitor_38, setcompetitor_38] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_38);
    const [competitor_39, setcompetitor_39] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_39);
    const [competitor_40, setcompetitor_40] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_40);
    const [competitor_41, setcompetitor_41] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_41);
    const [competitor_42, setcompetitor_42] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_42);
    const [competitor_43, setcompetitor_43] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_43);
    const [competitor_44, setcompetitor_44] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_44);
    const [competitor_45, setcompetitor_45] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_45);
    const [competitor_46, setcompetitor_46] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_46);
    const [competitor_47, setcompetitor_47] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_47);
    const [competitor_48, setcompetitor_48] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_48);
    const [competitor_49, setcompetitor_49] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_49);
    const [competitor_50, setcompetitor_50] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_50);

    const [money_line_1, setmoney_line_1] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_1);
    const [money_line_2, setmoney_line_2] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_2);
    const [money_line_3, setmoney_line_3] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_3);
    const [money_line_4, setmoney_line_4] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_4);
    const [money_line_5, setmoney_line_5] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_5);
    const [money_line_6, setmoney_line_6] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_6);
    const [money_line_7, setmoney_line_7] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_7);
    const [money_line_8, setmoney_line_8] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_8);
    const [money_line_9, setmoney_line_9] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_9);
    const [money_line_10, setmoney_line_10] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_10);
    const [money_line_11, setmoney_line_11] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_11);
    const [money_line_12, setmoney_line_12] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_12);
    const [money_line_13, setmoney_line_13] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_13);
    const [money_line_14, setmoney_line_14] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_14);
    const [money_line_15, setmoney_line_15] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_15);
    const [money_line_16, setmoney_line_16] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_16);
    const [money_line_17, setmoney_line_17] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_17);
    const [money_line_18, setmoney_line_18] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_18);
    const [money_line_19, setmoney_line_19] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_19);
    const [money_line_20, setmoney_line_20] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_20);
    const [money_line_21, setmoney_line_21] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_21);
    const [money_line_22, setmoney_line_22] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_22);
    const [money_line_23, setmoney_line_23] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_23);
    const [money_line_24, setmoney_line_24] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_24);
    const [money_line_25, setmoney_line_25] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_25);
    const [money_line_26, setmoney_line_26] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_26);
    const [money_line_27, setmoney_line_27] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_27);
    const [money_line_28, setmoney_line_28] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_28);
    const [money_line_29, setmoney_line_29] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_29);
    const [money_line_30, setmoney_line_30] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_30);
    const [money_line_31, setmoney_line_31] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_31);
    const [money_line_32, setmoney_line_32] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_32);
    const [money_line_33, setmoney_line_33] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_33);
    const [money_line_34, setmoney_line_34] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_34);
    const [money_line_35, setmoney_line_35] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_35);
    const [money_line_36, setmoney_line_36] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_36);
    const [money_line_37, setmoney_line_37] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_37);
    const [money_line_38, setmoney_line_38] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_38);
    const [money_line_39, setmoney_line_39] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_39);
    const [money_line_40, setmoney_line_40] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_40);
    const [money_line_41, setmoney_line_41] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_41);
    const [money_line_42, setmoney_line_42] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_42);
    const [money_line_43, setmoney_line_43] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_43);
    const [money_line_44, setmoney_line_44] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_44);
    const [money_line_45, setmoney_line_45] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_45);
    const [money_line_46, setmoney_line_46] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_46);
    const [money_line_47, setmoney_line_47] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_47);
    const [money_line_48, setmoney_line_48] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_48);
    const [money_line_49, setmoney_line_49] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_49);
    const [money_line_50, setmoney_line_50] = useState(store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_50);
    //

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
            rotation_number_1: rotation_number_1,
            rotation_number_2: rotation_number_2,
            rotation_number_3: rotation_number_3,
            rotation_number_4: rotation_number_4,
            rotation_number_5: rotation_number_5,
            rotation_number_6: rotation_number_6,
            rotation_number_7: rotation_number_7,
            rotation_number_8: rotation_number_8,
            rotation_number_9: rotation_number_9,
            rotation_number_10: rotation_number_10,
            rotation_number_11: rotation_number_11,
            rotation_number_12: rotation_number_12,
            rotation_number_13: rotation_number_13,
            rotation_number_14: rotation_number_14,
            rotation_number_15: rotation_number_15,
            rotation_number_16: rotation_number_16,
            rotation_number_17: rotation_number_17,
            rotation_number_18: rotation_number_18,
            rotation_number_19: rotation_number_19,
            rotation_number_20: rotation_number_20,
            rotation_number_21: rotation_number_21,
            rotation_number_22: rotation_number_22,
            rotation_number_23: rotation_number_23,
            rotation_number_24: rotation_number_24,
            rotation_number_25: rotation_number_25,
            rotation_number_26: rotation_number_26,
            rotation_number_27: rotation_number_27,
            rotation_number_28: rotation_number_28,
            rotation_number_29: rotation_number_29,
            rotation_number_30: rotation_number_30,
            rotation_number_31: rotation_number_31,
            rotation_number_32: rotation_number_32,
            rotation_number_33: rotation_number_33,
            rotation_number_34: rotation_number_34,
            rotation_number_35: rotation_number_35,
            rotation_number_36: rotation_number_36,
            rotation_number_37: rotation_number_37,
            rotation_number_38: rotation_number_38,
            rotation_number_39: rotation_number_39,
            rotation_number_40: rotation_number_40,
            rotation_number_41: rotation_number_41,
            rotation_number_42: rotation_number_42,
            rotation_number_43: rotation_number_43,
            rotation_number_44: rotation_number_44,
            rotation_number_45: rotation_number_45,
            rotation_number_46: rotation_number_46,
            rotation_number_47: rotation_number_47,
            rotation_number_48: rotation_number_48,
            rotation_number_49: rotation_number_49,
            rotation_number_50: rotation_number_50,

            winner_1: winner_1,
            winner_2: winner_2,
            winner_3: winner_3,
            winner_4: winner_4,
            winner_5: winner_5,
            winner_6: winner_6,
            winner_7: winner_7,
            winner_8: winner_8,
            winner_9: winner_9,
            winner_10: winner_10,
            winner_11: winner_11,
            winner_12: winner_12,
            winner_13: winner_13,
            winner_14: winner_14,
            winner_15: winner_15,
            winner_16: winner_16,
            winner_17: winner_17,
            winner_18: winner_18,
            winner_19: winner_19,
            winner_20: winner_20,
            winner_21: winner_21,
            winner_22: winner_22,
            winner_23: winner_23,
            winner_24: winner_24,
            winner_25: winner_25,

            competitor_1: competitor_1,
            competitor_2: competitor_2,
            competitor_3: competitor_3,
            competitor_4: competitor_4,
            competitor_5: competitor_5,
            competitor_6: competitor_6,
            competitor_7: competitor_7,
            competitor_8: competitor_8,
            competitor_9: competitor_9,
            competitor_10: competitor_10,
            competitor_11: competitor_11,
            competitor_12: competitor_12,
            competitor_13: competitor_13,
            competitor_14: competitor_14,
            competitor_15: competitor_15,
            competitor_16: competitor_16,
            competitor_17: competitor_17,
            competitor_18: competitor_18,
            competitor_19: competitor_19,
            competitor_20: competitor_20,
            competitor_21: competitor_21,
            competitor_22: competitor_22,
            competitor_23: competitor_23,
            competitor_24: competitor_24,
            competitor_25: competitor_25,
            competitor_26: competitor_26,
            competitor_27: competitor_27,
            competitor_28: competitor_28,
            competitor_29: competitor_29,
            competitor_30: competitor_30,
            competitor_31: competitor_31,
            competitor_32: competitor_32,
            competitor_33: competitor_33,
            competitor_34: competitor_34,
            competitor_35: competitor_35,
            competitor_36: competitor_36,
            competitor_37: competitor_37,
            competitor_38: competitor_38,
            competitor_39: competitor_39,
            competitor_40: competitor_40,
            competitor_41: competitor_41,
            competitor_42: competitor_42,
            competitor_43: competitor_43,
            competitor_44: competitor_44,
            competitor_45: competitor_45,
            competitor_46: competitor_46,
            competitor_47: competitor_47,
            competitor_48: competitor_48,
            competitor_49: competitor_49,
            competitor_50: competitor_50,

            money_line_1: money_line_1,
            money_line_2: money_line_2,
            money_line_3: money_line_3,
            money_line_4: money_line_4,
            money_line_5: money_line_5,
            money_line_6: money_line_6,
            money_line_7: money_line_7,
            money_line_8: money_line_8,
            money_line_9: money_line_9,
            money_line_10: money_line_10,
            money_line_11: money_line_11,
            money_line_12: money_line_12,
            money_line_13: money_line_13,
            money_line_14: money_line_14,
            money_line_15: money_line_15,
            money_line_16: money_line_16,
            money_line_17: money_line_17,
            money_line_18: money_line_18,
            money_line_19: money_line_19,
            money_line_20: money_line_20,
            money_line_21: money_line_21,
            money_line_22: money_line_22,
            money_line_23: money_line_23,
            money_line_24: money_line_24,
            money_line_25: money_line_25,
            money_line_26: money_line_26,
            money_line_27: money_line_27,
            money_line_28: money_line_28,
            money_line_29: money_line_29,
            money_line_30: money_line_30,
            money_line_31: money_line_31,
            money_line_32: money_line_32,
            money_line_33: money_line_33,
            money_line_34: money_line_34,
            money_line_35: money_line_35,
            money_line_36: money_line_36,
            money_line_37: money_line_37,
            money_line_38: money_line_38,
            money_line_39: money_line_39,
            money_line_40: money_line_40,
            money_line_41: money_line_41,
            money_line_42: money_line_42,
            money_line_43: money_line_43,
            money_line_44: money_line_44,
            money_line_45: money_line_45,
            money_line_46: money_line_46,
            money_line_47: money_line_47,
            money_line_48: money_line_48,
            money_line_49: money_line_49,
            money_line_50: money_line_50,

            casino: casino,
            race: race,
            track: track,
            location: location,
        };


        fetch("https://sportsdata365.com/moto_gp/" + store.moto_gp[params.theid].id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
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
    const deletFight = e => {
        fetch("https://sportsdata365.com/moto_gp/" + store.moto_gp[params.theid].id, {
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
    for (let i = 0; i < 60; i++) {
        if (i < 10) {
            i = "0" + i;
            selectMin.push(i);
        } else {
            selectMin.push(i);
        }
    }

    return (
        <div className="container-fluid accordion" id="fightEdith" >
            <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                <div className="row g-0 w-100">
                    <div className="col-6">
                        <h4 className="fw-bold text-center">Edith Moto GP Race </h4>
                    </div>
                    <div className="col-6">
                        <h4>
                            {store.moto_gp[params.theid] && store.moto_gp[params.theid].event}
                        </h4>
                    </div>
                </div>
            </div>
            <form onSubmit={crear}>
                <div className="row g-0">
                    <div className="col-2 text-center p-1">
                        Status
                        <select className="form-select" name="status" aria-label="Default select example" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].status} onChange={e => setStatusCrear(e.target.value)} >
                            {
                                store.status.map((index) => {
                                    return (
                                        <option key={index} name="status" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center col-1 p-1">
                        Year
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setYearCrear(e.target.value)} defaultValue={only_year} >
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
                        <select className="form-select" name="month" aria-label="Default select example" defaultValue={only_month} onChange={e => setMonthCrear(e.target.value)} >
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
                        <select className="form-select" name="day" aria-label="Default select example" defaultValue={only_day} onChange={e => setDayCrear(e.target.value)} >
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
                        <select className="form-select" name="week" aria-label="Default select example" onChange={e => setWeekCrear(e.target.value)} defaultValue={weekCrear} >
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
                        <select className="form-select" name="week" aria-label="Default select example" defaultValue={only_hour} onChange={e => setHourCrear(e.target.value)} >
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
                        <select className="form-select" name="week" aria-label="Default select example" defaultValue={only_min} onChange={e => setMinCrear(e.target.value)} >
                            {
                                selectMin.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-3">
                        <div className="col-12 text-center">
                            Casino <span className="fst-italic small ">*no </span>
                        </div>
                        <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setcasino(e.target.value)} defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].casino}>
                            {
                                store.casinos.map((item, index) => {
                                    return (
                                        <option key={index} name="promotions" value={item.name}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-3">
                        <div className="col-12 text-center">
                            Evento
                        </div>
                        <input type="text" className="form-control selectInner" placeholder="Evento" name="rotation_away" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].event} onChange={e => setrace(e.target.value)}  />
                    </div>
                </div>
                <div className="">
                    <div id="crear-juego" className="row g-0">
                        <div className="col-12">
                            <div className="row g-0 text-center pt-3 ">
                                <div className="col-1 title-lines">Rotation #</div>
                                <div className="col-5 title-lines">Golfer</div>
                                <div className="col-3 title-lines">Line</div>
                                <div className="col-3 title-lines">Winner</div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_1} onChange={e => setrotation_number_1(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_1} onChange={e => setcompetitor_1(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_1} onChange={e => setmoney_line_1(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_1} onChange={e => setwinner_1(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_2} onChange={e => setrotation_number_2(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_2} onChange={e => setcompetitor_2(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_2} onChange={e => setmoney_line_2(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_3} onChange={e => setrotation_number_3(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_3} onChange={e => setcompetitor_3(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_3} onChange={e => setmoney_line_3(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_2} onChange={e => setwinner_2(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_4} onChange={e => setrotation_number_4(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_4} onChange={e => setcompetitor_4(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_4} onChange={e => setmoney_line_4(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_5} onChange={e => setrotation_number_5(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_5} onChange={e => setcompetitor_5(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_5} onChange={e => setmoney_line_5(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_3} onChange={e => setwinner_3(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_6} onChange={e => setrotation_number_6(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_6} onChange={e => setcompetitor_6(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_6} onChange={e => setmoney_line_6(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_7} onChange={e => setrotation_number_7(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_7} onChange={e => setcompetitor_7(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_7} onChange={e => setmoney_line_7(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_4} onChange={e => setwinner_4(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_8} onChange={e => setrotation_number_8(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_8} onChange={e => setcompetitor_8(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_8} onChange={e => setmoney_line_8(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_9} onChange={e => setrotation_number_9(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_9} onChange={e => setcompetitor_9(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_9} onChange={e => setmoney_line_9(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_5} onChange={e => setwinner_5(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_10} onChange={e => setrotation_number_10(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_10} onChange={e => setcompetitor_10(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_10} onChange={e => setmoney_line_10(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_11} onChange={e => setrotation_number_11(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_11} onChange={e => setcompetitor_11(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_11} onChange={e => setmoney_line_11(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_6} onChange={e => setwinner_6(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_12} onChange={e => setrotation_number_12(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_12} onChange={e => setcompetitor_12(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_12} onChange={e => setmoney_line_12(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_13} onChange={e => setrotation_number_13(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_13} onChange={e => setcompetitor_13(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_13} onChange={e => setmoney_line_13(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_7} onChange={e => setwinner_7(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_14} onChange={e => setrotation_number_14(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_14} onChange={e => setcompetitor_14(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_14} onChange={e => setmoney_line_14(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_15} onChange={e => setrotation_number_15(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_15} onChange={e => setcompetitor_15(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_15} onChange={e => setmoney_line_15(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_8} onChange={e => setwinner_8(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_16} onChange={e => setrotation_number_16(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_16} onChange={e => setcompetitor_16(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_16} onChange={e => setmoney_line_16(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_17} onChange={e => setrotation_number_17(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_17} onChange={e => setcompetitor_17(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_17} onChange={e => setmoney_line_17(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_9} onChange={e => setwinner_9(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_18} onChange={e => setrotation_number_18(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_18} onChange={e => setcompetitor_18(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_18} onChange={e => setmoney_line_18(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_19} onChange={e => setrotation_number_19(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_19} onChange={e => setcompetitor_19(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_19} onChange={e => setmoney_line_19(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_10} onChange={e => setwinner_10(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_20} onChange={e => setrotation_number_20(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_20} onChange={e => setcompetitor_20(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_20} onChange={e => setmoney_line_20(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_21} onChange={e => setrotation_number_21(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_21} onChange={e => setcompetitor_21(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_21} onChange={e => setmoney_line_21(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_11} onChange={e => setwinner_11(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_22} onChange={e => setrotation_number_22(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_22} onChange={e => setcompetitor_22(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_22} onChange={e => setmoney_line_22(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_23} onChange={e => setrotation_number_23(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_23} onChange={e => setcompetitor_23(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_23} onChange={e => setmoney_line_23(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_12} onChange={e => setwinner_12(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_24} onChange={e => setrotation_number_24(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_24} onChange={e => setcompetitor_24(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_24} onChange={e => setmoney_line_24(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_25} onChange={e => setrotation_number_25(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_25} onChange={e => setcompetitor_25(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_25} onChange={e => setmoney_line_25(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_13} onChange={e => setwinner_13(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_26} onChange={e => setrotation_number_26(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_26} onChange={e => setcompetitor_26(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_26} onChange={e => setmoney_line_26(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_27} onChange={e => setrotation_number_27(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_27} onChange={e => setcompetitor_27(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_27} onChange={e => setmoney_line_27(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_14} onChange={e => setwinner_14(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_28} onChange={e => setrotation_number_28(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_28} onChange={e => setcompetitor_28(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_28} onChange={e => setmoney_line_28(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_29} onChange={e => setrotation_number_29(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_29} onChange={e => setcompetitor_29(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_2} onChange={e => setmoney_line_29(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_15} onChange={e => setwinner_15(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_30} onChange={e => setrotation_number_30(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_30} onChange={e => setcompetitor_30(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_30} onChange={e => setmoney_line_30(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_31} onChange={e => setrotation_number_31(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_31} onChange={e => setcompetitor_31(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_31} onChange={e => setmoney_line_31(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_16} onChange={e => setwinner_16(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_32} onChange={e => setrotation_number_32(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_32} onChange={e => setcompetitor_32(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_32} onChange={e => setmoney_line_32(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_33} onChange={e => setrotation_number_33(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_33} onChange={e => setcompetitor_33(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_33} onChange={e => setmoney_line_33(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_17} onChange={e => setwinner_17(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_34} onChange={e => setrotation_number_34(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_3} onChange={e => setcompetitor_34(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_34} onChange={e => setmoney_line_34(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_3} onChange={e => setrotation_number_35(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_35} onChange={e => setcompetitor_35(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_35} onChange={e => setmoney_line_35(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_18} onChange={e => setwinner_18(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_36} onChange={e => setrotation_number_36(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_36} onChange={e => setcompetitor_36(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_36} onChange={e => setmoney_line_36(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_37} onChange={e => setrotation_number_37(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_37} onChange={e => setcompetitor_37(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_37} onChange={e => setmoney_line_37(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_19} onChange={e => setwinner_19(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_38} onChange={e => setrotation_number_38(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_38} onChange={e => setcompetitor_38(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_38} onChange={e => setmoney_line_38(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_39} onChange={e => setrotation_number_39(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_39} onChange={e => setcompetitor_39(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_39} onChange={e => setmoney_line_39(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_2} onChange={e => setwinner_20(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_40} onChange={e => setrotation_number_40(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_40} onChange={e => setcompetitor_40(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_40} onChange={e => setmoney_line_40(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_41} onChange={e => setrotation_number_41(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_41} onChange={e => setcompetitor_41(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_41} onChange={e => setmoney_line_41(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_21} onChange={e => setwinner_21(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_42} onChange={e => setrotation_number_42(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_42} onChange={e => setcompetitor_42(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_42} onChange={e => setmoney_line_42(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_43} onChange={e => setrotation_number_43(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_43} onChange={e => setcompetitor_43(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_43} onChange={e => setmoney_line_43(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_22} onChange={e => setwinner_22(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_44} onChange={e => setrotation_number_44(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_44} onChange={e => setcompetitor_44(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_44} onChange={e => setmoney_line_44(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_45} onChange={e => setrotation_number_45(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_45} onChange={e => setcompetitor_45(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_45} onChange={e => setmoney_line_45(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_23} onChange={e => setwinner_23(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_46} onChange={e => setrotation_number_46(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_46} onChange={e => setcompetitor_46(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_46} onChange={e => setmoney_line_46(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_47} onChange={e => setrotation_number_47(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_47} onChange={e => setcompetitor_47(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_47} onChange={e => setmoney_line_47(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_24} onChange={e => setwinner_24(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_48} onChange={e => setrotation_number_48(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_4} onChange={e => setcompetitor_48(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_48} onChange={e => setmoney_line_48(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_49} onChange={e => setrotation_number_49(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_49} onChange={e => setcompetitor_49(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_49} onChange={e => setmoney_line_49(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Winner" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_25} onChange={e => setwinner_25(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row g-0 bb3px">
                                    <div className="col-1">
                                        <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_50} onChange={e => setrotation_number_50(e.target.value)} />
                                    </div>
                                    <div className="col-5
                                ">
                                        <input type="text" className="form-control selectInner" placeholder="Golfer" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_50} onChange={e => setcompetitor_50(e.target.value)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control selectInner" placeholder="Moneyline" name="rotation" defaultValue={store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_50} onChange={e => setmoney_line_50(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row g-0">
                    <div className="col-4 p-3 text-end">
                        <HashLink className="btn btn-secondary text-white" to="/admin">Back to Admin</HashLink>
                    </div>
                    <div className="col-4 text-end p-3">
                        <button type="submit" className="btn btn-success">Edit</button>
                    </div>
                    <div className="col-4 text-start p-3">
                        <div data-bs-toggle="modal" data-bs-target="#delete_Fight" className="btn btn-danger">Delet</div>
                    </div>
                </div>
            </form>
            <div className="modal fade" id="delete_Fight" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content overflow-hidden">
                        <div className="col-12 text-center text-white bg-danger text-uppercase fs-5 py-3">
                            <i className="fas fa-exclamation-triangle fs-1"></i><br />are you sure you want to delete the match
                        </div>
                        <div className="row g-0">
                            <div className="col-6 p-2 text-center">
                                <button className="btn btn-danger" onClick={deletFight} data-bs-dismiss="modal">Yes Delete</button>
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