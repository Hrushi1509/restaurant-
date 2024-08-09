import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import List from './components/List';

function App() {
  return (
    <div className='h-auto'>
      <Header/>
      <Body/>
      <List/>
    </div>
  );
}

export default App;
