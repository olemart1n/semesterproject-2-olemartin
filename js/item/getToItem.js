import {
    itemContainer,
    activator,
    allFeeds,
    main
} from "../queryselectors";
import { renderItem } from "./item";
export const getToItem = (id) => {
    const item = document.querySelector(".item" + id);
    item.addEventListener("click", () => {
        const newItemContainer = itemContainer.cloneNode(true)
        main.append(newItemContainer)
        allFeeds.push(newItemContainer)
        renderItem(id, newItemContainer);
        activator(newItemContainer)
    });
};