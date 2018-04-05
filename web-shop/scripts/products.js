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
        let btnBuy = $('<button class="buyBtn">ADD TO CART</button>');
        
        let showReviews = $('<button class="showReviews">SHOW REVIEWS</button>');
        let reviewsContainer = $('<div class="reviewsContainer"></div>');
        let inputLabel = $('<label>Name</label>');
        let inputName = $('<input type="text">');
        let ratingLabel = $('<label>Rating</label>');
        let starsContainer = $('<div class="stars"><span data-rating-id="1">&#9733;</span>'
                                                    + '<span data-rating-id="2">&#9733;</span>'
                                                    + '<span data-rating-id="3">&#9733;</span>'
                                                    + '<span data-rating-id="4">&#9733;</span>'
                                                    + '<span data-rating-id="5">&#9733;</span></div>');
        let txtLabel = $('<label>Review</label>');
        let txtReview = $('<textarea></textarea>');
        let postBtn = $('<button class="postBtn">POST REVIEW</button>');
        let postedReviews = $('<div class="postedReviews"></div>');
        //reviewsContainer.css('display', 'none');
        reviewsContainer.hide();

        productImage.attr('src', el.pImage);
        productName.text(el.pName);
        productPrice.text(el.price);
        productDesc.text(el.desc);
        imageContainer.append(productImage);
        textContainer.append(productName, productPrice, productDesc, labelQ, inputQ, btnBuy, showReviews);
        itemContainer.append(imageContainer, textContainer);
        reviewsContainer.append(inputLabel, inputName, ratingLabel, starsContainer, txtLabel, 
                                txtReview, postBtn,postedReviews);
        productRow.append(itemContainer, reviewsContainer);
        $('.shop-container').append(productRow);
    });
    // TODO
    $('.showReviews').on('click', function () {
        // shows the closest reviewsContainer hide/show
        $(this).closest('.product-rows').find('.reviewsContainer').toggle();
        // clear reviews, so they don't repeat every time you toggle
        $(this).closest('.product-rows').find('.postedReviews').text('');
        // get reviews for the specific product from localStorage and display
        let nameOnReview = $(this).closest('.product-rows').find('h4').text();
        // see if this product actually have any reviews saved in localStorage
        if (localStorage.getItem(nameOnReview) !== null) {
            let reviews = JSON.parse(localStorage.getItem(nameOnReview));
            for (let i in reviews) {
                let rated = $('<span></span>');
                for (let n = 0; n < reviews[i].stars; n++) {
                    rated.append(`<span>&#9733;</span>`);
                } 
                $(this).closest('.product-rows').find('.reviewsContainer .postedReviews').append(`<p>
                                <strong>${reviews[i].name}</strong><br>
                                ${reviews[i].review}<br>${rated.text()}</p>`);
            }
            
        }
    
    });
    let rating = 0;
    $('.stars').on('click', 'span', function (e) {
        let star = $(e.target);
        rating = parseInt(star.attr('data-rating-id'));
        //console.log(rating);
        //console.log($(this).closest('.stars').find('span'));
        let stars = $(e.target).closest('.stars').find('span');
        $('.filled').removeClass('filled');
        for (let i = 1; i <= rating; i++) {
            $(stars[i - 1]).addClass('filled');
    
        }
    });
    $('.postBtn').on('click', function () {
        // save name of the product you want to review
        let nameOnReview = $(this).closest('.product-rows').find('h4').text();

        //get review input
        let inputName = $(this).closest('.reviewsContainer').find('input');
        let txtReview = $(this).closest('.reviewsContainer').find('textarea');
        let name = inputName.val();
        let aReview = txtReview.val();
        
        // see if validated
        if(!validateReview(name, aReview)) {
            return false;
        }
        let rated = $('<span></span>');
        for (let n = 0; n < rating; n++) {
            rated.append(`<span>&#9733;</span>`);
        } 
        $(this).closest('.reviewsContainer').find('.postedReviews')
        .append(`<p><strong>${name}</strong>
                <br>${aReview}<br>
                ${rated.text()}</p>`);
        
        inputName.val('');
        txtReview.val('');
        let review = {
            name: name,
            stars: rating,
            review: aReview
        }
        if (localStorage.getItem(nameOnReview) === null) {
            let reviews = [];
            reviews.push(review);
            localStorage.setItem(nameOnReview, JSON.stringify(reviews));
            
        }
        else {
            let reviews = JSON.parse(localStorage.getItem(nameOnReview));
            reviews.push(review);
            localStorage.setItem(nameOnReview, JSON.stringify(reviews));
        }        
        
    });

    function validateReview (name, aReview) {
        // check to see if name and textarea are empty
        if (name == '' || aReview == '') {
            alert('Fill in info');
            return false;
        }
        return true;
    }
    
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

    $('.buyBtn').on('click', function() {
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
