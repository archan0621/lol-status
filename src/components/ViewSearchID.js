import React from 'react';

const ViewSearchID = ({ handleChange, handleKeyPress, getLOLData }) => (
  <div className="col-md-12">
  <br/>
    <div className="input-group col-md-12">
      <input type="text" className="form-control" placeholder="ID를 입력해주세요" onChange={handleChange} onKeyPress={handleKeyPress}/>
      <span className="input-group-addon" onClick={getLOLData}>검색</span>
    </div>
  </div>
);

export default ViewSearchID;