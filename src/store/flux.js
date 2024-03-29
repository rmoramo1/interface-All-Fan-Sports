const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			nflGames: [],
			casinos: [],
			typeOfLine: [" ", "ALT"],
			status: ["Pending", "Cancelled", "In Progress", "Finished"],
			//teams
			nfl_teams: [
				"Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills", "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs", "Las Vegas Raiders", "Los Angeles Chargers", "Los Angeles Rams", "Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Giants", "New York Jets", "Philadelphia Eagles", "Pittsburgh Steelers", "San Francisco 49ers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Football Team"
			],
			canna_foot_teams: [
				"Winnipeg", "BC", "Calgary", "Saskatchewan", "Edmonton", "Toronto", "Montreal", "Hamilton", "Ottawa"
			],
			nba_teams: [
				"Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers", "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizards"
			],
			wnba_teams: [
				"Atlanta Dream", "Dallas Wings", "Chicago Sky", "Las Vegas Aces", "Connecticut Sun", "Los Angeles Sparks", "Indiana Fever", "Minnesota Lynx", "New York Liberty", "Phoenix Mercury", "Washington Mystics", "Seattle Storm"
			],
			mlb_teams: [
				"Arizona Diamondbacks", "Atlanta Braves", "Baltimore Orioles", "Boston Red Sox", "Chicago Cubs", "Chicago White Sox", "Cincinnati Reds", "Cleveland Guardians", "Colorado Rockies", "Detroit Tigers", "Houston Astros", "Kansas City Royals", "Los Angeles Angels", "Los Angeles Dodgers", "Miami Marlins", "Milwaukee Brewers", "Minnesota Twins", "New York Mets", "New York Yankees", "Oakland Athletics", "Philadelphia Phillies", "Pittsburgh Pirates", "San Diego Padres", "San Francisco Giants", "Seattle Mariners", "St. Louis Cardinals", "Tampa Bay Rays", "Texas Rangers", "Toronto Blue Jays", "Washington Nationals"
			],
			mx_base_teams: [
				"Mariachis de Guadalajara", "Rieleros de Aguascalientes", "Saraperos de Saltillo", "Sultanes de Monterrey", "Toros de Tijuana", "Diablos Rojos del México", "El águila de Veracruz", "Guerreros de Oaxaca", "Leones de Yucatán", "Pericos de Puebla", "Piratas de Campeche", "Tigres de Quintana Roo"
			],
			nhl_teams: [
				"Boston Bruins", "Buffalo Sabres", "Detroit Red Wings", "Montreal Canadiens", "Ottawa Senators", "Tampa Bay Lightning", "Toronto Maple Leafs", "Carolina Hurricanes", "Columbus Blue Jackets", "New Jersey Devils", "New York Islanders", "New York Rangers", "Philadelphia Flyers", "Pittsburgh Penguins", "Washington Capitals", "Arizona Coyotes", "Chicago Blackhawks", "Colorado Avalanche", "Dallas Stars", "Minnesota Wild", "Nashville Predators", "St. Louis Blues", "Winnipeg Jets", "Anaheim Ducks", "Calgary Flames", "Edmonton Oilers", "Los Angeles Kings", "San Jose Sharks", "Seattle Kraken", "Vancouver Canucks", "Vegas Golden Knights", "Florida Panthers"
			],
			ncaa_foot_teams: ["Cincinnati Bearcats", "James Madison", "Ball ST", "Massachusetts", "Connecticut", "East Carolina", "Houston", "Memphis", "Navy", "SMU", "South Florida", "Temple", "Tulane", "Tulsa", "UCF", "Boston College", "Clemson", "Duke", "Florida State", "Georgia Tech", "Louisville", "Miami", "NC State", "North Carolina", "Pittsburgh", "Syracuse", "Virginia", "Virginia Tech", "Wake Forest", "Baylor", "Iowa State", "Kansas", "Kansas State", "Oklahoma", "Oklahoma State", "TCU", "Texas", "Texas Tech", "West Virginia", "Illinois", "Indiana", "Maryland", "Michigan", "Michigan State", "Minnesota", "Nebraska", "Northwestern", "Ohio State", "Penn State", "Purdue", "Rutgers", "Wisconsin", "Charlotte", "Florida Atlantic", "Florida International", "Louisiana Tech", "Marshall", "Middle Tennessee", "North Texas", "Old Dominion", "Rice", "Southern Miss", "UAB", "UTEP", "UTSA", "Western Kentucky", "Army", "BYU", "Liberty", "New Mexico State", "Notre Dame", "UConn", "UMass", "Akron", "Akron", "Bowling Green", "Buffalo", "Central Michigan", "Eastern Michigan", "Kent State", "Miami (OH)", "Northern Illinois", "Ohio", "Toledo", "Western Michigan", "Air Force", "Boise State", "Colorado State", "Fresno State", "Hawai'i", "Nevada", "New Mexico", "San Diego State", "San José State", "UNLV", "Utah State", "Wyoming", "Arizona", "Arizona State", "California", "Colorado", "Oregon", "Oregon State", "Stanford", "UCLA", "USC", "Utah St", "Washington", "Washington State", "Alabama", "Arkansas", "Auburn", "Florida", "Georgia", "Kentucky", "LSU", "Mississippi", "Mississippi State", "Missouri", "Ole Miss", "South Carolina", "Tennessee", "Texas A&M", "Vanderbilt", "Sun Belt", "Appalachian State", "Arkansas State", "Coastal Carolina", "Georgia Southern", "Georgia State", "Louisiana", "South Alabama", "Texas State", "Troy", "UL Monroe"],

			ncaa_basket_teams: ["Bellarmine Knights", "Central Arkansas Bears", "Eastern Kentucky Colonels", "Florida Gulf Coast Eagles", "Jacksonville Dolphins", "Jacksonville State Gamecocks", "Kennesaw State Owls", "Liberty Flames", "Lipscomb Bisons", "North Alabama Lions", "North Florida Ospreys", "Stetson Hatters", "Albany Great Danes", "Binghamton Bearcats", "Hartford Hawks", "Maine Black Bears", "NJIT Highlanders", "New Hampshire Wildcats", "Stony Brook Seawolves", "UMBC Retrievers", "UMass Lowell River Hawks", "Vermont Catamounts", "Cincinnati Bearcats", "East Carolina Pirates", "Houston Cougars", "Memphis Tigers", "SMU Mustangs", "South Florida Bulls", "Temple Owls", "Tulane Green Wave", "Tulsa Golden Hurricane", "UCF Knights", "Wichita State Shockers", "Davidson Wildcats", "Dayton Flyers", "Duquesne Dukes", "Fordham Rams", "George Mason Patriots", "George Washington Colonials", "La Salle Explorers", "Rhode Island Rams", "Richmond Spiders", "Saint Joseph's Hawks", "Saint Louis Billikens", "St. Bonaventure Bonnies", "UMass Minutemen", "VCU Rams", "Boston College Eagles", "Clemson Tigers", "Duke Blue Devils", "Florida State Seminoles", "Georgia Tech Yellow Jackets", "Louisville Cardinals", "Miami Hurricanes", "NC State Wolfpack", "North Carolina Tar Heels", "Notre Dame Fighting Irish", "Pittsburgh Panthers", "Syracuse Orange", "Virginia Cavaliers", "Virginia Tech Hokies", "Wake Forest Demon Deacons", "Baylor Bears", "Iowa State Cyclones", "Kansas Jayhawks", "Kansas State Wildcats", "Oklahoma Sooners", "Oklahoma State Cowboys", "TCU Horned Frogs", "Texas Longhorns", "Texas Tech Red Raiders", "West Virginia Mountaineers", "Butler Bulldogs", "Creighton Bluejays", "DePaul Blue Demons", "Georgetown Hoyas", "Marquette Golden Eagles", "Providence Friars", "Seton Hall Pirates", "St. John's Red Storm", "UConn Huskies", "Villanova Wildcats", "Xavier Musketeers", "Eastern Washington Eagles", "Idaho State Bengals", "Idaho Vandals", "Montana Grizzlies", "Montana State Bobcats", "Northern Arizona Lumberjacks", "Northern Colorado Bears", "Portland State Vikings", "Sacramento State Hornets", "Southern Utah Thunderbirds", "Weber State Wildcats", "Campbell Fighting Camels", "Charleston Southern Buccaneers", "Gardner-Webb Runnin' Bulldogs", "Hampton Pirates", "High Point Panthers", "Longwood Lancers", "North Carolina A&T Aggies", "Presbyterian Blue Hose", "Radford Highlanders", "South Carolina Upstate Spartans", "UNC Asheville Bulldogs", "Winthrop Eagles", "Illinois Fighting Illini", "Indiana Hoosiers", "Maryland Terrapins", "Iowa Hawkeyes", "Michigan State Spartans", "Michigan Wolverines", "Minnesota Golden Gophers", "Nebraska Cornhuskers", "Northwestern Wildcats", "Ohio State Buckeyes", "Penn State Nittany Lions", "Purdue Boilermakers", "Rutgers Scarlet Knights", "Wisconsin Badgers", "CSU Bakersfield Roadrunners", "CSU Fullerton Titans", "CSU Northridge Matadors", "Cal Poly Mustangs", "Hawai'i Rainbow Warriors", "Long Beach State Beach", "UC Davis Aggies", "UC Irvine Anteaters", "UC Riverside Highlanders", "UC San Diego Tritons", "UC Santa Barbara Gauchos", "Charleston Cougars", "Delaware Blue Hens", "Drexel Dragons", "Elon Phoenix", "Hofstra Pride", "James Madison Dukes", "Northeastern Huskies", "Towson Tigers", "UNC Wilmington Seahawks", "William & Mary Tribe", "Charlotte 49ers", "Florida Atlantic Owls", "Florida International Panthers", "Louisiana Tech Bulldogs", "Marshall Thundering Herd", "Middle Tennessee Blue Raiders", "North Texas Mean Green", "Old Dominion Monarchs", "Rice Owls", "Southern Miss Golden Eagles", "UAB Blazers", "UTEP Miners", "UTSA Roadrunners", "Western Kentucky Hilltoppers", "Horizon", "Cleveland State Vikings", "Detroit Mercy Titans", "Green Bay Phoenix", "IUPUI Jaguars", "Milwaukee Panthers", "Northern Kentucky Norse", "Oakland Golden Grizzlies", "Purdue Fort Wayne Mastodons", "Robert Morris Colonials", "UIC Flames", "Wright State Raiders", "Youngstown State Penguins", "Ivy", "Brown Bears", "Columbia Lions", "Cornell Big Red", "Dartmouth Big Green", "Harvard Crimson", "Pennsylvania Quakers", "Princeton Tigers", "Yale Bulldogs", "Canisius Golden Griffins", "Fairfield Stags", "Iona Gaels", "Manhattan Jaspers", "Marist Red Foxes", "Monmouth Hawks", "Niagara Purple Eagles", "Quinnipiac Bobcats", "Rider Broncs", "Saint Peter's Peacocks", "Siena Saints"],

			ncaa_baseball_teams: ["Davidson", "Dayton", "Fordham", "George Mason", "George Washington", "La Salle", "Massachusetts", "Rhode Island", "Richmond", "Saint Joseph's", "Saint Louis", "St. Bonaventure", "VCU", "Boston College", "Clemson", "Duke", "Florida State", "Georgia Tech", "Louisville", "Miami", "NC State", "North Carolina", "Notre Dame", "Pittsburgh", "Virginia", "Virginia Tech", "Wake Forest", "Bellarmine", "Central Arkansas", "Eastern Kentucky", "Florida Gulf Coast", "Jacksonville", "Kennesaw State", "Liberty", "Lipscomb", "North Alabama", "North Florida", "Stetson", "Baylor", "Kansas", "Kansas State", "Oklahoma", "Oklahoma State", "TCU", "Texas", "Texas Tech", "West Virginia", "Butler", "Connecticut", "Creighton", "Georgetown", "Seton Hall", "St. John's", "Villanova", "Xavier", "Campbell", "Charleston Southern", "Gardner-Webb", "High Point", "Longwood", "North Carolina A&T", "Presbyterian", "Radford", "UNC Asheville", "USC Upstate", "Winthrop", "Illinois", "Indiana", "Iowa", "Maryland", "Michigan", "Michigan State", "Minnesota", "Nebraska", "Northwestern", "Ohio State", "Penn State", "Purdue", "Rutgers", "CSU Bakersfield", "Cal Poly", "Cal State Fullerton", "Cal State Northridge", "Hawaii", " Long Beach State", "UC Davis", "UC Irvine", "UC Riverside", "UC San Diego", "UC Santa Barbara", "College of Charleston", "Delaware", "Elon", "Hofstra", "James Madison", "Northeastern", "Towson", "UNC Wilmington", "William & Mary", "Charlotte", "Florida Atlantic", "Florida International", "Louisiana Tech", "Marshall", "Middle Tennessee", "Old Dominion", "Rice", "Southern Miss", "UAB", "UTSA", "Western Kentucky", "Illinois-Chicago", "Milwaukee", "Northern Kentucky", "Oakland", "Purdue Fort Wayne", "Wright State", "Youngstown State", "Brown", "Columbia", "Dartmouth", "Harvard", "Pennsylvania", "Princeton", "Yale", "Canisius", "Fairfield", "Iona", "Manhattan", "Marist", "Monmouth", "Niagara", "Quinnipiac", "Rider", "Saint Peter's", "Siena", "Akron", "Ball State", "Bowling Green", "Central Michigan", "Eastern Michigan", "Kent State", "Miami (OH)", "Northern Illinois", "Ohio", "Toledo", "Western Michigan", "Coppin State", "Delaware State", "Norfolk State", "UMES", "Air Force", "Fresno State", "Nevada", "New Mexico", "San Diego State", "San Jose State", "UNLV", "Bryant", "Central Connecticut", "Fairleigh Dickinson", "Long Island", "Merrimack", "Mount St. Mary's", "Sacred Heart", "Wagner", "Arizona", "Arizona State", "California", "Oregon", "Oregon State", "Southern California", "Stanford", "UCLA", "Utah", "Washington", "Washington State", "Army", "Bucknell", "Holy Cross", "Lafayette", "Lehigh", "Navy", "Alabama", "Arkansas", "Auburn", "Florida", "Georgia", "Kentucky", "LSU", "Mississippi State", "Missouri", "Ole Miss", "South Carolina", "Tennessee", "Texas A&M", "Vanderbilt", "East Tennessee State", "Mercer", "Samford", "The Citadel", "UNC Greensboro", "VMI", "Western Carolina", "Wofford", "Houston Baptist", "Incarnate Word", "McNeese", "New Orleans", "Nicholls", "Northwestern State", "Southeastern Louisiana", "Texas A&M-Corpus Christi", "North Dakota State", "Northern Colorado", "Omaha", "Oral Roberts", "South Dakota State", "Western Illinois", "Appalachian State", "Arkansas State", "Coastal Carolina", "Georgia Southern", "Georgia State", "Little Rock", "Louisiana", "South Alabama", "Texas State", "Troy", "UL Monroe", "UT Arlington", "Abilene Christian", "BYU", "Gonzaga", "Lamar", "Loyola Marymount", "Pacific", "Pepperdine", "Portland", "Saint Mary's", "Sam Houston", "San Diego", "San Francisco", "Santa Clara", "Stephen F. Austin", "California Baptist", "Dixie State", "Grand Canyon", "New Mexico State", "Sacramento State", "Seattle", "Tarleton", "UT Rio Grande Valley", "Utah Valley", "Stoony Brook", "East Carolina", "New Jersey Tech", "Tulane", "Albany", "Wichita State", "Maine", "Cincinnati", "Hartford", "UCF", "UMass Lowell", "South Florida", "Binghamton", "Houston", "UMBC", "Memphis"],
			//nfl
			nfl_stats_teams: [],
			nfl_standings_teams: [],
			stats_offensive_player_nfl: [],
			stats_deff_player_nfl: [],
			stats_ret_player_nfl: [],
			stats_put_player_nfl: [],
			stats_kik_player_nfl: [],
			//canadian footbal
			canadian_football: [],
			stats_canadian_football_team:[],
			standing_canadian_football_team:[],
			stats_offensive_player_canadian_football:[],
			stats_defensive_player_canadian_football:[],
			stats_kiking_player_canadian_football:[],
			stats_returning_player_canadian_football:[],
			stats_punting_player_canadian_football:[],
			//nba
			nbaGames: [],
			nba_stats_teams: [],
			nba_stats_player: [],
			//wnb
			wnbaGames: [],
			wnba_stats_teams: [],
			wnba_stats_player: [],
			//mbl
			mlbGames: [],
			mlb_stats_teams: [],
			mlb_stats_player: [],
			//
			mx_base:[],
			stats_baseball_mexico_team:[],
			stats_mexico_baseball_player:[],
			//nhl
			nhlGames: [],
			nhl_stats_teams: [],
			nhl_stats_player: [],
			nhl_stats_goalkeeper: [],
			//box
			box_fight: [],
			boxer_stats: [],
			//mma
			mma_fight: [],
			mma_stats: [],
			//GOLF
			golf: [],
			golfer_stats: [],
			//tennis
			tennis:[],
			tennis_player:[],
			//Nascar
			nascar: [],
			nascar_driver_stats: [],
			//soccer
			soccer: [],
			soccer_tournament: [],
			soccer_stats_teams: [],
			soccer_stats_player: [],
			stats_soccer_goalkeeper:[],
			//ncaa football
			ncaa_football: [],
			ncaa_football_team_stats: [],
			stats_offensive_player_ncaa_foot: [],
			stats_deffensive_player_ncaa_foot: [],
			stats_return_player_ncaa_foot: [],
			stats_punting_player_ncaa_foot: [],
			stats_kiking_player_ncaa_foot: [],
			//ncaa_basket
			ncaa_basket: [],
			ncaa_basket_stats_player: [],
			ncaa_basket_team_player: [],
			//ncaaa base ball
			ncaa_baseball: [],
			ncaa_baseball_stats_player: [],
			ncaa_baseball_stats_team: [],
			//moto gp
			moto_gp: [],
			moto_gp_drivers: [],
			//logos
			logos_nfl: [],
			logos_canadian_football:[],
			logos_nba: [],
			logos_wnba: [],
			logos_nhl: [],
			logos_mlb: [],
			logos_soccer: [],
			logos_ncaa_basketball: [],
			logos_ncaa_baseball: [],
			logos_ncaa_football: [],
			logos_baseball_mexico:[],
			//odds to win
			odds_to_win: [],
			//props
			props: [],
			add_props: [],
			//injuries
			injuries: [],
			//futures
			futures: [],
			//name temporal
			username_temp: "-",

		},
		actions: {
			loadNflGames: async () => {
				const url = "https://sportsdata365.com/nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nflGames: results });
			},
			loadStatsNFL: async () => {
				const url = "https://sportsdata365.com/stats_nfl_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nfl_stats_teams: results });
			},
			loadStandingsNFL: async () => {
				const url = "https://sportsdata365.com/standing_nfl_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nfl_standings_teams: results });
			},
			loadStatsNFL_Off_player: async () => {
				const url = "https://sportsdata365.com/stats_offensive_player_nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_offensive_player_nfl: results });
			},
			loadStats_deff_player_nfl: async () => {
				const url = "https://sportsdata365.com/stats_defensive_player_nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_deff_player_nfl: results });
			},
			loadStats_ret_player_nfl: async () => {
				const url = "https://sportsdata365.com/stats_returning_player_nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_ret_player_nfl: results });
			},
			loadStats_put_player_nfl: async () => {
				const url = "https://sportsdata365.com/stats_punting_player_nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_put_player_nfl: results });
			},
			loadStats_kik_player_nfl: async () => {
				const url = "https://sportsdata365.com/stats_kiking_player_nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_kik_player_nfl: results });
			},
			//canadian_football
			loadCanadian_football: async () => {
				const url = "https://sportsdata365.com/canadian_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ canadian_football: results });
			},
			loadStats_canadian_football_team: async () => {
				const url = "https://sportsdata365.com/stats_canadian_football_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_canadian_football_team: results });
			},
			loadStanding_canadian_football_team: async () => {
				const url = "https://sportsdata365.com/standing_canadian_football_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ standing_canadian_football_team: results });
			},
			loadstats_offensive_player_canadian_football: async () => {
				const url = "https://sportsdata365.com/stats_offensive_player_canadian_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_offensive_player_canadian_football: results });
			},
			loadstats_defensive_player_canadian_football: async () => {
				const url = "https://sportsdata365.com/stats_defensive_player_canadian_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_defensive_player_canadian_football: results });
			},
			loadStats_kiking_player_canadian_football: async () => {
				const url = "https://sportsdata365.com/stats_kiking_player_canadian_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_kiking_player_canadian_football: results });
			},
			loadStats_returning_player_canadian_football: async () => {
				const url = "https://sportsdata365.com/stats_returning_player_canadian_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_returning_player_canadian_football: results });
			},
			loadStats_punting_player_canadian_football: async () => {
				const url = "https://sportsdata365.com/stats_punting_player_canadian_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_punting_player_canadian_football: results });
			},
			//nba
			loadGamesNBA: async () => {
				const url = "https://sportsdata365.com/nba";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nbaGames: results });
			},
			loadStatsNBA: async () => {
				const url = "https://sportsdata365.com/stats_nba_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nba_stats_teams: results });
			},
			loadStats_player_NBA: async () => {
				const url = "https://sportsdata365.com/stats_nba_player";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nba_stats_player: results });
			},
			//wnba
			loadGamesWNBA: async () => {
				const url = "https://sportsdata365.com/wnba";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ wnbaGames: results });
			},
			loadStatsWNBA: async () => {
				const url = "https://sportsdata365.com/stats_wnba_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ wnba_stats_teams: results });
			},
			loadStats_player_WNBA: async () => {
				const url = "https://sportsdata365.com/stats_wnba_player";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ wnba_stats_player: results });
			},
			//mlb
			loadGamesMLB: async () => {
				const url = "https://sportsdata365.com/mlb";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ mlbGames: results });
			},
			loadStatsMLB: async () => {
				const url = "https://sportsdata365.com/stats_mlb_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ mlb_stats_teams: results });
			},
			loadStats_player_MLB: async () => {
				const url = "https://sportsdata365.com/stats_mlb_player";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ mlb_stats_player: results });
			},
			//mx Base
			loadGamesMX_Base: async () => {
				const url = "https://sportsdata365.com/baseball_mexico";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ mx_base: results });
			},
			loadGamesstats_baseball_mexico_team: async () => {
				const url = "https://sportsdata365.com/stats_baseball_mexico_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_baseball_mexico_team: results });
			},
			loadStats_mexico_baseball_player: async () => {
				const url = "https://sportsdata365.com/stats_mexico_baseball_player";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_mexico_baseball_player: results });
			},
			//nhl
			loadGamesNHL: async () => {
				const url = "https://sportsdata365.com/nhl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nhlGames: results });
			},
			loadStatsNHL: async () => {
				const url = "https://sportsdata365.com/stats_nhl_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nhl_stats_teams: results });
			},
			loadStats_player_NHL: async () => {
				const url = "https://sportsdata365.com/stats_nhl_player";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nhl_stats_player: results });
			},
			loadStats_stats_goalkeeper_NHL: async () => {
				const url = "https://sportsdata365.com/stats_nhl_goalkeeper";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nhl_stats_goalkeeper: results });
			},
			//box
			loadBox_Fight: async () => {
				const url = "https://sportsdata365.com/boxeo";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ box_fight: results });
			},
			loadBoxer_Stats: async () => {
				const url = "https://sportsdata365.com/stats_box_fighter";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ boxer_stats: results });
			},
			//MMA
			loadMMA_Fight: async () => {
				const url = "https://sportsdata365.com/mma";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ mma_fight: results });
			},
			loadMMA_Stats: async () => {
				const url = "https://sportsdata365.com/stats_mma_fighter";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ mma_stats: results });
			},
			//GOLF
			loadGOLF: async () => {
				const url = "https://sportsdata365.com/golf";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ golf: results });
			},
			loadGOLFER_Stats: async () => {
				const url = "https://sportsdata365.com/golfer";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ golfer_stats: results });
			},
			//tennis
			loadTennis: async () => {
				const url = "https://sportsdata365.com/tennis";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ tennis: results });
			},
			loadTennis_Player: async () => {
				const url = "https://sportsdata365.com/tennis_player";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ tennis_player: results });
			},
			//nascar
			loadNascar: async () => {
				const url = "https://sportsdata365.com/nascar";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nascar: results });
			},
			loadNascar_driver_Stats: async () => {
				const url = "https://sportsdata365.com/nascar_drivers";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nascar_driver_stats: results });
			},
			//soccer_tournament
			loadSoccer: async () => {
				const url = "https://sportsdata365.com/soccer";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ soccer: results });
			},
			loadSoccer_tournament: async () => {
				const url = "https://sportsdata365.com/soccer_tournament";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ soccer_tournament: results });
			},
			loadSoccer_team_stats: async () => {
				const url = "https://sportsdata365.com/stats_soccer_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ soccer_stats_teams: results });
			},
			loadSoccer_player_stats: async () => {
				const url = "https://sportsdata365.com/stats_soccer_player";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ soccer_stats_player: results });
			},
			loadStats_soccer_goalkeeper: async () => {
				const url = "https://sportsdata365.com/stats_soccer_goalkeeper";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_soccer_goalkeeper: results });
			},

			//logos
			loadLogos_nfl: async () => {
				const url = "https://sportsdata365.com/logos_nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ logos_nfl: results });
			},
			loadLogos_canadian_football: async () => {
				const url = "https://sportsdata365.com/logos_canadian_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ logos_canadian_football: results });
			},
			loadLogos_nba: async () => {
				const url = "https://sportsdata365.com/logos_nba";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ logos_nba: results });
			},
			loadLogos_wnba: async () => {
				const url = "https://sportsdata365.com/logos_wnba";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ logos_wnba: results });
			},
			loadLogos_nhl: async () => {
				const url = "https://sportsdata365.com/logos_nhl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ logos_nhl: results });
			},
			loadLogos_mlb: async () => {
				const url = "https://sportsdata365.com/logos_mlb";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ logos_mlb: results });
			},
			loadLogos_soccer: async () => {
				const url = "https://sportsdata365.com/logos_soccer";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ logos_soccer: results });
			},
			logos_ncaa_basketball: async () => {
				const url = "https://sportsdata365.com/logos_ncaa_basketball";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ logos_ncaa_basketball: results });
			},
			logos_ncaa_baseball: async () => {
				const url = "https://sportsdata365.com/logos_ncaa_baseball";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ logos_ncaa_baseball: results });
			},
			logos_ncaa_football: async () => {
				const url = "https://sportsdata365.com/logos_ncaa_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ logos_ncaa_football: results });
			},
			logos_baseball_mexico: async () => {
				const url = "https://sportsdata365.com/logos_baseball_mexico";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ logos_baseball_mexico: results });
			},
			//ncaa football
			loadNcaa_football: async () => {
				const url = "https://sportsdata365.com/ncaa_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ ncaa_football: results });
			},
			loadStatsNcaa_Football_team: async () => {
				const url = "https://sportsdata365.com/stats_ncaa_football_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ ncaa_football_team_stats: results });
			},
			loadStats_offensive_player_ncaa_foot: async () => {
				const url = "https://sportsdata365.com/stats_offensive_player_ncaa_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_offensive_player_ncaa_foot: results });
			},
			loadStats_deffensive_player_ncaa_foot: async () => {
				const url = "https://sportsdata365.com/stats_defensive_player_ncca_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_deffensive_player_ncaa_foot: results });
			},
			loadStats_return_player_ncaa_foot: async () => {
				const url = "https://sportsdata365.com/stats_returning_player_ncaa_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_return_player_ncaa_foot: results });
			},
			loadStats_punting_player_ncaa_foot: async () => {
				const url = "https://sportsdata365.com/stats_punting_player_ncaa_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_punting_player_ncaa_foot: results });
			},
			loadStats_Kiking_player_ncaa_foot: async () => {
				const url = "https://sportsdata365.com/stats_kiking_player_ncaa_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_kiking_player_ncaa_foot: results });
			},
			//ncaa basket
			loadNcaa_basket: async () => {
				const url = "https://sportsdata365.com/ncaa_basketball";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ ncaa_basket: results });
			},
			loadNcaa_basket_PY_Stats: async () => {
				const url = "https://sportsdata365.com/stats_ncaa_basket_player";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ ncaa_basket_stats_player: results });
			},
			loadNcaa_basket_team_Stats: async () => {
				const url = "https://sportsdata365.com/stats_ncaa_basket_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ ncaa_basket_team_player: results });
			},
			//ncaa baseball
			loadNcaa_baseball: async () => {
				const url = "https://sportsdata365.com/ncaa_baseball";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ ncaa_baseball: results });
			},
			loadNcaa_baseball_stats_player: async () => {
				const url = "https://sportsdata365.com/stats_ncaa_baseball_player";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ ncaa_baseball_stats_player: results });
			},
			loadNcaa_baseball_stats_team: async () => {
				const url = "https://sportsdata365.com/stats_ncaa_baseball_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ ncaa_baseball_stats_team: results });
			},
			//moto_gp
			loadmoto_gp: async () => {
				const url = "https://sportsdata365.com/moto_gp";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ moto_gp: results });
			},
			load_stats_driver_moto_gp: async () => {
				const url = "https://sportsdata365.com/moto_gp_drivers";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ moto_gp_drivers: results });
			},
			//odds_to_win
			loadOdds_to_win: async () => {
				const url = "https://sportsdata365.com/odds_to_win";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ odds_to_win: results });
			},
			//props
			loadProps: async () => {
				const url = "https://sportsdata365.com/props";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ props: results });
			},
			//add props
			load_Add_Props: async () => {
				const url = "https://sportsdata365.com/props_list";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ add_props: results });
			},
			//casinos
			loadCasinos: async () => {
				const url = "https://sportsdata365.com/casinos";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ casinos: results });
			},
			//injuries
			injuries: async () => {
				const url = "https://sportsdata365.com/injuries";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ injuries: results });
			},
			//futures
			futures: async () => {
				const url = "https://sportsdata365.com/futures";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ futures: results });
			},
			//name
			changename: username => {
				setStore({ username_temp: username });
			}
		}
	};
};

export default getState;
