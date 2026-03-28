// src/app/pages/user/register.example.js
import { Signup } from "mftsccs-browser";
import { StatefulWidget } from "mftsccs-browser";
import { updateContent } from "../../routes/renderRoute.service";

export class register extends StatefulWidget {

    after_render() {
        let email = this.getElementById("email");
        let password = this.getElementById("password");
        let submitButton = this.getElementById("submit");
        console.log("this is the submit button eventeer", submitButton);
        if(submitButton){
            submitButton.onclick = (ev) => {
                ev.preventDefault();
                let signupData = {
                    email: email.value,
                    password: password.value
                }
                console.log("this is the login clicked");
                Signup(signupData).then((output)=>{
                    console.log("This is signup complete", output);
                    updateContent('/login');
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
        let html = `
            <div class="container">
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
                        <div class="formbody">
                            <label>Repeat Password: </label>
                            <input type="password" id="verify-password" placeholder="password">
                        </div>
                        <button class="btn btn-primary" id="submit">Submit</button>
                        <div style="color: red" id="error"></div>
                    </div>
                </form>
            </div>
        `;
        return html;
    }
}