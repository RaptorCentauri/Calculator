import solveExpression from '../src/solveExpression'

describe('solveExpression', function () {
	test('should add two positive integers', () => {
		let solution = solveExpression('3+5')
		expect(solution).toBe(8)
	})
	
	test('should multiply two positive integers', () => {
		let solution = solveExpression('5*7')
		expect(solution).toBe(35)
	})
	
	test('should return a number', () => {
		let solution = solveExpression('3+5')
		expect(isNaN(solution)).toBeFalsy()
	})
	
})