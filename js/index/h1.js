import { filter } from "../filters";
import {
    h1,
    listingsFeed,
    activator
} from "../queryselectors.js";
export const homeLink = () => {
    h1.addEventListener("click", () => {
        document.location.replace("/semesterproject-2-olemartin/")
        // document.location.reload();
        // activator(listingsFeed)
        // console.log("HELLO")
    });
};
