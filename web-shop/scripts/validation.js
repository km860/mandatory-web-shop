function validate () {
    let firstName = document.getElementById("firstname");
    let lastName = document.getElementById("lastname");
    let mail = document.getElementById("mail");
    let address = document.getElementById("address");
    let zipCode = document.getElementById("zip");
    let city = document.getElementById("city");

    let inputPattern = "[a-zA-Z-]+";
    let mailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let addressPattern = /^[a-zA-Z0-9\s,'-]+$/;

    if (firstName.value.match(inputPattern)) {
        document.getElementById("name-error").innerHTML = "";

    }
    else {
        document.getElementById("name-error").innerHTML = "your first name required";
        return false;
    }
    if (lastName.value.match(inputPattern)) {
        document.getElementById("name-error").innerHTML = "";

    }
    else {
        document.getElementById("name-error").innerHTML = "your last name required";
        return false;
    }

    if (mail.value.match(mailPattern)) {
        document.getElementById("mail-error").innerHTML = "";
    }

    else {
        document.getElementById("mail-error").innerHTML = "email address required in the correct format";
        return false;
    }
    if (address.value.match(addressPattern)) {
        document.getElementById("address-error").innerHTML = "";
    }
    else {
        document.getElementById("address-error").innerHTML = "enter your address in the correct format";
        return false;
    }

    if (zipCode.value.match(addressPattern)) {
        document.getElementById("address-error").innerHTML = "";
    }
    else {
        document.getElementById("address-error").innerHTML = "enter your zip in correct format";
        return false;
    }

    if (city.value.match(inputPattern)) {
        document.getElementById("address-error").innerHTML = "";
    }
    else {
        document.getElementById("address-error").innerHTML = "enter your city";
        return false;
    }
    return true;

}


