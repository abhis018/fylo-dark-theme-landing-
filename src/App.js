import logo from './logo.svg';
import './App.css';
import snap from './bg-curvy-desktop.svg'
import Navigation from './components/Navigation/Navigation';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'tachyons';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${snap})` }}>
      <Navigation/>
      <Header/>
      <Body/>
      <Footer/> 
    </div>
  );
}

export default App;
