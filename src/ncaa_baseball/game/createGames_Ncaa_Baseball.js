import React, { useContext, useState, useEffect } from "react";
import  ListGame_Ncaa_Baseball  from "./listGame_Ncaa_Baseball"
import { Context } from "../../store/appContext";

export const CreateGames_Ncaa_Baseball = () => {
	const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

	let teamFilter = store.ncaa_baseball;
	const [team, setTeam] = useState("");
	var byDate = teamFilter;
	byDate.sort(function(a,b) {
		return b.id - a.id;
	});

	return (
		<div className="container-fluid">
			<div className="col-12 bg-title-edith my-2 p-3 text-center">
				<h3>List of NCAA BASEBALL Games</h3>
			</div>
			<div className="col-12 ">
				<div className="row g-0">
					<div className="col-2 d-flex justify-content-center align-items-center">
						Filter by team
					</div>
					<div className="col-3">
						<select className="form-select selectInner" name="teams" aria-label="Default select example" onChange={e => setTeam(e.target.value)}>
							{
								store.ncaa_baseball_teams.map((index) => {
									return (
										<option key={index} name="teams" value={index}>{index}</option>
									)
								})
							}
						</select>
					</div>
					<div className="col-3 ms-2">
						<button className="btn btn-danger" type="button" name="btnSetTeam" aria-label="Default select example" onClick={e => setTeam("")}>All Teams</button>
					</div>
				</div>
				{!team ? teamFilter.map((item, indexMlb) => {
					return (
						<div key={indexMlb} className="linesEdith">
							<ListGame_Ncaa_Baseball
								id={indexMlb}
								del={item.id}
								away={item.away}
								home={item.home}
								casino={item.casino}
								rotation_away={item.rotation_away}
								rotation_home={item.rotation_home}
								hour={item.hour}
								status={item.status}
								date={item.date}
								rl_away={item.rl_away}
								rl_home={item.rl_home}
								juice_rl_away={item.juice_rl_away}
								juice_rl_home={item.juice_rl_home}
								moneyLineAway={item.moneyLineAway}
								moneyLineHome={item.moneyLineHome}
								total={item.total}
								juice_total_over={item.juice_total_over}
								juice_total_under={item.juice_total_under}
								tt_away={item.tt_away}
								tt_home={item.tt_home}
								juice_over_away={item.juice_over_away}
								juice_under_away={item.juice_under_away}
								juice_over_home={item.juice_over_home}
								juice_under_home={item.juice_under_home}
								final_score_away={item.final_score_away}
								final_score_home={item.final_score_home}
								type_of_line={item.type_of_line}
							/>
						</div>
					);
				}) : teamFilter.filter(equip => equip.home === team || equip.away === team).map((item, indexMlb) => {
					return (
						<div key={indexMlb}>
							<ListGame_Ncaa_Baseball
								id={indexMlb}
								del={item.id}
								away={item.away}
								home={item.home}
								hour={item.hour}
								casino={item.casino}
								rotation_away={item.rotation_away}
								rotation_home={item.rotation_home}
								status={item.status}
								date={item.date}
								rl_away={item.rl_away}
								rl_home={item.rl_home}
								juice_rl_away={item.juice_rl_away}
								juice_rl_home={item.juice_rl_home}
								moneyLineAway={item.moneyLineAway}
								moneyLineHome={item.moneyLineHome}
								total={item.total}
								juice_total_over={item.juice_total_over}
								juice_total_under={item.juice_total_under}
								tt_away={item.tt_away}
								tt_home={item.tt_home}
								juice_over_away={item.juice_over_away}
								juice_under_away={item.juice_under_away}
								juice_over_home={item.juice_over_home}
								juice_under_home={item.juice_under_home}
								final_score_away={item.final_score_away}
								final_score_home={item.final_score_home}
								type_of_line={item.type_of_line}
							/>
						</div>
					);
				})}

			</div>
		</div>
	)
}