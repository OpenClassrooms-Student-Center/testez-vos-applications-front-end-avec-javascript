import { getAge } from './unit2'

describe('Unit 2 getAge Unit Test Suites', () => {
    it('should render "Vous avez actuellement 31 ans"', () => {
        expect(getAge(31)).toBe("Vous avez actuellement 31 ans")
    })
})