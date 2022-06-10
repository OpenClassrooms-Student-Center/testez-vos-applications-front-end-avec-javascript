import { isInTestEnv } from '../../env/index.js'
import { data } from '../../../../data/mock-facade-detail-data.js'


export const retrieveSensorsDetailsData = () => {
    if (isInTestEnv()) {
        return data.facade
    }

    return fetch('http://localhost:5500/data/facade-detail-data.json')
        .then(res => res.json())
        .then(data => data.facade)
        .catch(err => console.log("Oh no", err))
}