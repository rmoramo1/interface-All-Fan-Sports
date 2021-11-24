/*games*/
import { Nfl_game } from "../nfl/nfl_game";
import { CreateGames } from "../nfl/createGames";
import { StatsNFL } from "../nfl/stats/statsNFL";

export const Links = () => {
    return (
        <div> 
            {/* nfl */}
            <div className="accordion-item">
                <div id="gameNFL" className="accordion-collapse collapse show" aria-labelledby="headingOne"  data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        <Nfl_game/>
                        <CreateGames/>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="team" className="accordion-collapse collapse" aria-labelledby="headingTwo"  data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                       <StatsNFL/>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="offplayer" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        off player
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="deffPlayer" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        deff player
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="returningPlayer" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        Returning player
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="puntingPlayer" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        punting player
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="kickingPlayer" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        kicking player
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="oddsTW-NFL" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        odds t w nfl
                    </div>
                </div>
            </div>
            {/* nfl */}
            {/*  nba*/}
            <div className="accordion-item">
                <div id="nbaStts" className="accordion-collapse collapse" aria-labelledby="nba-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        game NBA
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="nbaSttsTeam" className="accordion-collapse collapse" aria-labelledby="nba-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        NBA stadisticas de equipo
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="nbaSttsPlayer" className="accordion-collapse collapse" aria-labelledby="nba-headingThree" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        NBA stats player
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="oddsTW-NBA" className="accordion-collapse collapse" aria-labelledby="nba-headingFour" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        odds t w nba
                    </div>
                </div>
            </div>
            {/*  nba*/}
            {/*  mlb*/}
            <div className="accordion-item">
                <div id="mlbGame" className="accordion-collapse collapse" aria-labelledby="mlb-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        game mlb
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="mlbSttsTeam" className="accordion-collapse collapse" aria-labelledby="mlb-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        mlb stadisticas de equipo
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="mlbSttsPlayer" className="accordion-collapse collapse" aria-labelledby="mlb-headingThree" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        mlb stats player
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="oddsTW-MLB" className="accordion-collapse collapse" aria-labelledby="mlb-headingFour" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        odds t w mbl
                    </div>
                </div>
            </div>
            {/*  mlb*/}
            {/*  nhl*/}
            <div className="accordion-item">
                <div id="nhlGame" className="accordion-collapse collapse" aria-labelledby="nhl-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        game nhl
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="nhlSttsTeam" className="accordion-collapse collapse" aria-labelledby="nhl-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        nhl stadisticas de equipo
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="nhlSttsPlayer" className="accordion-collapse collapse" aria-labelledby="nhl-headingThree" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        nhl stats player
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="oddsTW-NHL" className="accordion-collapse collapse" aria-labelledby="nhl-headingFour" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        odds t w nhl
                    </div>
                </div>
            </div>
            {/*  nhl*/}
            {/*  box*/}
            <div className="accordion-item">
                <div id="boxGame" className="accordion-collapse collapse" aria-labelledby="box-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        fight box
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="boxSttsTeam" className="accordion-collapse collapse" aria-labelledby="box-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        box stadisticas de peleador
                    </div>
                </div>
            </div>
            {/*  box*/}
            {/*  mma*/}
            <div className="accordion-item">
                <div id="mmaGame" className="accordion-collapse collapse" aria-labelledby="mma-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        fight mma
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="mmaSttsTeam" className="accordion-collapse collapse" aria-labelledby="mma-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        mma stadisticas de peleador
                    </div>
                </div>
            </div>
            {/*  mma*/}
            {/*  golf*/}
            <div className="accordion-item">
                <div id="golfGame" className="accordion-collapse collapse" aria-labelledby="golf-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        evento de  golf
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="golfSttsTeam" className="accordion-collapse collapse" aria-labelledby="golf-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        golfer stadisticas
                    </div>
                </div>
            </div>
            {/*  golf*/}
            {/*  nascar*/}
            <div className="accordion-item">
                <div id="nascarGame" className="accordion-collapse collapse" aria-labelledby="nascar-headingOne"  data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        evento de  nascar
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="nascarSttsTeam" className="accordion-collapse collapse" aria-labelledby="nascar-headingTwo"  data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        nascar drivers
                    </div>
                </div>
            </div>
            {/*  nascar*/}
            {/*  college*/}
            <div className="accordion-item">
                <div id="ncaa_football" className="accordion-collapse collapse" aria-labelledby="college-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        ncaa footbal
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="ncaa_basket" className="accordion-collapse collapse" aria-labelledby="college-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        ncaa basket
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="ncaa_baseball" className="accordion-collapse collapse" aria-labelledby="college-headingThree" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        ncaa baseball
                    </div>
                </div>
            </div>
            {/*  COLLEGE*/}
            {/*  soccer*/}
            <div className="accordion-item">
                <div id="laLiga" className="accordion-collapse collapse" aria-labelledby="soccer-headingOne" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        laLiga
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="italia_sa" className="accordion-collapse collapse" aria-labelledby="soccer-headingTwo" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        Italia Serie A
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="bundesliga" className="accordion-collapse collapse" aria-labelledby="soccer-headingThree" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        bundesliga
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="england_premier_league" className="accordion-collapse collapse" aria-labelledby="soccer-headingFour" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        England Premier League
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="france_league_1" className="accordion-collapse collapse" aria-labelledby="soccer-headingFive" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        France League 1
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="Mexico_Liga_Apertura" className="accordion-collapse collapse" aria-labelledby="soccer-headingSix" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        Mexico_Liga_Apertura
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="Mexico_Liga_Expancion" className="accordion-collapse collapse" aria-labelledby="soccer-headingSeven" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        Mexico_Liga_Expancion
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="Mls" className="accordion-collapse collapse" aria-labelledby="soccer-headingEight" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        Mls
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="Brazil_Serie_A" className="accordion-collapse collapse" aria-labelledby="soccer-headingNine" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        Brazil Serie A
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="Colombia_Primera_A" className="accordion-collapse collapse" aria-labelledby="soccer-headingThen" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        Colombia Primera A
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="CR_P_División" className="accordion-collapse collapse" aria-labelledby="soccer-headingEleven" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        Costa Rica P División
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="Champions_League" className="accordion-collapse collapse" aria-labelledby="soccer-headingTwelve" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        Champions_League
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="Confederations_Cup" className="accordion-collapse collapse" aria-labelledby="soccer-headingThirteen" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        Confederations Cup
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="CONCACAF" className="accordion-collapse collapse" aria-labelledby="soccer-headingFourtheen" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        CONCACAF
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="World_Cup_Qualifying" className="accordion-collapse collapse" aria-labelledby="soccer-headingFiftheen" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        World Cup Qualifying
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="UEFA_Europa_League" className="accordion-collapse collapse" aria-labelledby="soccer-headingSixteen" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        UEFA_Europa_League
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="International_Friendlies" className="accordion-collapse collapse" aria-labelledby="soccer-headingSeventeen" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                        International_Friendlies
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div id="International_Matches" className="accordion-collapse collapse" aria-labelledby="soccer-headingEighteen" data-bs-parent="#allitems">
                    <div className="accordion-body p-1">
                    International Matches
                    </div>
                </div>
            </div>
            {/*  soccer*/}

        </div>
    )
} 