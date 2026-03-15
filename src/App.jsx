import { Navbar } from './Components/Navbar';
import Ini from './Components/Ini';
import Cupones from './Components/Cupones';
import Crucigrama from './Components/Crucigrama';
import './App.css';

function App() {
  return (
  <div className="min-h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen font-inter">
        <Ini />
      </div>
    <div className='font-inter'>
      <Cupones/>
    </div>
    <div className='font-inter'>
    <Crucigrama/>
    </div>
  </div>
  );
}

export default App;