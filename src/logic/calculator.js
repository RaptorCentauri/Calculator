import reduceExpression from './reduceExpression.js'
import reduceParentheses from './reduceParentheses.js'
import determineOperator from './determineOperator.js'

function calculator(str) {
	//make better
	let onlyNumbers = /^-?[0-9]\d*(\.\d+)?$/.test(str)

	let hasParentheses = /[()]/g.test(str)

	if (onlyNumbers) {
		return parseFloat(str)
	} else {
		let nextSolve

		if (hasParentheses) {
			nextSolve = reduceParentheses(str)
		} else {
			let determinedOperator = determineOperator(str)
			nextSolve = reduceExpression(str, determinedOperator)
		}

		return calculator(nextSolve)
	}
}

export default calculator
