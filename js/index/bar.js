import {bar, navWithBar, zoomglass, navWithSearch, stopSearch, listingsFeed, activator} from "../queryselectors.js"

export const smallScreenNav = () => {
    bar.addEventListener("click", () => {
        navWithBar.classList.toggle('hidden')
    })
    zoomglass.addEventListener("click", () => {
        navWithSearch.classList.remove('hidden')
        stopSearch.classList.remove('hidden')
        zoomglass.classList.add('hidden')
    })
    stopSearch.addEventListener("click", () => {
        stopSearch.classList.add('hidden')
        navWithSearch.classList.add('hidden')
        zoomglass.classList.remove('hidden') 
        activator(listingsFeed)
    })
}