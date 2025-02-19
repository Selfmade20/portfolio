import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />
      </main>
    </div>
  );
}

export default App;
