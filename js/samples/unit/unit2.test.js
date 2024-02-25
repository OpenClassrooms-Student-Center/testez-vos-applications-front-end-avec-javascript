import { getAge } from './unit2.js'

describe('getAge Unit Test Suites', () => {
    it('should render "Vous avez actuellement 32 ans"', () => {
        expect(getAge(32)).toBe("Vous avez actuellement 32 ans")
    })
})
