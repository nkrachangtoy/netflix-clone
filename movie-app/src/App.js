import './styles/main.css';
import requests from './requests';

// Page component //
import Header from './components/Header';
import Row from "./components/Row";


function App() {
  return (
  
    <div className="App">
      <Header />
      <Row 
        title="Top 10 Today" 
        fetchUrl={requests.popularMovies}
        // isLargeRow
      />
      <Row title="Upcoming" fetchUrl={requests.upcomingMovies} />
      <Row title="Netflix Originals" fetchUrl={requests.netflixOriginals} />
      <Row title="Top Rated" fetchUrl={requests.topRated}/>
      <Row title="Action Movies" fetchUrl={requests.actionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.comedyMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.romanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.documentaries}/>
    </div>

  );
}

export default App;
