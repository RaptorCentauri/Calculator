
import * as React from 'react';
import {render} from 'react-dom';
import './index.scss'
import calculator from '../logic/calculator'
{/* import NumberBtn from './components/NumberBtn' */}


const buttonValues = {
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
  operators: ['+', '-', '*', '/', '(', ')', '^']
}
 


const App = () => {
  const {numbers, operators} = buttonValues;
  
  const [equation, setEquation] = React.useState('');
  const [solution, setSolution] = React.useState('');

  const handleClick = value => setEquation(`${equation}${value}`)
  
  const Button = ({value}) => <p className='button-style' onClick={() => handleClick(value)}> {value}</p>
  
  handleSolver = () => {
    let solved = calculator(equation);
    setSolution(solved)
  };
  
  handleClear = () => setEquation('');

  
  return(
    <React.Fragment>
      <h1 onClick={handleClear}>EQUATION (Click to clear): {equation}</h1>
      <h1 onClick={handleSolver}>SOLUTION: {solution}</h1>
      {numbers.map((num) => <Button key={num} value={num}/> )}
      {operators.map((op) => <Button key={op} value={op}/> )} 
    </React.Fragment>
  )
}

render(<App/>,window.document.getElementById('root'));
