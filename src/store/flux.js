const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			nflGames:[],
			casinos:[],
			status: ["Pending","Cancelled", "In Progress", "Finished"],
			nfl_teams: [
				"Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills", "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs", "Las Vegas Raiders", "Los Angeles Chargers", "Los Angeles Rams", "Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Giants", "New York Jets", "Philadelphia Eagles", "Pittsburgh Steelers", "San Francisco 49ers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Football Team"
			],
			nfl_stats_teams:[]
		},
		actions: {
			loadNglGames: async () => {
				const url = "https://interfaceroy.herokuapp.com/nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nflGames: results });
			},
			loadStatsNFL: async () => {
				const url = "https://interfaceroy.herokuapp.com/stats_nfl_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nfl_stats_teams: results });
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
