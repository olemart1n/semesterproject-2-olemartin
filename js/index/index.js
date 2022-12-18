import { homeLink } from "./h1.js";
import { loginProfileBtn } from "./navLinkOne.js";
import { registerLogoutBtn } from "./navLinkTwo.js";
import {smallScreenNav} from "./bar.js"

export const index = () => {
    homeLink();
    smallScreenNav()
    loginProfileBtn();
    registerLogoutBtn();
};
