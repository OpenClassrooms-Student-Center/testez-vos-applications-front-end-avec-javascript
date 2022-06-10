import Header from '../common/header/index.js'

import { retrieveSensorsDetailsData } from '../../utils/api/sensorsDetailsApi/index.js'
import { retrieveWeatherForecastData } from '../../utils/api/weatherCastApi/index.js'

const FacadeDetails = {
    renderSensorImg: sensor => {
        return `
            <div class="sensor-details-img-gallery-wrapper">
                <img class="sensor-details-img" src="/assets/${sensor.medias[0]}" alt="Capteur n°${sensor.id}">
            </div>
        `
    },
    renderSensorTable: sensor => {
        return `
            <table class="data-table">
                <thead>
                    <th>#</th>
                    <th>Type de données</th>
                    <th>Valeur des données</th>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>ID</th>
                        <td class="sensor-id">
                            ${sensor.id}
                        </td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th>Marque du capteur</th>
                        <td class="sensor-brand">
                            ${sensor.marque}
                        </td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th>Status</th>
                        <td class="sensor-status">
                            ${sensor.isActive ? 'actif': 'inactif'}
                        </td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <th>Lattitude</th>
                        <td class="sensor-lat">
                            ${sensor.coordinates.lat}
                        </td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <th>Longitude</th>
                        <td class="sensor-lng">
                            ${sensor.coordinates.lng}
                        </td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <th>Température</th>
                        <td class="sensor-temperature">
                            ${sensor.temperature}
                        </td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <th>Degrée d'humidité</th>
                        <td class="sensor-moisture">
                            ${sensor.moisturePercentage * 100}
                        </td>
                    </tr>
                    <tr>
                        <th>8</th>
                        <th>Date de dernière visite</th>
                        <td class="sensor-last-inspection-date">
                            ${sensor.inspection.lastInspectionDate}
                        </td>
                    </tr>
                    <tr>
                        <th>9</th>
                        <th>ID du technicien</th>
                        <td class="sensor-engineer-id">
                            ${sensor.inspection.engineerId}
                        </td>
                    </tr>
                </tbody>
            </table>
        `
    },
    renderWeatherForecast: forecastData => {
        return `
            <table class="data-table">
                <thead>
                    <th>#</th>
                    <th>Type de données</th>
                    <th>Valeur des données</th>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>Localisation</th>
                        <td class="weather-location">${forecastData.location.name}</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th>Température</th>
                        <td class="weather-temperature">${forecastData.current.temperature} °C</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th>Icône</th>
                        <td>
                            <img
                                class="weather-icon"
                                src="${forecastData.current.weather_icons[0]}"
                                alt="${forecastData.current.weather_descriptions[0]}"
                            >
                        </td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <th>Description</th>
                        <td class="weather-description">
                            ${forecastData.current.weather_descriptions[0]}
                        </td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <th>Vent</th>
                        <td class="weather-wind">
                            ${forecastData.current.wind_dir} 
                            ${forecastData.current.wind_speed} km/h
                        </td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <th>Couverture nuageuse</th>
                        <td class="weather-cloudcover">
                            ${forecastData.current.cloudcover}
                        </td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <th>Index UV</th>
                        <td class="weather-uv-index">
                            ${forecastData.current.uv_index}
                        </td>
                    </tr>
                    <tr>
                        <th>8</th>
                        <th>Jour/nuit</th>
                        <td class="weather-is-day">
                            ${forecastData.current.is_day === 'yes' ? 'Jour' : 'Nuit'}
                        </td>
                    </tr>
                </tbody>
            </table>
        `
    },

    render: async () => {
        const sensor = await retrieveSensorsDetailsData()
        const weatherForecastData = await retrieveWeatherForecastData(sensor.coordinates)

        return `
            <div class="sensor-details">
                <div class="sensor-details-main-wrapper">
                    ${Header.render()}
                    <main class="sensor-details-main">
                        <div class="sensor-details-main-top-header">
                            <h2 data-testid="sensor-detail-title" class="section-title">Détails du capteur #7</h2>
                        </div>
                        <div class="sensor-details-wrapper">
                            ${FacadeDetails.renderSensorImg(sensor)}
                            <div class="sensor-details-info-wrapper">
                                <div class="data-sensor-wrapper">
                                    <h3>Données du capteur</h3>
                                    ${FacadeDetails.renderSensorTable(sensor)}
                                </div>
                                <div class="weather-forecast-wrapper">
                                    <h3>Bulletin météo</h3>
                                    ${FacadeDetails.renderWeatherForecast(weatherForecastData)}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        `
    }
}

export default FacadeDetails

