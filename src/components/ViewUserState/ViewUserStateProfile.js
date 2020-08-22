import React,{ Component } from 'react';
import AnimatedNumber from 'react-animated-number';
import { GetUserMMR } from '../lib';
import '../../css/ViewUserStateProfile.css';

class ViewUserStateProfile extends Component {
    render() {
        const { summoner, league, myRank, myVS  } = this.props;
        const userMMR = GetUserMMR;
        const mmrData = userMMR.getTierMMR(league, myRank)[0].mmr + userMMR.getWinningRateMMR(myVS);
        const mmrComment = userMMR.getCommntData(mmrData, league, myRank);
        return (
            <div className="card-block padding1em">
                <div className="col-md-4 col-sm-6">
                    <div className="leftImgSection">
                        <img src={`//opgg-static.akamaized.net/images/profile_icons/profileIcon${summoner.profileIconId}.jpg`} alt="ProfileImg"/>
                        <img src={`//opgg-static.akamaized.net/images/borders2/${league.tier.toLowerCase()}.png`} alt="ProfileImgBorder"/>
                        <span className="profileLevel" alt="UserLevel">{summoner.summonerLevel}</span>
                    </div>
                </div>    
                <div className="col-md-4 col-sm-6 tierTextArea">
                    <h4 className="card-title">{league.playerOrTeamName}</h4>
                    <p className="card-text">{league.leagueName}</p>
                    <p className="card-text commentText">{mmrComment}</p>
                </div>
                <div className="col-md-4 text-center padding1em">
                    <p className="animateNumberAreaTitle">Rank MMR</p>
                    <div className="animateNumberArea text-center">
                        <AnimatedNumber 
                            component="span" 
                            default={0}
                            value={mmrData}
                            style={{
                                transition: '0.8s ease-out',
                                fontSize: 48,
                                color: '#333',
                                fontWeight:'bold',
                                transitionProperty:'background-color, color, opacity'
                            }}
                            duration={300}
                        />
                    </div>
                </div>
            </div>
        );

    }
}

export default ViewUserStateProfile;