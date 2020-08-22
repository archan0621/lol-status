import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import champData from '../../static-data/champ-static-data';
import ViewUserStateProfile from './ViewUserStateProfile';
import '../../css/ViewUserState.css';
import 'react-circular-progressbar/dist/styles.css';


class ViewUserState extends Component {
    render() {
        const { summoner, league, match, getPreferData } = this.props;
        const rankMacthes = match.matches.filter((item) => item.queue === 420);
        const preferData = getPreferData(match.matches);

        let myRank, myVS, preferDetailChamp;
        switch (league.rank){ case "I" : myRank = 1; break; case "II" : myRank = 2; break; case "III" : myRank = 3; break; case "IV" : myRank = 4; break; case "V" : myRank = 5; break; default : myRank = "I"; }
        myVS = Math.round((league.wins / (league.wins + league.losses))*100) ;

        for (let i in champData.data) {
            if(champData.data[i].id === preferData.preferChamp[0]) preferDetailChamp = champData.data[i]
        }
        
        let champStyle = {
            backgroundImage: `url('//opgg-static.akamaized.net/images/lol/champion/${preferDetailChamp.key}.png?image=w_60&v=1')`,
            backgroundSize: "100% 100%"
        }
        return (
            <div className="topProfileStateWrapper col-md-12">
                <div className="col-sm-12 nopadding">
                    <div className="card col-sm-12 text-left">
                        <ViewUserStateProfile 
                            summoner = {summoner}
                            league = {league}
                            match = {rankMacthes}
                            preferData = {preferData}
                            myRank = {myRank}
                            myVS = {myVS}
                        />
                        <hr/>
                        <div className="col-md-12 padding1em">
                            <div className="col-md-4 col-sm-6 text-center">
                                <div className="tierImg">
                                    <img src={`//opgg-static.akamaized.net/images/medals/${league.tier.toLowerCase()}_${myRank}.png`} alt="ProfileImg"/><br/>
                                </div>
                            </div>   
                            <div className="col-md-4 col-sm-6 text-center">
                                <h6>{league.tier} {league.rank}</h6>
                                <p><b>{league.leaguePoints} P</b> / {league.wins}승 {league.losses}패 {myVS}%</p>
                                <div className="preferWrap">
                                    <div className="preferChamp" style={champStyle}>
                                        <span>{preferDetailChamp.name}</span>
                                    </div>
                                    <div className="preferLine" style={preferData.preferLane.style}>
                                        <span>{preferData.preferLane.lane}</span>
                                    </div>
                                </div>
                            </div>   
                            <div className="col-md-4 circularProgressbarStyle text-center">
                                <CircularProgressbar percentage={myVS} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default ViewUserState;