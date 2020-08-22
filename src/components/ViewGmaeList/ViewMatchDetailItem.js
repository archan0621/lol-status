import React, { Component } from 'react';
import { GetGameData } from '../lib';
import '../../css/ViewMatchDetailItem.css';

class ViewMatchDetailItem extends Component {
    render(){
        const { participants, player, teams, summoner } = this.props;
        const gmaeData = GetGameData;
        const userTeam = teams.filter((item)=> item.teamId === participants.teamId);
        let kills = "";
            kills = participants.stats.doubleKills > 0 ? "더블킬" : kills ;
            kills = participants.stats.tripleKills > 0 ? "트리플킬" :kills ;
            kills = participants.stats.quadraKills > 0 ? "쿼드라킬" :kills ;
            kills = participants.stats.quadraKills > 0 ? "팬타킬" :kills ;
        return (
            <div className={`ViewMatchDetailItem ${userTeam[0].win} col-md-12 ${summoner.name === player.summonerName ? "myState" : null}`}>
                <div className="col-md-2 col-sm-2 col-3"><img src={`http://opgg-static.akamaized.net/images/lol/champion/${gmaeData.getChampData(participants.championId).key}.png?image=w_52&v=1`} alt="CampIcon"/></div>
                <div className="col-md-3 col-sm-3 col-4 summonerName"><h6>{player.summonerName}</h6></div>
                <div className="DetailItemIcon col-md-2 col-sm-3 d-none d-sm-block">
                    {participants.stats.item0 === 0 ? null : <img src={gmaeData.getItemUrl(participants.stats.item0)} alt="item01"/>}
                    {participants.stats.item1 === 0 ? null : <img src={gmaeData.getItemUrl(participants.stats.item1)} alt="item02"/>}
                    {participants.stats.item2 === 0 ? null : <img src={gmaeData.getItemUrl(participants.stats.item2)} alt="item03"/>}
                    {participants.stats.item3 === 0 ? null : <img src={gmaeData.getItemUrl(participants.stats.item3)} alt="item04"/>}
                    {participants.stats.item4 === 0 ? null : <img src={gmaeData.getItemUrl(participants.stats.item4)} alt="item05"/>}
                    {participants.stats.item5 === 0 ? null : <img src={gmaeData.getItemUrl(participants.stats.item5)} alt="item06"/>}
                </div>
                <div className="col-md-2 col-sm-2 col-3 text-center kdaState">KDA<br/>{`${participants.stats.kills} / ${participants.stats.deaths} / ${participants.stats.assists}`}<br/><span className="badge badge-danger">{kills}</span></div>
                <div className="col-md-2 col-sm-2 col-2 text-right"><span className={`badge badge-danger ${userTeam[0].win}`}>{userTeam[0].win}</span></div>
            </div>
        );
    }
}
export default ViewMatchDetailItem;

