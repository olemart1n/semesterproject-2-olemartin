import {
    userContainer,
    profileContainer,
    searchContainer,
    searchFilterSection,
    listingsFeed,
    expireSoonFeed,
    newListingsFeed,
    itemContainer,
    userItemContainer,
} from "../queryselectors";
import { renderItem } from "../item/item";
export const getToUserItem = (id, containerToPlace) => {
    const item = document.querySelector(".itemm" + id);
    item.addEventListener("click", () => {
        renderItem(id, containerToPlace);
        itemContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        userItemContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        userContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        profileContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        searchContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        listingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        expireSoonFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        newListingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        searchFilterSection.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
    });
};
