import './App.css';
import Title from './components/Title';

function App() {
  return (
    <>
      <Title />
      <div className="App bg-gray-300 bg-cover h-screen flex justify-center">
        <img src='profile.jpg' alt='Profile' className='rounded-full mt-40 pointer-events-none h-44 xs:sm:h-52 md:xl:h-64'></img>
      </div>
    </>
  );
}

export default App;
