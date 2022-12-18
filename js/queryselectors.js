export const h1 = document.querySelector("#home-link");
export const filterSection = document.querySelector("#filters");
export const searchFilterSection = document.querySelector("#searchFilters");
export const searchForm = document.querySelector("#searchForm");
export const searchContainer = document.querySelector("#searchResults");
export const itemContainer = document.querySelector(".itemContainer");
export const userItemContainer = document.querySelector("#itemContainer1");
export const ic2 = document.querySelector("#itemContainer2");
export const ic3 = document.querySelector("#itemContainer3");
export const registerContainer = document.querySelector("#registerContainer");
export const userContainer = document.querySelector("#userContainer");
export let listingsFeed = document.querySelector("#listingsFeed");
export const h2Header = document.querySelector("#listingHeader");
export const newBtn = document.querySelector("#filter-link-1");
export const navLinkOne = document.querySelector("#nav-link-1");
export const navLinkTwo = document.querySelector("#nav-link-2");
export const main = document.querySelector("main");
export const profileContainer = document.querySelector("#profileContainer");
export const navWithBar = document.querySelector("#navWithBar");
export const expireSoonFeed = document.querySelector("#expireSoonFeed");
export const newListingsFeed = document.querySelector("#newListingsFeed");
export const divWithRegisterButton = document.querySelector("#divWithRegisterButton");
export const divWithLoginButton = document.querySelector("#divWithLoginButton");
export const bar = document.querySelector("#bar");
export const zoomglass = document.querySelector("#zoomglass");
export const navWithSearch = document.querySelector("#navWithSearch");
export const stopSearch = document.querySelector("#stopSearch");


export const toggler = (activate, deactivate) => {
    deactivate.forEach(element => {
        element.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden")
    });
    activate.classList.remove("hidden", "sm:hidden", "md:hidden", "lg:hidden")
}

export const allFeeds = [searchContainer, profileContainer,registerContainer, searchFilterSection, itemContainer, userItemContainer, ic2, ic3, userContainer, listingsFeed,expireSoonFeed, newListingsFeed]
const test = [filterSection, registerContainer]
export const activator = (activate) => {
    allFeeds.forEach(element => {
        element.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden")
    });
    activate.classList.remove("hidden", "sm:hidden", "md:hidden", "lg:hidden")
}
