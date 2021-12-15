import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

/* pages*/
import { Login } from "./pages/login";
import { Faqs } from "./pages/faqs";
import { Glosary } from "./pages/glosary";
import { Contact } from "./pages/contact";
import { Admin } from "./pages/admin";
//nfl
import { EdithGames } from "./nfl/edtihGame";
import { List_NFL_Stats } from "./nfl/stats/list_nfl_stats";
import { Edit_Team_Nfl_Stas } from "./nfl/stats/edith_stats_nfl_team";
import { Stats_off_player_nfl } from "./nfl/player_off_stats/edit_stats_off_player_nfl";
import { Stats_deff_player_nfl } from "./nfl/player_deff_stats/edit_stats_deff_player_nfl"
import { Stats_ret_player_nfl } from "./nfl/returning_py_stats.js/edit_stats_ret_player_nfl";
import { Stats_put_player_nfl } from "./nfl/player_punting_stats/edit_stats_put_player_nfl";
import { Stats_kik_player_nfl } from "./nfl/player_kik_stats/edit_stats_kik_player_nfl";
import { CreateGames_NFL } from "./nfl/createGames_NFL";
import { List_Stats_NFL_PY } from "./nfl/player_off_stats/list_stats_nfl_py";
//mlb
import { EdithGames_mlb } from "./mlb/mlb_game/edtihGame_MLB";
import ListGameMLB from "./nhl/nhl_game/listGameNHL";
import { List_MLB_Stats } from "./mlb/mlb_team_stats/list_mlb_stats";
import { Edit_Stats_MLB_Team } from "./mlb/mlb_team_stats/edith_stats_mlb_team";
import { Edit_stats_player_mlb } from "./mlb/mlb_py_stats/edit_stats_player_mlb"
import { List_Stats_MLB_PY } from "./mlb/mlb_py_stats/list_stats_mlb_py";
//nba
import { EdithGames_nba } from "./nba/nba_game/edtihGame_nba";
import { List_Stats_NBA_PY } from "./nba/nba_py_stats/list_stats_nba_py";
import { Edit_Stats_NBA_Team } from "./nba/nba_team_stats/edith_stats_nba_team";
import { Edit_stats_player_nba } from "./nba/nba_py_stats/edit_stats_player_nba"
import ListGameNBA from "./nba/nba_game/listGameNBA";
import { List_NBA_Stats } from "./nba/nba_team_stats/list_nba_stats";
//nhl
import { EdithGames_nhl } from "./nhl/nhl_game/edtihGame_NHL"
import { List_NHL_Stats } from "./nhl/nhl_team_stats/list_nhl_stats";
import { Edit_Stats_NHL_Team } from "./nhl/nhl_team_stats/edith_stats_nhl_team";
import { Edit_stats_player_nhl } from "./nhl/nhl_py_stats/edit_stats_player_nhl";
import { List_Stats_NHL_PY } from "./nhl/nhl_py_stats/list_stats_nhl_py";
//box
import { EdithFight } from "./box/fight/edtihFight";
import { List_Stats_Fighter_Box } from "./box/boxer_stats/list_stats_fighter_box";
import { Edit_stats_Fighter_box } from "./box/boxer_stats/edit_stats_fighter_box";
//mma
import { EdithFight_mma } from "./mma/fight_mma/edtihFight_mma";
import { List_Stats_Fighter_mma } from "./mma/mma_stats/list_stats_fighter_mma";
import { Edit_stats_Fighter_mma } from "./mma/mma_stats/edit_stats_fighter_mma"
//golf
import { EdithGolf } from "./golf/golf/edtihGolf";
import { List_Stats_Golfer } from "./golf/golfer_stats/list_stats_golfer";
import { Edit_stats_Golfer } from "./golf/golfer_stats/edit_stats_golfer";
//nascar
import { EditNascar } from "./nascar/nascar/edtihNascar";
import { List_Nascar_Driver } from "./nascar/nascar_drivers/list_stats_nascar_driver";
import { Edit_stats_Nascar_Driver } from "./nascar/nascar_drivers/edit_stats_nascar_driver";
//soocer
import { EdithGames_Soccer } from "./soccer/soccer_game/edtihGame_Soccer";
import { List_Soccer_Stats } from "./soccer/soccer_team_stats/list_soccer_stats";
import { Edit_Stats_Soccer_Team } from "./soccer/soccer_team_stats/edith_stats_soccer_team";
import { List_Stats_Soccer_PY } from "./soccer/soccer_py_stats/list_stats_soccer_py";
import { Edit_stats_player_soccer } from "./soccer/soccer_py_stats/edit_stats_player_soccer";
import { List_Tournaments } from "./soccer/tournament/list_tournaments";
import { Edit_Tournaments } from "./soccer/tournament/edith_tournaments";
//all
import { AllGames } from "./pages/allGames";
/*components*/
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/" component={Login} />
					<Route exact path="/faqs" component={Faqs} />
					<Route exact path="/glosary" component={Glosary} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/admin" component={Admin} />
					<Route exact path="/allGames" component={AllGames} />
					<Route exact path="/edtihGame/:theid" component={EdithGames} />
					<Route exact path="/edtihGame_MLB/:theid" component={EdithGames_mlb} />
					<Route exact path="/edith_tournaments/:theid" component={Edit_Tournaments} />
					<Route exact path="/edtihGame_nba/:theid" component={EdithGames_nba} />
					<Route exact path="/edtihGame_NHL/:theid" component={EdithGames_nhl} />
					<Route exact path="/edtihGame_Soccer/:theid" component={EdithGames_Soccer} />
					<Route exact path="/edtihFight/:theid" component={EdithFight_mma} />
					<Route exact path="/edtihFight_mma/:theid" component={EdithFight} />
					<Route exact path="/edtihGolf/:theid" component={EdithGolf} />
					<Route exact path="/edtihNascar/:theid" component={EditNascar} />
					<Route exact path="/list_nfl_stats" component={List_NFL_Stats} />
					<Route exact path="/list_stats_nfl_py" component={List_Stats_NFL_PY} />
					<Route exact path="/list_stats_nba_py" component={List_Stats_NBA_PY} />
					<Route exact path="/list_stats_mlb_py" component={List_Stats_MLB_PY} />
					<Route exact path="/list_stats_nhl_py" component={List_Stats_NHL_PY} />
					<Route exact path="/list_soccer_stats" component={List_Soccer_Stats} />
					<Route exact path="/list_stats_soccer_py" component={List_Stats_Soccer_PY} />
					<Route exact path="/list_stats_fighter_box" component={List_Stats_Fighter_Box} />
					<Route exact path="/list_stats_fighter_mma" component={List_Stats_Fighter_mma} />
					<Route exact path="/list_stats_golfer" component={List_Stats_Golfer} />
					<Route exact path="/list_stats_nascar_driver" component={List_Nascar_Driver} />
					<Route exact path="/list_nba_stats" component={List_NBA_Stats} />
					<Route exact path="/list_mlb_stats" component={List_MLB_Stats} />
					<Route exact path="/list_nhl_stats" component={List_NHL_Stats} />
					<Route exact path="/listGameNBA" component={ListGameNBA} />
					<Route exact path="/listGameNHL" component={ListGameMLB} />
					<Route exact path="/list_tournaments" component={List_Tournaments} />
					<Route exact path="/edith_stats_nfl_team/:theid" component={Edit_Team_Nfl_Stas} />
					<Route exact path="/edith_stats_nba_team/:theid" component={Edit_Stats_NBA_Team} />
					<Route exact path="/edith_stats_mlb_team/:theid" component={Edit_Stats_MLB_Team} />
					<Route exact path="/edith_stats_nhl_team/:theid" component={Edit_Stats_NHL_Team} />
					<Route exact path="/edith_stats_soccer_team/:theid" component={Edit_Stats_Soccer_Team} />
					<Route exact path="/edit_stats_player_mlb/:theid" component={Edit_stats_player_mlb} />
					<Route exact path="/edit_stats_player_nba/:theid" component={Edit_stats_player_nba} />
					<Route exact path="/edit_stats_player_nhl/:theid" component={Edit_stats_player_nhl} />
					<Route exact path="/edit_stats_fighter_box/:theid" component={Edit_stats_Fighter_box} />
					<Route exact path="/edit_stats_fighter_mma/:theid" component={Edit_stats_Fighter_mma} />
					<Route exact path="/edit_stats_golfer/:theid" component={Edit_stats_Golfer} />
					<Route exact path="/edit_stats_nascar_driver/:theid" component={Edit_stats_Nascar_Driver} />
					<Route exact path="/edit_stats_player_soccer/:theid" component={Edit_stats_player_soccer} />
					<Route exact path="/edit_stats_deff_player_nfl/:theid" component={Stats_deff_player_nfl} />
					<Route exact path="/edit_stats_off_player_nfl/:theid" component={Stats_off_player_nfl} />
					<Route exact path="/edit_stats_ret_player_nfl/:theid" component={Stats_ret_player_nfl} />
					<Route exact path="/edit_stats_put_player_nfl/:theid" component={Stats_put_player_nfl} />
					<Route exact path="/edit_stats_kik_player_nfl/:theid" component={Stats_kik_player_nfl} />
					<Route exact path="/createGames_NFL" component={CreateGames_NFL} />
					<Route><h1>404</h1> </Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
