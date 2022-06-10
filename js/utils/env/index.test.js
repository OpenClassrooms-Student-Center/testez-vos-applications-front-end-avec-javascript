import { isInTestEnv } from './index'

describe('isInTestEnv Unit test', () => {
    it('should be in test env' , () => {
        expect(isInTestEnv()).toBe(true)
    })
<<<<<<< HEAD

    it ('should not be in test', () => {
        process.env.NODE_ENV = 'dev';
        expect(isInTestEnv()).not.toBe(true);
    })
})
=======
    
    it('should not be in test env', () => {
        process.env.NODE_ENV = 'dev'
        expect(isInTestEnv()).not.toBe(true)
    })
})
>>>>>>> main
