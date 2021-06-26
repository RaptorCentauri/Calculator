import reduceExpression from './reduceExpression'
import reduceParentheses from './reduceParentheses'
import determineOperator from './determineOperator'

function calculator(str: string) {
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