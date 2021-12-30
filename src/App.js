
import './App.css';
import TinderCards from './components/TinderCards';
import Header from './Header';
import SwipeButtons from './components/SwipeButtons';


function App() {
  return (
    <div className="app">
    
     <Header/>

    <TinderCards></TinderCards>
    
    <SwipeButtons></SwipeButtons>

    </div>
  );
}

export default App;
