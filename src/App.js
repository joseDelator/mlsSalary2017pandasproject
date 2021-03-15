
import './App.css';
import Topsala from './componets/Topsala'
import Clubsala from './componets/Clubsala'
import Positionsala from './componets/positionsala'
import Positionprice from './componets/positionprice';
import Salarygrowth from './componets/SalaryGrowth';

function App() {
  return (
    <div className='App'>
      <h1>MLS Salary Data from   2017</h1>
      <div className="grid_container">
      <Clubsala/>
      <Topsala/>
      <Positionsala/>
      <Positionprice/>
      <Salarygrowth/>
      </div>
    </div>
  );
}

export default App;
