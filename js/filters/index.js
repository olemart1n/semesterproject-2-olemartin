import { newBtn, expireSoonBtn, nav, nextBtn, twoButtonsDiv } from "./htmlElements.js";
import { searchFocus } from "./searchFocus.js";
import { newest } from "./newest.js";
import { expiringSoon } from "./expiringSoon.js";
import { search } from "./search.js";
import {
    filterSection,
    expireSoonFeed,
    newListingsFeed,
    searchFilterSection,
    activator,
    h2Header
} from "../queryselectors.js";
import {buttonclone} from "../tools/buttonclone.js"

export const newExpireSoonBtn = expireSoonBtn.cloneNode(true);
newExpireSoonBtn.innerHTML = "Expiring today";
newExpireSoonBtn.id = "newExB";
//----------------------------------------------------
export const newNewBtn = newBtn.cloneNode(true);
newNewBtn.innerHTML = "Newest";
newNewBtn.id = "newNewBtn";

export const filter = () => {
    filterSection.insertAdjacentElement("beforeend", nav);
    newBtn.addEventListener("click", (e) => {
        const doThis = () => {
            activator(newListingsFeed)
            h2Header.innerHTML = "New Listings"
            document.querySelector(".expire").classList.remove('bg-auctionBlue')
        }
        buttonclone(newBtn, twoButtonsDiv, 'beforeend', 'bg-auctionBlue', doThis, 'Newest')
        activator(newListingsFeed)
        newest(0, 16)
        document.querySelector(".expire").classList.remove('bg-auctionBlue')
    });
    expireSoonBtn.addEventListener("click", (e) => {
        const doThat = () => {
            activator(expireSoonFeed)
            h2Header.innerHTML = "Expires today"
            document.querySelector(".newest").classList.remove('bg-auctionBlue')
        }
        buttonclone(expireSoonBtn, twoButtonsDiv, 'afterbegin', 'bg-auctionBlue', doThat, 'Expiring today')
        activator(expireSoonFeed)
        expiringSoon(0, 14);
        document.querySelector(".newest").classList.remove('bg-auctionBlue')
    });
    searchFocus();
    search();
};

