// src/app/pages/user/login.example.js

import { LoginToBackend } from "mftsccs-browser";
import { StatefulWidget } from "mftsccs-browser";
import { saveTolocalStorage } from "./login.service";
import { updateContent } from "../../routes/renderRoute.service";

export class login extends StatefulWidget {

    after_render() {
        let email = this.getElementById("email");
        let password = this.getElementById("password");
        let submitButton = this.getElementById("submit");
        if(submitButton){
            submitButton.onclick = (ev) => {
                ev.preventDefault();
                console.log("this is the login clicked");
                LoginToBackend(email.value, password.value).then((output)=>{
                    saveTolocalStorage(output);
                    updateContent('/');
                }).catch((err)=>{
                    let error = this.getElementById("error");
                    if(error){
                        error.innerHTML = err.message;
                    }
                });
            }
        }
    }

    getHtml() {
        let html = `<div class="container">
        <form>
            <div>
            <div class="formbody">
                <label>Email: </label>
                <input type="text" id="email" placeholder="email">
            </div>
            <div class="formbody">
                <label>Password: </label>
                <input type="password" id="password" placeholder="password">
            </div>
                <button class="btn btn-primary" id="submit">Submit</button>
                <div style="color: red" id="error"></div>
            </div>
        </form>

        </div>`;
        return html;
    }
}