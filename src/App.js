import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

/* pages*/

import { Home } from "./pages/home";
import { Faqs } from "./pages/faqs";
import { Glosary } from "./pages/glosary";
import { Contact } from "./pages/contact";
import { Admin } from "./pages/admin";
import {EdithGames} from "./nfl/edtihGame";
import { List_NFL_Stats } from "./nfl/stats/list_nfl_stats";
import { Edit_Team_Nfl_Stas } from "./nfl/stats/edith_stats_nfl_team";
import { Stats_off_player_nfl } from "./nfl/player_off_stats/edit_stats_off_player_nfl";
import{ Stats_deff_player_nfl} from "./nfl/player_deff_stats/edit_stats_deff_player_nfl"
import { Stats_ret_player_nfl } from "./nfl/returning_py_stats.js/edit_stats_ret_player_nfl";
import { Stats_put_player_nfl } from "./nfl/player_punting_stats/edit_stats_put_player_nfl";
import { Stats_kik_player_nfl } from "./nfl/player_kik_stats/edit_stats_kik_player_nfl";
import { CreateGames_NFL } from "./nfl/createGames_NFL";
import { List_Stats_NFL_PY } from "./nfl/player_off_stats/list_stats_nfl_py";
import {Edit_Stats_NBA_Team} from "./nba/nba_team_stats/edith_stats_nba_team"

import ListGameNBA from "./nba/nba_game/listGameNBA";

import { List_NBA_Stats } from "./nba/nba_team_stats/list_nba_stats";
import { AllGames } from "./pages/allGames";
/*components*/
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header/>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/home" component={Home}/>
					<Route exact path="/faqs" component={Faqs}/>
					<Route exact path="/glosary" component={Glosary}/>
					<Route exact path="/contact" component={Contact}/>
					<Route exact path="/admin" component={Admin}/>
					<Route exact path="/allGames" component={AllGames}/>
					<Route exact path="/edtihGame/:theid" component={EdithGames}/>
					<Route exact path="/list_nfl_stats" component={List_NFL_Stats}/>
					<Route exact path="/list_stats_nfl_py" component={List_Stats_NFL_PY}/>
					<Route exact path="/list_nba_stats" component={List_NBA_Stats}/>
					<Route exact path="/listGameNBA" component={ ListGameNBA}/>
					<Route exact path="/edith_stats_nfl_team/:theid" component={Edit_Team_Nfl_Stas}/>
					<Route exact path="/edith_stats_nba_team/:theid" component={Edit_Stats_NBA_Team}/>
					<Route exact path="/edit_stats_deff_player_nfl/:theid" component={Stats_deff_player_nfl}/>
					<Route exact path="/edit_stats_off_player_nfl/:theid" component={Stats_off_player_nfl}/>
					<Route exact path="/edit_stats_ret_player_nfl/:theid" component={Stats_ret_player_nfl}/>
					<Route exact path="/edit_stats_put_player_nfl/:theid" component={Stats_put_player_nfl}/>
					<Route exact path="/edit_stats_kik_player_nfl/:theid" component={Stats_kik_player_nfl}/>
					<Route exact path="/createGames_NFL" component={CreateGames_NFL}/>
					<Route><h1>404</h1> </Route>

				</Switch>
				<Footer/>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
