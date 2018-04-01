$(document).ready(function() {

    // creating the product objects
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
    let purpleHaze = {
        pName: 'Purple Haze',
        desc: 'purple haze is one of the popular varieties of tea in the market and it has many health benefits and " +\n' +
        'uses. These include its ability to protect the skin, lower stress levels, regulate sleep, and " +\n' +
        'soothe menstrual symptoms. It also boosts the immune system, treats gastrointestinal issue',
        price: 200,
        pImage: '../imgs/purple-haze.jpg'
    };

    // adding the teas to an array of objects and then storing them in localStorage
    let teas = [englishBreakfast, earlGrey, darjeeling, gunpowder, genmai, jasmine, strawberry, camomile, purpleHaze];
    localStorage.setItem("storeTeas", JSON.stringify(teas));

    // create html elements and add product information
    
    teas.forEach((el) => {
        let productRow = $('<div class="product-rows">');
        let itemContainer = $('<div class="items"></div>');
        let imageContainer = $('<div class="item-img">');
        let productImage = $('<img>');
        let textContainer = $('<div class="item-text">');        
        let productName = $('<h4></h4>');
        let productPrice = $('<span class="price"></span>');
        let productDesc = $('<p></p>');
        let labelQ = $('<label>QUANTITY</label>');
        let inputQ = $('<input type="number" value="1" min="1">');
        let btnBuy = $('<button id="buybtn">ADD TO CART</button>');
        productImage.attr('src', el.pImage);
        productName.text(el.pName);
        productPrice.text(el.price);
        productDesc.text(el.desc);
        imageContainer.append(productImage);
        textContainer.append(productName, productPrice, productDesc, labelQ, inputQ, btnBuy);
        itemContainer.append(imageContainer, textContainer);
        productRow.append(itemContainer);
        $('.shop-container').append(productRow);
    });
    
    let temp = 0;
    let counter = 0;
    let teasInCart = {};  //testArray
    
    // get teasInCartStorage from localStorage and display 
    if (sessionStorage.getItem('teasIncartStorage') !== null) {
        teasInCart = JSON.parse(sessionStorage.getItem('teasIncartStorage'))
        for (i in teasInCart) {
            counter += teasInCart[i];
        }
        $('#cartItems').text(' (' + counter + ') ');
    }
    let teaName;

    /* temp keeps track of how many of a particular tea you put in the cart,
     it is set to 0 for every new tea.
     counter keeps track of the overall amount of tea in the cart and is updated with temp, it is also displayed in
     the cartItem span (x).
     */

    $('button').on('click', function() {
        teaName = $(this).closest('.item-text').find('h4').text();
        temp = +$(this).closest('.item-text').find('input').val();
        if (teasInCart.hasOwnProperty(teaName)) {
            teasInCart[teaName] = parseInt(teasInCart[teaName] + temp);
        }
        else {
            teasInCart[teaName] = temp;
        }
        counter += temp;
        $('#cartItems').text(' (' + counter + ') ');
        temp = 0;
        sessionStorage.setItem('teasIncartStorage', JSON.stringify(teasInCart));

    });
});
