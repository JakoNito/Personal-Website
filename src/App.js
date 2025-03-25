import './App.css';
import Profile from './components/Profile';
import Title from './components/Title';

function App() {
  return (
    <div className='App bg-[url(../public/piha2.jpg)] bg-cover'>
      <Title />
      <Profile />
    </div>
  );
}

export default App;
