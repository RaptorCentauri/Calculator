import reduceExpression from './reduceExpression.js'
import reduceParentheses from './reduceParentheses.js'
import determineOperator from './determineOperator.js'

function calculator(str) {
  let hasNonNumberCharacter = /[\(\^\*\/\+\-]/g.test(str);
  let hasParentheses = /\(/.test(str);

  if (hasNonNumberCharacter) {
    
    let nextSolve;

    if (hasParentheses) {
      nextSolve = reduceParentheses(str);
    }
    else {
      let determinedOperator = determineOperator(str);
      nextSolve = reduceExpression(str, determinedOperator);
    } 
    
    return calculator(nextSolve)
  } else {
    return str
  }
  
};

export default calculator