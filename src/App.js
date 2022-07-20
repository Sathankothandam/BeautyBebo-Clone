
import Routers from './AllRoutes/Routes';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routers/>
      <Footer/>
    </div>
  );
}

export default App;
