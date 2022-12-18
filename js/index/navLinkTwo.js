import {
    navLinkTwo,
    listingsFeed,
    h2Header,
    profileContainer,
    activator,
    divWithRegisterButton,
    registerContainer,
} from "../queryselectors";
import { renderRegPage } from "../authentication/renderRegPage";
import { resetFilterButtons } from "../filters/htmlElements";
import {buttonclone} from "../tools/buttonclone.js"

export const registerLogoutBtn = () => {
    navLinkTwo.addEventListener("click", () => {
        const doThis = () => {
            activator(registerContainer)
            h2Header.innerHTML = "Create Account"
        }
        buttonclone(navLinkTwo, divWithRegisterButton, 'beforeend', 'newButton' ,doThis, "Create Account")   
        listingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden")
        h2Header.innerHTML = "Create Account";
        renderRegPage();
    });
};

