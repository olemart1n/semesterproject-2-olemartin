import { apiRequest } from "../tools/fetch.js";
import { fetchOptions } from "../endpoints.js";
import {
    headerSection,
    userAvatar,
    userName,
    subHeader1,
    subHeader2,
    itemConainer,
    allItemsContinaer,
    activeOrSold,
    allBidsContainer,
    bidContainer,
} from "./layoutElements.js";
import { backArrow } from "../tools/UI/backArrow.js";
import { h2Header, userContainer, ic3 } from "../queryselectors.js";
const { getWithJwt } = fetchOptions;

// FÅ ID FRA BUTTON

export const renderUser = (namex) => {
    backArrow(h2Header);
    const queryString = document.location.search;
    const nameUser = new URLSearchParams(queryString).get("user");
    const listingsFetch = `profiles/${nameUser}?_listings=true `;
    const bidsFetch = `profiles/${nameUser}/bids?_listings=true`;
    userContainer.append(headerSection, allItemsContinaer, allBidsContainer);
    apiRequest(listingsFetch, getWithJwt).then((data) => {
        userAvatar.src = data.avatar;
        userName.innerHTML = data.name;
        subHeader1.innerHTML = data.name + "'s listings";
        data.listings.forEach((element) => {
            allItemsContinaer.insertAdjacentElement(
                "beforeend",
                itemConainer(
                    element.id,
                    element.media[0],
                    element.title,
                    activeOrSold(element.endsAt)
                )
            );
            
        });
    });
    apiRequest(bidsFetch, getWithJwt).then((data) => {
        subHeader2.innerHTML = data[0].bidderName + " made bid's on these listings";
        data.forEach((element) => {
            allBidsContainer.insertAdjacentElement(
                "beforeend",
                bidContainer(
                    `item?id=${element.listing.id}`,
                    element.listing.title,
                    activeOrSold(element.listing.endsAt)
                )
            );
        });
    });
};
