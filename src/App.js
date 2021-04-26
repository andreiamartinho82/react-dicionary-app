import './App.css';
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} className="logo" alt="logo"/>
        </header>
        <main>
          <Dictionary />
        </main>

        <footer className="footer">Coded by Andreia Martinho</footer>

      </div>
     </div>
  );
}

export default App;
