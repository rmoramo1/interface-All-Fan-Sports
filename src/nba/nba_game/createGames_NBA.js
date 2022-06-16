import React, { useContext, useState, useEffect } from "react";
import  ListGameNBA  from "./listGameNBA"
import { Context } from "../../store/appContext";

export const CreateGames_NBA = () => {
	const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

	let teamFilter = store.nbaGames;
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
				<h3>List of NBA Games</h3>
			</div>
			<div className="col-12 ">
				<div className="row g-0">
					<div className="col-2 d-flex justify-content-center align-items-center">
						Filter by team
					</div>
					<div className="col-3">
						<select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setTeam(e.target.value)}>
							{
								store.nba_teams.map((index) => {
									return (
										<option key={index} name="promotions" value={index}>{index}</option>
									)
								})
							}
						</select>
					</div>
					<div className="col-3 ms-2">
						<button className="btn btn-danger" type="button" name="week" aria-label="Default select example" onClick={e => setTeam("")}>All Teams</button>
					</div>
				</div>
				{!team ? teamFilter.map((item, index) => {
					return (
						<div key={index} className="linesEdith">
							<ListGameNBA
								id={index}
								del={item.id}
								away={item.away}
								home={item.home}
								casino={item.casino}
								rotation_away={item.rotation_away}
								rotation_home={item.rotation_home}
								hour={item.hour}
								status={item.status}
								date={item.date}
								spread_away={item.spread_away}
								spread_home={item.spread_home}
								juice_spread_away={item.juice_spread_away}
								juice_spread_home={item.juice_spread_home}
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
				}) : teamFilter.filter(equip => equip.home === team || equip.away === team).map((item, index) => {
					return (
						<div key={index}>
							<ListGameNBA
								id={index}
								del={item.id}
								away={item.away}
								home={item.home}
								hour={item.hour}
								casino={item.casino}
								rotation_away={item.rotation_away}
								rotation_home={item.rotation_home}
								status={item.status}
								date={item.date}
								spread_away={item.spread_away}
								spread_home={item.spread_home}
								juice_spread_away={item.juice_spread_away}
								juice_spread_home={item.juice_spread_home}
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