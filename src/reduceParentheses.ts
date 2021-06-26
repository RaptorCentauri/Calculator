import reduceExpression from './reduceExpression'
import determineOperator from './determineOperator'

function reduceParentheses(str) {
	
	let lastOpenParentheses = str.lastIndexOf('(');
	let nearestCloseParentheses = str.indexOf(')', lastOpenParentheses);
	let expressionToEvaluate = str.substring(
	  lastOpenParentheses + 1,
	  nearestCloseParentheses
	);
	
	let determinedOperator = determineOperator(expressionToEvaluate);
		
	let simplifiedExpression = reduceExpression(expressionToEvaluate, determinedOperator);

	let start = `${str.substring(0, lastOpenParentheses)}`;
	let middle = `${simplifiedExpression}`;
	let end =
	  lastOpenParentheses > 0
		? `${str.substring(nearestCloseParentheses, str.length)}`
		: `${str.substring(nearestCloseParentheses + 1, str.length+1)}`;

	let reducedExpression = `${start}${middle}${end}`;
	
	return reducedExpression;
  }
  
  export default reduceParentheses