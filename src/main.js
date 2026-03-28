import "./style.css";

import { bootup } from "./app/routes/renderRoute.service.js";
import { init, updateAccessToken } from "mftsccs-browser";
import { environment } from "./app/environments/environment.dev.js";
import { getLocalStorageData } from "./app/pages/user/login.service.js";

await init(environment?.boomURL, environment?.aiURL, "", environment?.baseNodeUrl);
const profileStorageData = await getLocalStorageData();
updateAccessToken(profileStorageData?.token);
bootup();
