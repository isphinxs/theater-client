import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ShowsContainer from './containers/ShowsContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ShowsContainer />
      <Footer />
    </div>
  );
}

export default App;
