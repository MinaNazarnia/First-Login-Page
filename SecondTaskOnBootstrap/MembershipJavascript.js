// import {User} from '../User.js';
"use strict";

let storedInfo = JSON.parse(localStorage.getItem("userInfo"));

if (storedInfo == null) {
    logout();
}

// JSON.parse(window.localStorage.getItem('storedInfo'));

// console.log(storedInfo);

// let user2 = ['x', 3, x];
// console.log((user2));
// console.log(typeof (x));

// for (let i = 0; i < 4; i++) {
//     user[i] = storedInfo[i];
// }

let userData = storedInfo.split(" ");

let signUpUserName = userData[0];
document.getElementById("userName").innerHTML = signUpUserName.charAt(0).toUpperCase() + signUpUserName.slice(1);

function logout() {
    localStorage.clear();
    location.replace("../FisrtTaskOnHtmlAndCss/SignUp.html");
}