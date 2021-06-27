const solveExpression = (str) => {
	let negativeModifier = 1
	if (str[0] === '-') {
		str = str.substring(1, str.length)
		negativeModifier = -1
	}
  
	let operatorIndex = str.search(/[\+\-\^\*\/]/g)
	let leftSide = str.substring(0, operatorIndex)
	let rightSide = str.substring(operatorIndex + 1, str.length)

	switch (str[operatorIndex]) {
	case '^':
		return negativeModifier * parseFloat(leftSide) ** parseFloat(rightSide)
	case '*':
		return negativeModifier * (parseFloat(leftSide) * parseFloat(rightSide))
	case '/':
		return negativeModifier * (parseFloat(leftSide) / parseFloat(rightSide))
	case '+':
		return negativeModifier * (parseFloat(leftSide) + parseFloat(rightSide))
	case '-':
		return negativeModifier * (parseFloat(leftSide) - parseFloat(rightSide))
	}
}

export default solveExpression
