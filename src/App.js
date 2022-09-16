import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiData, setApiData] = React.useState("");
  const getApiData = React.useCallback(async (req) => {
    const rsp = await fetch(req);
    const jsn = await rsp.json();
    const str = JSON.stringify(jsn, null, 4);
    setApiData(str);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, <code>CardanoCLI</code>!
          <br/>
          <button onClick={() => {
            getApiData("/queryTip");
          }}>Query Tip</button>
        </p>
        <div className="ApiData">
          <pre>
            {apiData}
          </pre>
        </div>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >Learn React</a>
        </p>
      </header>
    </div>
  );
}

export default App;
