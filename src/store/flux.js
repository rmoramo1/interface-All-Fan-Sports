const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			nflGames: [],
			casinos: [],
			status: ["Pending", "Cancelled", "In Progress", "Finished"],
			nfl_teams: [
				"Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills", "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs", "Las Vegas Raiders", "Los Angeles Chargers", "Los Angeles Rams", "Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Giants", "New York Jets", "Philadelphia Eagles", "Pittsburgh Steelers", "San Francisco 49ers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Football Team"
			],
			nba_teams: [
				"Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers", "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizards"
			],
			mlb_teams: ["Arizona Diamondbacks", "Atlanta Braves", "Baltimore Orioles", "Boston Red Sox", "Chicago Cubs", "Chicago White Sox", "Cincinnati Reds", "Cleveland Indians", "Colorado Rockies", "Detroit Tigers", "Houston Astros", "Kansas City Royals", "Los Angeles Angels", "Los Angeles Dodgers", "Miami Marlins", "Milwaukee Brewers", "Minnesota Twins", "New York Mets", "New York Yankees", "Oakland Athletics", "Philadelphia Phillies", "Pittsburgh Pirates", "San Diego Padres", "San Francisco Giants", "Seattle Mariners", "St. Louis Cardinals", "Tampa Bay Rays", "Texas Rangers", "Toronto Blue Jays", "Washington Nationals"],
			nfl_stats_teams: [],
			stats_offensive_player_nfl: [],
			stats_deff_player_nfl: [],
			stats_ret_player_nfl: [],
			stats_put_player_nfl: [],
			stats_kik_player_nfl: [],
			//nba
			nbaGames: [],
			nba_stats_teams: [],
			nba_stats_player: []

		},
		actions: {
			loadNglGames: async () => {
				const url = "https://interfaceroy.herokuapp.com	/nfl";
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
				console.log(results)
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
			loadCasinos: async () => {
				const url = "https://interfaceroy.herokuapp.com/casinos";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ casinos: results });
			},
		}
	};
};

export default getState;
