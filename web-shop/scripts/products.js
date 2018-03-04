$(document).ready(function() {
    let englishBreakfast = {
        pName: "English Breakfast Tea",
        desc: "English breakfast tea is a traditional blend of teas originating from Assam, " +
        "Ceylon, and Kenya. It is one of the most popular blended teas, common in British tea " +
        "culture.English breakfast tea is a black tea blend usually described as full-bodied, " +
        "robust, rich and blended to go well with milk and sugar, in a style traditionally " +
        "associated with a hearty English breakfast.",
        price: 79,
        pImage: "../imgs/english-breakfast-black-tea__76269.1501613205.png"
    };
    let earlGrey = {
        pName: "Earl Grey Tea",
        desc: "Earl Grey tea is a tea blend which has been flavoured with " +
        "the addition of oil of bergamot. Bergamot is a variety of orange that is often grown in Italy " +
        "and France. The rind's fragrant oil is added to black tea to give Earl Grey its signature " +
        "pungent punch.",
        price: 89,
        pImage: "../imgs/Earl_Grey_1280.jpg"
    };
    let darjeeling = {
        pName: "Darjeeling",
        desc: "Darjeeling tea is a tea from the Darjeeling district in West Bengal, India. It is available in black, " +
        "green, white and oolong. When properly brewed, it yields a thin-bodied, light-coloured infusion with a " +
        "floral aroma. The flavour can include a tinge of astringent tannic characteristics and a musky spiciness " +
        "sometimes described as muscatel",
        price: 99,
        pImage: "../imgs/darjeeling.jpg"
    };

    let gunpowder = {
        pName: "Gunpowder",
        desc: "is a form of Chinese tea in which each leaf has been rolled into a small round pellet. " +
        "Its English name comes from its resemblance to grains of gunpowder. This rolling method of " +
        "shaping tea is most often applied either to dried green tea (the most commonly encountered " +
        "variety outside China) or oolong tea.",
        price: 69,
        pImage: "../imgs/gunpowder.jpg"
    };

    let genmai = {
        pName: "Genmai Cha",
        desc: "also called brown rice green tea, is the Japanese name for green tea combined with " +
        "roasted brown rice. It is sometimes referred to colloquially as \"popcorn tea\" " +
        "because a few grains of the rice pop during the roasting process and resemble popcorn.",
        price: 129,
        pImage: "../imgs/genmai.jpg"
    };
    let jasmine = {
        pName: "Jasmine Tea",
        desc: "Tea scented with aroma from jasmine blossoms to make a scented tea. " +
        "Typically, jasmine tea has green tea as the tea base; however, white tea and black " +
        "tea are also used. The resulting flavour of jasmine tea is subtly sweet and highly fragrant. " +
        "It is the most famous scented tea in China",
        price: 109,
        pImage: "../imgs/Jasmine-tea.jpg"
    };

    let strawberry = {
        pName: "Wild Strawberry",
        desc: "Fresh strawberries, apple pieces, hibiscus flowers and rose hips create a mellow, almost dessert-like tea. " +
        "Sweet strawberry and sugared rhubarb aroma, beautiful warm berry color, pleasantly aromatic and not super sweet. " +
        "A caffeine-free cup of pure delight",
        price: 150,
        pImage: "../imgs/wild-strawberry.jpg"
    };
    let camomile = {
        pName: "Chamomile Tea",
        desc: "Chamomile tea is one of the popular varieties of tea in the market and it has many health benefits and " +
        "uses. These include its ability to protect the skin, lower stress levels, regulate sleep, and " +
        "soothe menstrual symptoms. It also boosts the immune system, treats gastrointestinal issues...",
        price: 99,
        pImage: "../imgs/chamomil.jpg"
    };

    let teas = [englishBreakfast, earlGrey, darjeeling, gunpowder, genmai, jasmine, strawberry, camomile];
    localStorage.setItem("storeTeas", JSON.stringify(teas));



    let productImage = document.querySelectorAll("img");
    for (let i = 0; i < productImage.length; i++) {
        productImage[i].setAttribute("src", teas[i].pImage);

    }
    let productName = document.querySelectorAll("h4");
    for (let i = 0; i < productName.length; i++) {
        productName[i].innerHTML = teas[i].pName;
    }

    let productPrice = document.querySelectorAll(".price");
    for (let i = 0; i < productPrice.length; i++) {
        productPrice[i].innerHTML = teas[i].price + ":-";
    }

    let productDesc = document.querySelectorAll("p");
    for (let i = 0; i < productDesc.length; i++) {
        productDesc[i].innerHTML = teas[i].desc;
    }
    let temp = 0;
    let counter = 0;
    let storeName = [];
    let storeQ = [];

    /* StoreName keeps track of the names of teas, temp keeps track of many of a particular tea you put in the cart, it is
       set to 0 for every new tea.
       counter keeps track of the overall amount of tea in the cart and is updated with temp, it is also displayed in
       the cartItem span (x).
     */

    $('button').on('click', function() {
        $(this).closest('.item-text').find('h4').css('background-color', 'red');
        storeName.push($(this).closest('.item-text').find('h4').text());
        temp = +$(this).closest('.item-text').find('input').val();
        storeQ.push(temp);
        counter += temp;
        $('#cartItems').text(' (' + counter + ') ');
        sessionStorage.setItem("ids", JSON.stringify(storeName));
        sessionStorage.setItem("quantity", JSON.stringify(storeQ));
        //console.log($(this).closest('.item-text').find('h4').text());
        temp = 0;
    });


    /* Lite onödig kod men tanken var att man skulle hålla reda på antalet varor i korgen för att sedan visa
       sin beställning vid checkout. Den loopar igenom alla LABELS och sätter for-attribut på dem som motsvarar namnet på
       just den produkten (fast utan mellanslag), den blir också id för input (QUANTITY). Köp-knapparna får ett id som är namnet för
       produkten.
     */

    /*let btn = document.querySelectorAll("button");
    let tag = document.getElementsByTagName("LABEL");
    for (let i = 0; i < tag.length; i++) {
        tag[i].setAttribute("for", teas[i].pName.replace(/\s/g,''));
        document.getElementsByTagName("INPUT")[i].setAttribute("id", teas[i].pName.replace(/\s/g,''));
        btn[i].setAttribute("id", teas[i].pName);
    }*/

    /* "n" håller reda på id för QUANTITY, "temp" innehåler värdet av QUANTITY och nollställs efter varje tryck på
        köp-knapparna. "counter" håller räkningen på temp och uppdaterar värdet i kundkorgen.
     */
//document.getElementById("cartItems").innerText = localStorage.getItem("numberOfItems");


    /*let temp = 0;
    let counter = 0;
    let n;
    let storeName = [];
    let storeQ = [];*/


    /*btn.forEach(el => el.addEventListener("click", function () {

        console.log(el.getAttribute("id"));
        storeName.push(el.getAttribute("id"));
        n = el.getAttribute("id").replace(/\s/g,'');
        console.log(n);
        temp = Number(document.getElementById(n).value);
        storeQ.push(temp);


        counter += temp;
        console.log(counter);
        document.getElementById("cartItems").innerText = "(" + counter + ")";
        localStorage.setItem("ids", JSON.stringify(storeName));
        localStorage.setItem("quantity", JSON.stringify(storeQ));
        /!*localStorage.setItem(el.getAttribute("id"), temp);
        localStorage.setItem('quant', temp);*!/
        temp = 0;
    }));*/


});
