// Add code here to change entered password for current user

var Parse = require('parse')

var PARSE_SERVER_URL = "https://pg-app-koc2mgqlfz1sdvtfk3ve8sxc9lrfwy.scalabl.cloud/1/";
var APP_ID           = "d4HAW0PHiooLqk4KtZaQxp4XQoqRTh6KTN3QOSlm";
var JS_KEY            = "DU6XLqnZcqpIDgAYHmyB76XSKlqdoOToXQGST6NX";

Parse.initialize(APP_ID, JS_KEY);
Parse.serverURL = PARSE_SERVER_URL

function changePassword() {

    var password = document.getElementById("password").value
    var label = document.getElementById("label")
    label.innerHTML = "Trying to fetch user"

    var form = document.getElementById("form");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

    var User = Parse.Object.extend("User")
    var user = new Parse.Query(User)

    user.get("vCo4wlOnhl")
    .then((user) => {
        label.innerHTML = "we got him"
    }, (error) => {
        label.innerHTML = "no good"
    });

}