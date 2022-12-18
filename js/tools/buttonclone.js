export const buttonclone = (oldButton, container, beforeOrAfter, classToAdd, todosFunction, textToAdd) => {
    const newButton = oldButton.cloneNode(true)
    newButton.addEventListener("click", () => {
        todosFunction()
    })
    oldButton.remove()
    container.insertAdjacentElement(beforeOrAfter, newButton)
    newButton.classList.add(classToAdd)
    if(textToAdd) {
        newButton.innerHTML = textToAdd
    }
}