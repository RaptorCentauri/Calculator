import reduceExpression from './reduceExpression.js'
import determineOperator from './determineOperator.js'

function reduceParentheses(str) {
	let lastOpenParentheses = str.lastIndexOf('(')
	let nearestCloseParentheses = str.indexOf(')', lastOpenParentheses)
	let expressionToEvaluate = str.substring(
		lastOpenParentheses + 1,
		nearestCloseParentheses,
	)
	

	let leftOfParenthesesIsNumber = !isNaN(str[lastOpenParentheses-1])
	
	let determinedOperator = determineOperator(expressionToEvaluate)

	let simplifiedExpression = reduceExpression(
		expressionToEvaluate,
		determinedOperator,
	)

	let start = `${str.substring(0, lastOpenParentheses)}`
	let middle = `${leftOfParenthesesIsNumber ? '*' : ''}${simplifiedExpression}`
	let end =
		lastOpenParentheses > 0
			? `${str.substring(nearestCloseParentheses, str.length-1)}`
			: `${str.substring(nearestCloseParentheses + 1, str.length + 1)}`
			
			
	let reducedExpression = `${start}${middle}${end}`
	
	return reducedExpression
}

export default reduceParentheses
