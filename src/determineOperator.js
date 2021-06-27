/**
 * Returns a regular expression for the highest level operator in a mathematical expression using order of operations.
 * @param {string} str - A mathematical expression given as a string
 */

function determineOperator(str) {
	
	const operatorRegex = {
		hasAdditionOrSubtraction: /[+-]/g,
		hasMutliplicationOrDivision: /[*/]/g,
		hasExponent: /[\^]/g
	}
		
	let  determinedOperator
		
	switch (true) {
	case operatorRegex['hasExponent'].test(str): 
		determinedOperator = operatorRegex['hasExponent']
		break
	case operatorRegex['hasMutliplicationOrDivision'].test(str):
		determinedOperator = operatorRegex['hasMutliplicationOrDivision']
		break
	case operatorRegex['hasAdditionOrSubtraction'].test(str):
		determinedOperator = operatorRegex['hasAdditionOrSubtraction']
		break
	}
		
	return determinedOperator
		
}
 
export default determineOperator