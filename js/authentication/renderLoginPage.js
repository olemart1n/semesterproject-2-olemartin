import { wrapper } from "./formElements";
import { loginContainer } from "../queryselectors";

export const renderLoginPage = () => {
    loginContainer.insertAdjacentElement("beforeend", wrapper);
};
