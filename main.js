import "./style.css";
import { router } from "./js/router.js";
import { filter } from "./js/filters/index.js";
import { index } from "./js/index/index.js";
import {authCheck} from "./js/tools/authCheck.js"
import {authedNav} from "./js/authentication/authedNav.js"
if(authCheck()) {
    authedNav()
}
index();
filter();
router();
