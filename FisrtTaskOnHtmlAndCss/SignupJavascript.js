"use strict";
// import { User } from '../User.js';

// must transfer to other file


class User {
    #firstName;
    #lastName;
    #inputEmail;
    #inputCountry;

    constructor(fname, family, email, country) {
        this.#firstName = fname;
        this.#lastName = family;
        this.#inputEmail = email;
        this.#inputCountry = country;
    }

    // it's very beautiful (:

    get User() {
        // return userInfo = {
        //     firstName: null, lastName: null, emailAddress: null, countryPosition: null
        // };

        return `${this.#firstName} ${this.#lastName} ${this.#inputCountry} ${this.#inputEmail}`
    }
}


function ticketBtn() {
    alert("Please try again later!");
}

function signUp() {
    let fname = document.getElementById("fname").value;
    let family = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let country = document.getElementById("country").value;


    let user = new User(fname, family, email, country);

    // console.log(user.getUser());
    // User.prototype.setUser(fname, family, email, country);

    if (user != null) {

        localStorage.setItem("userInfo", JSON.stringify(user.User));
        console.log(localStorage);
        window.open("../SecondTaskOnBootstrap/Membership.html");

        //     // alert("Welcome " + name + " " + family + "\n" + "your email address : "
        //     //     + email + "\n" + "your country : " + country);

    } else {
        alert("Please enter your information!");
    }
}