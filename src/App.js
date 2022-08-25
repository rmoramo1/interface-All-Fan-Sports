import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

/* pages*/
import { Login } from "./pages/login";
import { Faqs } from "./pages/faqs";
import { Glosary } from "./pages/glosary";
import { Contact } from "./pages/contact";
import { Admin } from "./pages/admin";
import { Logos_page } from "./pages/logos_page";
import { Casinos_page } from "./pages/casinos_page";
import { ODDS_page } from "./pages/odds_page";
import { Edith_ODD } from "./odds/edith_odds";
import { Props_page } from "./pages/props_page";
import { Edith_PROPS } from "./props/edith_props";
import { Edith_Add_PROPS } from "./add_props/edith_add_props";
import { List_Props } from "./pages/list_props";
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
import { List_NFL_Standings } from "./nfl/standings/list_nfl_standings";
import { Edit_Team_Nfl_Standings } from "./nfl/standings/edith_standings_nfl_team";
//canadian foot
import { Edtih_Game_Canna_Foot } from "./canadian_football/edtihGame_canna_foot";
import { Edit_Team_Canadian_Foot_Stas } from "./canadian_football/stats/edith_stats_canadian_foot_team";
import { List_Canadian_Foot_Stats } from "./canadian_football/stats/list_canadian_foot_stats";
import { List_Canadian_Foot_Standings } from "./canadian_football/standings/list_canadian_foot_standings";
import { Edit_Team_Canadian_Foot_Standings } from "./canadian_football/standings/edith_standings_canadian_team";
import { List_Stats_Canadian_Foot_PY } from "./canadian_football/player_off_stats/list_stats_canadian_foot_py";
import { Edit_Stats_Off_Player_Canadian_Foot } from "./canadian_football/player_off_stats/edit_stats_off_player_canadian_foot";
import { Edit_Stats_deff_player_canadian_foot } from "./canadian_football/player_deff_stats/edit_stats_deff_player_canadian_foot";
import { Edit_Stats_kik_player_canadian_foot } from "./canadian_football/player_kik_stats/edit_stats_kik_player_canadian_foot";
import { Edit_Stats_ret_player_canadian_foot } from "./canadian_football/returning_py_stats.js/edit_stats_ret_player_canadian_foot";
import { Edit_Stats_put_player_canadian_foot } from "./canadian_football/player_punting_stats/edit_stats_put_player_canadian_foot";
//mlb
import { EdithGames_mlb } from "./mlb/mlb_game/edtihGame_MLB";
import ListGameMLB from "./nhl/nhl_game/listGameNHL";
import { List_MLB_Stats } from "./mlb/mlb_team_stats/list_mlb_stats";
import { Edit_Stats_MLB_Team } from "./mlb/mlb_team_stats/edith_stats_mlb_team";
import { Edit_stats_player_mlb } from "./mlb/mlb_py_stats/edit_stats_player_mlb"
import { List_Stats_MLB_PY } from "./mlb/mlb_py_stats/list_stats_mlb_py";
//mx baseball
import { Edith_Games_MX_Base } from "./mexican_baseball/mx_base_game/edtih_game_mx_base";
import { List_MX_BASE_Stats } from "./mexican_baseball/mx_base_team_stats/list_mx_base_stats";
import { Edit_Stats_MX_Base_Team } from "./mexican_baseball/mx_base_team_stats/edith_stats_mx_base_team";
import { Edit_stats_player_mx_baseball } from "./mexican_baseball/mx_base_py_stats/edit_stats_player_mx_base";
import { List_Stats_MX_BASE_PY } from "./mexican_baseball/mx_base_py_stats/list_stats_mx_base_py";
//nba
import { EdithGames_nba } from "./nba/nba_game/edtihGame_nba";
import { List_Stats_NBA_PY } from "./nba/nba_py_stats/list_stats_nba_py";
import { Edit_Stats_NBA_Team } from "./nba/nba_team_stats/edith_stats_nba_team";
import { Edit_stats_player_nba } from "./nba/nba_py_stats/edit_stats_player_nba"
import ListGameNBA from "./nba/nba_game/listGameNBA";
import { List_NBA_Stats } from "./nba/nba_team_stats/list_nba_stats";
//wnba
import { EdithGames_wnba } from "./wnba/wnba_game/edtihGame_wnba";
import { Edit_Stats_WNBA_Team } from "./wnba/wnba_team_stats/edith_stats_wnba_team";
import { List_WNBA_Stats } from "./wnba/wnba_team_stats/list_wnba_stats";
import { Edit_stats_player_wnba } from "./wnba/wnba_py_stats/edit_stats_player_wnba";
import { List_Stats_WNBA_PY } from "./wnba/wnba_py_stats/list_stats_wnba_py";
import { Edith_Logo_wnba } from "./logos/wnba/edith_logo_wnba";

//nhl
import { EdithGames_nhl } from "./nhl/nhl_game/edtihGame_NHL"
import { List_NHL_Stats } from "./nhl/nhl_team_stats/list_nhl_stats";
import { Edit_Stats_NHL_Team } from "./nhl/nhl_team_stats/edith_stats_nhl_team";
import { Edit_stats_player_nhl } from "./nhl/nhl_py_stats/edit_stats_player_nhl";
import { List_Stats_NHL_PY } from "./nhl/nhl_py_stats/list_stats_nhl_py";
import { List_Stats_NHL_Goalkeeper } from "./nhl/nhl_goalkeeper_stats/list_stats_nhl_goalkeeper";
import { Edit_stats_Goalkeeper_nhl } from "./nhl/nhl_goalkeeper_stats/edit_stats_goalkeeper_nhl";
//box
import { EdithFight } from "./box/fight/edtihFight";
import ListFights_Box from "./box/fight/listFights_box";
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
//logo
import { Edith_Logo_nfl } from "./logos/nfl/edith_logo_nfl";
import { Edith_Logo_nba } from "./logos/nba/edith_logo_nba";
import { Edith_Logo_nhl } from "./logos/nhl/edith_logo_nhl";
import { Edith_Logo_mlb } from "./logos/mlb/edith_logo_mlb";
import { Edith_Logo_soccer } from "./logos/soccer/edith_logo_soccer";
import { Edith_Logo_NCAA_BASKET } from "./logos/ncaa_basketball/edith_logo_ncaa_basket";
import { Edith_Logo_NCAA_BASEBALL } from "./logos/ncaa_baseball/edith_logo_ncaa_baseball";
import { Edith_Logo_NCAA_FOOTBALL } from "./logos/ncaa_football/edith_logo_ncaa_football";
import { Edith_Logo_Canadian_Football } from "./logos/canadian_football/edith_logo_canadian_logo";
//ncaa football
import { EdithGames_Ncaa_football } from "./ncaa_football/game/edtihGame_ncaa_footbal";
import { List_Ncaa_Fot_Stats } from "./ncaa_football/team_stats/list_ncaa_fot_stats";
import { Edit_Team_Ncaa_Fot_Stas } from "./ncaa_football/team_stats/edith_stats_ncaa_fot_team";
import { List_Stats_Ncaa_py } from "./ncaa_football/list_stats_ncaa_foot_py"
import { Single_PY_NCAA_FOOT_DEFF_STATS } from "./ncaa_football/player_deff_stats/single_py_ncaa_foot_deff_stats";
import { Stats_kik_player_ncaa_football } from "./ncaa_football/player_kik_stats/edit_stats_kik_player_ncaa_foot"
import { Edith_stats_off_player_ncaa_foot } from "./ncaa_football/player_off_stats/edit_stats_off_player_ncaa_foot";
import { Edith_Stats_deff_player_ncaa_foot } from "./ncaa_football/player_deff_stats/edit_stats_deff_player_ncaa_foot";
import { Edith_Stats_put_player_ncaa_foot } from "./ncaa_football/player_punting_stats/edit_stats_put_player_ncaa_foot";
import { Edith_Stats_ret_player_ncaa_foot } from "./ncaa_football/returning_py_stats/edit_stats_ret_player_nca_foot";
//ncaa basketball
import { EdithGames_ncaa_basket } from "./ncaa_basketball/game/edtihGame_ncaa_basket";
import { List_Stats_Ncaa_basket_PY } from "./ncaa_basketball/ncaa_basketballl_py_stats/list_stats_ncaa_basket_py";
import { Edit_stats_player_ncaa_basket } from "./ncaa_basketball/ncaa_basketballl_py_stats/edit_stats_player_ncaa_basket";
import { List_NCAA_BASKETBALL_Stats } from "./ncaa_basketball/ncaa_basket_team_stats/list_ncaa_basket_stats";
import { Edit_Stats_NCAA_BASKETBALL_Team } from "./ncaa_basketball/ncaa_basket_team_stats/edith_stats_ncaa_basket_team";

//ncaa baseball
import { List_Stats_NCAA_BASEBALL_PY } from "./ncaa_baseball/ncaa_baseball_py_stats/list_stats_baseball_py";
import ListGame_Ncaa_Baseball from "./ncaa_baseball/game/listGame_Ncaa_Baseball";
import { Edit_stats_player_ncaa_baseball } from "./ncaa_baseball/ncaa_baseball_py_stats/edit_stats_player_ncaa_baseball";
import { EdithGames_Ncaa_Baseball } from "./ncaa_baseball/game/edtihGame_Ncaa_Baseball";
import { List_NCAA_BASEBALL_Stats } from "./ncaa_baseball/ncaa_baseball_team_stats/list_ncaa_baseball_stats";
import { Edit_Stats_NCAA_BASEBALL_Team } from "./ncaa_baseball/ncaa_baseball_team_stats/edith_stats_ncaa_baseball_team"
//moto gp
import { Edtih_Moto_GP } from "./moto_gp/moto_gp/edtihMoto_GP";
import { Edit_stats_Moto_GP_Driver } from "./moto_gp/moto_gp_drivers/edit_stats_moto_gp_driver";
import { List_Moto_GP_Driver } from "./moto_gp/moto_gp_drivers/list_stats_moto_gp_driver";
//casino
import { Edith_Casino } from "./casino/edith_casino";
//injuries
import { Edith_Injuries } from "./injuries/edith_injuries";
import { Injuries_page } from "./pages/injuries_page";
//futures
import { Futures_page } from "./pages/futures_page";
import { Edith_Future } from "./future/edith_future";
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
					<Route exact path="/casinos_page" component={Casinos_page} />
					<Route exact path="/odds_page" component={ODDS_page} />
					<Route exact path="/props_page" component={Props_page} />
					<Route exact path="/injuries_page" component={Injuries_page} />
					<Route exact path="/futures_page" component={Futures_page} />
					<Route exact path="/admin" component={Admin} />
					<Route exact path="/edith_casino/:theid" component={Edith_Casino} />
					<Route exact path="/edith_logo_nfl/:theid" component={Edith_Logo_nfl} />
					<Route exact path="/edith_logo_nba/:theid" component={Edith_Logo_nba} />
					<Route exact path="/edith_logo_nhl/:theid" component={Edith_Logo_nhl} />
					<Route exact path="/edith_logo_mlb/:theid" component={Edith_Logo_mlb} />
					<Route exact path="/edith_logo_wnba/:theid" component={Edith_Logo_wnba} />
					<Route exact path="/edith_logo_soccer/:theid" component={Edith_Logo_soccer} />
					<Route exact path="/edith_logo_ncaa_basket/:theid" component={Edith_Logo_NCAA_BASKET} />
					<Route exact path="/edith_logo_ncaa_baseball/:theid" component={Edith_Logo_NCAA_BASEBALL} />
					<Route exact path="/edith_logo_ncaa_football/:theid" component={Edith_Logo_NCAA_FOOTBALL} />
					<Route exact path="/edith_logo_canadian_logo/:theid" component={Edith_Logo_Canadian_Football} />
					<Route exact path="/allGames" component={AllGames} />
					<Route exact path="/logos" component={Logos_page} />
					<Route exact path="/edtihGame/:theid" component={EdithGames} />
					<Route exact path="/edith_future/:theid" component={Edith_Future} />
					<Route exact path="/edith_odds/:theid" component={Edith_ODD} />
					<Route exact path="/edith_props/:theid" component={Edith_PROPS} />
					<Route exact path="/edith_add_props/:theid" component={Edith_Add_PROPS} />
					<Route exact path="/edith_injuries/:theid" component={Edith_Injuries} />
					<Route exact path="/edtihGame_MLB/:theid" component={EdithGames_mlb} />
					<Route exact path="/edtih_game_mx_base/:theid" component={Edith_Games_MX_Base} />
					<Route exact path="/edtihGame_Ncaa_Baseball/:theid" component={EdithGames_Ncaa_Baseball} />
					<Route exact path="/list_stats_canadian_foot_py" component={List_Stats_Canadian_Foot_PY} />
					<Route exact path="/edith_tournaments/:theid" component={Edit_Tournaments} />
					<Route exact path="/edtihGame_nba/:theid" component={EdithGames_nba} />
					<Route exact path="/edtihGame_wnba/:theid" component={EdithGames_wnba} />
					<Route exact path="/edtihGame_NHL/:theid" component={EdithGames_nhl} />
					<Route exact path="/edtihGame_Soccer/:theid" component={EdithGames_Soccer} />
					<Route exact path="/edtihFight/:theid" component={EdithFight} />
					<Route exact path="/edtihFight_mma/:theid" component={EdithFight_mma} />
					<Route exact path="/edtihGolf/:theid" component={EdithGolf} />
					<Route exact path="/edtihNascar/:theid" component={EditNascar} />
					<Route exact path="/edtihMoto_GP/:theid" component={Edtih_Moto_GP} />
					<Route exact path="/edit_stats_moto_gp_driver/:theid" component={Edit_stats_Moto_GP_Driver} />
					<Route exact path="/edtihGame_ncaa_footbal/:theid" component={EdithGames_Ncaa_football} />
					<Route exact path="/edith_stats_ncaa_fot_team/:theid" component={Edit_Team_Ncaa_Fot_Stas} />
					<Route exact path="/edith_stats_ncaa_baseball_team/:theid" component={Edit_Stats_NCAA_BASEBALL_Team} />
					<Route exact path="/edtihGame_ncaa_basket/:theid" component={EdithGames_ncaa_basket} />
					<Route exact path="/list_nfl_stats" component={List_NFL_Stats} />
					<Route exact path="/list_canadian_foot_stats" component={List_Canadian_Foot_Stats} />
					<Route exact path="/list_stats_nfl_py" component={List_Stats_NFL_PY} />
					<Route exact path="/list_nfl_standings" component={List_NFL_Standings} />
					<Route exact path="/list_canadian_foot_standings" component={List_Canadian_Foot_Standings} />
					<Route exact path="/list_stats_nba_py" component={List_Stats_NBA_PY} />
					<Route exact path="/list_stats_wnba_py" component={List_Stats_WNBA_PY} />
					<Route exact path="/list_stats_mlb_py" component={List_Stats_MLB_PY} />
					<Route exact path="/list_stats_mx_base_py" component={List_Stats_MX_BASE_PY} />
					<Route exact path="/list_stats_nhl_py" component={List_Stats_NHL_PY} />
					<Route exact path="/list_stats_nhl_goalkeeper" component={List_Stats_NHL_Goalkeeper} />
					<Route exact path="/list_soccer_stats" component={List_Soccer_Stats} />
					<Route exact path="/list_stats_soccer_py" component={List_Stats_Soccer_PY} />
					<Route exact path="/list_stats_fighter_box" component={List_Stats_Fighter_Box} />
					<Route exact path="/list_stats_fighter_mma" component={List_Stats_Fighter_mma} />
					<Route exact path="/list_stats_golfer" component={List_Stats_Golfer} />
					<Route exact path="/list_stats_nascar_driver" component={List_Nascar_Driver} />
					<Route exact path="/list_stats_moto_gp_driver" component={List_Moto_GP_Driver} />
					<Route exact path="/list_stats_ncaa_basket_py" component={List_Stats_Ncaa_basket_PY} />
					<Route exact path="/list_ncaa_basket_stats" component={List_NCAA_BASKETBALL_Stats} />
					<Route exact path="/list_nba_stats" component={List_NBA_Stats} />
					<Route exact path="/list_wnba_stats" component={List_WNBA_Stats} />
					<Route exact path="/list_mlb_stats" component={List_MLB_Stats} />
					<Route exact path="/list_nhl_stats" component={List_NHL_Stats} />
					<Route exact path="/listGameNBA" component={ListGameNBA} />
					<Route exact path="/listGameNHL" component={ListGameMLB} />
					<Route exact path="/list_mx_base_stats" component={List_MX_BASE_Stats} />
					<Route exact path="/listGame_Ncaa_Baseball" component={ListGame_Ncaa_Baseball} />
					<Route exact path="/list_ncaa_baseball_stats" component={List_NCAA_BASEBALL_Stats} />
					<Route exact path="/listFights_box" component={ListFights_Box} />
					<Route exact path="/list_tournaments" component={List_Tournaments} />
					<Route exact path="/list_ncaa_fot_stats" component={List_Ncaa_Fot_Stats} />
					<Route exact path="/list_stats_ncaa_foot_py" component={List_Stats_Ncaa_py} />
					<Route exact path="/list_stats_baseball_py" component={List_Stats_NCAA_BASEBALL_PY} />
					<Route exact path="/single_py_ncaa_foot_deff_stats/:theid" component={Single_PY_NCAA_FOOT_DEFF_STATS} />
					<Route exact path="/edit_stats_off_player_ncaa_foot/:theid" component={Edith_stats_off_player_ncaa_foot} />
					<Route exact path="/edit_stats_kik_player_ncaa_foot/:theid" component={Stats_kik_player_ncaa_football} />
					<Route exact path="/edith_stats_ncaa_basket_team/:theid" component={Edit_Stats_NCAA_BASKETBALL_Team} />

					<Route exact path="/edith_stats_nfl_team/:theid" component={Edit_Team_Nfl_Stas} />
					<Route exact path="/edith_stats_canadian_foot_team/:theid" component={Edit_Team_Canadian_Foot_Stas} />
					<Route exact path="/edith_standings_nfl_team/:theid" component={Edit_Team_Nfl_Standings} />
					<Route exact path="/edith_standings_canadian_team/:theid" component={Edit_Team_Canadian_Foot_Standings} />
					<Route exact path="/edtihGame_canna_foot/:theid" component={Edtih_Game_Canna_Foot} />
					<Route exact path="/edith_stats_nba_team/:theid" component={Edit_Stats_NBA_Team} />
					<Route exact path="/edith_stats_wnba_team/:theid" component={Edit_Stats_WNBA_Team} />
					<Route exact path="/edith_stats_mlb_team/:theid" component={Edit_Stats_MLB_Team} />
					<Route exact path="/edith_stats_mx_base_team/:theid" component={Edit_Stats_MX_Base_Team} />
					<Route exact path="/edith_stats_nhl_team/:theid" component={Edit_Stats_NHL_Team} />
					<Route exact path="/edith_stats_soccer_team/:theid" component={Edit_Stats_Soccer_Team} />
					<Route exact path="/edit_stats_player_mlb/:theid" component={Edit_stats_player_mlb} />
					<Route exact path="/edit_stats_player_mx_base/:theid" component={Edit_stats_player_mx_baseball} />
					<Route exact path="/edit_stats_player_nba/:theid" component={Edit_stats_player_nba} />
					<Route exact path="/edit_stats_player_wnba/:theid" component={Edit_stats_player_wnba} />
					<Route exact path="/edit_stats_player_nhl/:theid" component={Edit_stats_player_nhl} />
					<Route exact path="/edit_stats_goalkeeper_nhl/:theid" component={Edit_stats_Goalkeeper_nhl} />
					<Route exact path="/edit_stats_fighter_box/:theid" component={Edit_stats_Fighter_box} />
					<Route exact path="/edit_stats_fighter_mma/:theid" component={Edit_stats_Fighter_mma} />
					<Route exact path="/edit_stats_golfer/:theid" component={Edit_stats_Golfer} />
					<Route exact path="/edit_stats_nascar_driver/:theid" component={Edit_stats_Nascar_Driver} />
					<Route exact path="/edit_stats_player_ncaa_basket/:theid" component={Edit_stats_player_ncaa_basket} />
					<Route exact path="/edit_stats_player_ncaa_baseball/:theid" component={Edit_stats_player_ncaa_baseball} />
					<Route exact path="/edit_stats_player_soccer/:theid" component={Edit_stats_player_soccer} />
					<Route exact path="/edit_stats_deff_player_nfl/:theid" component={Stats_deff_player_nfl} />
					<Route exact path="/edit_stats_off_player_nfl/:theid" component={Stats_off_player_nfl} />
					<Route exact path="/edit_stats_ret_player_canadian_foot/:theid" component={Edit_Stats_ret_player_canadian_foot} />
					<Route exact path="/edit_stats_put_player_canadian_foot/:theid" component={Edit_Stats_put_player_canadian_foot} />
					<Route exact path="/edit_stats_off_player_canadian_foot/:theid" component={Edit_Stats_Off_Player_Canadian_Foot} />
					<Route exact path="/edit_stats_deff_player_canadian_foot/:theid" component={Edit_Stats_deff_player_canadian_foot} />
					<Route exact path="/edit_stats_kik_player_canadian_foot/:theid" component={Edit_Stats_kik_player_canadian_foot} />
	
					<Route exact path="/edit_stats_ret_player_nfl/:theid" component={Stats_ret_player_nfl} />
					<Route exact path="/edit_stats_put_player_nfl/:theid" component={Stats_put_player_nfl} />
					<Route exact path="/edit_stats_kik_player_nfl/:theid" component={Stats_kik_player_nfl} />
					<Route exact path="/edit_stats_deff_player_ncaa_foot/:theid" component={Edith_Stats_deff_player_ncaa_foot} />
					<Route exact path="/edit_stats_put_player_ncaa_foot/:theid" component={Edith_Stats_put_player_ncaa_foot} />
					<Route exact path="/edit_stats_ret_player_nca_foot/:theid" component={Edith_Stats_ret_player_ncaa_foot} />
					<Route exact path="/createGames_NFL" component={CreateGames_NFL} />
					<Route exact path="/list_props" component={List_Props} />
					<Route><h1>404</h1> </Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
