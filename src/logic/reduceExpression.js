import solveExpression from './solveExpression.js'

function reduceExpression(str, regex) {
	let allOperatorsRegex = /[\^/*+-]/g
	let hasMultipleOperators = str.match(allOperatorsRegex).length > 1
	let leftBoundIndex = 0
	let righBoundIndex = str.length
	let simplifiedExpression = str

	if (hasMultipleOperators) {
		let outOfBoundsLeft = ''
		let outOfBoundsRight = ''

		let indexOfOperator = str.search(regex)

		if (str.search(allOperatorsRegex) < indexOfOperator) {
			leftBoundIndex = str.search(allOperatorsRegex) + 1
		}

		if (
			str.substring(indexOfOperator + 1, str.length).search(allOperatorsRegex) >
			-1
		) {
			righBoundIndex =
				str
					.substring(indexOfOperator + 1, str.length)
					.search(allOperatorsRegex) +
				indexOfOperator +
				1
		}

		if (leftBoundIndex > 0) {
			str.substring(0, leftBoundIndex)
		}

		outOfBoundsLeft = leftBoundIndex > 0 ? str.substring(0, leftBoundIndex) : ''
		outOfBoundsRight = str.substring(righBoundIndex, str.length)

		let toSolve = str.substring(leftBoundIndex, righBoundIndex)

		let solved = solveExpression(toSolve)

		simplifiedExpression = `${outOfBoundsLeft}${solved}${outOfBoundsRight}`
	} else {
		simplifiedExpression = solveExpression(str)
	}

	return simplifiedExpression
}

export default reduceExpression
