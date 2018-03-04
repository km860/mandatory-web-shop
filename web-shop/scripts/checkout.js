function validate() {
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
$(document).ready(function() {

    /*var test = localStorage.getItem('numberOfItems');
    console.log(localStorage.getItem('name'), localStorage.getItem('quant'));
    document.getElementById("cartItems").innerText = test;*/


    var retrievedNames = sessionStorage.getItem("ids");
    var storedNames = JSON.parse(retrievedNames);
    var retrievedQ = sessionStorage.getItem("quantity");
    var storedQ = JSON.parse(retrievedQ);

    console.log(storedNames);
    console.log(storedQ);
    var teasInCart = {};
    for (var i = 0; i < storedNames.length; i++) {
        //console.log(storedQ[i] + storedQ[i + 1]);
        //teasInCart.push(storedNames[i], storedQ[i]);
        if (teasInCart.hasOwnProperty(storedNames[i])) {
            teasInCart[storedNames[i]] = parseInt(teasInCart[storedNames[i]]) + storedQ[i];
        }
        else {
            teasInCart[storedNames[i]] = storedQ[i];
        }
        //teasInCart[storedNames[i]] =  storedQ[i];
        //console.log(parseInt(teasInCart[storedNames[i]]) + storedQ[i]);
    }
    console.log(teasInCart);
    var getTeas = localStorage.getItem("storeTeas");
    var teas = JSON.parse(getTeas);
    let checkoutSum = document.getElementById("checkout-summary");
    for (i in teas) {
        if (teasInCart.hasOwnProperty(teas[i].pName)) {
            console.log(teas[i].pName);
            console.log(teasInCart[teas[i].pName]);
            console.log(parseInt(teasInCart[teas[i].pName] * teas[i].price));
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
            CIPrice.innerHTML = parseInt(teasInCart[teas[i].pName] * teas[i].price) + ":-";
            CInput.setAttribute("value", (teasInCart[teas[i].pName]));
            CInput.setAttribute("type", "number");
            CInput.setAttribute("min", "0");
            CIRemove.innerHTML = '<a href="">X</a>';
            //CIRemove.setAttribute("id", teas[i].pName);

            cartItem.setAttribute("class", "cart-item");
            cartItem.setAttribute("id", teas[i].pName.replace(/\s/g, ''));
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
    let name;
    $('.checkout-summary').on('change', 'input', function () {
       console.log($(this).val());
       //sessionStorage.clear();
       //storedQ = [];
       //storedNames = [];
       name = $(this).closest('.cart-item').find('.ci-info').text();
       for (i in teas) {
           if (teas[i].pName === name) {
               $(this).closest('.ci-right').find('.ci-price').text(+$(this).val() * teas[i].price + ':-');
           }
       }
       //console.log(name);
       teasInCart[$(this).closest('.cart-item').find('.ci-info').text()] = +$(this).val();
       //console.log(teasInCart);
       /*storedNames.push(name);
       sessionStorage.setItem('ids', JSON.stringify(storedNames));
       storedQ.push(+$(this).val());
       sessionStorage.setItem('quantity', JSON.stringify(storedQ))  ;*/
    });
    $('.ci-remove').on('click', function (event) {
        event.preventDefault();
        name = $(this).closest('.cart-item').find('.ci-info').text();
        console.log(name);
        $(this).closest('.cart-item').remove();
        delete teasInCart[name];
        console.log(teasInCart);

    });
    /*removeBtn = document.getElementById("English Breakfast Tea");
    removeBtn.addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("EnglishBreakfastTea").innerHTML = "";
    });*/
});