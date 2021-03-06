import calculator from '../src/logic/calculator'

describe('calculator', function () {
	test('should add two positive integers', () => {
		let solution = calculator('3+5')
		expect(solution).toBe(8)
	})

	test('should divide two positive integers', () => {
		let solution = calculator('15/5')
		expect(solution).toBe(3)
	})

	test('the equation (5*3)^2+14/7*(125) should be 475', () => {
		let solution = calculator('(5*3)^2+14/7*125')
		expect(solution).toBe(475)
	})

	test('the equation 6*(2+3) should be 30', () => {
		let solution = calculator('6*(2+3)')
		expect(solution).toBe(30)
	})

	test('should return a number', () => {
		let solution = calculator('3+5')
		expect(isNaN(solution)).toBeFalsy()
	})
	
	test('should work with negative numbers 5', () => {
		let solution = calculator('8*(12/-2)')
		expect(solution).toBe(-48)
	})
	
	test('should treat a number followed by () as multiplication', () => {
		let solution = calculator('5(6+2)')
		expect(solution).toBe(40)
	})
	
})


