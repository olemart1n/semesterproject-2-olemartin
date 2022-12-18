import { renderWithBids } from "./feed/listings.js";
import { authCheck } from "./tools/authCheck.js";
import { authedNav } from "./authentication/authedNav.js";
import { load, remove } from "./storage/index.js";
import {renderItem} from "./item/item.js"
import {renderUser} from "./user/index.js"
import {activator, profileContainer} from "./queryselectors.js"

export const router = () => {
    if(load('updatedProfile') === 'true') {
        document.querySelector("#nav-link-1").click()
        activator(profileContainer)
        remove('updatedProfile')

    } else if(document.location.href.includes("id")) {
        renderItem()
    } else if (document.location.href.includes("user")) {
        renderUser()
    } else if (load("authed") === null) {
        renderWithBids();
    } else if (load('authed') === 'true') {
        renderWithBids();
        authedNav();
    }
};
