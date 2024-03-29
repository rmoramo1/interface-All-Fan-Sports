import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
			 * store, instead use actions, like this:
			 *
			 * state.actions.loadPlanets(); <---- calling this function from the flux.js actions
			 *
			 **/
			state.actions.loadNflGames();
			state.actions.loadStatsNFL();
			state.actions.loadStandingsNFL();
			state.actions.loadStatsNFL_Off_player();
			state.actions.loadStats_deff_player_nfl();
			state.actions.loadStats_ret_player_nfl();
			state.actions.loadStats_put_player_nfl();
			state.actions.loadStats_kik_player_nfl();
			//Canadian_football
			state.actions.loadCanadian_football();
			state.actions.loadStats_canadian_football_team();
			state.actions.loadStanding_canadian_football_team();
			state.actions.loadstats_offensive_player_canadian_football();
			state.actions.loadstats_defensive_player_canadian_football();
			state.actions.loadStats_kiking_player_canadian_football();
			state.actions.loadStats_returning_player_canadian_football();
			state.actions.loadStats_punting_player_canadian_football();
			//nba
			state.actions.loadGamesNBA();
			state.actions.loadStatsNBA();
			state.actions.loadStats_player_NBA();
			//wnba
			state.actions.loadGamesWNBA();
			state.actions.loadStatsWNBA();
			state.actions.loadStats_player_WNBA();
			//mlb
			state.actions.loadGamesMLB();
			state.actions.loadStatsMLB();
			state.actions.loadStats_player_MLB();
			//mx base
			state.actions.loadGamesMX_Base();
			state.actions.loadGamesstats_baseball_mexico_team();
			state.actions.loadStats_mexico_baseball_player();
			//nhl
			state.actions.loadGamesNHL();
			state.actions.loadStatsNHL();
			state.actions.loadStats_player_NHL();
			state.actions.loadStats_stats_goalkeeper_NHL();
			//box
			state.actions.loadBox_Fight();
			state.actions.loadBoxer_Stats();
			//mma
			state.actions.loadMMA_Fight();
			state.actions.loadMMA_Stats();
			//golf
			state.actions.loadGOLF();
			state.actions.loadGOLFER_Stats();
			//Tennis
			state.actions.loadTennis();
			state.actions.loadTennis_Player();
			//nascar
			state.actions.loadNascar();
			state.actions.loadNascar_driver_Stats();
			//soccer
			state.actions.loadSoccer();
			state.actions.loadSoccer_tournament();
			state.actions.loadSoccer_team_stats();
			state.actions.loadSoccer_player_stats();
			state.actions.loadStats_soccer_goalkeeper();
			//ncaa football
			state.actions.loadNcaa_football();
			state.actions.loadStatsNcaa_Football_team();
			state.actions.loadStats_deffensive_player_ncaa_foot();
			state.actions.loadStats_offensive_player_ncaa_foot();
			state.actions.loadStats_return_player_ncaa_foot();
			state.actions.loadStats_punting_player_ncaa_foot();
			state.actions.loadStats_Kiking_player_ncaa_foot();
			//ncaa basket
			state.actions.loadNcaa_basket();
			state.actions.loadNcaa_basket_PY_Stats();
			state.actions.loadNcaa_basket_team_Stats();
			//ncaa baseball
			state.actions.loadNcaa_baseball();
			state.actions.loadNcaa_baseball_stats_player();
			state.actions.loadNcaa_baseball_stats_team();
			//name
			state.actions.changename();
			//logos
			state.actions.loadLogos_nfl();
			state.actions.loadLogos_nba();
			state.actions.loadLogos_wnba();
			state.actions.loadLogos_nhl();
			state.actions.loadLogos_mlb();
			state.actions.loadLogos_soccer();
			state.actions.logos_ncaa_basketball();
			state.actions.logos_ncaa_baseball();
			state.actions.logos_ncaa_football();
			state.actions.loadLogos_canadian_football();
			state.actions.logos_baseball_mexico();
			//loadmoto_gp
			state.actions.loadmoto_gp();
			state.actions.load_stats_driver_moto_gp();
			// odds to win
			state.actions.loadOdds_to_win();
			//props
			state.actions.loadProps();
			state.actions.load_Add_Props();
			//casinos
			state.actions.loadCasinos();
			//injuries
			state.actions.injuries();
			//futures
			state.actions.futures();

		}, []);

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
