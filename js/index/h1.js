import { filter } from "../filters";
import {
    h1,
    listingsFeed,
    activator
} from "../queryselectors.js";
export const homeLink = () => {
    h1.addEventListener("click", () => {
        document.location.reload();
        // activator(listingsFeed)
        // console.log("HELLO")
    });
};
