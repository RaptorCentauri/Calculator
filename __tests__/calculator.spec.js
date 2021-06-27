import calculator from '../src/calculator'

describe('calculator', function () {
	test('should add two positive integers', () => {
		let solution = calculator('3+5')
		expect(solution).toBe(8)
	})
	
	test('should divide two positive integers', () => {
		let solution = calculator('15/5')
		expect(solution).toBe(3)
	})
	
	test('should return a number', () => {
		let solution = calculator('3+5')
		expect(isNaN(solution)).toBeFalsy()
	})
	
})