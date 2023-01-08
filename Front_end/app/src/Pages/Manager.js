import React from 'react';
import './Manager.css';

const TrainSchedule = () => {
return (
<div style={{
   backgroundColor: 'white',
   width: '100%',
   height: '100%',
}}>
   <h1 className="custom-h1">Manager Reference</h1>
   <button type="button" className='custom-button' >Show Train Schedule</button>
   <h2 className='custom-h2'> Train Schedule </h2>
   <table-1>
      <thead>
        <tr>
          <th>Train ID</th>
          <th>Route ID</th>
          <th>Capacity</th>
          <th>Loaded Capacity</th>
          <th>Depart Time</th>
        </tr>
      </thead>
   
    </table-1>

    <h2 className='custom-h2-2'> Assistant </h2>
   <table-2>
      <thead>
        <tr>
          <th>Truck</th>
          <th>Assistant name</th>
          <th>Driver name</th>
        </tr>
      </thead>
   
    </table-2>

    <h2 className='custom-h2-3'> Report </h2>
   
   
       </div>
);
};
export default TrainSchedule;