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
        firstName.focus();
        return false;
    }
    if (lastName.value.match(inputPattern)) {
        document.getElementById("name-error").innerHTML = "";

    }
    else {
        document.getElementById("name-error").innerHTML = "your last name required";
        lastName.focus();
        return false;
    }

    if (mail.value.match(mailPattern)) {
        document.getElementById("mail-error").innerHTML = "";
    }

    else {
        document.getElementById("mail-error").innerHTML = "email address required in the correct format";
        mail.focus();
        return false;
    }
    if (address.value.match(addressPattern)) {
        document.getElementById("address-error").innerHTML = "";
    }
    else {
        document.getElementById("address-error").innerHTML = "enter your address in the correct format";
        address.focus();
        return false;
    }

    if (zipCode.value.match(addressPattern)) {
        document.getElementById("address-error").innerHTML = "";
    }
    else {
        document.getElementById("address-error").innerHTML = "enter your zip in correct format";
        zipCode.focus();
        return false;
    }

    if (city.value.match(inputPattern)) {
        document.getElementById("address-error").innerHTML = "";
    }
    else {
        document.getElementById("address-error").innerHTML = "enter your city";
        city.focus();
        return false;
    }
    return true;

}

/*var test = localStorage.getItem('numberOfItems');
console.log(localStorage.getItem('name'), localStorage.getItem('quant'));
document.getElementById("cartItems").innerText = test;*/


var retrievedObject = localStorage.getItem("ids");
var stored = JSON.parse(retrievedObject);
var retrievedQ = localStorage.getItem("quantity");
var storedQ = JSON.parse(retrievedQ);

console.log(stored);
console.log(storedQ);
var testar = {};
for(var i = 0; i < stored.length; i++) {
    //console.log(storedQ[i] + storedQ[i + 1]);
    //testar.push(stored[i], storedQ[i]);
    if(testar.hasOwnProperty(stored[i])) {
        testar[stored[i]] = parseInt(testar[stored[i]]) + storedQ[i];
    }
    else {
        testar[stored[i]] =  storedQ[i];
    }
    //testar[stored[i]] =  storedQ[i];
    //console.log(parseInt(testar[stored[i]]) + storedQ[i]);
}
//delete testar['English Breakfast Tea'];

console.log(testar);
var getTeas = localStorage.getItem("storeTeas");
var teas = JSON.parse(getTeas);
let checkoutSum = document.getElementById("checkout-summary");
for (i in teas) {
    if(testar.hasOwnProperty(teas[i].pName)) {
        console.log(teas[i].pName);
        console.log(testar[teas[i].pName]);
        console.log(parseInt(testar[teas[i].pName] * teas[i].price));
        //document.getElementById("myImage").setAttribute("src", teas[i].pImage);
        let cartItem = document.createElement("div");
        let CIleft = document.createElement("div");
        let CIimageContainer = document.createElement("div");
        let CIimage = document.createElement("img");
        let CInfo = document.createElement("div");
        let CIRight = document.createElement("div");
        let CIPrice = document.createElement("div");
        let CIQuantity = document.createElement("div");
        let CInput = document.createElement("input");
        let CIRemove = document.createElement("div");

        CIimage.setAttribute("src", teas[i].pImage);
        CIimage.setAttribute("width", "108");
        CInfo.innerHTML = teas[i].pName;
        CIPrice.innerHTML = parseInt(testar[teas[i].pName] * teas[i].price) + ":-";
        CInput.setAttribute("value", (testar[teas[i].pName]));
        CInput.setAttribute("type", "number");
        CInput.setAttribute("min", "0");
        CIRemove.innerHTML = '<a href="">X</a>';
        CIRemove.setAttribute("id", teas[i].pName);

        cartItem.setAttribute("class", "cart-item");
        cartItem.setAttribute("id", teas[i].pName.replace(/\s/g,''));
        CIleft.setAttribute("class", "ci-left");
        CIimageContainer.setAttribute("class", "ci-img");
        CInfo.setAttribute("class", "ci-info");
        CIRight.setAttribute("class", "ci-right");
        CIPrice.setAttribute("class", "ci-price");
        CIQuantity.setAttribute("class", "ci-quantity");
        CIRemove.setAttribute("class", "ci-remove");

        CIimageContainer.appendChild(CIimage);
        CIleft.appendChild(CIimageContainer);
        CIleft.appendChild(CInfo);
        CIRight.appendChild(CIPrice);
        CIQuantity.appendChild(CInput);
        CIRight.appendChild(CIQuantity);
        CIRight.appendChild(CIRemove);
        cartItem.appendChild(CIleft);
        cartItem.appendChild(CIRight);
        checkoutSum.appendChild(cartItem);

        /*CIRemove.addEventListener("click", function () {
           let child = document.getElementById(teas[i].pName.replace(/\s/g,''));
           checkoutSum.removeChild(child);
           window.reload();
        });*/

    }
}

