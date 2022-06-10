import { data } from '../../../../data/mock-homepage-data.js'

import { isInTestEnv } from '../../env/index.js'

export const retrieveSensorsData = () => isInTestEnv()
    ? data.facades
    : fetch('http://localhost:5500/data/homepage-data.json')
        .then(res => res.json())
        .then(data => data.facades)
        .catch(err => console.log("Oh no", err))
