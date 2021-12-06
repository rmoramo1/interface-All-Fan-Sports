import React, { useContext, useState } from "react";
import  ListGameNHL  from "./listGameNHL"
import { Context } from "../../store/appContext";

export const CreateGames_NHL = () => {
	const { store } = useContext(Context);
	let teamFilter = store.nhlGames;
	const [team, setTeam] = useState("");

	// change page
	// sort by born date
	// use slice() to copy the array and not just make a reference
	var byDate = teamFilter;
	byDate.sort(function(a,b) {
		return b.id - a.id;
	});

	return (
		<div className="container-fluid">
			<div className="col-12 bg-title-edith my-2 p-3 text-center">
				<h3>List of Games NHL</h3>
			</div>
			<div className="col-12 ">
				<div className="row g-0">
					<div className="col-2 d-flex justify-content-center align-items-center">
						Filter by team
					</div>
					<div className="col-3">
						<select className="form-select selectInner" name="teams" aria-label="Default select example" onChange={e => setTeam(e.target.value)}>
							{
								store.nhl_teams.map((index) => {
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
							<ListGameNHL
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
								puck_line_away={item.puck_line_away}
								puck_line_home={item.puck_line_home}
								juice_puck_away={item.juice_puck_away}
								juice_puck_home={item.juice_puck_home}
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
							/>
						</div>
					);
				}) : teamFilter.filter(equip => equip.home === team || equip.away === team).map((item, indexMlb) => {
					return (
						<div key={indexMlb}>
							<ListGameNHL
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
								puck_line_away={item.puck_line_away}
								puck_line_home={item.puck_line_home}
								juice_puck_away={item.juice_puck_away}
								juice_puck_home={item.juice_puck_home}
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
							/>
						</div>
					);
				})}

			</div>
		</div>
	)
}