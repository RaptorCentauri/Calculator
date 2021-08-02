
import * as React from 'react';
import {render} from 'react-dom';
import './index.scss'
import calculator from '../logic/calculator'
{/* import NumberBtn from './components/NumberBtn' */}

const buttons = [
  {
    display:'1',
    value:'1'
  },
  {
    display:'2',
    value:'2'
  },
  {
    display:'3',
    value:'3'
  },
  {
    display:'4',
    value:'4'
  },
  {
    display:'5',
    value:'5'
  },
  {
    display:'6',
    value:'6'
  },
  {
    display:'7',
    value:'7'
  },
  {
    display:'8',
    value:'8'
  },
  {
    display:'9',
    value:'9'
  },
  {
    display:'0',
    value:'0'
  },
  {
    display:'+',
    value:'+'
  },
  {
    display:'-',
    value:'-'
  },
  {
    display:'x',
    value:'*'
  },
  {
    display:'÷',
    value:'/'
  },
  {
    display:'(',
    value:'('
  },
  {
    display:')',
    value:')'
  },
  {
    display:'^',
    value:'^'
  },
  {
    display:'.',
    value:'.'
  },
  {
    display:'=',
    value:'='
  },
  {
    display:'C',
    value:'C'
  },
]
 


const App = () => {  
  const [equation, setEquation] = React.useState('');
  const [displayEquation, setDisplayEquation] = React.useState('');
  const [solution, setSolution] = React.useState();
    
  const handleClick = ({value, display}) => {
    switch (value) {
      case 'C':
        setEquation('');
        setDisplayEquation('');
        break;
      case '=':
        let solved = calculator(equation);
        setDisplayEquation(solved); 
        break;  
      default:
        setEquation(`${equation}${value}`)
        setDisplayEquation(`${displayEquation}${display}`)
        break;
     } 
  }
      
      
  const Button = ({value, display}) => <h6 className='button-style' button-value={value} onClick={() => handleClick({value, display})}> {display}</h6>
    

  
  return(
    <React.Fragment>
      <div className='equation-box'>
        <h1 className='equation-content'>{displayEquation}</h1>
      </div>
      <div className='button-layout'>
      {buttons.map((btn) => <Button key={btn.value} value={btn.value} display={btn.display}/> )}
      </div>
    </React.Fragment>
  )
}

render(<App/>,window.document.getElementById('root'));
