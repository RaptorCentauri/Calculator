import reduceExpression from './reduceExpression'
import reduceParentheses from './reduceParentheses'

function calculator(str) {
  let hasNonNumberCharacter = /[\(\^\*\/\+\-]/g.test(str);
  let hasAddition = /\+/.test(str);
  let hasSubtraction = /\-/.test(str);
  let hasMulitplication = /\*/.test(str);
  let hasDivision = /\//.test(str);
  let hasParentheses = /\(/.test(str);
  let hasExponent = /\^/.test(str);

  if (hasNonNumberCharacter) {
    
    let nextSolve = '';

    if (hasParentheses) {
      nextSolve = reduceParentheses(str);
    } else if (hasExponent) {
      nextSolve = reduceExpression(str, /[\^]/);
    } else if (hasMulitplication || hasDivision) {
      nextSolve = reduceExpression(str, /[\*\/]/);
    } else if (hasAddition || hasSubtraction) {
      nextSolve = reduceExpression(str, /[\+\-]/);
    }

    return calculator(nextSolve)
  } else {
    return str
  }
  
};

export default calculator
