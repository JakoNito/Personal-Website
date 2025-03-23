import './App.css';

function App() {
  return (
    <>
      <div className="App bg-[url(./assets/images/queenstown.jpg)] bg-cover h-screen flex items-center justify-center">
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-8xl text-white' style={{ textShadow: '5px 5px 10px gray' }}>Jan Karlo Nito</h1>
          <h2 className='text-white mx-20 font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[30px] lg:leading-[40px] lg:mt-12 text-center'
            style={{ textShadow: '5px 5px 10px gray' }}>
            Software developer based in Auckland, New Zealand
          </h2>
        </div>
      </div>


      <div className="App bg-[#6094e8] bg-cover h-screen flex justify-center">
        <img src='profile.jpg' alt='Profile' className='rounded-full mt-40 pointer-events-none h-44 xs:sm:h-52 md:xl:h-64'></img>
      </div>
    </>
  );
}

export default App;
