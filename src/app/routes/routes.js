import { create } from "../pages/todo/create.js";
import { list } from "../pages/todo/list.js";
import { phonebook } from "../pages/todo/wrapper.js";
import homeIndex from "../pages/home/home.index.js";

import { login } from "../pages/user/login.js";
import { logout } from "../pages/user/logout.js";
import { register } from "../pages/user/register.js";

const routes = [
  {
    path: "/",
    linkLabel: "Home",
    content: homeIndex,
  },
  {
    path: "/login",
    linkLabel: "Login",
    content: login,
  },
  {
    path: "/register",
    linkLabel: "Signup",
    content: register,
  },
  {
    path: "/logout",
    linkLabel: "Signup",
    content: logout,
  },

  {
    path: "/phonebook",
    linkLabel: "Phonebook",
    content: phonebook,
    isAuthenticated: true
  },
  {
    path: "/todo-list",
    linkLabel: "Todo",
    content: list,
    isAuthenticated: true
  }
 
];

export default routes;