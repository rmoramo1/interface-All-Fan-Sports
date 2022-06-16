import { HashLink } from 'react-router-hash-link';
export const Tabs = () => {
    return (
        <div className="accordion" id="accordionPrincipal">
            <div className="accordion-item">
                <div className="accordion-header" id="headingOneSHOW">
                    <HashLink className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#firsth_Show" aria-expanded="true" aria-controls="firsth_Show" id="nfl-item">
                        INDEX <i className="fas fa-home ps-5 fs-5"></i>
                    </HashLink>
                </div>
            </div>
            <div className="accordion-item">
                <div className="accordion-header" id="headingOneNFL">
                    <HashLink className="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nfl-collapse" aria-expanded="true" aria-controls="nfl-collapse" id="nfl-item">
                        NFL <i className="fas fa-football-ball ps-5 fs-5"></i>
                    </HashLink>
                </div>
                <div id="nfl-collapse" className="accordion-collapse collapse collapse-inn" aria-labelledby="headingOneNFL" data-bs-parent="#accordionPrincipal">
                    <div className="allitems">
                        <div className="accordion" id="nfl-item">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading">
                                    <HashLink className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#gameNFL" aria-expanded="false" aria-controls="gameNFL">
                                        Games <i className="fas fa-plus ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#team" aria-expanded="false" aria-controls="team">
                                        Team Statistics <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThreeNFL">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#offplayer" aria-expanded="false" aria-controls="offplayer">
                                        Offensive Player <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFourNFL">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#deffPlayer" aria-expanded="false" aria-controls="deffPlayer">
                                        Defensive Player <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFiveNFL">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#returningPlayer" aria-expanded="false" aria-controls="returningPlayer">
                                        Returning Player <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSixNFL">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#puntingPlayer" aria-expanded="false" aria-controls="puntingPlayer">
                                        Punting Player <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSevenNFL">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#kickingPlayer" aria-expanded="false" aria-controls="kickingPlayer">
                                        Kicking Player <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div className="accordion-header" id="headingNBA">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nbaCollapse" aria-expanded="false" aria-controls="nbaCollapse" id="nba-item">
                        NBA <i className="fas fa-basketball-ball ps-5 fs-5"></i>
                    </HashLink>
                </div>
                <div id="nbaCollapse" className="accordion-collapse collapse collapse-inn" aria-labelledby="headingNBA" data-bs-parent="#accordionPrincipal">
                    <div className="accordion" id="nba-items">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="nba-headingOne">
                                <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nbaStts" aria-expanded="false" aria-controls="nbaStts">
                                    Games <i className="fas fa-plus ps-2 fs-5"></i>
                                </HashLink>
                            </h2>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="nba-headingTwo">
                                <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nbaSttsTeam" aria-expanded="false" aria-controls="nbaSttsTeam">
                                    Team Statistics <i className="fas fa-chart-line ps-2 fs-5"></i>
                                </HashLink>
                            </h2>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="nba-headingThree">
                                <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nbaSttsPlayer" aria-expanded="false" aria-controls="nbaSttsPlayer">
                                    Player Statistics <i className="fas fa-chart-line ps-2 fs-5"></i>
                                </HashLink>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div className="accordion-header" id="headingThreeMLB">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        MLB <i className="fas fa-baseball-ball ps-5 fs-5"></i>
                    </HashLink>
                </div>
                <div id="collapseThree" className="accordion-collapse collapse collapse-inn" aria-labelledby="headingThreeMLB" data-bs-parent="#accordionPrincipal">
                    <div className="allitems">
                        <div className="accordion" id="mlb-items">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="mlb-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mlbGame" aria-expanded="false" aria-controls="mlbGame">
                                        Games <i className="fas fa-plus ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="mlb-headingTwo">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mlbSttsTeam" aria-expanded="false" aria-controls="mlbSttsTeam">
                                        Team Statistics <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="mlb-headingThree">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mlbSttsPlayer" aria-expanded="false" aria-controls="mlbSttsPlayer">
                                        Player Statistics <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div className="accordion-header" id="headingFourNHL">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        NHL <i className="fas fa-hockey-puck ps-5 fs-5"></i>
                    </HashLink>
                </div>
                <div id="collapseFour" className="accordion-collapse collapse collapse-inn" aria-labelledby="headingFourNHL" data-bs-parent="#accordionPrincipal">
                    <div className="allitems">
                        <div className="accordion" id="nhl-items">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="nhl-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nhlGame" aria-expanded="false" aria-controls="nhlGame">
                                        Games <i className="fas fa-plus ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="nhl-headingTwo">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nhlSttsTeam" aria-expanded="false" aria-controls="nhlSttsTeam">
                                        Team Statistics <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="nhl-headingThree">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nhlSttsPlayer" aria-expanded="false" aria-controls="nhlSttsPlayer">
                                        Player Statistics <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div className="accordion-header" id="headingFiveBOX">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        BOX <i className="fas fa-fist-raised ps-5 fs-5"></i>
                    </HashLink>
                </div>
                <div id="collapseFive" className="accordion-collapse collapse collapse-inn" aria-labelledby="headingFiveBOX" data-bs-parent="#accordionPrincipal">
                    <div className="allitems">
                        <div className="accordion" id="box-items">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="box-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#boxGame" aria-expanded="false" aria-controls="boxGame">
                                        Fight <i className="fas fa-plus ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="box-headingTwo">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#boxSttsTeam" aria-expanded="false" aria-controls="boxSttsTeam">
                                        Fighter Statistics <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div className="accordion-header" id="headingSixMMA">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        MMA <i className="fas fa-hand-rock ps-5 fs-5"></i>
                    </HashLink>
                </div>
                <div id="collapseSix" className="accordion-collapse collapse collapse-inn" aria-labelledby="headingSixMMA" data-bs-parent="#accordionPrincipal">
                    <div className="allitems">
                        <div className="accordion" id="mma-items">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="mma-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mmaGame" aria-expanded="false" aria-controls="mmaGame">
                                        Fight <i className="fas fa-plus ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="mma-headingTwo">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mmaSttsTeam" aria-expanded="false" aria-controls="mmaSttsTeam">
                                        Fighter Statistics <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div className="accordion-header" id="headingSevenGOLF">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        GOLF <i className="fas fa-golf-ball ps-5 fs-5"></i>
                    </HashLink>
                </div>
                <div id="collapseSeven" className="accordion-collapse collapse collapse-inn" aria-labelledby="headingSevenGOLF" data-bs-parent="#accordionPrincipal">
                    <div className="allitems">
                        <div className="accordion" id="golf-items">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="golf-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#golfGame" aria-expanded="false" aria-controls="golfGame">
                                        Event <i className="fas fa-plus ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="golf-headingTwo">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#golfSttsTeam" aria-expanded="false" aria-controls="golfSttsTeam">
                                        Golfer Statistics <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div className="accordion-header" id="headingEightNAS">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        NASCAR <i className="fas fa-car ps-5 fs-5"></i>
                    </HashLink>
                </div>
                <div id="collapseEight" className="accordion-collapse collapse collapse-inn" aria-labelledby="headingEightNAS" data-bs-parent="#accordionPrincipal">
                    <div className="allitems">
                        <div className="accordion" id="nascar-items">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="nascar-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nascarGame" aria-expanded="false" aria-controls="nascarGame">
                                        Event <i className="fas fa-plus ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="nascar-headingTwo">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nascarSttsTeam" aria-expanded="false" aria-controls="nascarSttsTeam">
                                        Nascar Driver Statistics <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div className="accordion-header" id="headingEightNAS">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#moto_gp_collapse" aria-expanded="false" aria-controls="moto_gp_collapse">
                        MOTO GP <i className="fas fa-motorcycle ps-5 fs-5"></i>
                    </HashLink>
                </div>
                <div id="moto_gp_collapse" className="accordion-collapse collapse collapse-inn" aria-labelledby="headingEightNAS" data-bs-parent="#accordionPrincipal">
                    <div className="allitems">
                        <div className="accordion" id="nascar-items">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="nascar-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#moto_gp_Game" aria-expanded="false" aria-controls="moto_gp_Game">
                                        Event <i className="fas fa-plus ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="nascar-headingTwo">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#moto_gp_stats_player" aria-expanded="false" aria-controls="moto_gp_stats_player">
                                        Nascar Driver Statistics <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div className="accordion-header" id="headingEightNAS">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_foot" aria-expanded="false" aria-controls="ncaa_foot">
                        NCAA  FOOTBALL <i className="fas fa-football-ball ps-5 fs-5"></i>
                    </HashLink>
                </div>
                <div id="ncaa_foot" className="accordion-collapse collapse collapse-inn" aria-labelledby="headingEightNAS" data-bs-parent="#accordionPrincipal">
                    <div className="allitems">
                        <div className="accordion" id="ncaa-foot-items">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="ncaa-foot-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_football" aria-expanded="false" aria-controls="ncaa_football">
                                        GAME <i className="fas fa-plus ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="ncaa-foot-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_football_team_stats" aria-expanded="false" aria-controls="ncaa_football_team_stats">
                                        Team Statistics <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="ncaa-foot-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_football_off_player" aria-expanded="false" aria-controls="ncaa_football_off_player">
                                        Offensive Player <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>                           <div className="accordion-item">
                                <h2 className="accordion-header" id="ncaa-foot-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_football_deff_player" aria-expanded="false" aria-controls="ncaa_football_deff_player">
                                        Defensive Player <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="ncaa-foot-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_football_ret_player" aria-expanded="false" aria-controls="ncaa_football_ret_player">
                                        Returning Player <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="ncaa-foot-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_football_punt_player" aria-expanded="false" aria-controls="ncaa_football_punt_player">
                                        Punting Player <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="ncaa-foot-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_football_kiking_player" aria-expanded="false" aria-controls="ncaa_football_kiking_player">
                                        Kicking Player <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="ncaaa-headingTwo">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_basketball" aria-expanded="false" aria-controls="ncaa_basketball">
                        NCAA BASKETBALL <i className="fas fa-basketball-ball ps-5 fs-5"></i>
                    </HashLink>
                </h2>
                <div id="ncaa_basketball" className="accordion-collapse collapse collapse-inn" aria-labelledby="headingEightNAS" data-bs-parent="#accordionPrincipal">
                    <div className="allitems">
                        <div className="accordion" id="ncaa-foot-items">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="ncaa-foot-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_basket_game" aria-expanded="false" aria-controls="ncaa_basket_game">
                                        GAME <i className="fas fa-plus ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="ncaa-foot-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_basket_team_stas" aria-expanded="false" aria-controls="ncaa_basket_team_stas">
                                        Team Statistics <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="ncaa-foot-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_basket_player_stas" aria-expanded="false" aria-controls="ncaa_basket_player_stas">
                                      Player Stats <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="nascar-headingTwo">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_baseball" aria-expanded="false" aria-controls="ncaa_baseball">
                        NCAA BASEBALL <i className="fas fa-baseball-ball ps-5 fs-5"></i>
                    </HashLink>
                </h2>
                <div id="ncaa_baseball" className="accordion-collapse collapse collapse-inn" aria-labelledby="headingEightNAS" data-bs-parent="#accordionPrincipal">
                    <div className="allitems">
                        <div className="accordion" id="ncaa-foot-items">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="ncaa-foot-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_baseball_game" aria-expanded="false" aria-controls="ncaa_baseball_game">
                                        GAME <i className="fas fa-plus ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="ncaa-foot-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_baseball_team_stats" aria-expanded="false" aria-controls="ncaa_baseball_team_stats">
                                        Team Statistics <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="ncaa-foot-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_baseball_py_stats" aria-expanded="false" aria-controls="ncaa_baseball_py_stats">
                                        Stats Player <i className="fas fa-chart-line ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div className="accordion-header" id="headingEightSoccer">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThen" aria-expanded="false" aria-controls="collapseThen">
                        SOCCER <i className="far fa-futbol ps-5 fs-5"></i>
                    </HashLink>
                </div>
                <div id="collapseThen" className="accordion-collapse collapse collapse-inn" aria-labelledby="headingEightSoccer" data-bs-parent="#accordionPrincipal">
                    <div className="allitems">
                        <div className="accordion" id="soccer-items">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="soccer-headingZERO">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Soccer_tournament" aria-expanded="false" aria-controls="Soccer_tournament">
                                        Soccer Tournament <i className="far fa-futbol ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="soccer-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Soccer" aria-expanded="false" aria-controls="Soccer">
                                        Soccer Match <i className="far fa-futbol ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="soccer-headingTwo">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stats_soccer_player" aria-expanded="false" aria-controls="stats_soccer_player">
                                        Player Stats<i className="far fa-futbol ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="soccer-headingTwo">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#soccer_team_stats" aria-expanded="false" aria-controls="soccer_team_stats">
                                        Team Stats<i className="far fa-futbol ps-2 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingInjuries">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Injuries" aria-expanded="false" aria-controls="Injuries">
                        INJURIES  <i className="fas fa-user-injured ps-2 fs-5"></i>
                    </HashLink>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFutures">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Futures" aria-expanded="false" aria-controls="Futures">
                        FUTURES   <i className="far fa-calendar-alt ps-2 fs-5"></i>
                    </HashLink>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOdds">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#odds" aria-expanded="false" aria-controls="odds">
                        Odds to Win  <i className="fas fa-trophy ps-2 fs-5"></i>
                    </HashLink>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingProps">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#props" aria-expanded="false" aria-controls="props">
                        Props  <i className="fas fa-trophy ps-2 fs-5"></i>
                    </HashLink>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingProps">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#add_props" aria-expanded="false" aria-controls="props">
                    Add Prop to the List  <i className="fas fa-list ps-2 fs-5"></i>
                    </HashLink>
                </h2>
            </div>
            <div className="accordion-item">
                <div className="accordion-header" id="headingLogos">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Logos" aria-expanded="false" aria-controls="Logos">
                        LOGOS <i className="far fa-flag ps-5 fs-5"></i>
                    </HashLink>
                </div>
            </div>
            <div className="accordion-item">
                <div className="accordion-header" id="headingCasinos">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Casinos" aria-expanded="false" aria-controls="Casinos">
                        Casinos <i className="fas fa-dice ps-5 fs-5"></i>
                    </HashLink>
                </div>
            </div>
        </div>
    )
}