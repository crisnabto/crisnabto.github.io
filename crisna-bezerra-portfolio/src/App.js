import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
// import Main from './components/Main';
import Profile from './components/Profile';
import Context from './Context/Context';

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

    return (
      <Context.Provider
        value = { {
          showHome,
          setShowHome,
          showTimeline,
          setShowTimeline,
          showAbout,
          setShowAbout,
        }}
      >
        <div>
          <Header></Header>
          <Profile></Profile>
          <Footer />
          {/* <Main></Main> */}
        </div>
      </Context.Provider>
    )
}

export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

// export default App;
