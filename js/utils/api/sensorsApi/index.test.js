<<<<<<< HEAD:js/utils/api/sensorsApi.test.js
import { retrieveSensorsData } from './sensorsApi'
import { data } from '../../../data/mock-homepage-data'
=======
import { data } from '../../../../data/mock-homepage-data'

import { retrieveSensorsData } from './index'
>>>>>>> main:js/utils/api/sensorsApi/index.test.js

describe ('sensorApi Unit Test', ()=>{
    it('should return the mocked data', ()=>{
        expect(retrieveSensorsData()).toBe(data.facades)
    })
})