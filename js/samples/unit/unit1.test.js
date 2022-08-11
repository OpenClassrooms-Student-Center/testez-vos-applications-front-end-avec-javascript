import { sayHello } from './unit1'

describe('SayHello Unit Test Suites', () => {
    it('should return "Hello, World " ', () => {
    expect(sayHello()).toBe("Hello, World")
    })
    it('should return "Hello, j0j0"', () => {
        expect(sayHello('j0j0')).toBe("Hello, j0j0")
    })
    it('should not return "Hello, j0j0', () => {
        expect(sayHello('Toto')).not.toBe("Hello, j0j0")
    })
    it('should return "Hello, Ass Hole"', () => {
        expect(sayHello("GuiGui")).toBe("Hello, Ass Hole")
    })
})