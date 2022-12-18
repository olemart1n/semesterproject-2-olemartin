export const expandImg = () => {
    const expandIcon = document.querySelectorAll(".fa-expand");
    expandIcon.forEach((element) => {
        element.addEventListener("click", (e) => {
            const modal = document.createElement("div");
            modal.setAttribute("class", "modal");
            document.querySelector("main").append(modal);
            let modalHeritage = e.currentTarget.nextElementSibling.nextElementSibling;
            const modalContent = modalHeritage.cloneNode(true);
            modal.append(modalContent);
            modal.addEventListener("click", () => {
                document.querySelector(".modal").remove();
            });
        });
    });
};
