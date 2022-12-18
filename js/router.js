import { renderWithBids } from "./feed/listings.js";
import { authCheck } from "./tools/authCheck.js";
import { authedNav } from "./authentication/authedNav.js";
import { load } from "./storage/load.js";
import {renderItem} from "./item/item.js"
import {renderUser} from "./user/index.js"

export const router = () => {
    if(document.location.href.includes("id")) {
        renderItem()
    } else if (document.location.href.includes("user")) {
        renderUser()
    } else if (load("authed") === null) {
        renderWithBids();
    } else if (authCheck()) {
        renderWithBids();
        authedNav();
    }
};
