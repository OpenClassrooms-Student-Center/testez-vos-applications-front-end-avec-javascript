import { retrieveSensorsData } from './sensorsApi'
import { data } from '../../../data/mock-homepage-data'

describe ('sensorApi Unit Test', ()=>{
    it('should return the mocked data', ()=>{
        expect(retrieveSensorsData()).toBe(data.facades)
    })
})