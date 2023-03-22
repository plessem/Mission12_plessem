import React from 'react';
import './App.css';

// list of basketball teams
const teamNames = [
  {"tid": 159, "cid": 0, "did": 0, "school": "Boston College", "name": "Eagles", "abbrev": "BC", "pop": 161, "city": "Chestnut Hill", "state": "MA", "latitude": 42.330, "longitude": -71.166},
  {"tid": 105, "cid": 0, "did": 0, "school": "Clemson", "name": "Tigers", "abbrev": "CLEM", "pop": 215, "city": "Clemson", "state": "SC", "latitude": 34.678, "longitude": -82.839},
  {"tid": 109, "cid": 0, "did": 0, "school": "Florida State", "name": "Seminoles", "abbrev": "FSU", "pop": 211, "city": "Tallahassee", "state": "FL", "latitude": 30.442, "longitude": -84.298},
  {"tid": 18, "cid": 0, "did": 0, "school": "Louisville", "name": "Cardinals", "abbrev": "UL", "pop": 302, "city": "Louisville", "state": "KY", "latitude": 38.25, "longitude": -85.766},
  {"tid": 31, "cid": 0, "did": 0, "school": "North Carolina State", "name": "Wolfpack", "abbrev": "NCST", "pop": 289, "city": "Raleigh", "state": "NC", "latitude": 35.786 , "longitude": -78.682},
  {"tid": 287, "cid": 19, "did": 39, "school": "Houston Baptist", "name": "Huskies", "abbrev": "HBU", "pop": 33, "city": "Greater Sharpstown", "state": "TX", "latitude": 29.694 , "longitude": -95.515}  

];

function Welcome() {
  return(
    <h2>Below is a list of NCAA Basketball teams with their mascot and location.</h2>
  );
}

class Team extends React.Component <{school:string, name: string, city:string, state:string}>{
  render() {

    const oneTeam = this.props;

    // loading in information for each team
    return(
      <div>
        <h3>{oneTeam.school}</h3>
        <p>Mascot: {oneTeam.name}</p>
        <p>City: {oneTeam.city}</p>
        <p>State: {oneTeam.state}</p>
        <br></br>
      </div>
    );
  }
}


function TeamsList() {
  return(
    <div>
      {/* printing information about each team for the length of the list */}
      {teamNames.map(oneTeam => <Team {...oneTeam}/>)}
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        

        {/* loading in the other functions */}
        <Welcome/>
        <TeamsList/>

      </header>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome to the website</h1>

//         {/* Basketball teams */}


//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;


