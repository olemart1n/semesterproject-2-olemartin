import { regWrapper } from "./formElements";
import { registerContainer } from "../queryselectors";
export const renderRegPage = () => {
    registerContainer.insertAdjacentElement("beforeend", regWrapper);
};
