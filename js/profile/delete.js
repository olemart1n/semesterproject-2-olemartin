import { fetchOptions, endpoints, base } from "../endpoints.js";
import {save} from "../storage/index.js"
const { deleteOpt } = fetchOptions;
const { listings } = endpoints;
export const deleteFunc = (button) => {
    button.addEventListener("click", () => {
        fetch(base + listings + "/" + button.id, deleteOpt);
        setTimeout(() => {
            save('updatedProfile', 'true')
            window.location.reload();
        }, 500);
    });
};
