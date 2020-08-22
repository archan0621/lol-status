import React, { Component } from 'react';
import { GetGameData } from '../lib';
import ViewMatchDetailTemplate from './ViewMatchDetailTemplate'
import axios from 'axios';
import ApiDefault from '../ApiDefault'
import '../../css/ViewListItem.css';

class ViewListItem extends Component {
    state = {
        toggle : false
    }
    handleToggleItem = (gameId) => {
        const matchDetailUrl = `${ApiDefault.url}/match/v3/matches/${this.props.match.gameId}?api_key=${ApiDefault.key}`;   
        axios.get(matchDetailUrl)
        .then( Detaildata => {
            this.setState({
                toggle : !this.state.toggle,
                matchDetail : Detaildata.data
            })
            console.log(Detaildata);
        }).catch( error => console.log("Data가 없습니다."));
    }
    render(){
        const { match, summoner } = this.props,
        gmaeData = GetGameData,
        toggleDetail = !this.state.toggle ? "toggleTeam-area" : "toggleTeam-area toggleTeam",
        champData = gmaeData.getChampData(match.champion),
        gmaeTime = gmaeData.getGameTime(match.timestamp),
        playLane = match.role === 'DUO_SUPPORT' && match.lane === 'BOTTOM' ? 'SUPPORT' : match.lane,
        laneObject = gmaeData.getLaneIconData(playLane)[0],
        viewDetail = <ViewMatchDetailTemplate summoner={summoner} handleToggleItem={this.handleToggleItem} match={this.state.matchDetail}/>;
        return (
            <div className="gameList-area col-md-12">
                <div className="col-md-2 col-sm-4 col-6">
                    <img src={`http://opgg-static.akamaized.net/images/lol/champion/${champData.key}.png?image=w_55&v=1`} alt="CampIcon"/>
                </div>
                <div className="col-md-3 col-sm-4 col-6">
                    <h5 className="champName">{champData.name}</h5>
                    <h6 className="champTitle">{champData.title}</h6>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                    <div className="champLane" style={laneObject.miniStyle}></div>
                    <h6 className="champLaneName">{laneObject.lane}</h6>
                </div>
                <div className="col-md-3 col-sm-4 col-6">
                    <h6 className="gameTime">{gmaeTime}</h6>
                    <a className="badge badge-secondary">Season {match.season}</a>
                </div>
                <div className="col-md-2 col-sm-8 col-12">
                    <div className="btn btn-success btn-sm" onClick={this.handleToggleItem}>상세보기 ▼</div>
                </div>
                <div className={toggleDetail}>
                    {this.state.toggle === true ? viewDetail : null}
                </div>
            </div>
        );
    }
}
export default ViewListItem;

