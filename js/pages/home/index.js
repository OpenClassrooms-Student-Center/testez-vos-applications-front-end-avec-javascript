import Header from '../common/header/index.js'
import Pagination from '../common/pagination/index.js'

import { retrieveSensorsData } from '../../utils/api/sensorsApi/index.js'

import { ITEMS_PER_PAGE } from '../../constants.js'

const Home = {
    offset: 0,
    sensors: null,
    renderSensorsCard: sensors => {
        let $sensorsWrapper = '<div class="sensors-wrapper">'
        
        for (let i = Home.offset; i < ITEMS_PER_PAGE + Home.offset; i++) {
            $sensorsWrapper += `
                <div class="sensor-card">
                    <img
                        class="sensor-img"
                        src="/assets/${sensors[i].img}"
                        alt="Capteur numéro 1"
                    >
                    <div class="sensor-info">
                        <h3>Capteur #${sensors[i].id}</h3>
                        <span class="sensor-info-location">
                            Localisation : ${sensors[i].location}
                        </span>
                        <span class="sensor-info-status">Status :
                            <span class="on">actif</span>
                        </span>
                        <a class="sensor-info-btn" href="#/facade-details">
                            Voir les détails
                        </a>
                    </div>
                </div>
            `
        }

        $sensorsWrapper += '</div>'
        return $sensorsWrapper
    },

    render: async () => {
        const sensors = await retrieveSensorsData()
        Home.sensors = sensors

        return await `
            <div class="home-page">
                <div class="home-page-main-wrapper">
                    ${Header.render()}
                    <main class="home-page-main">
                        <div class="home-page-main-top-header">
                            <h2 data-testid="home-sensors-title" class="section-title">Vos capteurs</h2>
                        </div>
                        ${Home.renderSensorsCard(sensors)}
                        ${Pagination.render(sensors.length)}
                    </main>
                </div>
            </div>
        `
    },

    onChangePage: async offset => {
        Home.offset = offset

        const $sensorsWrapper = document.querySelector('.sensors-wrapper')
        $sensorsWrapper.innerHTML = ''

        document.querySelector('#root').innerHTML = await Home.render()
        
        Pagination.handlePagination()
    }
}

export default Home