
import './App.css';
import LeftCv from './LeftCv';
import RightCv from './RightCv';

function App() {
  return (
    <div className="flex">
      <div className='first'>
        <LeftCv />
      </div>
      <div className='second'>
        <RightCv  />
      </div>
    </div>
  );
}

export default App;
