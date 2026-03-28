import mainViewClass from "../../default/mainView.class";
import { checkLogin, getHeadingText, showAlert } from "./home.service";
import "./home.style.css";

export default class extends mainViewClass {
  constructor(params) {
    super(params);
    this.setTitle("Freeschema todo-app");
  }

  async getHtml() {
    (window).showAlert = showAlert;
    const headingText = await getHeadingText();
    const isLoggedIn = await checkLogin();
    let buttonsHTML = "";
    if (isLoggedIn) {
      buttonsHTML = `
      <router-link href="/logout">Logout</router-link>
      `;
    } else {
      buttonsHTML = `
        <router-link href="/register">Get Started</router-link>
        <router-link href="/login">Login</router-link>
      `;
    }
    return `
      <div class="home-container">
        <div class="header">
          <div>
            <h1>Freeschema todo-app</h1>
          </div>

          
        </div>

        <main class="main">
          <h1>Freeschema</h1>
          <p class="heading-text">${headingText}</p>
          
          <div class="btn-group">
            ${buttonsHTML}
          </div>

          <div>
            <h3><router-link href="/phonebook">Phonebook App</router-link></h3>
            
          </div>
        </main>

       
      
      </div>
    `;
  }
}