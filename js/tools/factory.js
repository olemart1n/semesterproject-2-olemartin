export const createElement = (type, attributes) => {
    const element = document.createElement(type);

    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }

    return element;
};