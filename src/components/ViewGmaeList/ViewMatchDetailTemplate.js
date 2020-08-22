import React, { Component, Fragment } from 'react';
import ViewMatchDetailItem from './ViewMatchDetailItem';
import '../../css/ViewMatchDetailTemplate.css';

class ViewMatchDetailTemplate extends Component {
    render(){
        const { match, summoner } = this.props;
        const viewDetailItem = match.participants.map((item, i) => {
            let player = match.participantIdentities.filter((itm)=> itm.participantId === item.participantId);
            return <ViewMatchDetailItem participants={item} player={player[0].player} summoner={summoner} teams={match.teams} key={i}/>;
        });
        
        return (
            <Fragment>
                {viewDetailItem}
            </Fragment>
        );
    }
}
export default ViewMatchDetailTemplate;

