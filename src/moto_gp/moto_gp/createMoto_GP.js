import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import DateTime from 'luxon/src/datetime.js'
import ListMoto_GP from "./listMoto_GP";

export const CreateMoto_GP = () => {
	const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

	const weekLux = DateTime.now().month;
	const yearLux = DateTime.now().year;
	const [week, setWeek] = useState(weekLux);
	const [filterYear, setFilterYear] = useState(yearLux);
	let race = store.moto_gp;

	// use slice() to copy the array and not just make a reference
	var byDate = race;
	byDate.sort(function (a, b) {
		return b.id - a.id;
	});

	let selectWeek = [];
	for (let i = 1; i < 13; i++) {
		if (i < 10) {
            i = "0" + i;
            selectWeek.push(i);
        } else {
            selectWeek.push(i);
        }
	}
	let semana = []
	if (weekLux < 10) {
		let r = "0" + weekLux;
		semana.push(r);
	} else {
		let r = weekLux;
		semana.push(r);
	}
	let selectYear = [];
	for (let i = 2002; i < 2025; i++) {
		selectYear.push(i);
	}

	return (
		<div className="container-fluid">
			<div className="col-12 bg-title-edith my-2 p-3 text-center">
				<h3>List of Moto GP Events</h3>
			</div>
			<div className="col-12 ">
				<div className="row g-0">
					<div className="col-2 d-flex justify-content-center align-items-center">
						Filter
					</div>
					<div className="col-3 text-center">
						Month
						<select className="form-select selectInner" name="week" aria-label="Default select example" defaultValue={semana} onChange={e => setWeek(e.target.value)}>
							{
								selectWeek.map((index) => {
									return (
										<option key={index} name="promotions" value={index}>{index}</option>
									)
								})
							}
						</select>
					</div>
					<div className="text-center col-4 col-lg-2 ps-2">
						Year
						<select className="form-select" name="year" aria-label="Default select example" defaultValue={yearLux} onChange={e => setFilterYear(e.target.value)}>
							{
								selectYear.map((index) => {
									return (
										<option key={index} name="promotions" value={index}>{index}</option>
									)
								})
							}
						</select>
					</div>
				</div>
				<div className="row g-0">
					{race.map((item, index) => {
						let month = item.date.slice(5,7);
						if ( item.date.includes(filterYear) && month == week) {
							return (
								<div key={index} className="col-6 p-1">
									<ListMoto_GP
										id={index}
										del={item.id}
										casino={item.casino}
										date={item.date}
										race={item.race}
									/>
								</div>
							);
						}
					})}
				</div>

			</div>
		</div>
	)
}