import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
  <Routes>
    <Route
      element={<>HOME<React.Fragment key=".1"><div><Link to="/">Home</Link></div><div><Link to="/about">About</Link></div></React.Fragment></>}
      path="/"
    />
    <Route
      element="ABOUT"
      path="/about"
    />
  </Routes>
</div>
        <div style={{ color: 'gray' }}>Deployed with NodeSpell</div>
      </header>
    </div>
  );
}

export default App;