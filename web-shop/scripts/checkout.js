//function validate() {
$('#continue-button').on('click', function (event) {

    event.preventDefault();
    let firstName = $('#firstname');
    let lastName = $('#lastname');
    let mail = $('#mail');
    let address = $('#address');
    let zipCode = $('#zip');
    let city = $('#city');

    let inputPattern = "[a-zA-Z-]+";
    let mailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let addressPattern = /^[a-zA-Z0-9\s,'-]+$/;

    if (firstName.val().match(inputPattern)) {
        $('#name-error').text('');

    }
    else {
        $('#name-error').text('your first name required');
        firstName.focus();
        return false;
    }
    if (lastName.val().match(inputPattern)) {
        $('#name-error').text('');
    }
    else {
        $('#name-error').text('your last name required');        
        lastName.focus();
        return false;
    }

    if (mail.val().match(mailPattern)) {
        $('#mail-error').text('');
    }

    else {
        $('#mail-error').text("email address required in the correct format");
        mail.focus();
        return false;
    }
    if (address.val().match(addressPattern)) {
        $('#address-error').text('');
    }
    else {
        $('#address-error').text('enter your address in the correct format');
        address.focus();
        return false;
    }

    if (zipCode.val().match(addressPattern)) {
        $('#address-error').text('');
    }
    else {
        $('#address-error').text("enter your zip in correct format");
        zipCode.focus();
        return false;
    }

    if (city.val().match(inputPattern)) {
        $('#address-error').text('');
    }
    else {
        $('#address-error').text("enter your city");
        city.focus();
        return false;
    }

    $('.checkout-main').hide();
    $('#success').show();

});
$(document).ready(function() {
    // get teas from localStorage

    let teasInCart = JSON.parse(sessionStorage.getItem('teasIncartStorage'));
    let counter = 0;

    function keepCount () {
        // get teasInCart from localStorage and display in cart span
        teasInCart = JSON.parse(sessionStorage.getItem('teasIncartStorage'));
        counter = 0;
        for (let i in teasInCart) {
            counter += teasInCart[i];
        }
        $('#cartItems').text(' (' + counter + ') ');
    }

    keepCount();

    
    // get teas from localStorage
    let teas = JSON.parse(localStorage.getItem('storeTeas'));
    let checkoutSum = document.getElementById("checkout-summary");

    // compare teasIncart to teas and create html elements to display in checkout summary
    for (let i in teas) {
        if (teasInCart.hasOwnProperty(teas[i].pName)) {
           /*  console.log(teas[i].pName);
            console.log(teasInCart[teas[i].pName]);
            console.log(parseInt(teasInCart[teas[i].pName] * teas[i].price)); */
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

        }
    }
    let name;
    $('.checkout-summary').on('change', 'input', function () {   
       name = $(this).closest('.cart-item').find('.ci-info').text();
       for (i in teas) {
           if (teas[i].pName === name) {
               $(this).closest('.ci-right').find('.ci-price').text(+$(this).val() * teas[i].price + ':-');
           }
       }
       //console.log(name);
       teasInCart[$(this).closest('.cart-item').find('.ci-info').text()] = +$(this).val();
       sessionStorage.setItem('teasIncartStorage', JSON.stringify(teasInCart));
       keepCount();
    });
    $('.ci-remove').on('click', function (event) {
        event.preventDefault();
        name = $(this).closest('.cart-item').find('.ci-info').text();
        console.log(name);
        $(this).closest('.cart-item').remove();
        delete teasInCart[name];
        console.log(teasInCart);
        sessionStorage.setItem('teasIncartStorage', JSON.stringify(teasInCart));
        keepCount();

    });
});