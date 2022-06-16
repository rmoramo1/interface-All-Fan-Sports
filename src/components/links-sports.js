/*games*/
import { Index } from ".";
import { Nfl_game } from "../nfl/nfl_game";
import { StatsNFL } from "../nfl/stats/statsNFL";
import { Stats_off_player_nfl } from "../nfl/player_off_stats/stats_off_player_nfl";
import { Stats_deff_player_nfl } from "../nfl/player_deff_stats/stats_deff_player_nfl";
import { Stats_ret_player_nfl } from "../nfl/returning_py_stats.js/stats_ret_player_nfl";
import { Stats_put_player_nfl } from "../nfl/player_punting_stats/stats_put_player_nfl";
import { Stats_kik_player_nfl } from "../nfl/player_kik_stats/stats_kik_player_nfl";

import { Team_Nba_Stas } from "../nba/nba_team_stats/team_nba_stas";
import { NBA_game } from "../nba/nba_game/nba_game";
import { Stats_py_nba } from "../nba/nba_py_stats/stats_py_nba";

import { MLB_game } from "../mlb/mlb_game/MLB_game";
import { Team_MLB_Stas } from "../mlb/mlb_team_stats/team_mlb_stas";
import { Stats_py_mlb } from "../mlb/mlb_py_stats/stats_py_mlb";

import { NHL_game } from "../nhl/nhl_game/NHL_game";
import { Team_NHL_Stas } from "../nhl/nhl_team_stats/team_nhl_stas";
import { Stats_py_nhl } from "../nhl/nhl_py_stats/stats_py_nhl"

import { Fight_box } from "../box/fight/fight_box";
import { Stats_Fighter_box } from "../box/boxer_stats/stats_figther_box";

import { Fight_mma } from "../mma/fight_mma/fight_mma";
import { Stats_Fighter_mma } from "../mma/mma_stats/stats_figther_mma";

import { Golf } from "../golf/golf/golf";
import { Stats_Golfer } from "../golf/golfer_stats/stats_golfer";

import { Nascar } from "../nascar/nascar/nascar";
import { Stats_Nascar_Driver } from "../nascar/nascar_drivers/stats_nascar_driver";

import { Soccer_game } from "../soccer/soccer_game/soccer_game";
import { Team_Soccer_Stas } from "../soccer/soccer_team_stats/team_soccer_stas";
import { Stats_py_soccer } from "../soccer/soccer_py_stats/stats_py_soccer";
import { Tournaments } from "../soccer/tournament/tournament";

import { Ncaa_Football_game } from "../ncaa_football/game/ncaa_football_game";
import { Team_Stas_Ncaa_Fot } from "../ncaa_football/team_stats/team_stas_ncaa_fot";
import { Stats_off_player_ncaa_foot } from "../ncaa_football/player_off_stats/stats_off_player_ncaa_foot";
import { Stats_deff_player_ncaa_foot } from "../ncaa_football/player_deff_stats/stats_deff_player_ncaa_foot";
import { Stats_ret_player_ncaa_foot } from "../ncaa_football/returning_py_stats/stats_ret_player_ncaa_foot";
import { Stats_put_player_ncaa_foot } from "../ncaa_football/player_punting_stats/stats_put_player_ncaa_foot";
import { Stats_kik_player_ncaa_foot } from "../ncaa_football/player_kik_stats/stats_kik_player_ncaa_foot";

import { Ncaa_Basket_game } from "../ncaa_basketball/game/ncaa_basket_game";
import { Stats_py_ncaa_basketball } from "../ncaa_basketball/ncaa_basketballl_py_stats/stats_py_ncaa";
import { Team_Ncaa_basket_Stas } from "../ncaa_basketball/ncaa_basket_team_stats/team_ncaa_basket_stas"

import { Ncaa_Baseball_game } from "../ncaa_baseball/game/ncaa_baseball_game";
import { Stats_py_ncaa_baseball } from "../ncaa_baseball/ncaa_baseball_py_stats/stats_py_baseball";
import { Team_NCAA_BASEBALL_Stas } from "../ncaa_baseball/ncaa_baseball_team_stats/team_ncaa_baseball_stas";
import { Moto_GP } from "../moto_gp/moto_gp/moto_gp";
import { Stats_Moto_GP_Driver } from "../moto_gp/moto_gp_drivers/stats_moto_gp_driver";

import { Odds_to_win } from "../odds/odds_to_win";

import { Props } from "../props/props";
import { Add_Props } from "../add_props/add_props";

import { Logos } from "./logos";

import { Casino } from "../casino/casino";

import { Injuries } from "../injuries/injuries";

import { Future } from "../future/future";


export const Links = () => {
    return (
        <div>
            {/* nfl */}
            <div className="accordion-item">
                <div id="firsth_Show" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Index />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="gameNFL" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Nfl_game />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="team" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <StatsNFL />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="offplayer" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_off_player_nfl />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="deffPlayer" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_deff_player_nfl />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="returningPlayer" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_ret_player_nfl />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="puntingPlayer" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_put_player_nfl />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="kickingPlayer" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_kik_player_nfl />
                    </div>
                </div>
            </div>
            {/* nfl */}
            {/*  nba*/}
            <div className="accordion-item">
                <div id="nbaStts" className="accordion-collapse collapse" aria-labelledby="nba-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <NBA_game />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="nbaSttsTeam" className="accordion-collapse collapse" aria-labelledby="nba-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Team_Nba_Stas />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="nbaSttsPlayer" className="accordion-collapse collapse" aria-labelledby="nba-headingThree" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_py_nba />
                    </div>
                </div>
            </div>

            {/*  nba*/}
            {/*  mlb*/}
            <div className="accordion-item">
                <div id="mlbGame" className="accordion-collapse collapse" aria-labelledby="mlb-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <MLB_game />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="mlbSttsTeam" className="accordion-collapse collapse" aria-labelledby="mlb-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Team_MLB_Stas />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="mlbSttsPlayer" className="accordion-collapse collapse" aria-labelledby="mlb-headingThree" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_py_mlb />
                    </div>
                </div>
            </div>
            {/*  mlb*/}
            {/*  nhl*/}
            <div className="accordion-item">
                <div id="nhlGame" className="accordion-collapse collapse" aria-labelledby="nhl-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <NHL_game />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="nhlSttsTeam" className="accordion-collapse collapse" aria-labelledby="nhl-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Team_NHL_Stas />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="nhlSttsPlayer" className="accordion-collapse collapse" aria-labelledby="nhl-headingThree" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_py_nhl />
                    </div>
                </div>
            </div>
            {/*  nhl*/}
            {/*  box*/}
            <div className="accordion-item">
                <div id="boxGame" className="accordion-collapse collapse" aria-labelledby="box-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Fight_box />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="boxSttsTeam" className="accordion-collapse collapse" aria-labelledby="box-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_Fighter_box />
                    </div>
                </div>
            </div>
            {/*  box*/}
            {/*  mma*/}
            <div className="accordion-item">
                <div id="mmaGame" className="accordion-collapse collapse" aria-labelledby="mma-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Fight_mma />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="mmaSttsTeam" className="accordion-collapse collapse" aria-labelledby="mma-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_Fighter_mma />
                    </div>
                </div>
            </div>
            {/*  mma*/}
            {/*  golf*/}
            <div className="accordion-item">
                <div id="golfGame" className="accordion-collapse collapse" aria-labelledby="golf-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Golf />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="golfSttsTeam" className="accordion-collapse collapse" aria-labelledby="golf-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_Golfer />
                    </div>
                </div>
            </div>
            {/*  golf*/}
            {/*  nascar*/}
            <div className="accordion-item">
                <div id="nascarGame" className="accordion-collapse collapse" aria-labelledby="nascar-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Nascar />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="nascarSttsTeam" className="accordion-collapse collapse" aria-labelledby="nascar-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_Nascar_Driver />
                    </div>
                </div>
            </div>
            {/*  moto gp*/}
            <div className="accordion-item">
                <div id="moto_gp_Game" className="accordion-collapse collapse" aria-labelledby="moto_gp_-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Moto_GP />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="moto_gp_stats_player" className="accordion-collapse collapse" aria-labelledby="moto_gp-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_Moto_GP_Driver />
                    </div>
                </div>
            </div>
            {/*  moto gp*/}
            {/*  college*/}
            {/* football */}
            <div className="accordion-item">
                <div id="ncaa_football" className="accordion-collapse collapse" aria-labelledby="college-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Ncaa_Football_game />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="ncaa_football_team_stats" className="accordion-collapse collapse" aria-labelledby="college-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Team_Stas_Ncaa_Fot />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="ncaa_football_off_player" className="accordion-collapse collapse" aria-labelledby="college-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_off_player_ncaa_foot />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="ncaa_football_deff_player" className="accordion-collapse collapse" aria-labelledby="college-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_deff_player_ncaa_foot />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="ncaa_football_ret_player" className="accordion-collapse collapse" aria-labelledby="college-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_ret_player_ncaa_foot />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="ncaa_football_punt_player" className="accordion-collapse collapse" aria-labelledby="college-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_put_player_ncaa_foot />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="ncaa_football_kiking_player" className="accordion-collapse collapse" aria-labelledby="college-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_kik_player_ncaa_foot />
                    </div>
                </div>
            </div>
            {/* fooball */}
            {/* basket */}
            <div className="accordion-item">
                <div id="ncaa_basket_game" className="accordion-collapse collapse" aria-labelledby="college-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Ncaa_Basket_game />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="ncaa_basket_team_stas" className="accordion-collapse collapse" aria-labelledby="college-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Team_Ncaa_basket_Stas />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="ncaa_basket_player_stas" className="accordion-collapse collapse" aria-labelledby="college-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_py_ncaa_basketball />
                    </div>
                </div>
            </div>
            {/* basket */}
            {/* baseball */}
            <div className="accordion-item">
                <div id="ncaa_baseball_game" className="accordion-collapse collapse" aria-labelledby="college-headingThree" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Ncaa_Baseball_game />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="ncaa_baseball_team_stats" className="accordion-collapse collapse" aria-labelledby="college-headingThree" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Team_NCAA_BASEBALL_Stas />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="ncaa_baseball_py_stats" className="accordion-collapse collapse" aria-labelledby="college-headingThree" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">

                        <Stats_py_ncaa_baseball />
                    </div>
                </div>
            </div>
            {/* baseball */}
            {/*  COLLEGE*/}
            {/*  soccer*/}
            <div className="accordion-item">
                <div id="Soccer_tournament" className="accordion-collapse collapse" aria-labelledby="soccer-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Tournaments />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="Soccer" className="accordion-collapse collapse" aria-labelledby="soccer-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Soccer_game />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="stats_soccer_player" className="accordion-collapse collapse" aria-labelledby="soccer-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Stats_py_soccer />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="soccer_team_stats" className="accordion-collapse collapse" aria-labelledby="soccer team stats" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Team_Soccer_Stas />
                    </div>
                </div>
            </div>
            {/*  soccer*/}
            {/* Injuries */}
            <div className="accordion-item">
                <div id="Injuries" className="accordion-collapse collapse" aria-labelledby="Injuries" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Injuries />
                    </div>
                </div>
            </div>
            {/* Injuries */}
            {/* Futures */}
            <div className="accordion-item">
                <div id="Futures" className="accordion-collapse collapse" aria-labelledby="Futures" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Future />
                    </div>
                </div>
            </div>
            {/* Injuries */}
            {/* odds */}
            <div className="accordion-item">
                <div id="odds" className="accordion-collapse collapse" aria-labelledby="odds" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Odds_to_win />
                    </div>
                </div>
            </div>
            {/* odds */}
            {/* props */}
            <div className="accordion-item">
                <div id="props" className="accordion-collapse collapse" aria-labelledby="props" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Props />
                    </div>
                </div>
            </div>
            {/* props */}
            {/* add props */}
            <div className="accordion-item">
                <div id="add_props" className="accordion-collapse collapse" aria-labelledby="add_props" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Add_Props/>
                    </div>
                </div>
            </div>
            {/* add props */}
            {/* logos */}
            <div className="accordion-item">
                <div id="Logos" className="accordion-collapse collapse" aria-labelledby="Logos" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Logos />
                    </div>
                </div>
            </div>
            {/* logos */}
            {/* Casinos */}
            <div className="accordion-item">
                <div id="Casinos" className="accordion-collapse collapse" aria-labelledby="Casinos" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Casino />
                    </div>
                </div>
            </div>
            {/* Casinos */}

        </div>
    )
} 