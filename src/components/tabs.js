import { HashLink } from 'react-router-hash-link';
export const Tabs = () => {
    return (
        <div className="accordion" id="accordionPrincipal">
            <div className="accordion-item">
                <div className="accordion-header" id="headingOneSHOW">
                    <HashLink className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#firsth_Show" aria-expanded="true" aria-controls="firsth_Show" id="nfl-item">
                        INICIO <i className="fas fa-home ps-5 fs-5"></i>
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
                <div className="accordion-header" id="headingEightColle">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        COLLEGE <i className="fas fa-university ps-5 fs-5"></i>
                    </HashLink>
                </div>
                <div id="collapseNine" className="accordion-collapse collapse collapse-inn" aria-labelledby="headingEightColle" data-bs-parent="#accordionPrincipal">
                    <div className="allitems">
                        <div className="accordion" id="nascar-items">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="nascar-headingOne">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_football" aria-expanded="false" aria-controls="ncaa_football">
                                        NCAA  FOOTBALL <i className="fas fa-football-ball ps-5 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="nascar-headingTwo">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_basket" aria-expanded="false" aria-controls="ncaa_basket">
                                        NCAA BASKETBALL <i className="fas fa-basketball-ball ps-5 fs-5"></i>
                                    </HashLink>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="nascar-headingTwo">
                                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_baseball" aria-expanded="false" aria-controls="ncaa_baseball">
                                        NCAA BASEBALL <i className="fas fa-baseball-ball ps-5 fs-5"></i>
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
                        <div className="accordion" id="nascar-items">
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
                <h2 className="accordion-header" id="headingEightNFL">
                    <HashLink className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#oddsTW-NFL" aria-expanded="false" aria-controls="oddsTW-NFL">
                        Odds to Win  <i className="fas fa-trophy ps-2 fs-5"></i>
                    </HashLink>
                </h2>
            </div>
        </div>
    )
}