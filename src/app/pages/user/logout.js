import { StatefulWidget } from "mftsccs-browser";
import { updateContent } from "../../routes/renderRoute.service";

export class logout extends StatefulWidget {

    after_render() {
        localStorage.removeItem("profile");
        updateContent("/");
        location.reload();
    }

    getHtml() {
        return "You are logged out";
    }
}