
import * as React from 'react';
import {render} from 'react-dom';
import './index.scss'
import calculator from '../logic/calculator'
{/* import NumberBtn from './components/NumberBtn' */}


const buttonValues = {
  numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ],
  operators: ['+', '-', '*', '/', '(', ')', '^', '.', '=', 'C']
}
 


const App = () => {
  const {numbers, operators} = buttonValues;
  
  const [equation, setEquation] = React.useState('');
  const [solution, setSolution] = React.useState();

  const handleClick = value => {
    if(value === 'C'){
      let clearEquation = '';
      setEquation(clearEquation);
    }
    
    else if(value === '='){
      let solved = calculator(equation);
      {/* setSolution(solved); */}
      setEquation(solved);
    }

    else{
      setEquation(`${equation}${value}`)
    }
  }
    
      
      
  const Button = ({value}) => <p className='button-style' onClick={() => handleClick(value)}> {value}</p>
    
  handleClear = () => setEquation('');

  
  return(
    <React.Fragment>
      <h1 className='equation'>{equation}</h1>
      <div className='button-layout'>
      {numbers.map((num) => <Button key={num} value={num}/> )}
      {operators.map((op) => <Button key={op} value={op}/> )} 
      </div>
    </React.Fragment>
  )
}

render(<App/>,window.document.getElementById('root'));
