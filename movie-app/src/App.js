import './styles/main.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";

// Page component //
import Header from './components/Header';
import Row from "./components/Row";

function App() {
  return (
  
    <div className="App">
      <Header />
      <Row title="Netflix Originals" />
      <Row title="Trending" />
    </div>

  );
}

export default App;
