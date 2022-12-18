import {
    navLinkOne,
    itemContainer,
    profileContainer,
    listingsFeed,
    h2Header,
    navWithBar,
    activator,
    divWithLoginButton,
    registerContainer
} from "../queryselectors";
import { renderLoginPage } from "../authentication/renderLoginPage";
import { loginRequest } from "../authentication/loginRequest.js";
import { load, save } from "../storage";
import { profilePage } from "./profilePage";
import { newNewBtn, newExpireSoonBtn } from "../filters";
import {buttonclone} from "../tools/buttonclone.js"

export const loginProfileBtn = () => {
    if (load("authed") === "false" || load("authed") === null) {
        navLinkOne.addEventListener("click", () => {
            const doThis = () => {
                activator(itemContainer)
                h2Header.innerHTML = "Login"
            }
            buttonclone(navLinkOne, divWithLoginButton, 'afterbegin', 'newButton',doThis)
            activator(itemContainer)
            h2Header.innerHTML = "LOGIN";
            renderLoginPage();
            loginRequest();
        });
    } else {
        navLinkOne.addEventListener("click", () => {
            const doThis = () => {
                newNewBtn.classList.remove("bg-auctionBlue");
                newExpireSoonBtn.classList.remove("bg-auctionBlue");
                activator(profileContainer)
            }
            buttonclone(navLinkOne, divWithLoginButton, 'beforeend', 'profileButton', doThis, "Profile" )
         
            activator(profileContainer)
            profilePage();
        });
    }
};