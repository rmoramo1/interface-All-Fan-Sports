const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			nflGames: [],
			casinos: [],
			status: ["Pending", "Cancelled", "In Progress", "Finished"],
			//teams
			nfl_teams: [
				"Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills", "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs", "Las Vegas Raiders", "Los Angeles Chargers", "Los Angeles Rams", "Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Giants", "New York Jets", "Philadelphia Eagles", "Pittsburgh Steelers", "San Francisco 49ers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Football Team"
			],
			nba_teams: [
				"Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers", "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizards"
			],
			mlb_teams: [
				"Arizona Diamondbacks", "Atlanta Braves", "Baltimore Orioles", "Boston Red Sox", "Chicago Cubs", "Chicago White Sox", "Cincinnati Reds", "Cleveland Indians", "Colorado Rockies", "Detroit Tigers", "Houston Astros", "Kansas City Royals", "Los Angeles Angels", "Los Angeles Dodgers", "Miami Marlins", "Milwaukee Brewers", "Minnesota Twins", "New York Mets", "New York Yankees", "Oakland Athletics", "Philadelphia Phillies", "Pittsburgh Pirates", "San Diego Padres", "San Francisco Giants", "Seattle Mariners", "St. Louis Cardinals", "Tampa Bay Rays", "Texas Rangers", "Toronto Blue Jays", "Washington Nationals"
			],
			nhl_teams:[
				"Boston Bruins","Buffalo Sabres","Detroit Red Wings","Montreal Canadiens","Ottawa Senators","Tampa Bay Lightning","Toronto Maple Leafs","Carolina Hurricanes","Columbus Blue Jackets","New Jersey Devils","New York Islanders","New York Rangers","Philadelphia Flyers","Pittsburgh Penguins","Washington Capitals","Arizona Coyotes","Chicago Blackhawks","Colorado Avalanche","Dallas Stars","Minnesota Wild","Nashville Predators","St. Louis Blues","Winnipeg Jets","Anaheim Ducks","Calgary Flames","Edmonton Oilers","Los Angeles Kings","San Jose Sharks","Seattle Kraken","Vancouver Canucks","Vegas Golden Knights","Florida Panthers"
			],
			//nfl
			nfl_stats_teams: [],
			stats_offensive_player_nfl: [],
			stats_deff_player_nfl: [],
			stats_ret_player_nfl: [],
			stats_put_player_nfl: [],
			stats_kik_player_nfl: [],
			//nba
			nbaGames: [],
			nba_stats_teams: [],
			nba_stats_player: [],
			//mbl
			mlbGames:[],
			mlb_stats_teams: [],
			mlb_stats_player: [],
			//nhl
			nhlGames:[],
			nhl_stats_teams: [],
			nhl_stats_player: [],
			//box
			box_fight:[],
			boxer_stats: [],
			//mma
			mma_fight:[],
			mma_stats: [],
			//GOLF
			golf:[],
			golfer_stats: [],
			//Nascar
			nascar:[],
			nascar_driver_stats: [],
			//soccer
			soccer:[],
			soccer_tournament:[],
			soccer_stats_teams:[],
			soccer_stats_player:[],
			tournaments:[],
			//name temporal
			username_temp: "",

		},
		actions: {
			loadNflGames: async () => {
				const url = "https://interfaceroy.herokuapp.com/nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nflGames: results });
			},
			loadStatsNFL: async () => {
				const url = "https://interfaceroy.herokuapp.com	/stats_nfl_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nfl_stats_teams: results });
			},
			loadStatsNFL_Off_player: async () => {
				const url = "https://interfaceroy.herokuapp.com	/stats_offensive_player_nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_offensive_player_nfl: results });
			},
			loadStats_deff_player_nfl: async () => {
				const url = "https://interfaceroy.herokuapp.com/stats_defensive_player_nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_deff_player_nfl: results });
			},
			loadStats_ret_player_nfl: async () => {
				const url = "https://interfaceroy.herokuapp.com/stats_returning_player_nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_ret_player_nfl: results });
			},
			loadStats_put_player_nfl: async () => {
				const url = "https://interfaceroy.herokuapp.com/stats_punting_player_nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_put_player_nfl: results });
			},
			loadStats_kik_player_nfl: async () => {
				const url = "https://interfaceroy.herokuapp.com/stats_kiking_player_nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_kik_player_nfl: results });
			},
			//nba
			loadGamesNBA: async () => {
				const url = "https://interfaceroy.herokuapp.com/nba";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nbaGames: results });
			},
			loadStatsNBA: async () => {
				const url = "https://interfaceroy.herokuapp.com/stats_nba_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nba_stats_teams: results });
			},
			loadStats_player_NBA: async () => {
				const url = "https://interfaceroy.herokuapp.com/stats_nba_player";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nba_stats_player: results });
			},
			//mlb
			loadGamesMLB: async () => {
				const url = "https://interfaceroy.herokuapp.com/mlb";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ mlbGames: results });
			},
			loadStatsMLB: async () => {
				const url = "https://interfaceroy.herokuapp.com/stats_mlb_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ mlb_stats_teams: results });
			},
			loadStats_player_MLB: async () => {
				const url = "https://interfaceroy.herokuapp.com/stats_mlb_player";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ mlb_stats_player: results });
			},
			//nhl
			loadGamesNHL: async () => {
				const url = "https://interfaceroy.herokuapp.com/nhl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nhlGames: results });
			},
			loadStatsNHL: async () => {
				const url = "https://interfaceroy.herokuapp.com/stats_nhl_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nhl_stats_teams: results });
			},
			loadStats_player_NHL: async () => {
				const url = "https://interfaceroy.herokuapp.com/stats_nhl_player";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nhl_stats_player: results });
			},
			//box
			loadBox_Fight: async () => {
				const url = "https://interfaceroy.herokuapp.com/boxeo";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ box_fight: results });
			},
			loadBoxer_Stats: async () => {
				const url = "https://interfaceroy.herokuapp.com/stats_box_fighter";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ boxer_stats: results });
			},
			//MMA
			loadMMA_Fight: async () => {
				const url = "https://interfaceroy.herokuapp.com/mma";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ mma_fight: results });
			},
			loadMMA_Stats: async () => {
				const url = "https://interfaceroy.herokuapp.com/stats_mma_fighter";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ mma_stats: results });
			},
			//GOLF
			loadGOLF: async () => {
				const url = "https://interfaceroy.herokuapp.com/golf";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ golf: results });
			},
			loadGOLFER_Stats: async () => {
				const url = "https://interfaceroy.herokuapp.com/golfer";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ golfer_stats: results });
			},
			//nascar
			loadNascar: async () => {
				const url = "https://interfaceroy.herokuapp.com/nascar";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nascar: results });
			},
			loadNascar_driver_Stats: async () => {
				const url = "https://interfaceroy.herokuapp.com/nascar_drivers";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nascar_driver_stats: results });
			},
			//soccer_tournament
			loadSoccer: async () => {
				const url = "https://interfaceroy.herokuapp.com/soccer";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ soccer: results });
			},
			loadSoccer_tournament: async () => {
				const url = "https://interfaceroy.herokuapp.com/soccer_tournament";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ soccer_tournament: results });
			},
			loadSoccer_team_stats: async () => {
				const url = "https://interfaceroy.herokuapp.com/stats_soccer_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ soccer_stats_teams: results });
			},
			loadSoccer_player_stats: async () => {
				const url = "https://interfaceroy.herokuapp.com/stats_soccer_player";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ soccer_stats_player: results });
			},
			loadTournaments: async () => {
				const url = "https://interfaceroy.herokuapp.com/soccer_tournament";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ tournaments: results });
			},
			
			//casinos
			loadCasinos: async () => {
				const url = "https://interfaceroy.herokuapp.com/casinos";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ casinos: results });
			},
			//name
			changename: username => {
				setStore({ username_temp: username });
			}
		}
	};
};

export default getState;
