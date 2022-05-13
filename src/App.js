import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import foods from './foods.json';

function App() {
  const [food, setFood] = useState(foods);

  const addFood = food => {
    setFood([...food, food]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <AddFoodForm addFood={addFood} />
      <h1>Food List</h1>

      {food.map(food => {
        return <FoodBox food={food} />;
      })}
    </div>
  );
}

export default App;
