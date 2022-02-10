import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
export const Soccer_game = () => {
    const { store } = useContext(Context);

        useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);
        
        if(!user){
            window.location.href = '/';
        }
    }, [])


    const [statusCrear, setStatusCrear] = useState("Pending");
    const [casino, setcasino] = useState("");
    const [rotation_home, setRotation_home] = useState("");
    const [rotation_away, setRotation_away] = useState("");
    const [yearCrear, setYearCrear] = useState("2021");
    const [monthCrear, setMonthCrear] = useState("01");
    const [dayCrear, setDayCrear] = useState("01");
    let yearSend = yearCrear + "-" + monthCrear + "-" + dayCrear;
    let [yearSendCrear] = useState(yearSend);
    yearSendCrear = yearCrear + "-" + monthCrear + "-" + dayCrear;
    const [hourCrear, setHourCrear] = useState("01");
    const [minCrear, setMinCrear] = useState("01");
    let [timeCrear] = useState("01");
    timeCrear = hourCrear + ":" + minCrear;

    const [country, setcountry] = useState("Espana");

    const [tournament, settournament] = useState("LaLiga");

    const [away, setaway] = useState("");

    const [home, sethome] = useState("FC Barcelona");

    let tounamentSet = (e) => {
        setcountry(e.target.value);
    }
    //
    const [goal_line_away, setgoal_line_away] = useState("");
    const [goal_line_home, setgoal_line_home] = useState("-");
    const [juice_goal_away, setjuice_goal_away] = useState("-110");
    const [juice_goal_home, setjuice_goal_home] = useState("-110");
    const [moneyLineAway, setmoneyLineAway] = useState("");
    const [moneyLineHome, setmoneyLineHome] = useState("");
    const [total, settotal] = useState("");
    const [juice_total_over, setjuice_total_over] = useState("-110");
    const [juice_total_under, setjuice_total_under] = useState("-110");
    const [tt_away, settt_away] = useState("");
    const [juice_over_away, setjuice_over_away] = useState("");
    const [juice_under_away, setjuice_under_away] = useState("");
    const [tt_home, settt_home] = useState("");
    const [juice_over_home, setjuice_over_home] = useState("");
    const [juice_under_home, setjuice_under_home] = useState("-110");
    const [final_score_away, setfinal_score_away] = useState("");
    const [final_score_home, setfinal_score_home] = useState("");
    //first half
    const [goal_away_1H, setgoal_away_1H] = useState("");
    const [goal_home_1H, setgoal_home_1H] = useState("");
    const [juice_goal_away_1H, setjuice_goal_away_1H] = useState("-110");
    const [juice_goal_home_1H, setjuice_goal_home_1H] = useState("-110");
    const [moneyLineAway_1H, setmoneyLineAway_1H] = useState("");
    const [moneyLineHome_1H, setmoneyLineHome_1H] = useState("");
    const [total_1H, settotal_1H] = useState("");
    const [H1_juice_over, setH1_juice_over] = useState("-110");
    const [H1_juice_under, setH1_juice_under] = useState("-110");
    const [tt_away_1H, settt_away_1H] = useState("");
    const [juice_over_away_1H, setjuice_over_away_1H] = useState("-110");
    const [juice_under_away_1H, setjuice_under_away_1H] = useState("-110");
    const [tt_home_1H, settt_home_1H] = useState("");
    const [juice_over_home_1H, setjuice_over_home_1H] = useState("-110");
    const [juice_under_home_1H, setjuice_under_home_1H] = useState("-110");

    let actualizar = () => {
        document.getElementById("miFormSOCCER").reset();
    }
    const crear = e => {
        actualizar();
        e.preventDefault();
        const body = {
            date: yearSendCrear,
            hour: timeCrear,
            status: statusCrear,
            casino: casino,
            tournament: tournament,
            country: country,
            rotation_home: rotation_home,
            rotation_away: rotation_away,
            away: away,
            home: home,
            goal_line_away: goal_line_away,
            goal_line_home: goal_line_home,
            juice_goal_away: juice_goal_away,
            juice_goal_home: juice_goal_home,
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
            //first half
            //--away
            goal_away_1H: goal_away_1H,
            goal_home_1H: goal_home_1H,
            juice_goal_away_1H: juice_goal_away_1H,
            juice_goal_home_1H: juice_goal_home_1H,
            moneyLineAway_1H: moneyLineAway_1H,
            moneyLineHome_1H: moneyLineHome_1H,
            total_1H: total_1H,
            H1_juice_over: H1_juice_over,
            H1_juice_under: H1_juice_under,
            tt_away_1H: tt_away_1H,
            juice_over_away_1H: juice_over_away_1H,
            juice_under_away_1H: juice_under_away_1H,
            tt_home_1H: tt_home_1H,
            juice_over_home_1H: juice_over_home_1H,
            juice_under_home_1H: juice_under_home_1H,

        };
        
       

        fetch("https://sportsdata365.com/soccer", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("juego se creo");
            })
            .catch(err => console.log(err));
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
        selectWeek.push(i);
    }
    let selectHour = [];
    for (let i = 1; i < 25; i++) {
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
        <div className="container-fluid p-0 m-0 accordion" id="gameCreateSoccer" >
            <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                <h3>Create Soccer Game</h3>
            </div>
            <form onSubmit={crear} id="miFormSOCCER">
                <div className="row g-0">
                    <div className="col-2 text-center p-1">
                        Status
                        <select className="form-select" name="status" aria-label="Default select example" onChange={e => setStatusCrear(e.target.value)} required>
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
                        <select className="form-select" name="year" aria-label="Default select example" onChange={e => setYearCrear(e.target.value)} defaultValue={2021} required>
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
                        <select className="form-select" name="month" aria-label="Default select example" onChange={e => setMonthCrear(e.target.value)} required>
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
                        <select className="form-select" name="day" aria-label="Default select example" onChange={e => setDayCrear(e.target.value)} required>
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
                        Hour
                        <select className="form-select" name="week" aria-label="Default select example" onChange={e => setHourCrear(e.target.value)} required>
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
                        <select className="form-select" name="week" aria-label="Default select example" onChange={e => setMinCrear(e.target.value)} required>
                            {
                                selectMin.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-4 pt-3">
                        <div className="row g-0">
                            <div className="btn-group">
                                <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#crear-juego-soccer" aria-expanded="true" aria-controls="crear-juego-soccer">
                                    Game
                                </button>
                                <button className="btn btn-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#firstHalf" aria-expanded="false" aria-controls="firstHalf">
                                    1st Half
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
                        <select className="form-select selectInner" name="week" aria-label="Default select example" onChange={e => setcasino(e.target.value)}>
                            {
                                store.casinos.map((item, index) => {
                                    return (
                                        <option key={index} name="promotions" value={item.name}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-3 px-3">
                        <div className="col-12 text-center">
                            Country
                        </div>
                        <input className="form-control selectInner" type="text" placeholder="Country" aria-label="Country" onChange={e => setcountry(e.target.value)} required />
                    </div>
                    <div className="col-3">
                        <div className="col-12 text-center">
                            Tournament
                        </div>
                        <select className="form-select selectInner" name="Tournament" aria-label="Tournament" defaultValue={tournament} onChange={e => settournament(e.target.value)}>
                            {
                                store.soccer_tournament.map((item, index) => {
                                
                                    return (
                                        <option key={index} name="promotions" value={item.tournament}>{item.tournament}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="accordion-ite ">
                    <div id="crear-juego-soccer" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#gameCreateSoccer">
                        <div>
                            <div className="row g-0 text-center pt-3 ">
                                <div className="col-1 title-lines">RT#</div>
                                <div className="col-2 title-lines">Team</div>
                                <div className="col-1 title-lines">Goal Line</div>
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
                                    <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation_away" onChange={e => setRotation_away(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <input className="form-control selectInner" type="text" placeholder="Away" aria-label="Away Team" onChange={e => setaway(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Goal Line" aria-label="default input example" onChange={e => setgoal_line_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setjuice_goal_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setmoneyLineAway(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" onChange={e => settotal(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setjuice_total_over(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Team Total" aria-label="default input example" onChange={e => settt_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={-110} onChange={e => setjuice_over_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={-110} onChange={e => setjuice_under_away(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setfinal_score_away(e.target.value)} />
                                </div>
                            </div>
                            <div className="row g-0">
                                <div className="col-1">
                                    <input type="text" className="form-control selectInner" placeholder="Rotation #" name="rotation_home" onChange={e => setRotation_home(e.target.value)} required />
                                </div>
                                <div className="col-2">
                                    <input className="form-control selectInner" type="text" placeholder="Home" aria-label="home" onChange={e => sethome(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Goal Line" aria-label="default input example" onChange={e => setgoal_line_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setjuice_goal_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setmoneyLineHome(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="" aria-label="default input example" disabled />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setjuice_total_under(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Team Total" aria-label="default input example" onChange={e => settt_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={-110} onChange={e => setjuice_over_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="Juice Over" aria-label="default input example" defaultValue={-110} onChange={e => setjuice_under_home(e.target.value)} required />
                                </div>
                                <div className="col-1">
                                    <input className="form-control selectInner" type="text" placeholder="FS" aria-label="default input example" onChange={e => setfinal_score_home(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="firstHalf" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#gameCreateSoccer">
                        <div className="row g-0 text-center pt-3 w-100">
                            <div className="col-2 title-lines">FH Goal Line</div>
                            <div className="col-2 title-lines">FH Juice Spread</div>
                            <div className="col-2 title-lines">FH ML</div>
                            <div className="col-1 title-lines">FH Total</div>
                            <div className="col-1 title-lines">FH Juice T</div>
                            <div className="col-1 title-lines">FH TT</div>
                            <div className="col-1 title-lines">FH JO</div>
                            <div className="col-1 title-lines">FH JU</div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH GL" aria-label="default input example" onChange={e => setgoal_away_1H(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setjuice_goal_away_1H(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setmoneyLineAway_1H(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Total" aria-label="default input example" onChange={e => settotal_1H(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH Juice A" aria-label="default input example" defaultValue={-110} onChange={e => setH1_juice_over(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" onChange={e => settt_away_1H(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JOA" aria-label="default input example" defaultValue={-110} onChange={e => setjuice_over_away_1H(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JUA" aria-label="default input example" defaultValue={-110} onChange={e => setjuice_under_away_1H(e.target.value)} />
                            </div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH GL" aria-label="default input example" onChange={e => setgoal_home_1H(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Juice" aria-label="default input example" defaultValue={-110} onChange={e => setjuice_goal_home_1H(e.target.value)} />
                            </div>
                            <div className="col-2 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="Money Line" aria-label="default input example" onChange={e => setmoneyLineHome_1H(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" aria-label="default input example" disabled />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="FH Juice H" aria-label="default input example" defaultValue={-110} onChange={e => setH1_juice_under(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="TT" aria-label="default input example" onChange={e => settt_home_1H(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JOH" aria-label="default input example" defaultValue={-110} onChange={e => setjuice_over_home_1H(e.target.value)} />
                            </div>
                            <div className="col-1 title-lines">
                                <input className="form-control selectInner" type="text" placeholder="JUH" aria-label="default input example" defaultValue={-110} onChange={e => setjuice_under_home_1H(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-10 text-end py-3">
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
            </form>
        </div>
    )
}