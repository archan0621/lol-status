import React, { Component } from 'react';
import ViewUserState from './ViewUserState/ViewUserState';
import ViewListTemplate from './ViewGmaeList/ViewListTemplate';
import '../css/ViewListWrapper.css';

class ViewListWrapper extends Component {
    render() {
      const { summoner, league, match, getPreferData } = this.props;
      return (
        <div className="viewListWrapper col-md-12">
          <ViewUserState summoner={summoner} league={league} match={match} getPreferData={getPreferData}/>
          <ViewListTemplate summoner={summoner} league={league} match={match} />
        </div>
      );
    }
}


export default ViewListWrapper;