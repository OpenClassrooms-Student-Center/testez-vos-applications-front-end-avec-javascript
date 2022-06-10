import AddSensor from '../pages/addSensor/index.js'
import ErrorPage from '../pages/404/index.js'
import FacadeDetails from '../pages/facadeDetails/index.js'
import Home from '../pages/home/index.js'
import Pagination from '../pages/common/pagination/index.js'
import SignIn from '../pages/signIn/index.js'

import { handleSignInForm } from '../utils/signInForm/index.js'
import { findComponentByPath } from '../utils/findComponentsByPath/index.js'


const routes = [
    {
        path: "/",
        component: SignIn
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/add-sensor",
        component: AddSensor
    },
    {
        path: "/facade-details",
        component: FacadeDetails
    },
]

const parseLocation = () => location.hash.slice(1).toLocaleLowerCase() || '/'

const bindEventListener = () => {
    if (parseLocation() === '/') {
        handleSignInForm()
    } else if (parseLocation() === '/home') {
        Pagination.handlePagination()
    }
}


export const router = async () => {
    // Find the component based on the current path
    const path = parseLocation()

    // If there is not matching route, get the "Error" Component
    const { component = ErrorPage } = findComponentByPath(path, routes) || {}

    // Render the component in the app placeholder
    document.querySelector('#root').innerHTML = await component.render()

    // Finally bind the app event listeners
    bindEventListener()
}
